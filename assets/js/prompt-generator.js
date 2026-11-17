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

  function parsePastedSession(raw) {
    var text = String(raw || "").trim();

    // Remove optional Markdown code fences
    text = text
      .replace(/^```(?:json)?\s*/i, "")
      .replace(/\s*```$/i, "");

    // Remove optional escape wrappers
    text = text
      .replace(/^<escape>\s*/i, "")
      .replace(/\s*<\/escape>$/i, "");

    // Decode HTML entities such as &#x20; and &quot;
    var decoder = document.createElement("textarea");
    decoder.innerHTML = text;
    text = decoder.value.trim();

    // Normalize non-breaking spaces (U+00A0) if present
    text = text.replace(/\u00A0/g, " ");

    // Parse JSON (with automatic fallback for Markdown-copied line-continuation '\' and '\<' or '\*' escapes)
    var data;
    try {
      data = JSON.parse(text);
    } catch (firstErr) {
      var sanitized = text
        .replace(/\\\s*(?=\r?\n|$)/g, "")
        .replace(/\\(?![/"\\bfnrt]|u[0-9a-fA-F]{4})/g, "");
      data = JSON.parse(sanitized);
    }

    if (Array.isArray(data)) {
      data = { problems: data };
    }

    // Validate exactly five questions
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
        error: "JSON Import Error (" + err.message + "). Your previously saved session is untouched."
      };
    }

    return window.TCSStorage.saveSessionQuestions(targetDate, data.problems);
  }

  return {
    buildDailyGptPrompt: buildDailyGptPrompt,
    parsePastedSession: parsePastedSession,
    parseAndValidateSessionJson: parseAndValidateSessionJson
  };
})();
