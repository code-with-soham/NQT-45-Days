/* ==========================================================================
   TCS NQT 2027 — C++ CODING OS
   FILE: assets/js/calendar.js
   45-Day Calendar Renderer, Date Picker & [ JUMP TO TODAY ] Logic
   ========================================================================== */

window.TCSCalendar = (function() {
  var START_DATE = "2026-11-17";
  var END_DATE = "2026-12-31";

  function getLocalTodayISO() {
    var now = new Date();
    var yyyy = now.getFullYear();
    var mm = String(now.getMonth() + 1).padStart(2, "0");
    var dd = String(now.getDate()).padStart(2, "0");
    return yyyy + "-" + mm + "-" + dd;
  }

  function resolvePreparationTodayDate() {
    var localIso = getLocalTodayISO();
    if (localIso >= START_DATE && localIso <= END_DATE) {
      return { targetDate: localIso, rawLocalDate: localIso, withinWindow: true };
    }
    // If accessed before 17 Nov 2026, map to Day 1 (2026-11-17); if after 31 Dec 2026, map to Day 45
    if (localIso < START_DATE) {
      return { targetDate: START_DATE, rawLocalDate: localIso, withinWindow: false };
    }
    return { targetDate: END_DATE, rawLocalDate: localIso, withinWindow: false };
  }

  function formatShortDate(isoStr) {
    var parts = isoStr.split("-");
    if (parts.length !== 3) return isoStr;
    var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    var mIdx = parseInt(parts[1], 10) - 1;
    return parseInt(parts[2], 10) + " " + (months[mIdx] || parts[1]) + " " + parts[0];
  }

  function renderDashboardCalendar() {
    var gridEl = document.getElementById("calendar-45-grid");
    if (!gridEl) return;

    var state = window.TCSStorage.loadState();
    var metrics = window.TCSStorage.computeMetrics();
    var todayInfo = resolvePreparationTodayDate();
    var curriculum = window.TCS_OS_DATA.dailyCurriculum;

    // Update top dashboard stats if present
    var todaySessionObj = state.sessions[todayInfo.targetDate];
    var statToday = document.getElementById("stat-today-session");
    var statTodaySub = document.getElementById("stat-today-sub");
    var statCompleted = document.getElementById("stat-completed-days");
    var statSolved = document.getElementById("stat-questions-solved");
    var statRemaining = document.getElementById("stat-remaining-days");

    if (statToday && todaySessionObj) {
      statToday.textContent = "Day " + todaySessionObj.day + " (" + formatShortDate(todayInfo.targetDate) + ")";
    }
    if (statTodaySub && todaySessionObj) {
      statTodaySub.textContent = "Local Date: " + todayInfo.rawLocalDate + " • Status: " + window.TCSStorage.getSessionStatus(todaySessionObj);
    }
    if (statCompleted) statCompleted.textContent = metrics.completedDays + " / 45";
    if (statSolved) statSolved.textContent = metrics.solvedQuestions + " / 225";
    if (statRemaining) statRemaining.textContent = metrics.remainingDays + " Days";

    var html = [];
    for (var i = 0; i < curriculum.length; i++) {
      var item = curriculum[i];
      var sObj = state.sessions[item.date];
      var status = window.TCSStorage.getSessionStatus(sObj);
      var solvedInDay = 0;
      if (sObj && sObj.problems) {
        for (var q = 0; q < sObj.problems.length; q++) {
          if (sObj.problems[q].status === "solved") solvedInDay++;
        }
      }

      var statusClass = "status-not-started";
      var badgeClass = "badge-not-started";
      if (status === "Completed") {
        statusClass = "status-completed";
        badgeClass = "badge-completed";
      } else if (status === "In Progress") {
        statusClass = "status-in-progress";
        badgeClass = "badge-in-progress";
      }

      var isToday = (item.date === todayInfo.targetDate);
      var highlightClass = isToday ? " today-highlight" : "";

      html.push(
        '<button type="button" class="cal-day-card ' + statusClass + highlightClass + '" ' +
        'id="cal-day-' + item.date + '" ' +
        'onclick="openSessionByDate(\'' + item.date + '\')" ' +
        'title="' + item.title.replace(/"/g, "&quot;") + '">' +
          '<div class="cal-day-top">' +
            '<span>DAY ' + item.day + '</span>' +
            '<span>P' + item.phase + ' • ' + solvedInDay + '/5</span>' +
          '</div>' +
          '<div class="cal-day-date">' + formatShortDate(item.date) + (isToday ? ' ★' : '') + '</div>' +
          '<span class="cal-day-status ' + badgeClass + '">' + status + '</span>' +
        '</button>'
      );
    }
    gridEl.innerHTML = html.join("");
  }

  return {
    getLocalTodayISO: getLocalTodayISO,
    resolvePreparationTodayDate: resolvePreparationTodayDate,
    formatShortDate: formatShortDate,
    renderDashboardCalendar: renderDashboardCalendar
  };
})();
