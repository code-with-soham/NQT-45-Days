/* ==========================================================================
   TCS NQT 2027 — C++ CODING OS
   FILE: assets/js/session-manager.js
   Renders 45 Daily Sessions List & Individual Daily Session Workspace
   ========================================================================== */

window.TCSSessionManager = (function() {
  var currentActiveDate = "2026-11-17";

  function escapeHtml(str) {
    return String(str || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function getActiveDate() {
    return currentActiveDate;
  }

  function setActiveDate(dateStr) {
    var state = window.TCSStorage.loadState();
    if (state.sessions[dateStr]) {
      currentActiveDate = dateStr;
      state.lastVisitedDate = dateStr;
      window.TCSStorage.saveState(state);
    }
  }

  function renderSessionsDirectory() {
    var container = document.getElementById("sessions-directory-list");
    if (!container) return;

    var phaseFilterEl = document.getElementById("sessions-phase-filter");
    var statusFilterEl = document.getElementById("sessions-status-filter");
    var searchFilterEl = document.getElementById("sessions-search-input");

    var phaseFilter = phaseFilterEl ? phaseFilterEl.value : "all";
    var statusFilter = statusFilterEl ? statusFilterEl.value : "all";
    var query = searchFilterEl ? searchFilterEl.value.trim().toLowerCase() : "";

    var state = window.TCSStorage.loadState();
    var curriculum = window.TCS_OS_DATA.dailyCurriculum;
    var rows = [];

    for (var i = 0; i < curriculum.length; i++) {
      var item = curriculum[i];
      var sObj = state.sessions[item.date];
      var status = window.TCSStorage.getSessionStatus(sObj);

      if (phaseFilter !== "all" && String(item.phase) !== phaseFilter) continue;
      if (statusFilter !== "all" && status !== statusFilter) continue;
      if (query && (item.title.toLowerCase().indexOf(query) === -1 && item.date.indexOf(query) === -1 && ("session " + item.day).indexOf(query) === -1)) {
        continue;
      }

      var solvedCount = 0;
      var revCount = 0;
      for (var q = 0; q < sObj.problems.length; q++) {
        if (sObj.problems[q].status === "solved") solvedCount++;
        if (sObj.problems[q].status === "revision") revCount++;
      }

      var badgeClass = status === "Completed" ? "badge-completed" : (status === "In Progress" ? "badge-in-progress" : "badge-not-started");

      rows.push(
        '<div class="question-card ' + (status === "Completed" ? "q-solved" : (status === "In Progress" ? "q-attempted" : "")) + '" style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:1rem;">' +
          '<div>' +
            '<div style="display:flex;align-items:center;gap:0.6rem;flex-wrap:wrap;">' +
              '<span class="badge-phase">Session ' + item.day + ' — ' + window.TCSCalendar.formatShortDate(item.date) + '</span>' +
              '<span class="cal-day-status ' + badgeClass + '">' + status + ' (' + solvedCount + '/5 Solved)</span>' +
              (revCount > 0 ? '<span class="cal-day-status badge-revision">' + revCount + ' Needs Revision</span>' : '') +
            '</div>' +
            '<div style="font-weight:700;font-size:1rem;margin-top:0.45rem;color:var(--text-primary);">' + escapeHtml(item.title) + '</div>' +
            '<div style="font-size:0.8rem;color:var(--text-muted);font-family:var(--font-mono);margin-top:0.2rem;">PDF Reference: ' + escapeHtml(item.pdfRef) + '</div>' +
          '</div>' +
          '<div style="display:flex;gap:0.5rem;align-items:center;">' +
            '<button type="button" class="btn btn-primary" onclick="openSessionByDate(\'' + item.date + '\')">Open Session ' + item.day + ' →</button>' +
          '</div>' +
        '</div>'
      );
    }

    if (rows.length === 0) {
      container.innerHTML = '<div class="panel-card"><p style="color:var(--text-muted);">No sessions match the current filter.</p></div>';
    } else {
      container.innerHTML = rows.join("");
    }
  }

  function renderSingleSessionView(dateStr) {
    if (dateStr) setActiveDate(dateStr);
    var targetDate = currentActiveDate;
    var state = window.TCSStorage.loadState();
    var s = state.sessions[targetDate];
    if (!s) {
      targetDate = "2026-11-17";
      currentActiveDate = targetDate;
      s = state.sessions[targetDate];
    }

    var phaseObj = window.TCS_OS_DATA.phases[s.phase - 1] || window.TCS_OS_DATA.phases[0];
    var status = window.TCSStorage.getSessionStatus(s);
    var ioChallenge = window.TCS_OS_DATA.ioChallenges[s.ioChallengeId] || window.TCS_OS_DATA.ioChallenges["io-1"];

    // Update Session Header elements
    var titleEl = document.getElementById("session-view-title");
    var focusEl = document.getElementById("session-view-focus");
    var pdfEl = document.getElementById("session-view-pdf");
    var statusEl = document.getElementById("session-view-status");
    var dateSelectEl = document.getElementById("session-date-selector");

    if (titleEl) titleEl.textContent = "Session " + s.day + " — " + window.TCSCalendar.formatShortDate(s.date) + " (" + s.date + ")";
    if (focusEl) focusEl.textContent = "Phase " + s.phase + ": " + s.focus;
    if (pdfEl) pdfEl.textContent = "Primary PDF Reference: " + s.pdfRef + " | " + phaseObj.name;
    if (statusEl) {
      statusEl.textContent = status;
      statusEl.className = "cal-day-status " + (status === "Completed" ? "badge-completed" : (status === "In Progress" ? "badge-in-progress" : "badge-not-started"));
    }
    if (dateSelectEl) dateSelectEl.value = s.date;

    // Update Prompt Preview textarea
    var promptPreviewEl = document.getElementById("gpt-prompt-preview-box");
    if (promptPreviewEl) {
      promptPreviewEl.value = window.TCSPromptGenerator.buildDailyGptPrompt(s.date);
    }

    // Render 5 Question Slots
    var qContainer = document.getElementById("session-questions-container");
    if (qContainer) {
      var qHtml = [];
      for (var i = 0; i < s.problems.length; i++) {
        var p = s.problems[i];
        var cardStateClass = p.status === "solved" ? "q-solved" : (p.status === "attempted" ? "q-attempted" : (p.status === "revision" ? "q-revision" : ""));
        var statusLabel = p.status === "solved" ? "Solved ✓" : (p.status === "attempted" ? "Attempted" : (p.status === "revision" ? "Needs Revision !" : "Unsolved"));
        var statusBadgeClass = p.status === "solved" ? "badge-completed" : (p.status === "attempted" ? "badge-in-progress" : (p.status === "revision" ? "badge-revision" : "badge-not-started"));

        if (!p.populated) {
          qHtml.push(
            '<div class="question-card ' + cardStateClass + '">' +
              '<div class="q-header">' +
                '<div>' +
                  '<div class="q-title">Question ' + (i + 1) + ': ' + escapeHtml(p.title) + '</div>' +
                  '<div class="q-meta-row">' +
                    '<span class="badge-phase">Slot ' + (i + 1) + ' of 5</span>' +
                    '<span class="cal-day-status ' + statusBadgeClass + '">' + statusLabel + '</span>' +
                  '</div>' +
                '</div>' +
                '<div style="display:flex;gap:0.4rem;flex-wrap:wrap;">' +
                  '<button type="button" class="btn btn-warning ' + (p.status === "attempted" ? "active-state" : "") + '" onclick="handleQuestionStatus(\'' + s.date + '\', ' + i + ', \'attempted\')">[Mark as Attempted]</button>' +
                  '<button type="button" class="btn btn-success ' + (p.status === "solved" ? "active-state" : "") + '" onclick="handleQuestionStatus(\'' + s.date + '\', ' + i + ', \'solved\')">[Mark as Solved]</button>' +
                  '<button type="button" class="btn btn-danger ' + (p.status === "revision" ? "active-state" : "") + '" onclick="handleQuestionStatus(\'' + s.date + '\', ' + i + ', \'revision\')">[Mark as Needs Revision]</button>' +
                '</div>' +
              '</div>' +
              '<p style="font-size:0.86rem;color:var(--text-muted);">This slot is ready for your daily GPT JSON import. Click <strong>[ COPY TODAY\'S GPT PROMPT ]</strong> above, generate your 5 TCS NQT questions in GPT, and paste the JSON in <strong>[ PASTE GPT SESSION JSON ]</strong> (or click <strong>[ Load Sample PDF Questions ]</strong> to preview a complete 5-question set extracted from your uploaded PDFs).</p>' +
            '</div>'
          );
        } else {
          var edgeListHtml = (p.edgeCases || []).map(function(ec) {
            return '<li>' + escapeHtml(ec) + '</li>';
          }).join("");

          qHtml.push(
            '<div class="question-card ' + cardStateClass + '">' +
              '<div class="q-header">' +
                '<div>' +
                  '<div class="q-title">Q' + (i + 1) + '. ' + escapeHtml(p.title) + '</div>' +
                  '<div class="q-meta-row">' +
                    '<span class="badge-phase">' + escapeHtml(p.difficulty) + '</span>' +
                    '<span class="cal-day-status ' + statusBadgeClass + '">' + statusLabel + '</span>' +
                    '<span style="font-size:0.76rem;color:var(--text-muted);font-family:var(--font-mono);">Source: ' + escapeHtml(p.sourceReference) + '</span>' +
                  '</div>' +
                '</div>' +
                '<div style="display:flex;gap:0.4rem;flex-wrap:wrap;">' +
                  '<button type="button" class="btn btn-warning ' + (p.status === "attempted" ? "active-state" : "") + '" onclick="handleQuestionStatus(\'' + s.date + '\', ' + i + ', \'attempted\')">[Mark as Attempted]</button>' +
                  '<button type="button" class="btn btn-success ' + (p.status === "solved" ? "active-state" : "") + '" onclick="handleQuestionStatus(\'' + s.date + '\', ' + i + ', \'solved\')">[Mark as Solved]</button>' +
                  '<button type="button" class="btn btn-danger ' + (p.status === "revision" ? "active-state" : "") + '" onclick="handleQuestionStatus(\'' + s.date + '\', ' + i + ', \'revision\')">[Mark as Needs Revision]</button>' +
                '</div>' +
              '</div>' +

              '<div class="collapse-bar">' +
                '<button type="button" class="collapse-btn open" id="btn-prob-' + i + '" onclick="toggleQuestionDrawer(' + i + ', \'prob\')">[Read Full Problem]</button>' +
                '<button type="button" class="collapse-btn" id="btn-io-' + i + '" onclick="toggleQuestionDrawer(' + i + ', \'io\')">[View Input Format]</button>' +
                '<button type="button" class="collapse-btn" id="btn-hint-' + i + '" onclick="toggleQuestionDrawer(' + i + ', \'hint\')">[View Hint]</button>' +
                '<button type="button" class="collapse-btn" id="btn-sol-' + i + '" onclick="toggleQuestionDrawer(' + i + ', \'sol\')">[Show C++ Solution]</button>' +
              '</div>' +

              /* Drawer 1: Full Problem Statement */
              '<div class="collapsible-drawer open" id="drawer-prob-' + i + '">' +
                '<div class="story-prose">' + escapeHtml(p.statement) + '</div>' +
                '<div class="two-col-grid" style="margin-top:1rem;">' +
                  '<div style="background:var(--bg-canvas);padding:0.75rem;border-radius:6px;border:1px solid var(--border-subtle);">' +
                    '<div style="font-family:var(--font-mono);font-size:0.75rem;color:var(--accent-blue);margin-bottom:0.3rem;">SAMPLE INPUT</div>' +
                    '<pre style="font-family:var(--font-mono);font-size:0.82rem;white-space:pre-wrap;color:var(--text-primary);">' + escapeHtml(p.sampleInput) + '</pre>' +
                  '</div>' +
                  '<div style="background:var(--bg-canvas);padding:0.75rem;border-radius:6px;border:1px solid var(--border-subtle);">' +
                    '<div style="font-family:var(--font-mono);font-size:0.75rem;color:var(--status-green);margin-bottom:0.3rem;">SAMPLE OUTPUT</div>' +
                    '<pre style="font-family:var(--font-mono);font-size:0.82rem;white-space:pre-wrap;color:var(--text-primary);">' + escapeHtml(p.sampleOutput) + '</pre>' +
                  '</div>' +
                '</div>' +
                '<div style="margin-top:0.75rem;font-size:0.88rem;color:var(--text-secondary);"><strong>Explanation:</strong> ' + escapeHtml(p.explanation) + '</div>' +
                '<div style="margin-top:0.65rem;font-size:0.86rem;color:var(--text-secondary);"><strong>Edge Cases to Test:</strong><ul style="margin-left:1.25rem;margin-top:0.25rem;">' + edgeListHtml + '</ul></div>' +
              '</div>' +

              /* Drawer 2: Input / Output Format & Constraints */
              '<div class="collapsible-drawer" id="drawer-io-' + i + '">' +
                '<div style="margin-bottom:0.6rem;"><strong>Input Format:</strong><div style="font-family:var(--font-mono);font-size:0.84rem;color:var(--text-secondary);white-space:pre-line;margin-top:0.2rem;">' + escapeHtml(p.inputFormat) + '</div></div>' +
                '<div style="margin-bottom:0.6rem;"><strong>Output Format:</strong><div style="font-family:var(--font-mono);font-size:0.84rem;color:var(--text-secondary);white-space:pre-line;margin-top:0.2rem;">' + escapeHtml(p.outputFormat) + '</div></div>' +
                '<div style="margin-bottom:0.6rem;"><strong>Constraints:</strong> <code style="font-family:var(--font-mono);color:#b45309;">' + escapeHtml(p.constraints) + '</code></div>' +
                '<div style="font-family:var(--font-mono);font-size:0.8rem;color:var(--text-muted);">Target Time Complexity: <strong>' + escapeHtml(p.timeComplexity) + '</strong> | Target Space Complexity: <strong>' + escapeHtml(p.spaceComplexity) + '</strong></div>' +
              '</div>' +

              /* Drawer 3: Hint */
              '<div class="collapsible-drawer" id="drawer-hint-' + i + '">' +
                '<div style="font-size:0.9rem;color:#b45309;"><strong>Mentor Hint:</strong> ' + escapeHtml(p.hint) + '</div>' +
              '</div>' +

              /* Drawer 4: C++ Solution (Hidden by default!) */
              '<div class="collapsible-drawer" id="drawer-sol-' + i + '">' +
                '<div class="code-wrapper">' +
                  '<div class="code-header">' +
                    '<span>Portable C++14/17 Solution • Time: ' + escapeHtml(p.timeComplexity) + ' • Space: ' + escapeHtml(p.spaceComplexity) + '</span>' +
                    '<button type="button" class="btn" style="padding:0.2rem 0.55rem;font-size:0.74rem;" onclick="copyCodeFromQuestion(' + i + ')">Copy C++</button>' +
                  '</div>' +
                  '<pre class="code-block" id="q-code-block-' + i + '">' + escapeHtml(p.solution) + '</pre>' +
                '</div>' +
              '</div>' +
            '</div>'
          );
        }
      }
      qContainer.innerHTML = qHtml.join("");
    }

    // Populate Input/Output Challenge Section
    var ioTitleEl = document.getElementById("session-io-title");
    var ioPromptEl = document.getElementById("session-io-prompt");
    var ioSampleEl = document.getElementById("session-io-sample");
    var ioExpectedEl = document.getElementById("session-io-expected");
    var ioCodeEl = document.getElementById("session-io-code");
    var ioDoneCheck = document.getElementById("session-io-done-check");

    if (ioTitleEl) ioTitleEl.textContent = ioChallenge.title;
    if (ioPromptEl) ioPromptEl.textContent = ioChallenge.prompt;
    if (ioSampleEl) ioSampleEl.textContent = ioChallenge.sampleRawInput;
    if (ioExpectedEl) ioExpectedEl.textContent = ioChallenge.expectedOutput;
    if (ioCodeEl) ioCodeEl.textContent = ioChallenge.snippet;
    if (ioDoneCheck) ioDoneCheck.checked = !!s.ioPracticeDone;

    // Populate Edge Case Checkboxes & Personal Notes
    var checks = s.edgeCaseChecks || {};
    var ecIds = ["emptyOrSingle", "negativeValues", "overflow64Bit", "whitespaceDelimiters", "duplicates", "boundaryLimits"];
    for (var c = 0; c < ecIds.length; c++) {
      var cb = document.getElementById("ec-check-" + ecIds[c]);
      if (cb) cb.checked = !!checks[ecIds[c]];
    }
    var customEcEl = document.getElementById("session-custom-edge-cases");
    if (customEcEl) customEcEl.value = s.customEdgeCases || "";

    var notesEl = document.getElementById("session-personal-notes");
    if (notesEl) notesEl.value = s.notes || "";

    var weakAreasEl = document.getElementById("session-weak-areas-input");
    if (weakAreasEl) weakAreasEl.value = state.weakAreas || "";
  }

  return {
    getActiveDate: getActiveDate,
    setActiveDate: setActiveDate,
    renderSessionsDirectory: renderSessionsDirectory,
    renderSingleSessionView: renderSingleSessionView
  };
})();
