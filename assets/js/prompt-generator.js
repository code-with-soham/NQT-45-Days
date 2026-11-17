/* ==========================================================================
   TCS NQT 2027 — C++ CODING OS
   FILE: assets/js/prompt-generator.js
   Personalized Daily GPT Prompt Builder & Strict 5-Problem JSON Importer
   ========================================================================== */

window.TCSPromptGenerator = (function() {
  function buildDailyGptPrompt(dateStr) {
    var state = window.TCSStorage.loadState();
    var metrics = window.TCSStorage.computeMetrics();
    var s = state.sessions[dateStr];
    if (!s) return "Invalid session date.";

    var phaseObj = window.TCS_OS_DATA.phases[s.phase - 1] || window.TCS_OS_DATA.phases[0];
    var solvedTail = metrics.solvedList.length > 0
      ? metrics.solvedList.slice(-15).join("; ")
      : "None solved yet (starting fresh).";
    var attemptedTail = metrics.attemptedList.length > 0
      ? metrics.attemptedList.slice(-10).join("; ")
      : "None currently marked attempted.";
    var revisionSummary = metrics.revisionList.length > 0
      ? metrics.revisionList.map(function(r) { return "Day " + r.day + " (" + r.date + "): " + r.title; }).join("; ")
      : "None currently marked for revision.";
    var weakAreas = (state.weakAreas && state.weakAreas.trim()) ? state.weakAreas.trim() : "Complicated input parsing (getline vs cin, bracket/comma arrays, 2D string matrices) and edge cases.";

    var promptLines = [
      "=== PERSONALIZED CONTEXT FOR MY TCS NQT 2027 C++ SESSION ===",
      "- Target Session Date: " + s.date,
      "- Day Number: Day " + s.day + " of 45",
      "- Preparation Duration: 45 Days (17 November 2026 — 31 December 2026)",
      "- Current Preparation Phase: " + phaseObj.name + " (" + phaseObj.dateRange + ")",
      "- Phase Objective: " + phaseObj.focus,
      "- Today's Scheduled Coding Focus: " + s.focus,
      "- Today's Relevant PDF-Based Theory Reference: " + s.pdfRef,
      "- Previously Solved Questions (" + metrics.solvedQuestions + "/225 total): " + solvedTail,
      "- Previously Attempted Questions: " + attemptedTail,
      "- Questions Marked 'Needs Revision': " + revisionSummary,
      "- My Recorded Weak Areas: " + weakAreas,
      "",
      "=== INSTRUCTIONS FOR GPT ===",
      "You are my TCS NQT 2027 C++ coding preparation mentor.",
      "Generate exactly FIVE coding questions for the specified date (" + s.date + ", Day " + s.day + ").",
      "Use my uploaded PDF materials and previous-year TCS coding resources as the primary reference.",
      "Generate questions in authentic TCS-style long problem statement format.",
      "Focus strongly on difficult input formats, strict input parsing, output formatting, hidden test cases, boundary conditions, and clean portable C++ solutions (standard C++14/17 headers only, no <bits/stdc++.h>, no VLAs, use long long when needed).",
      "Also output the entire daily session in valid JSON format so that I can paste it directly into my website.",
      "",
      "Return ONLY valid JSON matching this exact structure (with exactly 5 items in the \"problems\" array):",
      "{",
      "  \"date\": \"" + s.date + "\",",
      "  \"day\": " + s.day + ",",
      "  \"focus\": \"" + s.focus.replace(/"/g, "\\\"") + "\",",
      "  \"problems\": [",
      "    {",
      "      \"title\": \"Problem 1 Title (TCS Story Style)\",",
      "      \"difficulty\": \"Easy | Easy-Medium | Medium | Medium-Hard\",",
      "      \"statement\": \"Detailed multi-paragraph TCS NQT story problem statement...\",",
      "      \"inputFormat\": \"Exact line-by-line input format specification...\",",
      "      \"outputFormat\": \"Exact output specification...\",",
      "      \"constraints\": \"1 <= N <= 10^5, etc.\",",
      "      \"sampleInput\": \"Exact raw sample input\",",
      "      \"sampleOutput\": \"Exact raw sample output\",",
      "      \"explanation\": \"Step-by-step walkthrough of the sample case\",",
      "      \"edgeCases\": [\"Edge case 1\", \"Edge case 2\", \"Edge case 3\"],",
      "      \"hint\": \"Algorithmic and input-parsing hint\",",
      "      \"solution\": \"#include <iostream>\\n#include <vector>\\nusing namespace std;\\nint main() { ... }\",",
      "      \"timeComplexity\": \"O(N)\",",
      "      \"spaceComplexity\": \"O(N)\",",
      "      \"sourceReference\": \"PDF Filename and Page / Pattern Reference\"",
      "    }",
      "  ]",
      "}"
    ];

    return promptLines.join("\n");
  }

  /* ------------------------------------------------------------------ */
  /*  State-aware JSON preprocessor                                      */
  /*  1. Inside strings: preserves the 8 valid JSON escape sequences     */
  /*     (\", \\, \/, \b, \f, \n, \r, \t) and \uXXXX, but strips the    */
  /*     backslash from any INVALID escape (e.g. \< \* \# \' \( )        */
  /*     that Markdown/GPT copy-paste injects into C++ code.             */
  /*  2. Outside strings: removes standalone line-continuation           */
  /*     backslashes (\ followed by optional spaces and a newline).      */
  /* ------------------------------------------------------------------ */
  function cleanJsonInput(raw) {
    var text = String(raw || "").trim();

    /* 1. Remove optional Markdown JSON fences */
    text = text.replace(/^```(?:json)?\s*/i, "");
    text = text.replace(/\s*```$/i, "");

    /* 2. Remove optional <escape> wrappers */
    text = text.replace(/^<escape>\s*/i, "");
    text = text.replace(/\s*<\/escape>$/i, "");

    /* 3. Decode HTML entities (&#x20;  &quot;  &amp;  etc.) */
    var decoder = document.createElement("textarea");
    decoder.innerHTML = text;
    text = decoder.value;

    /* 4. Normalize non-breaking spaces (U+00A0) */
    text = text.replace(/\u00A0/g, " ");

    /* 5. Character-by-character state-aware scan */
    var result = "";
    var insideString = false;

    for (var i = 0; i < text.length; i++) {
      var ch = text[i];

      /* ============================================================ */
      /*  INSIDE a JSON string literal                                 */
      /* ============================================================ */
      if (insideString) {

        /* Unescaped closing quote → leave string */
        if (ch === '"') {
          insideString = false;
          result += ch;
          continue;
        }

        /* Backslash inside string → classify the escape */
        if (ch === "\\") {
          var next = (i + 1 < text.length) ? text[i + 1] : "";

          /* Special case: \\" (double-backslash before quote)
             In JSON, \\" means an escaped backslash followed by a closing quote.
             However, in LLM/Markdown-escaped C++ code (e.g. cout << \\"YES\\"),
             it represents an escaped quote.
             Distinguish: if the quote is immediately followed by a JSON separator
             (comma or closing brace) followed by a newline or EOF, then this is a
             legitimate trailing backslash followed by the closing quote.
             Otherwise, it is an escaped quote inside C++ code → emit \" */
          if (next === "\\" && i + 2 < text.length && text[i + 2] === '"') {
            var k = i + 3;
            while (k < text.length && (text[k] === " " || text[k] === "\t")) {
              k++;
            }
            var nextNonSpace = text[k];
            if ((nextNonSpace === "," || nextNonSpace === "}") &&
                (text[k + 1] === "\n" || text[k + 1] === "\r" || k + 1 >= text.length)) {
              result += "\\\\";
              i++;
              continue;
            } else {
              result += '\\"';
              i += 2;
              continue;
            }
          }

          /* 5a. Valid single-character JSON escapes:
                 \"  \\  \/  \b  \f  \n  \r  \t               */
          if (next === '"' || next === "\\" || next === "/" ||
              next === "b" || next === "f"  || next === "n" ||
              next === "r" || next === "t") {
            result += ch + next;   /* keep both \ and the letter */
            i++;                   /* skip the next char */
            continue;
          }

          /* 5b. Valid \uXXXX Unicode escape */
          if (next === "u" &&
              i + 5 < text.length &&
              /^[0-9a-fA-F]{4}$/.test(text.substring(i + 2, i + 6))) {
            result += text.substring(i, i + 6);  /* \uXXXX */
            i += 5;
            continue;
          }

          /* 5c. INVALID escape — Markdown/GPT artefact
                 e.g.  \<  \*  \#  \(  \)  \'  \!  \[  \]  \|
                 → drop the backslash, keep only the next char  */
          if (next !== "") {
            result += next;
            i++;
            continue;
          }

          /* Backslash at very end of input — just drop it */
          continue;
        }

        /* Any other character inside the string — pass through */
        result += ch;
        continue;
      }

      /* ============================================================ */
      /*  OUTSIDE any JSON string literal                              */
      /* ============================================================ */

      /* Opening quote → enter string */
      if (ch === '"') {
        insideString = true;
        result += ch;
        continue;
      }

      /* Backslash outside a string → check for line-continuation */
      if (ch === "\\") {
        var j = i + 1;
        /* Skip optional horizontal whitespace after the backslash */
        while (j < text.length && (text[j] === " " || text[j] === "\t")) {
          j++;
        }
        /* \<spaces>\n  → skip the entire run (line-continuation) */
        if (j < text.length && text[j] === "\n") {
          i = j;   /* for-loop i++ moves past the \n */
          continue;
        }
        if (j < text.length && text[j] === "\r" &&
            j + 1 < text.length && text[j + 1] === "\n") {
          i = j + 1;
          continue;
        }
        /* Not a line-continuation — drop the stray backslash
           (outside a string it is never valid JSON) */
        continue;
      }

      result += ch;
    }

    return result.trim();
  }

  function parsePastedSession(raw) {
    var cleaned = cleanJsonInput(raw);

    var data = JSON.parse(cleaned);   /* throws on invalid JSON */

    if (Array.isArray(data)) {
      data = { problems: data };
    }

    /* Validate exactly five questions */
    if (!data || !Array.isArray(data.problems) || data.problems.length !== 5) {
      throw new Error("Session must contain exactly 5 problems.");
    }

    return data;
  }

  window.parsePastedSession = parsePastedSession;

  function parseAndValidateSessionJson(rawText, targetDate) {
    if (!rawText || !rawText.trim()) {
      return { ok: false, error: "Please paste the JSON generated by GPT before clicking Validate & Populate." };
    }

    var data;
    try {
      data = parsePastedSession(rawText);
    } catch (err) {
      return {
        ok: false,
        error: "JSON Import Error: " + err.message + ". Your previously saved session is untouched."
      };
    }

    /* ---- Validate date & day match the selected session ---- */
    var state = window.TCSStorage.loadState();
    var targetSession = state.sessions[targetDate];
    if (targetSession) {
      if (data.date && String(data.date) !== targetDate) {
        return {
          ok: false,
          error: "Date Mismatch: JSON contains date \"" + data.date +
                 "\" but the selected session is \"" + targetDate +
                 "\". Your previously saved session is untouched."
        };
      }
      if (data.day !== undefined && Number(data.day) !== targetSession.day) {
        return {
          ok: false,
          error: "Day Mismatch: JSON contains day " + data.day +
                 " but the selected session is Day " + targetSession.day +
                 ". Your previously saved session is untouched."
        };
      }
    }

    /* ---- Validate every problem has all required properties ---- */
    var requiredFields = [
      "title", "difficulty", "statement", "inputFormat", "outputFormat",
      "constraints", "sampleInput", "sampleOutput", "explanation",
      "edgeCases", "hint", "solution", "timeComplexity", "spaceComplexity",
      "sourceReference"
    ];
    for (var i = 0; i < data.problems.length; i++) {
      var p = data.problems[i];
      if (!p || typeof p !== "object") {
        return {
          ok: false,
          error: "Validation Error: Problem #" + (i + 1) +
                 " is not a valid object. Your previously saved session is untouched."
        };
      }
      for (var f = 0; f < requiredFields.length; f++) {
        if (p[requiredFields[f]] === undefined || p[requiredFields[f]] === null) {
          return {
            ok: false,
            error: "Validation Error: Problem #" + (i + 1) +
                   " is missing required field '" + requiredFields[f] +
                   "'. Your previously saved session is untouched."
          };
        }
      }
    }

    /* ---- All validation passed — save to localStorage ---- */
    return window.TCSStorage.saveSessionQuestions(targetDate, data.problems);
  }

  return {
    cleanJsonInput: cleanJsonInput,
    buildDailyGptPrompt: buildDailyGptPrompt,
    parsePastedSession: parsePastedSession,
    parseAndValidateSessionJson: parseAndValidateSessionJson
  };
})();
