/* ==========================================================================
   TCS NQT 2027 — C++ CODING OS
   FILE: assets/js/storage.js
   Browser LocalStorage Manager, 45-Day Slot Initializer & JSON Backup/Restore
   ========================================================================== */

window.TCSStorage = (function() {
  var STORAGE_KEY = "tcs_nqt_2027_cpp_os_v1";
  var memoryFallback = null;

  function createEmptyProblems() {
    var list = [];
    for (var i = 1; i <= 5; i++) {
      list.push({
        slotNumber: i,
        populated: false,
        title: "Empty Question Slot #" + i + " (Awaiting GPT Session Import or Manual Entry)",
        difficulty: "Pending",
        statement: "",
        inputFormat: "",
        outputFormat: "",
        constraints: "",
        sampleInput: "",
        sampleOutput: "",
        explanation: "",
        edgeCases: [],
        hint: "",
        solution: "",
        timeComplexity: "",
        spaceComplexity: "",
        sourceReference: "",
        status: "unsolved" // "unsolved" | "attempted" | "solved" | "revision"
      });
    }
    return list;
  }

  function buildDefaultState() {
    var curriculum = (window.TCS_OS_DATA && window.TCS_OS_DATA.dailyCurriculum) || [];
    var sessions = {};
    for (var i = 0; i < curriculum.length; i++) {
      var item = curriculum[i];
      sessions[item.date] = {
        date: item.date,
        day: item.day,
        phase: item.phase,
        focus: item.title,
        pdfRef: item.pdfRef,
        ioChallengeId: item.ioChallengeId,
        problems: createEmptyProblems(),
        notes: "",
        edgeCaseChecks: {
          emptyOrSingle: false,
          negativeValues: false,
          overflow64Bit: false,
          whitespaceDelimiters: false,
          duplicates: false,
          boundaryLimits: false
        },
        customEdgeCases: "",
        ioPracticeDone: false,
        updatedAt: null
      };
    }
    return {
      version: 1,
      lastVisitedDate: "2026-11-17",
      weakAreas: "cin vs getline newline buffer, comma/bracket array parsing, 64-bit long long overflow",
      theoryProgress: {
        "input-output": false,
        "arrays": false,
        "strings": false,
        "cpp-stl": false,
        "recursion": false,
        "number-based": false,
        "tcs-patterns": false
      },
      sessions: sessions
    };
  }

  function loadState() {
    try {
      var raw = window.localStorage.getItem(STORAGE_KEY);
      if (!raw) {
        var initial = buildDefaultState();
        saveState(initial);
        return initial;
      }
      var parsed = JSON.parse(raw);
      if (!parsed || !parsed.sessions) {
        var reset = buildDefaultState();
        saveState(reset);
        return reset;
      }
      // Ensure all 45 dates exist
      var def = buildDefaultState();
      for (var d in def.sessions) {
        if (!parsed.sessions[d]) {
          parsed.sessions[d] = def.sessions[d];
        }
      }
      if (typeof parsed.weakAreas !== "string") parsed.weakAreas = def.weakAreas;
      if (!parsed.theoryProgress) parsed.theoryProgress = def.theoryProgress;
      return parsed;
    } catch (e) {
      if (!memoryFallback) memoryFallback = buildDefaultState();
      return memoryFallback;
    }
  }

  function saveState(state) {
    memoryFallback = state;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
      return true;
    } catch (e) {
      return false;
    }
  }

  function getSessionStatus(sessionObj) {
    if (!sessionObj || !sessionObj.problems) return "Not Started";
    var solvedCount = 0;
    var touchedCount = 0;
    for (var i = 0; i < sessionObj.problems.length; i++) {
      var p = sessionObj.problems[i];
      if (p.status === "solved") solvedCount++;
      if (p.status !== "unsolved" || p.populated) touchedCount++;
    }
    if (solvedCount === 5) return "Completed";
    if (solvedCount > 0 || touchedCount > 0 || (sessionObj.notes && sessionObj.notes.trim().length > 0) || sessionObj.ioPracticeDone) {
      return "In Progress";
    }
    return "Not Started";
  }

  function computeMetrics() {
    var state = loadState();
    var completedDays = 0;
    var inProgressDays = 0;
    var solvedQuestions = 0;
    var attemptedQuestions = 0;
    var revisionQuestions = 0;
    var solvedList = [];
    var attemptedList = [];
    var revisionList = [];
    var dates = Object.keys(state.sessions).sort();

    for (var i = 0; i < dates.length; i++) {
      var s = state.sessions[dates[i]];
      var st = getSessionStatus(s);
      if (st === "Completed") completedDays++;
      else if (st === "In Progress") inProgressDays++;

      for (var j = 0; j < s.problems.length; j++) {
        var p = s.problems[j];
        var label = "Day " + s.day + " (" + s.date + ") Q" + (j + 1) + ": " + p.title;
        if (p.status === "solved") {
          solvedQuestions++;
          solvedList.push(label);
        } else if (p.status === "attempted") {
          attemptedQuestions++;
          attemptedList.push(label);
        } else if (p.status === "revision") {
          revisionQuestions++;
          revisionList.push({ date: s.date, day: s.day, qIndex: j, title: p.title, difficulty: p.difficulty });
        }
      }
    }

    // Calculate current streak of consecutive active/completed days
    var currentStreak = 0;
    for (var k = 0; k < dates.length; k++) {
      var statusK = getSessionStatus(state.sessions[dates[k]]);
      if (statusK === "Completed" || statusK === "In Progress") {
        currentStreak++;
      } else if (currentStreak > 0) {
        break;
      }
    }

    var remainingDays = Math.max(0, 45 - completedDays);
    var completionPct = ((solvedQuestions / 225) * 100).toFixed(1);

    return {
      completedDays: completedDays,
      inProgressDays: inProgressDays,
      remainingDays: remainingDays,
      solvedQuestions: solvedQuestions,
      attemptedQuestions: attemptedQuestions,
      revisionQuestions: revisionQuestions,
      completionPct: completionPct,
      currentStreak: currentStreak,
      solvedList: solvedList,
      attemptedList: attemptedList,
      revisionList: revisionList
    };
  }

  function updateQuestionStatus(dateStr, qIndex, newStatus) {
    var state = loadState();
    var s = state.sessions[dateStr];
    if (!s || !s.problems[qIndex]) return null;
    s.problems[qIndex].status = newStatus;
    s.updatedAt = new Date().toISOString();
    saveState(state);
    return s;
  }

  function saveSessionQuestions(dateStr, problemsArray) {
    var state = loadState();
    var s = state.sessions[dateStr];
    if (!s) return { ok: false, error: "Date " + dateStr + " is outside the 45-day schedule (2026-11-17 to 2026-12-31)." };
    if (!Array.isArray(problemsArray) || problemsArray.length !== 5) {
      return { ok: false, error: "Validation Error: GPT JSON must contain an array of EXACTLY 5 problems (found " + (Array.isArray(problemsArray) ? problemsArray.length : 0) + "). Existing session was NOT modified." };
    }

    var formatted = [];
    for (var i = 0; i < 5; i++) {
      var item = problemsArray[i] || {};
      if (!item.title || !item.statement) {
        return { ok: false, error: "Validation Error: Problem #" + (i + 1) + " is missing required 'title' or 'statement' fields. Existing session was NOT modified." };
      }
      var prevStatus = (s.problems[i] && s.problems[i].status) ? s.problems[i].status : "unsolved";
      formatted.push({
        slotNumber: i + 1,
        populated: true,
        title: String(item.title),
        difficulty: String(item.difficulty || "Medium"),
        statement: String(item.statement),
        inputFormat: String(item.inputFormat || "See problem statement."),
        outputFormat: String(item.outputFormat || "See problem statement."),
        constraints: String(item.constraints || "Standard 64-bit integer limits."),
        sampleInput: String(item.sampleInput || ""),
        sampleOutput: String(item.sampleOutput || ""),
        explanation: String(item.explanation || ""),
        edgeCases: Array.isArray(item.edgeCases) ? item.edgeCases : [String(item.edgeCases || "Test boundary values, negative numbers, and large N")],
        hint: String(item.hint || ""),
        solution: String(item.solution || ""),
        timeComplexity: String(item.timeComplexity || "O(N)"),
        spaceComplexity: String(item.spaceComplexity || "O(N)"),
        sourceReference: String(item.sourceReference || "Uploaded TCS NQT Reference Material"),
        status: prevStatus
      });
    }
    s.problems = formatted;
    s.updatedAt = new Date().toISOString();
    saveState(state);
    return { ok: true, session: s };
  }

  function resetSessionQuestions(dateStr) {
    var state = loadState();
    var s = state.sessions[dateStr];
    if (!s) return false;
    s.problems = createEmptyProblems();
    s.updatedAt = new Date().toISOString();
    saveState(state);
    return true;
  }

  function saveSessionNotesAndChecks(dateStr, notes, edgeCaseChecks, customEdgeCases, ioPracticeDone, weakAreas) {
    var state = loadState();
    var s = state.sessions[dateStr];
    if (s) {
      if (typeof notes === "string") s.notes = notes;
      if (edgeCaseChecks) s.edgeCaseChecks = edgeCaseChecks;
      if (typeof customEdgeCases === "string") s.customEdgeCases = customEdgeCases;
      if (typeof ioPracticeDone === "boolean") s.ioPracticeDone = ioPracticeDone;
      s.updatedAt = new Date().toISOString();
    }
    if (typeof weakAreas === "string") {
      state.weakAreas = weakAreas;
    }
    saveState(state);
  }

  function toggleTheoryModuleDone(moduleKey) {
    var state = loadState();
    if (!state.theoryProgress) state.theoryProgress = {};
    state.theoryProgress[moduleKey] = !state.theoryProgress[moduleKey];
    saveState(state);
    return state.theoryProgress[moduleKey];
  }

  function exportBackupJson() {
    var state = loadState();
    return JSON.stringify(state, null, 2);
  }

  function importBackupJson(jsonText) {
    try {
      var parsed = JSON.parse(jsonText);
      if (!parsed || typeof parsed !== "object" || !parsed.sessions) {
        return { ok: false, error: "Invalid backup file: missing 'sessions' object." };
      }
      var count = Object.keys(parsed.sessions).length;
      if (count < 1) {
        return { ok: false, error: "Invalid backup file: no session records found." };
      }
      saveState(parsed);
      return { ok: true, count: count };
    } catch (err) {
      return { ok: false, error: "JSON Parse Error: " + err.message };
    }
  }

  return {
    loadState: loadState,
    saveState: saveState,
    getSessionStatus: getSessionStatus,
    computeMetrics: computeMetrics,
    updateQuestionStatus: updateQuestionStatus,
    saveSessionQuestions: saveSessionQuestions,
    resetSessionQuestions: resetSessionQuestions,
    saveSessionNotesAndChecks: saveSessionNotesAndChecks,
    toggleTheoryModuleDone: toggleTheoryModuleDone,
    exportBackupJson: exportBackupJson,
    importBackupJson: importBackupJson
  };
})();
