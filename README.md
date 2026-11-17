# TCS NQT 2027 — C++ Coding Preparation OS

A complete, offline-first personal preparation environment built with **HTML5, CSS3, and Vanilla JavaScript** for the **45-day TCS NQT 2027 C++ Coding Preparation window (17 November 2026 — 31 December 2026)**.

## Project Directory Structure
```text
/index.html                  # Dashboard, 45-Day Calendar, Date Picker & [ JUMP TO TODAY ]
/sessions.html               # 45 Daily Sessions Directory (Phase & Status Filters)
/session.html                # Individual Daily Session Workspace (?date=YYYY-MM-DD)
/progress.html               # Progress Tracker (out of 45 days / 225 questions) & JSON Backup
/theory/
   index.html                # Theory Library Hub
   input-output.html         # Input/Output Mastery (How to take Input.pdf pp. 1–11) + Strict Judge Sim
   arrays.html               # Array Theory (Array Easy Medium.pdf & Array Medium.pdf)
   strings.html              # String Theory (String Easy Medium Solution.pdf)
   cpp-stl.html              # C++ STL Theory (C++ STL.pdf pp. 1–39 + Complexity Tables)
   recursion.html            # Recursion Theory (Uploaded Excel Sheets & TCS PYQ PDF)
   number-based.html         # Number-Based Coding Theory (TCS NQT Number Based PDF, 35 Qs)
   tcs-patterns.html         # TCS Previous-Year Coding Patterns (Previous Year PDF pp. 211–309, 40 Qs)
/assets/
   css/
      style.css              # Developer Dark UI Stylesheet
   js/
      theory-data.js         # Extracted PDF Theory, Code Examples, 45-Day Curriculum & Demo Questions
      storage.js             # localStorage State Engine & Backup/Restore Manager
      calendar.js            # 45-Day Calendar & [ JUMP TO TODAY ] Resolver
      prompt-generator.js    # Personalized Daily GPT Prompt Generator & 5-Problem JSON Validator
      session-manager.js     # Daily Session Renderer & Collapsible Problem Drawers
      app.js                 # Main Application Controller
```

## How to Run Locally
1. Extract `tcs-nqt-2027-cpp-coding-os.zip` into any folder on your computer.
2. Double-click `index.html` to open directly in Chrome, Edge, Brave, or Firefox (or serve via VS Code Live Server / `python3 -m http.server 8000`).
3. Alternatively, open the standalone single-file build `tcs-nqt-2027-cpp-coding-os.html` in any browser tab.

## How to Generate & Paste Daily GPT Sessions
1. Open today's session (click `[ JUMP TO TODAY ]` or choose a date on the calendar).
2. Click `[ COPY TODAY'S GPT PROMPT ]`. This automatically embeds today's date, day number, preparation phase, relevant PDF theory references, previously solved/attempted/revision questions, and your recorded weak areas.
3. Paste the prompt into ChatGPT / GPT.
4. Copy the JSON returned by GPT, click `[ PASTE GPT SESSION JSON ]` in your session workspace, paste the JSON, and click **Validate & Populate 5 Questions**.
5. The importer validates that **all 5 problems** are present and saves them to `localStorage` (if invalid, it displays a clear error without overwriting your existing session).

## How to Back Up & Restore Browser Data
1. Navigate to **Progress & Backup** (`progress.html`).
2. Click `[ EXPORT MY DATA ]` to download a timestamped `.json` file containing all 45 sessions, question statuses, personal notes, and weak areas.
3. To restore on any browser or device, click `[ IMPORT MY DATA ]`, select your `.json` backup file, and click **Restore Backup Now**.
