/* ==========================================================================
   TCS NQT 2027 — C++ CODING OS
   FILE: assets/js/app.js
   Global Controller, View Router, Theory Library & Progress Renderer
   ========================================================================== */

function showToast(message, isError) {
  var container = document.getElementById("toast-container");
  if (!container) return;
  var el = document.createElement("div");
  el.className = "toast-msg" + (isError ? " error" : "");
  el.textContent = message;
  container.appendChild(el);
  setTimeout(function() {
    if (el.parentNode) el.parentNode.removeChild(el);
  }, 3600);
}

function copyTextToClipboard(text, label) {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(function() {
      showToast("Copied " + (label || "content") + " to clipboard!");
    }).catch(function() {
      fallbackCopyText(text, label);
    });
  } else {
    fallbackCopyText(text, label);
  }
}

function fallbackCopyText(text, label) {
  var ta = document.createElement("textarea");
  ta.value = text;
  ta.style.position = "fixed";
  ta.style.left = "-9999px";
  document.body.appendChild(ta);
  ta.select();
  try {
    document.execCommand("copy");
    showToast("Copied " + (label || "content") + " to clipboard!");
  } catch (e) {
    showToast("Press Ctrl+C to copy from the preview box.", true);
  }
  document.body.removeChild(ta);
}

function navigateView(viewId, subParam) {
  var views = document.querySelectorAll(".view-section");
  if (views.length > 0) {
    for (var i = 0; i < views.length; i++) {
      views[i].classList.remove("active");
    }
    var target = document.getElementById("view-" + viewId);
    if (target) target.classList.add("active");

    var navBtns = document.querySelectorAll(".nav-btn");
    for (var j = 0; j < navBtns.length; j++) {
      navBtns[j].classList.remove("active");
      if (navBtns[j].getAttribute("data-view") === viewId) {
        navBtns[j].classList.add("active");
      }
    }
  }

  if (viewId === "dashboard") {
    window.TCSCalendar.renderDashboardCalendar();
  } else if (viewId === "sessions") {
    window.TCSSessionManager.renderSessionsDirectory();
  } else if (viewId === "session-detail") {
    window.TCSSessionManager.renderSingleSessionView(subParam);
  } else if (viewId === "theory") {
    renderTheoryLibrary(subParam || "input-output");
  } else if (viewId === "progress") {
    renderProgressTracker();
  }
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function openSessionByDate(dateStr) {
  // If single-page views exist in DOM, switch view; otherwise navigate to session.html?date=...
  if (document.getElementById("view-session-detail")) {
    navigateView("session-detail", dateStr);
  } else {
    window.location.href = "session.html?date=" + encodeURIComponent(dateStr);
  }
}

function jumpToTodaySession() {
  var info = window.TCSCalendar.resolvePreparationTodayDate();
  openSessionByDate(info.targetDate);
  var msg = info.withinWindow
    ? "Jumped to Today's Session (" + info.targetDate + ")!"
    : "Local date is " + info.rawLocalDate + " — opened Session for " + info.targetDate + "!";
  showToast(msg);
  setTimeout(function() {
    var anchor = document.getElementById("session-workspace-top");
    if (anchor) anchor.scrollIntoView({ behavior: "smooth" });
  }, 120);
}

function handleDatePickerJump() {
  var picker = document.getElementById("dashboard-date-picker");
  if (!picker || !picker.value) {
    showToast("Select a date between 17 Nov 2026 and 31 Dec 2026.", true);
    return;
  }
  if (picker.value < "2026-11-17" || picker.value > "2026-12-31") {
    showToast("Date must be within 17 Nov 2026 — 31 Dec 2026.", true);
    return;
  }
  openSessionByDate(picker.value);
}

function handleSessionSelectorChange(selectEl) {
  if (selectEl && selectEl.value) {
    openSessionByDate(selectEl.value);
  }
}

function stepSessionDay(delta) {
  var cur = window.TCSSessionManager.getActiveDate();
  var list = window.TCS_OS_DATA.dailyCurriculum;
  for (var i = 0; i < list.length; i++) {
    if (list[i].date === cur) {
      var nextIdx = i + delta;
      if (nextIdx >= 0 && nextIdx < list.length) {
        openSessionByDate(list[nextIdx].date);
      } else {
        showToast("Reached the boundary of the 45-day schedule.");
      }
      return;
    }
  }
}

function toggleQuestionDrawer(qIdx, kind) {
  var drawer = document.getElementById("drawer-" + kind + "-" + qIdx);
  var btn = document.getElementById("btn-" + kind + "-" + qIdx);
  if (!drawer) return;
  var isOpen = drawer.classList.contains("open");
  if (isOpen) {
    drawer.classList.remove("open");
    if (btn) btn.classList.remove("open");
  } else {
    drawer.classList.add("open");
    if (btn) btn.classList.add("open");
  }
}

function handleQuestionStatus(dateStr, qIndex, newStatus) {
  window.TCSStorage.updateQuestionStatus(dateStr, qIndex, newStatus);
  window.TCSSessionManager.renderSingleSessionView(dateStr);
  window.TCSCalendar.renderDashboardCalendar();
  showToast("Question " + (qIndex + 1) + " marked as " + newStatus.toUpperCase() + " (auto-saved).");
}

function copyCodeFromQuestion(qIdx) {
  var pre = document.getElementById("q-code-block-" + qIdx);
  if (pre) copyTextToClipboard(pre.textContent, "Q" + (qIdx + 1) + " C++ solution");
}

function copyIoChallengeCode() {
  var pre = document.getElementById("session-io-code");
  if (pre) copyTextToClipboard(pre.textContent, "Input/Output C++ template");
}

function toggleGptPromptDrawer() {
  var panel = document.getElementById("gpt-prompt-drawer");
  if (!panel) return;
  var curDate = window.TCSSessionManager.getActiveDate();
  var box = document.getElementById("gpt-prompt-preview-box");
  if (box) box.value = window.TCSPromptGenerator.buildDailyGptPrompt(curDate);
  panel.classList.toggle("open");
}

function copyTodayGptPrompt() {
  var curDate = window.TCSSessionManager.getActiveDate();
  var promptText = window.TCSPromptGenerator.buildDailyGptPrompt(curDate);
  var box = document.getElementById("gpt-prompt-preview-box");
  if (box) box.value = promptText;
  var panel = document.getElementById("gpt-prompt-drawer");
  if (panel && !panel.classList.contains("open")) panel.classList.add("open");
  copyTextToClipboard(promptText, "Today's Personalized GPT Prompt");
}

function togglePasteJsonDrawer() {
  var panel = document.getElementById("gpt-json-paste-drawer");
  if (panel) panel.classList.toggle("open");
}

function submitPastedGptJson() {
  var curDate = window.TCSSessionManager.getActiveDate();
  var inputEl = document.getElementById("gpt-json-paste-input");
  var errBanner = document.getElementById("gpt-json-error-banner");
  var raw = inputEl ? inputEl.value : "";

  var res = window.TCSPromptGenerator.parseAndValidateSessionJson(raw, curDate);
  if (!res.ok) {
    if (errBanner) {
      errBanner.style.display = "block";
      errBanner.textContent = res.error;
    }
    showToast(res.error, true);
    return;
  }

  if (errBanner) errBanner.style.display = "none";
  window.TCSSessionManager.renderSingleSessionView(curDate);
  window.TCSCalendar.renderDashboardCalendar();
  showToast("Successfully imported all 5 coding questions for " + curDate + "!");
}

function loadDemoQuestionsIntoSession() {
  var curDate = window.TCSSessionManager.getActiveDate();
  var demo = window.TCS_OS_DATA.demoFiveProblems;
  var res = window.TCSStorage.saveSessionQuestions(curDate, demo);
  if (res.ok) {
    window.TCSSessionManager.renderSingleSessionView(curDate);
    window.TCSCalendar.renderDashboardCalendar();
    showToast("Loaded 5 PDF-grounded TCS NQT coding questions into " + curDate + "!");
  }
}

function clearCurrentSessionQuestions() {
  var curDate = window.TCSSessionManager.getActiveDate();
  window.TCSStorage.resetSessionQuestions(curDate);
  window.TCSSessionManager.renderSingleSessionView(curDate);
  window.TCSCalendar.renderDashboardCalendar();
  showToast("Reset the 5 question slots for " + curDate + " to empty.");
}

function autoSaveSessionNotes() {
  var curDate = window.TCSSessionManager.getActiveDate();
  var ecIds = ["emptyOrSingle", "negativeValues", "overflow64Bit", "whitespaceDelimiters", "duplicates", "boundaryLimits"];
  var checks = {};
  for (var i = 0; i < ecIds.length; i++) {
    var cb = document.getElementById("ec-check-" + ecIds[i]);
    checks[ecIds[i]] = cb ? cb.checked : false;
  }
  var customEc = (document.getElementById("session-custom-edge-cases") || {}).value || "";
  var notes = (document.getElementById("session-personal-notes") || {}).value || "";
  var ioDone = !!((document.getElementById("session-io-done-check") || {}).checked);
  var weakAreas = (document.getElementById("session-weak-areas-input") || {}).value || "";

  window.TCSStorage.saveSessionNotesAndChecks(curDate, notes, checks, customEc, ioDone, weakAreas);
  var statusEl = document.getElementById("autosave-indicator");
  if (statusEl) {
    statusEl.textContent = "Saved to localStorage at " + new Date().toLocaleTimeString();
  }
}

/* ==========================================================================
   THEORY LIBRARY RENDERER (All 7 PDF-Grounded Modules)
   ========================================================================== */
function escapeHtmlStr(s) {
  return String(s || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function renderTheoryLibrary(moduleKey) {
  var container = document.getElementById("theory-module-content");
  if (!container) return;

  var tabs = document.querySelectorAll(".theory-tab-btn");
  for (var t = 0; t < tabs.length; t++) {
    tabs[t].classList.remove("btn-primary");
    if (tabs[t].getAttribute("data-theory") === moduleKey) {
      tabs[t].classList.add("btn-primary");
    }
  }

  var state = window.TCSStorage.loadState();
  var isDone = !!(state.theoryProgress && state.theoryProgress[moduleKey]);
  var doneBtnHtml =
    '<button type="button" class="btn ' + (isDone ? "btn-success active-state" : "btn-success") + '" onclick="handleToggleTheoryDone(\'' + moduleKey + '\')">' +
      (isDone ? "✓ Theory Module Completed" : "Mark Module as Read") +
    '</button>';

  if (moduleKey === "input-output") {
    var io = window.TCS_OS_DATA.inputOutputMastery;
    var lessonsHtml = io.lessons.map(function(l) {
      return (
        '<div class="panel-card">' +
          '<div class="panel-header">' +
            '<div>' +
              '<span class="badge-phase">Lesson ' + l.number + '</span> ' +
              '<strong style="font-size:1.05rem;margin-left:0.4rem;">' + escapeHtmlStr(l.title) + '</strong>' +
            '</div>' +
            '<span class="cal-day-status badge-completed">' + escapeHtmlStr(l.pdfPage) + '</span>' +
          '</div>' +
          '<div class="two-col-grid" style="margin-bottom:0.85rem;">' +
            '<div style="background:var(--bg-canvas);padding:0.75rem;border-radius:6px;border:1px solid var(--border-subtle);">' +
              '<div style="font-family:var(--font-mono);font-size:0.75rem;color:var(--accent-blue);">1. WHAT THE INPUT LOOKS LIKE</div>' +
              '<pre style="font-family:var(--font-mono);font-size:0.86rem;margin-top:0.3rem;color:var(--text-primary);">' + escapeHtmlStr(l.whatInputLooksLike) + '</pre>' +
            '</div>' +
            '<div style="background:var(--bg-canvas);padding:0.75rem;border-radius:6px;border:1px solid var(--border-subtle);">' +
              '<div style="font-family:var(--font-mono);font-size:0.75rem;color:var(--status-green);">5. EXPECTED OUTPUT</div>' +
              '<pre style="font-family:var(--font-mono);font-size:0.86rem;margin-top:0.3rem;color:#047857;">' + escapeHtmlStr(l.expectedOutput) + '</pre>' +
            '</div>' +
          '</div>' +
          '<p style="margin-bottom:0.5rem;font-size:0.9rem;"><strong>2. Why Ordinary <code>cin &gt;&gt;</code> Extraction Is Insufficient:</strong> ' + escapeHtmlStr(l.whyCinFails) + '</p>' +
          '<p style="margin-bottom:0.65rem;font-size:0.9rem;"><strong>3. Correct C++ Input-Reading Approach:</strong> ' + escapeHtmlStr(l.correctApproach) + '</p>' +
          '<div class="code-wrapper">' +
            '<div class="code-header"><span>4. Complete Working Portable C++ Example (' + escapeHtmlStr(l.pdfPage) + ')</span></div>' +
            '<pre class="code-block">' + escapeHtmlStr(l.codeExample) + '</pre>' +
          '</div>' +
          '<div class="two-col-grid" style="margin-top:0.75rem;font-size:0.86rem;">' +
            '<div><strong>6. Common Input Parsing Mistakes:</strong><ul style="margin-left:1.2rem;margin-top:0.25rem;color:var(--text-secondary);">' +
              l.commonMistakes.map(function(m) { return '<li>' + escapeHtmlStr(m) + '</li>'; }).join("") +
            '</ul></div>' +
            '<div><strong>7. Difficult Variations to Test:</strong><ul style="margin-left:1.2rem;margin-top:0.25rem;color:var(--text-secondary);">' +
              l.difficultVariations.map(function(v) { return '<li>' + escapeHtmlStr(v) + '</li>'; }).join("") +
            '</ul></div>' +
          '</div>' +
        '</div>'
      );
    }).join("");

    var judgeHtml = io.strictJudgeScenarios.map(function(sc) {
      var isGen = sc.badge.indexOf("GENERATED") !== -1;
      return (
        '<div class="question-card">' +
          '<div class="q-header">' +
            '<div><strong>Scenario #' + sc.number + ': ' + escapeHtmlStr(sc.title) + '</strong></div>' +
            '<span class="cal-day-status ' + (isGen ? "badge-in-progress" : "badge-completed") + '">' + escapeHtmlStr(sc.badge) + '</span>' +
          '</div>' +
          '<p style="font-size:0.88rem;color:var(--text-secondary);margin-bottom:0.4rem;"><strong>The Judge Trap:</strong> ' + escapeHtmlStr(sc.trap) + '</p>' +
          '<p style="font-size:0.88rem;color:var(--text-secondary);margin-bottom:0.5rem;"><strong>Portable C++ Fix:</strong> ' + escapeHtmlStr(sc.fix) + '</p>' +
          '<pre class="code-block" style="border-radius:6px;">' + escapeHtmlStr(sc.code) + '</pre>' +
        '</div>'
      );
    }).join("");

    container.innerHTML =
      '<div class="source-banner" style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:0.75rem;">' +
        '<div><strong>Primary Source:</strong> <code>' + escapeHtmlStr(io.sourceFile) + '</code> — ' + escapeHtmlStr(io.sourcePages) + '</div>' +
        doneBtnHtml +
      '</div>' +
      lessonsHtml +
      '<div class="panel-card">' +
        '<div class="panel-header">' +
          '<div>' +
            '<div class="panel-title">STRICT JUDGE SIMULATION (15 Scenarios)</div>' +
            '<div class="panel-subtitle">PDF-grounded explanations clearly distinguished from additional generated test variations</div>' +
          '</div>' +
        '</div>' +
        judgeHtml +
      '</div>';
    return;
  }

  if (moduleKey === "arrays") {
    var arr = window.TCS_OS_DATA.arrayTheory;
    var patHtml = arr.patterns.map(function(p) {
      return (
        '<div class="panel-card">' +
          '<div class="panel-header">' +
            '<strong>' + escapeHtmlStr(p.title) + '</strong>' +
            '<span class="cal-day-status badge-completed">' + escapeHtmlStr(p.pdfRef) + '</span>' +
          '</div>' +
          '<p style="font-size:0.9rem;color:var(--text-secondary);margin-bottom:0.65rem;">' + escapeHtmlStr(p.summary) + '</p>' +
          '<div style="font-size:0.86rem;margin-bottom:0.75rem;"><strong>PDF Problems Covered:</strong><ul style="margin-left:1.25rem;margin-top:0.25rem;color:var(--text-secondary);">' +
            p.problemsIncluded.map(function(pr) { return '<li>' + escapeHtmlStr(pr) + '</li>'; }).join("") +
          '</ul></div>' +
          '<div class="code-wrapper">' +
            '<div class="code-header"><span>Reference C++14/17 Implementation (' + escapeHtmlStr(p.pdfRef) + ')</span></div>' +
            '<pre class="code-block">' + escapeHtmlStr(p.code) + '</pre>' +
          '</div>' +
        '</div>'
      );
    }).join("");

    container.innerHTML =
      '<div class="source-banner" style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:0.75rem;">' +
        '<div><strong>Primary Source:</strong> <code>' + escapeHtmlStr(arr.sourceFile) + '</code><div style="font-size:0.8rem;margin-top:0.2rem;">' + escapeHtmlStr(arr.sourceNote) + '</div></div>' +
        doneBtnHtml +
      '</div>' + patHtml;
    return;
  }

  if (moduleKey === "strings") {
    var st = window.TCS_OS_DATA.stringTheory;
    var stHtml = st.lessons.map(function(l) {
      return (
        '<div class="panel-card">' +
          '<div class="panel-header">' +
            '<strong>' + escapeHtmlStr(l.title) + '</strong>' +
            '<span class="cal-day-status badge-completed">' + escapeHtmlStr(l.pdfRef) + '</span>' +
          '</div>' +
          '<p style="font-size:0.9rem;color:var(--text-secondary);margin-bottom:0.65rem;">' + escapeHtmlStr(l.summary) + '</p>' +
          '<div class="code-wrapper">' +
            '<div class="code-header"><span>Portable C++14/17 Implementation (' + escapeHtmlStr(l.pdfRef) + ')</span></div>' +
            '<pre class="code-block">' + escapeHtmlStr(l.code) + '</pre>' +
          '</div>' +
        '</div>'
      );
    }).join("");

    container.innerHTML =
      '<div class="source-banner" style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:0.75rem;">' +
        '<div><strong>Primary Source:</strong> <code>' + escapeHtmlStr(st.sourceFile) + '</code></div>' +
        doneBtnHtml +
      '</div>' + stHtml;
    return;
  }

  if (moduleKey === "cpp-stl") {
    var stl = window.TCS_OS_DATA.stlTheory;
    var compCards = stl.componentsOverview.map(function(c) {
      return '<div class="kpi-card"><div style="font-weight:700;color:var(--accent-blue);margin-bottom:0.25rem;">' + escapeHtmlStr(c.name) + '</div><div style="font-size:0.84rem;color:var(--text-secondary);">' + escapeHtmlStr(c.desc) + '</div></div>';
    }).join("");

    var contHtml = stl.containers.map(function(c) {
      return (
        '<div class="panel-card">' +
          '<div class="panel-header">' +
            '<strong>' + escapeHtmlStr(c.name) + '</strong>' +
            '<span class="cal-day-status badge-completed">' + escapeHtmlStr(c.pdfPages) + '</span>' +
          '</div>' +
          '<p style="font-size:0.9rem;color:var(--text-secondary);margin-bottom:0.65rem;">' + escapeHtmlStr(c.summary) + '</p>' +
          '<pre class="code-block" style="border-radius:6px;">' + escapeHtmlStr(c.code) + '</pre>' +
        '</div>'
      );
    }).join("");

    var cRows = stl.complexityTables.containers.map(function(r) {
      return '<tr><td><strong>' + escapeHtmlStr(r.container) + '</strong></td><td>' + escapeHtmlStr(r.insert) + '</td><td>' + escapeHtmlStr(r.delete) + '</td><td>' + escapeHtmlStr(r.access) + '</td><td>' + escapeHtmlStr(r.search) + '</td><td>' + escapeHtmlStr(r.space) + '</td></tr>';
    }).join("");

    var aRows = stl.complexityTables.algorithms.map(function(r) {
      return '<tr><td><code>' + escapeHtmlStr(r.algorithm) + '</code></td><td>' + escapeHtmlStr(r.time) + '</td><td>' + escapeHtmlStr(r.space) + '</td></tr>';
    }).join("");

    container.innerHTML =
      '<div class="source-banner" style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:0.75rem;">' +
        '<div><strong>Primary Source:</strong> <code>' + escapeHtmlStr(stl.sourceFile) + '</code></div>' +
        doneBtnHtml +
      '</div>' +
      '<div class="kpi-grid">' + compCards + '</div>' +
      contHtml +
      '<div class="panel-card">' +
        '<div class="panel-header"><strong>STL Container & Algorithm Complexity Tables</strong><span class="cal-day-status badge-completed">' + escapeHtmlStr(stl.complexityTables.pdfPages) + '</span></div>' +
        '<div class="data-table-wrap"><table class="data-table"><thead><tr><th>Container</th><th>Insertion</th><th>Deletion</th><th>Access</th><th>Search</th><th>Space</th></tr></thead><tbody>' + cRows + '</tbody></table></div>' +
        '<div class="data-table-wrap" style="margin-top:1rem;"><table class="data-table"><thead><tr><th>Algorithm</th><th>Time Complexity</th><th>Space Complexity</th></tr></thead><tbody>' + aRows + '</tbody></table></div>' +
      '</div>';
    return;
  }

  if (moduleKey === "recursion") {
    var rec = window.TCS_OS_DATA.recursionTheory;
    var recHtml = rec.lessons.map(function(l) {
      return (
        '<div class="panel-card">' +
          '<div class="panel-header">' +
            '<strong>' + escapeHtmlStr(l.title) + '</strong>' +
            '<span class="cal-day-status badge-completed">' + escapeHtmlStr(l.pdfRef) + '</span>' +
          '</div>' +
          '<p style="font-size:0.9rem;color:var(--text-secondary);margin-bottom:0.65rem;">' + escapeHtmlStr(l.summary) + '</p>' +
          '<pre class="code-block" style="border-radius:6px;">' + escapeHtmlStr(l.code) + '</pre>' +
        '</div>'
      );
    }).join("");

    container.innerHTML =
      '<div class="source-banner" style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:0.75rem;">' +
        '<div><strong>Primary Source:</strong> <code>' + escapeHtmlStr(rec.sourceFile) + '</code><div style="font-size:0.8rem;margin-top:0.25rem;">' + escapeHtmlStr(rec.sourceNote) + '</div></div>' +
        doneBtnHtml +
      '</div>' + recHtml;
    return;
  }

  if (moduleKey === "number-based") {
    var num = window.TCS_OS_DATA.numberTheory;
    var grpHtml = num.groups.map(function(g) {
      return (
        '<div class="panel-card">' +
          '<div class="panel-header">' +
            '<strong>' + escapeHtmlStr(g.title) + '</strong>' +
            '<span class="cal-day-status badge-completed">' + escapeHtmlStr(g.pdfPages) + '</span>' +
          '</div>' +
          '<p style="font-size:0.9rem;color:var(--text-secondary);margin-bottom:0.65rem;">' + escapeHtmlStr(g.summary) + '</p>' +
          '<pre class="code-block" style="border-radius:6px;">' + escapeHtmlStr(g.code) + '</pre>' +
        '</div>'
      );
    }).join("");

    var idxHtml = num.all35Index.map(function(item) {
      return '<div style="padding:0.35rem 0.5rem;background:var(--bg-canvas);border:1px solid var(--border-subtle);border-radius:4px;font-size:0.8rem;font-family:var(--font-mono);">' + escapeHtmlStr(item) + '</div>';
    }).join("");

    container.innerHTML =
      '<div class="source-banner" style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:0.75rem;">' +
        '<div><strong>Primary Source:</strong> <code>' + escapeHtmlStr(num.sourceFile) + '</code></div>' +
        doneBtnHtml +
      '</div>' +
      grpHtml +
      '<div class="panel-card">' +
        '<div class="panel-header"><strong>Complete Index of All 35 Number-Based Questions (Pages 1–64)</strong></div>' +
        '<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:0.5rem;">' + idxHtml + '</div>' +
      '</div>';
    return;
  }

  if (moduleKey === "tcs-patterns") {
    var pat = window.TCS_OS_DATA.tcsPatterns;
    var anatHtml = pat.anatomyOfTcsProblem.map(function(a) {
      return '<div class="kpi-card"><div style="font-weight:700;color:var(--accent-blue);margin-bottom:0.35rem;">' + escapeHtmlStr(a.heading) + '</div><div style="font-size:0.86rem;color:var(--text-secondary);">' + escapeHtmlStr(a.detail) + '</div></div>';
    }).join("");

    var featHtml = pat.featuredSolutions.map(function(f) {
      return (
        '<div class="panel-card">' +
          '<div class="panel-header">' +
            '<strong>' + escapeHtmlStr(f.title) + '</strong>' +
            '<span class="cal-day-status badge-completed">' + escapeHtmlStr(f.pdfRef) + '</span>' +
          '</div>' +
          '<p style="font-size:0.9rem;color:var(--text-secondary);margin-bottom:0.65rem;">' + escapeHtmlStr(f.summary) + '</p>' +
          '<pre class="code-block" style="border-radius:6px;">' + escapeHtmlStr(f.code) + '</pre>' +
        '</div>'
      );
    }).join("");

    var all40Html = pat.all40TcsQuestions.map(function(q) {
      return '<div style="padding:0.4rem 0.6rem;background:var(--bg-canvas);border:1px solid var(--border-subtle);border-radius:4px;font-size:0.8rem;font-family:var(--font-mono);">' + escapeHtmlStr(q) + '</div>';
    }).join("");

    container.innerHTML =
      '<div class="source-banner" style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:0.75rem;">' +
        '<div><strong>Primary Source:</strong> <code>' + escapeHtmlStr(pat.sourceFile) + '</code><div style="font-size:0.8rem;margin-top:0.2rem;">' + escapeHtmlStr(pat.sourceNote) + '</div></div>' +
        doneBtnHtml +
      '</div>' +
      '<div class="kpi-grid">' + anatHtml + '</div>' +
      featHtml +
      '<div class="panel-card">' +
        '<div class="panel-header"><strong>All 40 TCS Previous-Year Coding Questions (Pages 211–309)</strong></div>' +
        '<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:0.5rem;">' + all40Html + '</div>' +
      '</div>';
    return;
  }
}

function handleToggleTheoryDone(moduleKey) {
  var done = window.TCSStorage.toggleTheoryModuleDone(moduleKey);
  renderTheoryLibrary(moduleKey);
  showToast("Theory module '" + moduleKey + "' marked as " + (done ? "Completed" : "Unread") + ".");
}

/* ==========================================================================
   PROGRESS TRACKER & BACKUP MANAGER (progress.html)
   ========================================================================== */
function renderProgressTracker() {
  var container = document.getElementById("progress-tracker-content");
  if (!container) return;

  var state = window.TCSStorage.loadState();
  var m = window.TCSStorage.computeMetrics();
  var curriculum = window.TCS_OS_DATA.dailyCurriculum;

  var revHtml = m.revisionList.length === 0
    ? '<p style="color:var(--text-muted);font-size:0.88rem;">No questions currently marked as Needs Revision.</p>'
    : '<div style="display:grid;gap:0.5rem;">' + m.revisionList.map(function(r) {
        return (
          '<div style="display:flex;justify-content:space-between;align-items:center;background:var(--bg-canvas);padding:0.6rem 0.85rem;border-radius:6px;border-left:4px solid var(--status-rose);">' +
            '<div><strong>Day ' + r.day + ' (' + r.date + ') Q' + (r.qIndex + 1) + ':</strong> ' + escapeHtmlStr(r.title) + ' <span class="badge-phase">' + escapeHtmlStr(r.difficulty) + '</span></div>' +
            '<button type="button" class="btn" onclick="openSessionByDate(\'' + r.date + '\')">Revisit →</button>' +
          '</div>'
        );
      }).join("") + '</div>';

  var historyRows = [];
  for (var i = 0; i < curriculum.length; i++) {
    var item = curriculum[i];
    var s = state.sessions[item.date];
    var st = window.TCSStorage.getSessionStatus(s);
    var solved = 0, att = 0, rev = 0;
    for (var q = 0; q < s.problems.length; q++) {
      if (s.problems[q].status === "solved") solved++;
      else if (s.problems[q].status === "attempted") att++;
      else if (s.problems[q].status === "revision") rev++;
    }
    var pct = Math.round((solved / 5) * 100);
    var bClass = st === "Completed" ? "badge-completed" : (st === "In Progress" ? "badge-in-progress" : "badge-not-started");
    historyRows.push(
      '<tr>' +
        '<td>Day ' + item.day + '</td>' +
        '<td><code>' + item.date + '</code></td>' +
        '<td>Phase ' + item.phase + '</td>' +
        '<td><span class="cal-day-status ' + bClass + '">' + st + '</span></td>' +
        '<td><strong>' + solved + ' / 5</strong> (' + pct + '%)</td>' +
        '<td>' + att + '</td>' +
        '<td>' + rev + '</td>' +
        '<td><button type="button" class="btn" style="padding:0.25rem 0.6rem;font-size:0.76rem;" onclick="openSessionByDate(\'' + item.date + '\')">Open</button></td>' +
      '</tr>'
    );
  }

  container.innerHTML =
    '<div class="kpi-grid">' +
      '<div class="kpi-card"><div class="kpi-label">Completed Sessions</div><div class="kpi-value">' + m.completedDays + ' / 45</div><div class="kpi-sub">' + m.inProgressDays + ' sessions in progress</div></div>' +
      '<div class="kpi-card"><div class="kpi-label">Total Solved Questions</div><div class="kpi-value">' + m.solvedQuestions + ' / 225</div><div class="kpi-sub">' + m.completionPct + '% overall target</div></div>' +
      '<div class="kpi-card"><div class="kpi-label">Attempted / Revision</div><div class="kpi-value">' + m.attemptedQuestions + ' / ' + m.revisionQuestions + '</div><div class="kpi-sub">Active revision queue</div></div>' +
      '<div class="kpi-card"><div class="kpi-label">Active Streak</div><div class="kpi-value">' + m.currentStreak + ' Days</div><div class="kpi-sub">Target: 5 questions/day</div></div>' +
    '</div>' +

    '<div class="panel-card">' +
      '<div class="panel-header"><strong>Overall 225-Question Progress Bar (' + m.completionPct + '%)</strong><span>' + m.solvedQuestions + ' of 225 C++ Questions Solved</span></div>' +
      '<div class="progress-track"><div class="progress-fill" style="width:' + Math.min(100, parseFloat(m.completionPct)) + '%;"></div></div>' +
    '</div>' +

    '<div class="panel-card">' +
      '<div class="panel-header"><strong>Browser Memory Backup & Restore (localStorage JSON)</strong></div>' +
      '<p style="font-size:0.88rem;color:var(--text-secondary);margin-bottom:0.85rem;">Export your entire 45-day preparation history, imported GPT sessions, solved statuses, and notes as a JSON backup file, or restore a previous backup.</p>' +
      '<div style="display:flex;gap:0.75rem;flex-wrap:wrap;margin-bottom:1rem;">' +
        '<button type="button" class="btn btn-primary" onclick="exportUserDataBackup()">[ EXPORT MY DATA ]</button>' +
        '<button type="button" class="btn btn-success" onclick="triggerImportBackupModal()">[ IMPORT MY DATA ]</button>' +
      '</div>' +
      '<div id="import-backup-drawer" class="collapsible-drawer">' +
        '<div style="margin-bottom:0.5rem;font-size:0.85rem;color:var(--text-secondary);">Upload a backup <code>.json</code> file or paste the backup JSON below:</div>' +
        '<input type="file" id="backup-file-input" accept=".json" class="input-field" style="margin-bottom:0.6rem;" onchange="handleBackupFileSelected(this)">' +
        '<textarea id="backup-json-textarea" class="textarea-field mono" rows="5" placeholder="Paste exported backup JSON here..."></textarea>' +
        '<div style="margin-top:0.6rem;"><button type="button" class="btn btn-primary" onclick="applyImportedBackupJson()">Restore Backup Now</button></div>' +
      '</div>' +
    '</div>' +

    '<div class="panel-card">' +
      '<div class="panel-header"><strong>Questions Marked "Needs Revision" (' + m.revisionQuestions + ')</strong></div>' +
      revHtml +
    '</div>' +

    '<div class="panel-card">' +
      '<div class="panel-header"><strong>Date-Wise 45-Day Progress History (17 Nov 2026 — 31 Dec 2026)</strong></div>' +
      '<div class="data-table-wrap">' +
        '<table class="data-table">' +
          '<thead><tr><th>Day</th><th>Date</th><th>Phase</th><th>Status</th><th>Solved</th><th>Attempted</th><th>Revision</th><th>Action</th></tr></thead>' +
          '<tbody>' + historyRows.join("") + '</tbody>' +
        '</table>' +
      '</div>' +
    '</div>';
}

function exportUserDataBackup() {
  var jsonStr = window.TCSStorage.exportBackupJson();
  var blob = new Blob([jsonStr], { type: "application/json" });
  var url = URL.createObjectURL(blob);
  var a = document.createElement("a");
  a.href = url;
  a.download = "tcs-nqt-2027-cpp-os-backup-" + window.TCSCalendar.getLocalTodayISO() + ".json";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  showToast("Downloaded JSON backup file!");
}

function triggerImportBackupModal() {
  var drawer = document.getElementById("import-backup-drawer");
  if (drawer) drawer.classList.toggle("open");
}

function handleBackupFileSelected(inputEl) {
  if (!inputEl.files || !inputEl.files[0]) return;
  var reader = new FileReader();
  reader.onload = function(e) {
    var ta = document.getElementById("backup-json-textarea");
    if (ta) ta.value = e.target.result;
  };
  reader.readAsText(inputEl.files[0]);
}

function applyImportedBackupJson() {
  var ta = document.getElementById("backup-json-textarea");
  if (!ta || !ta.value.trim()) {
    showToast("Select a JSON file or paste backup JSON first.", true);
    return;
  }
  var res = window.TCSStorage.importBackupJson(ta.value);
  if (!res.ok) {
    showToast(res.error, true);
    return;
  }
  renderProgressTracker();
  window.TCSCalendar.renderDashboardCalendar();
  showToast("Successfully restored backup (" + res.count + " sessions)!");
}

/* ==========================================================================
   INITIALIZATION ON DOM READY
   ========================================================================== */
document.addEventListener("DOMContentLoaded", function() {
  // Check URL query parameter ?date=YYYY-MM-DD
  var params = new URLSearchParams(window.location.search);
  var queryDate = params.get("date");

  // Populate session date dropdown if present
  var dateSelector = document.getElementById("session-date-selector");
  if (dateSelector && window.TCS_OS_DATA) {
    var opts = window.TCS_OS_DATA.dailyCurriculum.map(function(item) {
      return '<option value="' + item.date + '">Day ' + item.day + ' — ' + item.date + ' (' + item.title.slice(0, 42) + '...)</option>';
    });
    dateSelector.innerHTML = opts.join("");
  }

  // Render active views
  window.TCSCalendar.renderDashboardCalendar();
  window.TCSSessionManager.renderSessionsDirectory();

  var state = window.TCSStorage.loadState();
  var initialSessionDate = queryDate || state.lastVisitedDate || "2026-11-17";
  window.TCSSessionManager.renderSingleSessionView(initialSessionDate);

  // Check if page has a fixed data-default-theory attribute (for standalone theory/*.html pages)
  var bodyTheory = document.body.getAttribute("data-default-theory");
  renderTheoryLibrary(bodyTheory || "input-output");
  renderProgressTracker();

  if (queryDate && document.getElementById("view-session-detail")) {
    navigateView("session-detail", queryDate);
  }
});
