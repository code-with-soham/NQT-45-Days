/* ==========================================================================
   TCS NQT 2027 — C++ CODING OS
   FILE: assets/js/theory-data.js
   Strictly grounded in the user's uploaded PDFs and Excel Question Banks.
   ========================================================================== */

window.TCS_OS_DATA = {
  meta: {
    appName: "TCS NQT 2027 — C++ Coding OS",
    language: "C++ (Portable C++14 / C++17)",
    startDate: "2026-11-17",
    endDate: "2026-12-31",
    totalDays: 45,
    dailyTarget: 5,
    totalQuestions: 225,
    uploadedSources: [
      { name: "How to take Input.pdf", pages: "11 pages", category: "Input/Output Mastery", status: "Extracted (6 Lessons, pp. 1–11)" },
      { name: "Array Easy Medium.pdf", pages: "10 pages", category: "Array Theory", status: "Extracted (15 Story Problems, pp. 1–10)" },
      { name: "Array Medium.pdf", pages: "14 pages", category: "Array Theory", status: "Extracted (15 Story Problems, pp. 1–14)" },
      { name: "C++ STL.pdf", pages: "39 pages", category: "C++ STL Theory", status: "Extracted (Containers, Iterators, Algorithms, Complexities, pp. 1–39)" },
      { name: "String Easy Medium Solution.pdf", pages: "36 pages", category: "String Theory", status: "Extracted (11 Story Problems & C++ Solutions, pp. 1–36)" },
      { name: "TCS NQT Number Based Coding Questions.pdf", pages: "64 pages", category: "Number-Based Theory", status: "Extracted (35 Number Problems & C++ Code, pp. 1–64)" },
      { name: "Previous Year Coding Questions.pdf", pages: "367 pages", category: "TCS Previous-Year Patterns", status: "Extracted (40 TCS PYQs pp. 211–309 + Multi-Company PYQs)" },
      { name: "Coding questions.xlsx", pages: "133 rows", category: "Question Bank", status: "Extracted (133 Problems across 12 Topics)" },
      { name: "KN Academy Coding Sheet.xlsx", pages: "49 rows", category: "Question Bank", status: "Extracted (49 Core NQT Problems)" },
      { name: "Problem Solving Sheet - Updated.xlsx", pages: "55 rows", category: "Question Bank", status: "Extracted (55 Topic-Wise Problems)" }
    ],
    sourceNotes: [
      "All Theory Library modules cite the exact uploaded PDF filename and page numbers.",
      "Note on file batch: How to take Input.pdf, Array Easy Medium.pdf, Array Medium.pdf, C++ STL.pdf, String Easy Medium Solution.pdf, TCS NQT Number Based Coding Questions.pdf, Previous Year Coding Questions.pdf, and the 3 Excel sheets were inspected directly. Array Basic(6).pdf, Recursion(2).pdf, and TCS 2026 Solutions(3).pdf were not in the 10-file upload batch; therefore, Recursion and Foundational Array patterns are grounded strictly in the uploaded Excel sheets and Previous Year Coding Questions.pdf without inventing unverified PDF pages."
    ]
  },

  phases: [
    {
      id: 1,
      name: "Phase 1 — Input/Output Mastery & Fundamentals",
      dateRange: "17 Nov 2026 — 23 Nov 2026",
      startDay: 1,
      endDay: 7,
      focus: "Build strong input/output handling (getline, stringstream, comma/bracket parsing, 2D string matrices, fixed precision) and refresh number/array coding fundamentals.",
      primaryPdfs: ["How to take Input.pdf (pp. 1–11)", "TCS NQT Number Based Coding Questions.pdf (pp. 1–64)"]
    },
    {
      id: 2,
      name: "Phase 2 — Array & String Story Problems + Mixed Input Formats",
      dateRange: "24 Nov 2026 — 07 Dec 2026",
      startDay: 8,
      endDay: 21,
      focus: "Develop confidence with TCS-style story-based array and string problems, two-pointer techniques, prefix/suffix scans, sliding window, and mixed cin + getline formats.",
      primaryPdfs: ["Array Easy Medium.pdf (pp. 1–10)", "Array Medium.pdf (pp. 1–14)", "String Easy Medium Solution.pdf (pp. 1–36)"]
    },
    {
      id: 3,
      name: "Phase 3 — C++ STL, Recursion & Combined Scenarios",
      dateRange: "08 Dec 2026 — 21 Dec 2026",
      startDay: 22,
      endDay: 35,
      focus: "Increase problem complexity using STL containers (unordered_map, map, set, priority_queue, stack, deque), custom comparators, recursion/backtracking patterns, and matrix transformations.",
      primaryPdfs: ["C++ STL.pdf (pp. 1–39)", "Array Medium.pdf (pp. 1–14)", "Previous Year Coding Questions.pdf (pp. 211–309)"]
    },
    {
      id: 4,
      name: "Phase 4 — Strict Judge Simulation, Long Statements & Full Revision",
      dateRange: "22 Dec 2026 — 31 Dec 2026",
      startDay: 36,
      endDay: 45,
      focus: "Strict judge simulation, multi-condition TCS NQT story statements, hidden boundary traps, 64-bit overflow prevention, timed mixed coding sets, and weak-area revision.",
      primaryPdfs: ["Previous Year Coding Questions.pdf (TCS Section pp. 211–309)", "How to take Input.pdf (pp. 1–11)", "All Uploaded Sheets"]
    }
  ],

  /* 45-Day Curated Daily Schedule (17 Nov 2026 to 31 Dec 2026) */
  dailyCurriculum: [
    { day: 1, date: "2026-11-17", phase: 1, title: "Space-Separated & Comma-Separated Array Parsing + Number Basics", pdfRef: "How to take Input.pdf (pp. 1–3), TCS NQT Number Based Coding Questions.pdf (pp. 2–10)", ioChallengeId: "io-1" },
    { day: 2, date: "2026-11-18", phase: 1, title: "Bracketed Array Input [1, 2, 3] & Space-Separated Word Streams", pdfRef: "How to take Input.pdf (pp. 3–7), TCS NQT Number Based Coding Questions.pdf (pp. 11–20)", ioChallengeId: "io-2" },
    { day: 3, date: "2026-11-19", phase: 1, title: "Decimal Precision Formatting & 2D Matrix from Comma String", pdfRef: "How to take Input.pdf (pp. 7–11), TCS NQT Number Based Coding Questions.pdf (pp. 21–30)", ioChallengeId: "io-3" },
    { day: 4, date: "2026-11-20", phase: 1, title: "cin vs getline Buffer Traps & Prime / Factor / Strong / Automorphic Numbers", pdfRef: "How to take Input.pdf (pp. 1–6), TCS NQT Number Based Coding Questions.pdf (pp. 31–44)", ioChallengeId: "io-4" },
    { day: 5, date: "2026-11-21", phase: 1, title: "Harshad, Abundant, GCD/LCM, Fraction Addition & Digit Replacement", pdfRef: "TCS NQT Number Based Coding Questions.pdf (pp. 42–57)", ioChallengeId: "io-5" },
    { day: 6, date: "2026-11-22", phase: 1, title: "Sum of Two Primes, Quadratic Roots & Foundational Array Scans", pdfRef: "TCS NQT Number Based Coding Questions.pdf (pp. 58–64), Array Easy Medium.pdf (pp. 1–3)", ioChallengeId: "io-6" },
    { day: 7, date: "2026-11-23", phase: 1, title: "Phase 1 Consolidation: Multi-Format Input Parsing + Number & Array Drill", pdfRef: "How to take Input.pdf (pp. 1–11), TCS NQT Number Based Coding Questions.pdf (pp. 1–64)", ioChallengeId: "io-1" },

    { day: 8, date: "2026-11-24", phase: 2, title: "Sorted Array Rotation Check, In-Place Deduplication & Missing ID Code", pdfRef: "Array Easy Medium.pdf (Q1–Q3, pp. 1–3)", ioChallengeId: "io-2" },
    { day: 9, date: "2026-11-25", phase: 2, title: "Zero-Gravity Cargo Move Zeros, Dutch National Flag (0/1/2) & Max Consecutive 1s", pdfRef: "Array Easy Medium.pdf (Q4–Q6, pp. 3–4)", ioChallengeId: "io-3" },
    { day: 10, date: "2026-11-26", phase: 2, title: "Array Leaders (Guardian Towers), Right Rotation by K & Array Intersection", pdfRef: "Array Easy Medium.pdf (Q7–Q9, pp. 5–6)", ioChallengeId: "io-4" },
    { day: 11, date: "2026-11-27", phase: 2, title: "Equilibrium Sentinel, In-Place Frequency Grid & Sliding Window Max Frequency", pdfRef: "Array Easy Medium.pdf (Q10–Q12, pp. 6–8)", ioChallengeId: "io-5" },
    { day: 12, date: "2026-11-28", phase: 2, title: "Rat Colony Simulation, Min-Comparison Duel & 6x6 Hourglass Matrix", pdfRef: "Array Easy Medium.pdf (Q13–Q15, pp. 8–10)", ioChallengeId: "io-6" },
    { day: 13, date: "2026-11-29", phase: 2, title: "String Reversal with Spaces, Alphanumeric Palindrome & Embedded Number Sum", pdfRef: "String Easy Medium Solution.pdf (Q1–Q3, pp. 1–9)", ioChallengeId: "io-1" },
    { day: 14, date: "2026-11-30", phase: 2, title: "Forbidden Digit '9' Surveillance (Bastin Problem) & Max Odd Prefix Substring", pdfRef: "String Easy Medium Solution.pdf (Q4–Q5, pp. 9–15), Previous Year Coding Questions.pdf (p. 286)", ioChallengeId: "io-2" },
    { day: 15, date: "2026-12-01", phase: 2, title: "String Character De-Duplication, Isomorphic Strings & Case Normalization", pdfRef: "String Easy Medium Solution.pdf (Q6–Q8, pp. 15–25)", ioChallengeId: "io-3" },
    { day: 16, date: "2026-12-02", phase: 2, title: "Arbitrary-Length String Rounding to Nearest 10, Alternating Merge & Even Substrings", pdfRef: "String Easy Medium Solution.pdf (Q9–Q11, pp. 25–36)", ioChallengeId: "io-4" },
    { day: 17, date: "2026-12-03", phase: 2, title: "Contiguous Subarray Max Pair Sum, Prior-Element Supremacy Count & 3Sum Triplets", pdfRef: "Array Medium.pdf (Q1–Q3, pp. 1–3)", ioChallengeId: "io-5" },
    { day: 18, date: "2026-12-04", phase: 2, title: "Equal Subset Partition, 90-Degree Matrix Rotation & Stock Oracle Buy/Sell", pdfRef: "Array Medium.pdf (Q4–Q6, pp. 3–5)", ioChallengeId: "io-6" },
    { day: 19, date: "2026-12-05", phase: 2, title: "Minimum Swaps to Group <= K (Sliding Window) & Chocolate Distribution Dilemma", pdfRef: "Array Medium.pdf (Q7–Q8, pp. 5–7)", ioChallengeId: "io-1" },
    { day: 20, date: "2026-12-06", phase: 2, title: "Trapping Rainwater Fortress & Counting-Based Kth Smallest Element", pdfRef: "Array Medium.pdf (Q9–Q10, pp. 7–9)", ioChallengeId: "io-2" },
    { day: 21, date: "2026-12-07", phase: 2, title: "Phase 2 Checkpoint: Mixed Array & String Story Problems with Strict Input Parsing", pdfRef: "Array Easy Medium.pdf, Array Medium.pdf, String Easy Medium Solution.pdf", ioChallengeId: "io-3" },

    { day: 22, date: "2026-12-08", phase: 3, title: "STL Vector, List, Deque & Pair Deep Dive + Custom Comparator Sorting", pdfRef: "C++ STL.pdf (pp. 2–17, 28–31)", ioChallengeId: "io-4" },
    { day: 23, date: "2026-12-09", phase: 3, title: "STL Stack, Queue & Priority Queue + Monotonic Stack Stock Span Analysis", pdfRef: "C++ STL.pdf (pp. 18–23), Array Medium.pdf (Q12, pp. 10–11)", ioChallengeId: "io-5" },
    { day: 24, date: "2026-12-10", phase: 3, title: "STL Map, Unordered Map, Set & Unordered Set + Frequency/Hashing Patterns", pdfRef: "C++ STL.pdf (pp. 24–27, 38–39)", ioChallengeId: "io-6" },
    { day: 25, date: "2026-12-11", phase: 3, title: "STL Algorithms (sort, nth_element, rotate, accumulate, unique, binary_search)", pdfRef: "C++ STL.pdf (pp. 28–39)", ioChallengeId: "io-1" },
    { day: 26, date: "2026-12-12", phase: 3, title: "Minimum Railway Platforms, Binary Search on Answer (Royal Cake) & Substring Match", pdfRef: "Array Medium.pdf (Q11, Q14, Q15, pp. 9–14)", ioChallengeId: "io-2" },
    { day: 27, date: "2026-12-13", phase: 3, title: "Recursion Fundamentals: Factorial, Fibonacci, Power, GCD & Digit Extraction", pdfRef: "KN Academy Coding Sheet.xlsx (Q39–Q46), Problem Solving Sheet - Updated.xlsx (Q50–Q55)", ioChallengeId: "io-3" },
    { day: 28, date: "2026-12-14", phase: 3, title: "Recursion & Backtracking: Subsets, Permutations, Subsequences & Combination Sum", pdfRef: "Coding questions.xlsx (Q60–Q69, Q93)", ioChallengeId: "io-4" },
    { day: 29, date: "2026-12-15", phase: 3, title: "Dynamic Programming & Grid Recursion: Unique Paths, 0/1 Knapsack & Bitmask TSP", pdfRef: "Previous Year Coding Questions.pdf (pp. 238, 299), Array Medium.pdf (Q13, pp. 11–12)", ioChallengeId: "io-5" },
    { day: 30, date: "2026-12-16", phase: 3, title: "TCS PYQ Pack 1: Majority Element (>N/3), 3-6-7 Conveyor Sort & Missing Roll Call", pdfRef: "Previous Year Coding Questions.pdf (TCS Q1–Q5, pp. 211–224)", ioChallengeId: "io-6" },
    { day: 31, date: "2026-12-17", phase: 3, title: "TCS PYQ Pack 2: Top K Students, Space-Line Armstrongs & Subarray Target Sum", pdfRef: "Previous Year Coding Questions.pdf (TCS Q6–Q10, pp. 225–237)", ioChallengeId: "io-1" },
    { day: 32, date: "2026-12-18", phase: 3, title: "TCS PYQ Pack 3: Store Sales Analytics, Subarray Bitwise ORs & Max 3-Employee Efficiency", pdfRef: "Previous Year Coding Questions.pdf (TCS Q11–Q16, pp. 238–251)", ioChallengeId: "io-2" },
    { day: 33, date: "2026-12-19", phase: 3, title: "TCS PYQ Pack 4: L/R Shoe Pairs, Female Grade ASCII Average & Nearest Multiple", pdfRef: "Previous Year Coding Questions.pdf (TCS Q17–Q20, pp. 252–260)", ioChallengeId: "io-3" },
    { day: 34, date: "2026-12-20", phase: 3, title: "TCS PYQ Pack 5: Custom String Cipher, Unique Words Asc/Desc & Bit Toggling", pdfRef: "Previous Year Coding Questions.pdf (TCS Q21–Q25, pp. 261–273)", ioChallengeId: "io-4" },
    { day: 35, date: "2026-12-21", phase: 3, title: "Phase 3 Consolidation: STL + Recursion + TCS Multi-Step Story Problems", pdfRef: "C++ STL.pdf, Previous Year Coding Questions.pdf (pp. 211–273)", ioChallengeId: "io-5" },

    { day: 36, date: "2026-12-22", phase: 4, title: "TCS NQT 2023 Special: Freq >= P Smallest Char, Watchmaker Lag & Custom Lex Order", pdfRef: "Previous Year Coding Questions.pdf (TCS Q26–Q30, pp. 274–285)", ioChallengeId: "io-6" },
    { day: 37, date: "2026-12-23", phase: 4, title: "TCS NQT 2023 Special: Bastin No-'9' Number, Quote/Hash Balance & Freq Replacement", pdfRef: "Previous Year Coding Questions.pdf (TCS Q31–Q35, pp. 286–295)", ioChallengeId: "io-1" },
    { day: 38, date: "2026-12-24", phase: 4, title: "TCS PYQ Pack 6: Missing Pangram Letters, Moving Truck Knapsack & Digital Root Lucky No", pdfRef: "Previous Year Coding Questions.pdf (TCS Q36–Q40, pp. 296–309)", ioChallengeId: "io-2" },
    { day: 39, date: "2026-12-25", phase: 4, title: "Strict Judge Simulation 1: Dirty Whitespace, Empty Lines & Unspecified Array Sizes", pdfRef: "How to take Input.pdf (pp. 1–11), Previous Year Coding Questions.pdf", ioChallengeId: "io-3" },
    { day: 40, date: "2026-12-26", phase: 4, title: "Strict Judge Simulation 2: Bracket/CSV Matrices, Mixed Key-Value Records & Float Formatting", pdfRef: "How to take Input.pdf (pp. 7–11), Previous Year Coding Questions.pdf (pp. 242–258)", ioChallengeId: "io-4" },
    { day: 41, date: "2026-12-27", phase: 4, title: "64-Bit Overflow & Boundary Stress Test: Large N Constraints & Negative Inputs", pdfRef: "TCS NQT Number Based Coding Questions.pdf, Array Medium.pdf", ioChallengeId: "io-5" },
    { day: 42, date: "2026-12-28", phase: 4, title: "Full-Length TCS NQT Timed Simulation Set 1 (Easy + Medium + Hard Story Mix)", pdfRef: "Previous Year Coding Questions.pdf (pp. 211–309), Array Medium.pdf", ioChallengeId: "io-6" },
    { day: 43, date: "2026-12-29", phase: 4, title: "Full-Length TCS NQT Timed Simulation Set 2 (String Parsing + Array + STL Mix)", pdfRef: "String Easy Medium Solution.pdf, C++ STL.pdf, Previous Year Coding Questions.pdf", ioChallengeId: "io-1" },
    { day: 44, date: "2026-12-30", phase: 4, title: "Targeted Revision: Re-Solving All Questions Marked 'Needs Revision' & Weak Areas", pdfRef: "All Uploaded PDFs & Personal Revision Queue", ioChallengeId: "io-2" },
    { day: 45, date: "2026-12-31", phase: 4, title: "Final Dress Rehearsal: Input/Output Mastery Checklist, STL Complexities & Exam Readiness", pdfRef: "How to take Input.pdf (pp. 1–11), C++ STL.pdf (pp. 38–39)", ioChallengeId: "io-3" }
  ],

  /* Day-Specific Input/Output Challenges (referenced by ioChallengeId) */
  ioChallenges: {
    "io-1": {
      title: "Space-Separated Integer Stream Without N (How to take Input.pdf, pp. 1–2)",
      prompt: "Read an entire line of space-separated integers where the count N is NOT given on a prior line, ignore extra leading/trailing spaces, and print the count and sum using long long.",
      sampleRawInput: "   10   25  -5   40   100  ",
      expectedOutput: "Count: 5, Sum: 170",
      snippet: `#include <iostream>
#include <sstream>
#include <string>
#include <vector>
using namespace std;

int main() {
    string line;
    if (!getline(cin >> ws, line)) return 0;
    stringstream ss(line);
    vector<long long> arr;
    long long num, sum = 0;
    while (ss >> num) {
        arr.push_back(num);
        sum += num;
    }
    cout << "Count: " << arr.size() << ", Sum: " << sum << "\\n";
    return 0;
}`
    },
    "io-2": {
      title: "Comma-Separated Integer Array Parsing (How to take Input.pdf, pp. 2–3)",
      prompt: "Read a single line containing comma-separated integers (e.g., 12,4,7,9,2,23,25), handle optional spaces around commas, and load them into a std::vector<int>.",
      sampleRawInput: "12, 4, 7, 9, 2, 23, 25",
      expectedOutput: "Parsed 7 elements. Min: 2, Max: 25",
      snippet: `#include <iostream>
#include <sstream>
#include <string>
#include <vector>
#include <algorithm>
using namespace std;

int main() {
    string line;
    getline(cin >> ws, line);
    stringstream ss(line);
    string token;
    vector<int> arr;
    while (getline(ss, token, ',')) {
        if (!token.empty()) arr.push_back(stoi(token));
    }
    if (!arr.empty()) {
        auto mm = minmax_element(arr.begin(), arr.end());
        cout << "Parsed " << arr.size() << " elements. Min: " << *mm.first << ", Max: " << *mm.second << "\\n";
    }
    return 0;
}`
    },
    "io-3": {
      title: "Bracketed Array Input [1, 2, 3, 4] (How to take Input.pdf, pp. 3–5)",
      prompt: "Parse an array supplied in square-bracket JSON-like format such as [5, 6, 7, 1, 2, 3, 4] by stripping '[' and ']' before tokenizing on commas.",
      sampleRawInput: "[5, 6, 7, 1, 2, 3, 4]",
      expectedOutput: "5 6 7 1 2 3 4",
      snippet: `#include <iostream>
#include <sstream>
#include <string>
#include <vector>
#include <algorithm>
using namespace std;

int main() {
    string line;
    getline(cin >> ws, line);
    line.erase(remove(line.begin(), line.end(), '['), line.end());
    line.erase(remove(line.begin(), line.end(), ']'), line.end());
    stringstream ss(line);
    string token;
    vector<int> arr;
    while (getline(ss, token, ',')) {
        token.erase(remove_if(token.begin(), token.end(), ::isspace), token.end());
        if (!token.empty()) arr.push_back(stoi(token));
    }
    for (size_t i = 0; i < arr.size(); ++i) {
        cout << arr[i] << (i + 1 < arr.size() ? " " : "");
    }
    return 0;
}`
    },
    "io-4": {
      title: "Mixed cin >> T Followed by getline(cin, s) (How to take Input.pdf, pp. 5–7 & String PDF p. 1)",
      prompt: "Read integer T (number of test cases), consume the leftover newline safely before reading full multi-word sentences with spaces on each line.",
      sampleRawInput: "2\nTCS NQT Coding 2027\nHello   World",
      expectedOutput: "Line 1 length: 19 | Line 2 length: 13",
      snippet: `#include <iostream>
#include <string>
using namespace std;

int main() {
    int T;
    if (!(cin >> T)) return 0;
    cin.ignore(); // Crucial: consume leftover newline after cin >> T
    for (int t = 1; t <= T; ++t) {
        string s;
        getline(cin, s);
        cout << "Line " << t << " length: " << s.size() << "\\n";
    }
    return 0;
}`
    },
    "io-5": {
      title: "Fixed Decimal Places Formatting (How to take Input.pdf, pp. 7–8)",
      prompt: "Read a floating-point value (double) and print it rounded to exactly 3 decimal places using <iomanip> fixed and setprecision(3).",
      sampleRawInput: "12.34567",
      expectedOutput: "12.346",
      snippet: `#include <iostream>
#include <iomanip>
using namespace std;

int main() {
    double num;
    if (cin >> num) {
        cout << fixed << setprecision(3) << num << "\\n";
    }
    return 0;
}`
    },
    "io-6": {
      title: "2D Matrix Supplied as Flattened Comma String (How to take Input.pdf, pp. 8–11)",
      prompt: "Given rows = 3, cols = 2, and a comma-separated string \"1, 2, 3, 4, 5, 6\", reconstruct the 2D vector<vector<int>> matrix row-by-row.",
      sampleRawInput: "3 2\n1, 2, 3, 4, 5, 6",
      expectedOutput: "Row 0: 1 2 | Row 1: 3 4 | Row 2: 5 6",
      snippet: `#include <iostream>
#include <sstream>
#include <vector>
#include <string>
#include <algorithm>
using namespace std;

int main() {
    int rows, cols;
    if (!(cin >> rows >> cols)) return 0;
    string input;
    getline(cin >> ws, input);
    input.erase(remove_if(input.begin(), input.end(), ::isspace), input.end());
    stringstream ss(input);
    string token;
    vector<int> nums;
    while (getline(ss, token, ',')) {
        if (!token.empty()) nums.push_back(stoi(token));
    }
    vector<vector<int>> matrix(rows, vector<int>(cols));
    int k = 0;
    for (int i = 0; i < rows; ++i) {
        for (int j = 0; j < cols; ++j) {
            if (k < (int)nums.size()) matrix[i][j] = nums[k++];
        }
    }
    for (int i = 0; i < rows; ++i) {
        for (int j = 0; j < cols; ++j) cout << matrix[i][j] << " ";
        cout << "\\n";
    }
    return 0;
}`
    }
  },

  /* Optional Sample PDF-Grounded 5-Question Pack (so user can test the UI or inspect authentic PDF problems immediately) */
  demoFiveProblems: [
    {
      title: "The Chrono-Locked Conveyor Belt (Sorted Rotation Validation)",
      difficulty: "Easy-Medium",
      statement: "In the subterranean vaults of Neo-Aethelgard, the Timekeepers maintain a circular conveyor belt holding energy crystals. Originally, the crystals were arranged in non-decreasing order of power levels. During a temporal surge, the belt rotated by an unknown number of positions (possibly zero). Duplicate crystal values may exist. Given the current array of crystal values in bracketed comma-separated format, determine whether it represents a valid rotation of a non-decreasing sorted array.",
      inputFormat: "A single line containing integers enclosed in square brackets and separated by commas, e.g., [5, 6, 7, 1, 2, 3, 4].",
      outputFormat: "Print true if the array is a valid rotation of a non-decreasing sorted array, otherwise print false.",
      constraints: "1 <= nums.length <= 10^5, -10^9 <= nums[i] <= 10^9",
      sampleInput: "[5, 6, 7, 1, 2, 3, 4]",
      sampleOutput: "true",
      explanation: "The original sorted array [1, 2, 3, 4, 5, 6, 7] rotated 3 positions to the right yields [5, 6, 7, 1, 2, 3, 4]. There is at most one circular drop where nums[i] > nums[(i+1)%n].",
      edgeCases: [
        "Already sorted array [1, 2, 3, 4] (0 drops -> true)",
        "Array with duplicate elements at wrap boundary [2, 2, 2, 3, 1, 2] (1 circular drop -> true)",
        "Single element array [42] (-> true)",
        "Strictly decreasing array [4, 3, 2, 1] (more than 1 drop -> false)"
      ],
      hint: "Count how many indices i (from 0 to n-1) satisfy nums[i] > nums[(i + 1) % n]. An array is a valid rotation of a non-decreasing array if and only if this circular drop count is at most 1.",
      solution: `#include <iostream>
#include <vector>
#include <string>
#include <sstream>
#include <algorithm>
using namespace std;

int main() {
    string line;
    if (!getline(cin >> ws, line)) return 0;
    line.erase(remove(line.begin(), line.end(), '['), line.end());
    line.erase(remove(line.begin(), line.end(), ']'), line.end());
    stringstream ss(line);
    string token;
    vector<long long> nums;
    while (getline(ss, token, ',')) {
        token.erase(remove_if(token.begin(), token.end(), ::isspace), token.end());
        if (!token.empty()) nums.push_back(stoll(token));
    }
    int n = (int)nums.size();
    int drops = 0;
    for (int i = 0; i < n; ++i) {
        if (nums[i] > nums[(i + 1) % n]) {
            drops++;
        }
    }
    cout << (drops <= 1 ? "true" : "false") << "\\n";
    return 0;
}`,
      timeComplexity: "O(N)",
      spaceComplexity: "O(N) to store parsed input (O(1) auxiliary check)",
      sourceReference: "Array Easy Medium.pdf — Question 1, Page 1 & How to take Input.pdf — Lesson 3, Pages 3–5"
    },
    {
      title: "The Rat Colony Survival Simulation",
      difficulty: "Easy-Medium",
      statement: "A bio-dome logistics computer monitors r rats located in Sector 7. Each rat consumes exactly unit packets of grain to survive the winter cycle. An array arr of size n represents the grain packets stored in n sequential silos numbered 1 to n. The rats enter Silo 1 and move sequentially to Silo 2, Silo 3, and so on until their combined grain requirement (r * unit) is satisfied. Compute the minimum number of silos required. If the array is empty (n == 0), output -1. If the total grain across all n silos is less than r * unit, output 0.",
      inputFormat: "First line: two space-separated integers r and unit.\nSecond line: integer n.\nThird line: n space-separated integers representing arr.",
      outputFormat: "Single integer: minimum number of houses/silos needed, 0 if insufficient total food, or -1 if n <= 0.",
      constraints: "0 <= r <= 10^5, 1 <= unit <= 10^4, 0 <= n <= 10^5, 0 <= arr[i] <= 10^5",
      sampleInput: "7 2\n8\n2 8 3 5 7 4 1 2",
      sampleOutput: "4",
      explanation: "Total food required = 7 * 2 = 14 units. Cumulative food from first 4 silos = 2 + 8 + 3 + 5 = 18 >= 14. Thus 4 silos are sufficient.",
      edgeCases: [
        "n = 0 (empty array -> output -1)",
        "r = 0 (0 rats require 0 food -> output 0)",
        "Total food across all silos < r * unit (output 0)",
        "Large r * unit requiring 64-bit long long to avoid overflow"
      ],
      hint: "Use long long for requiredFood = (long long)r * unit. Accumulate arr[i] from index 0 and stop as soon as accumulated >= requiredFood.",
      solution: `#include <iostream>
#include <vector>
using namespace std;

int main() {
    long long r, unit;
    if (!(cin >> r >> unit)) return 0;
    int n;
    if (!(cin >> n) || n <= 0) {
        cout << -1 << "\\n";
        return 0;
    }
    vector<long long> arr(n);
    for (int i = 0; i < n; ++i) cin >> arr[i];

    long long required = r * unit;
    if (required == 0) {
        cout << 0 << "\\n";
        return 0;
    }
    long long currentSum = 0;
    for (int i = 0; i < n; ++i) {
        currentSum += arr[i];
        if (currentSum >= required) {
            cout << (i + 1) << "\\n";
            return 0;
        }
    }
    cout << 0 << "\\n";
    return 0;
}`,
      timeComplexity: "O(N)",
      spaceComplexity: "O(N)",
      sourceReference: "Array Easy Medium.pdf — Question 13, Page 8"
    },
    {
      title: "The Forbidden Digit Surveillance Operation (Bastin's String)",
      difficulty: "Medium",
      statement: "Agent Bastin intercepts encrypted dispatches containing words and embedded numeric codes separated by spaces. However, any numeric token that contains the forbidden digit '9' anywhere within it is a decoy planted by counter-intelligence and must be ignored. From a single line of text, extract all space-separated numeric tokens that do NOT contain the digit '9' and output the largest such number. If no valid number exists in the dispatch, output -1.",
      inputFormat: "First line: integer T (number of test cases).\nNext T lines: each line contains a sentence with words and numbers separated by spaces.",
      outputFormat: "For each test case, print the largest number that does not contain the digit '9', or -1 if none exists, on a new line.",
      constraints: "1 <= T <= 100, 1 <= |S| <= 10^4, numeric values fit in 64-bit signed integer (long long).",
      sampleInput: "2\nThis is alpha 5057 and 97\nhello 99 world 19",
      sampleOutput: "5057\n-1",
      explanation: "In test case 1, numeric tokens are 5057 and 97. 97 contains '9', so 5057 is chosen. In test case 2, both 99 and 19 contain '9', so output is -1.",
      edgeCases: [
        "Leftover newline after cin >> T (must call cin.ignore() before getline)",
        "Numbers exceeding 32-bit int range (must use stoll / long long)",
        "No numbers in the string at all (output -1)",
        "Number 0 present when all other numbers contain 9 (output 0)"
      ],
      hint: "After cin >> T, call cin.ignore(). Tokenize each line with stringstream. Check if all characters of a token are digits (all_of(::isdigit)) and token.find('9') == string::npos, then compare using stoll(token).",
      solution: `#include <iostream>
#include <string>
#include <sstream>
#include <algorithm>
#include <cctype>
using namespace std;

int main() {
    int T;
    if (!(cin >> T)) return 0;
    cin.ignore();
    while (T--) {
        string s;
        getline(cin, s);
        stringstream ss(s);
        string word;
        long long maxVal = -1;
        while (ss >> word) {
            bool isNum = !word.empty() && all_of(word.begin(), word.end(), [](unsigned char c){ return isdigit(c); });
            if (isNum && word.find('9') == string::npos) {
                long long val = stoll(word);
                if (val > maxVal) maxVal = val;
            }
        }
        cout << maxVal << "\\n";
    }
    return 0;
}`,
      timeComplexity: "O(N) per testcase where N is string length",
      spaceComplexity: "O(N)",
      sourceReference: "String Easy Medium Solution.pdf — Question 4, Pages 9–13 & Previous Year Coding Questions.pdf — TCS Q31, Page 286"
    },
    {
      title: "The Grand Central Railway Crisis (Minimum Platforms)",
      difficulty: "Medium",
      statement: "At the Grand Central Railway Terminal, multiple high-speed freight and passenger trains arrive and depart throughout the 24-hour cycle. Given two arrays arr[] and dep[] of size n representing the arrival and departure times of n trains in 24-hour HHMM integer format (e.g., 900 for 09:00 AM, 1800 for 06:00 PM), compute the minimum number of platforms required at the station so that no train ever has to wait for a platform. If a train arrives at the exact same minute another train departs (arr[i] == dep[j]), they require separate platforms simultaneously.",
      inputFormat: "First line: integer n.\nSecond line: n space-separated integers for arrival times.\nThird line: n space-separated integers for departure times.",
      outputFormat: "Single integer representing the minimum number of platforms needed.",
      constraints: "1 <= n <= 10^5, 0000 <= arr[i] <= dep[i] <= 2359",
      sampleInput: "6\n900 940 950 1100 1500 1800\n910 1200 1120 1130 1900 2000",
      sampleOutput: "3",
      explanation: "Between 950 and 1120, three trains (arriving at 940, 950, and 1100) are simultaneously at the station before the 1120 departure.",
      edgeCases: [
        "Train arriving at exact same timestamp as another departs (arr[i] <= dep[j] increments platform count)",
        "All trains have non-overlapping intervals (output 1)",
        "All trains arrive at the exact same time (output n)"
      ],
      hint: "Sort both arr[] and dep[] independently in O(n log n). Use two pointers i (for arrivals) and j (for departures). When arr[i] <= dep[j], increment platforms and i; otherwise decrement platforms and increment j.",
      solution: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main() {
    int n;
    if (!(cin >> n) || n <= 0) return 0;
    vector<int> arr(n), dep(n);
    for (int i = 0; i < n; ++i) cin >> arr[i];
    for (int i = 0; i < n; ++i) cin >> dep[i];

    sort(arr.begin(), arr.end());
    sort(dep.begin(), dep.end());

    int platforms = 1, maxPlatforms = 1;
    int i = 1, j = 0;
    while (i < n && j < n) {
        if (arr[i] <= dep[j]) {
            platforms++;
            i++;
        } else {
            platforms--;
            j++;
        }
        maxPlatforms = max(maxPlatforms, platforms);
    }
    cout << maxPlatforms << "\\n";
    return 0;
}`,
      timeComplexity: "O(N log N)",
      spaceComplexity: "O(1) auxiliary beyond input vectors",
      sourceReference: "Array Medium.pdf — Question 11, Pages 9–10"
    },
    {
      title: "Store Sales Revenue Analytics (CSV Tuple Stream)",
      difficulty: "Medium-Hard",
      statement: "A retail store chain records daily transactions as a single line of comma-separated records or N lines of (ItemName, Quantity, UnitPrice). Write a C++ program that reads N transaction records, calculates the total revenue generated by each item (Quantity * UnitPrice), identifies the highest-revenue item (breaking ties by first appearance), and outputs the Most Sold/Highest Revenue Item Name, Total Store Revenue, and Average Revenue per transaction formatted to exactly 2 decimal places.",
      inputFormat: "First line: integer N (number of transactions).\nNext N lines: comma-separated values: ItemName, Quantity, UnitPrice (e.g., Apple, 10, 2.50).",
      outputFormat: "Line 1: Highest Revenue Item: <Name>\nLine 2: Total Revenue: <value to 2 decimal places>\nLine 3: Average Revenue: <value to 2 decimal places>",
      constraints: "1 <= N <= 10^4, 1 <= Quantity <= 10^5, 0.0 <= UnitPrice <= 10^5",
      sampleInput: "3\nLaptop, 2, 500.00\nMouse, 10, 25.50\nKeyboard, 5, 45.00",
      sampleOutput: "Highest Revenue Item: Laptop\nTotal Revenue: 1480.00\nAverage Revenue: 493.33",
      explanation: "Laptop revenue = 1000.00, Mouse = 255.00, Keyboard = 225.00. Total = 1480.00, Average = 1480.00 / 3 = 493.33.",
      edgeCases: [
        "Spaces after commas in CSV lines (e.g., 'Laptop, 2, 500.00')",
        "Multiple transactions for the same item name (must accumulate revenue per item)",
        "Exact 2-decimal output formatting using fixed and setprecision(2)"
      ],
      hint: "Use getline(cin >> ws, line) for each of the N lines, split by ',' using stringstream, trim spaces from the item name, and accumulate revenue in an unordered_map<string, double> while tracking insertion order.",
      solution: `#include <iostream>
#include <string>
#include <sstream>
#include <vector>
#include <unordered_map>
#include <iomanip>
#include <algorithm>
using namespace std;

string trimStr(const string& s) {
    size_t first = s.find_first_not_of(" \\t\\r\\n");
    if (first == string::npos) return "";
    size_t last = s.find_last_not_of(" \\t\\r\\n");
    return s.substr(first, last - first + 1);
}

int main() {
    int n;
    if (!(cin >> n) || n <= 0) return 0;
    unordered_map<string, double> itemRev;
    vector<string> order;
    double totalRevenue = 0.0;

    for (int i = 0; i < n; ++i) {
        string line;
        getline(cin >> ws, line);
        stringstream ss(line);
        string namePart, qtyPart, pricePart;
        getline(ss, namePart, ',');
        getline(ss, qtyPart, ',');
        getline(ss, pricePart, ',');

        string name = trimStr(namePart);
        long long qty = stoll(trimStr(qtyPart));
        double price = stod(trimStr(pricePart));
        double rev = qty * price;

        if (itemRev.find(name) == itemRev.end()) order.push_back(name);
        itemRev[name] += rev;
        totalRevenue += rev;
    }

    string bestItem = order[0];
    for (const string& item : order) {
        if (itemRev[item] > itemRev[bestItem]) {
            bestItem = item;
        }
    }

    cout << "Highest Revenue Item: " << bestItem << "\\n";
    cout << fixed << setprecision(2);
    cout << "Total Revenue: " << totalRevenue << "\\n";
    cout << "Average Revenue: " << (totalRevenue / n) << "\\n";
    return 0;
}`,
      timeComplexity: "O(N)",
      spaceComplexity: "O(U) where U is unique items",
      sourceReference: "Previous Year Coding Questions.pdf — TCS Q13, Pages 242–245 & How to take Input.pdf — Lessons 2 & 5"
    }
  ],

  /* ==========================================================================
     THEORY MODULE 1: INPUT / OUTPUT MASTERY (How to take Input.pdf, pp. 1–11)
     ========================================================================== */
  inputOutputMastery: {
    sourceFile: "How to take Input.pdf",
    sourcePages: "Pages 1–11 (Complete PDF Extraction)",
    lessons: [
      {
        id: "io-lesson-1",
        number: 1,
        title: "Space-Separated Integer Arrays (Dynamic Line Without Size N)",
        pdfPage: "How to take Input.pdf — Pages 1–2",
        whatInputLooksLike: "1 2 3 4 5",
        whyCinFails: "In many TCS NQT problems, the number of elements N is NOT given on a separate first line. Using a standard `while (cin >> x)` loop in an interactive or multi-line input will block waiting for EOF or accidentally consume integers belonging to the next input variable (such as target K on the next line).",
        correctApproach: "Read the entire line into a `std::string` using `getline(cin >> ws, line)` and wrap it in a `std::stringstream ss(line)`. Then extract integers with `while (ss >> num)` so parsing stops cleanly at the end of that line.",
        codeExample: `#include <iostream>
#include <sstream>
#include <vector>
#include <string>
using namespace std;

int main() {
    string line;
    getline(cin >> ws, line); // Reads full non-empty line

    stringstream ss(line);
    vector<int> arr;
    int num;
    while (ss >> num) { // Extracts each space-separated integer
        arr.push_back(num);
    }

    for (int x : arr) {
        cout << x << " ";
    }
    return 0;
}`,
        expectedOutput: "1 2 3 4 5 ",
        commonMistakes: [
          "Using `cin >> line` instead of `getline(cin, line)`, which stops at the very first space.",
          "Forgetting `#include <sstream>` which causes a compilation error on `stringstream`.",
          "Not handling a leftover `\\n` in the input buffer when `cin >> T` precedes `getline(cin, line)`."
        ],
        difficultVariations: [
          "Multiple consecutive spaces between numbers (`10    20   -30`) — `ss >> num` skips all whitespace automatically.",
          "64-bit integers (`1000000000000`) — declare `long long num;` and `vector<long long> arr;`."
        ]
      },
      {
        id: "io-lesson-2",
        number: 2,
        title: "Comma-Separated Arrays (CSV Integer Stream)",
        pdfPage: "How to take Input.pdf — Pages 2–3",
        whatInputLooksLike: "1,2,3,4",
        whyCinFails: "Ordinary `cin >> num` reads the first integer `1` and stops immediately at the comma `,`. On the next iteration, `cin >> num` attempts to parse `,` as an integer, fails, sets `cin.failbit`, and corrupts all subsequent reads.",
        correctApproach: "Read the full line using `getline(cin >> ws, line)`, initialize `stringstream ss(line)`, and use `while (getline(ss, token, ','))` to split by the comma delimiter, converting each token with `stoi(token)` or `stoll(token)`.",
        codeExample: `#include <iostream>
#include <sstream>
#include <vector>
#include <string>
using namespace std;

int main() {
    string line;
    getline(cin >> ws, line);

    stringstream ss(line);
    vector<int> arr;
    string token;

    while (getline(ss, token, ',')) {
        if (!token.empty()) {
            arr.push_back(stoi(token));
        }
    }

    for (int x : arr) {
        cout << x << " ";
    }
    return 0;
}`,
        expectedOutput: "1 2 3 4 ",
        commonMistakes: [
          "Passing `\" , \"` (a string) instead of `','` (a single `char`) as the third argument to `getline(ss, token, ',')`.",
          "Calling `stoi(token)` on an empty token when the input has a trailing comma like `1,2,3,` (causes `std::invalid_argument`). Always check `!token.empty()`."
        ],
        difficultVariations: [
          "Spaces after commas (`1, 2, -3, 4`) — `stoi()` automatically ignores leading whitespace, or strip spaces first.",
          "Floating-point CSV (`1.5, 2.75, 3.0`) — use `stod(token)` instead of `stoi(token)`."
        ]
      },
      {
        id: "io-lesson-3",
        number: 3,
        title: "Arrays Provided Inside Square Brackets [1, 2, 3, 4]",
        pdfPage: "How to take Input.pdf — Pages 3–5",
        whatInputLooksLike: "[1, 2, 3, 4]",
        whyCinFails: "The opening bracket `[` is not a digit, so `cin >> num` fails immediately on character 0. Even if you split by commas, the first token is `\"[1\"` and the last token is `\" 4]\"`, which breaks naïve parsing.",
        correctApproach: "Read the line with `getline(cin >> ws, line)`. Strip `[` and `]` using the erase-remove idiom (`line.erase(remove(line.begin(), line.end(), '['), line.end())`), then split on `','` with `stringstream` and strip whitespace from each token before calling `stoi(token)`.",
        codeExample: `#include <iostream>
#include <sstream>
#include <vector>
#include <string>
#include <algorithm>
using namespace std;

int main() {
    string line;
    getline(cin >> ws, line);

    // Remove '[' and ']'
    line.erase(remove(line.begin(), line.end(), '['), line.end());
    line.erase(remove(line.begin(), line.end(), ']'), line.end());

    stringstream ss(line);
    vector<int> arr;
    string token;

    while (getline(ss, token, ',')) {
        // Remove any spaces around the number
        token.erase(remove_if(token.begin(), token.end(), ::isspace), token.end());
        if (!token.empty()) {
            arr.push_back(stoi(token));
        }
    }

    for (int x : arr) {
        cout << x << " ";
    }
    return 0;
}`,
        expectedOutput: "1 2 3 4 ",
        commonMistakes: [
          "Calling `remove(line.begin(), line.end(), '[')` without `line.erase(...)` — `std::remove` only shifts elements and does not shrink the string.",
          "Crashing on an empty bracket array `[]` when `stoi(\"\")` is called without checking `if (!token.empty())`."
        ],
        difficultVariations: [
          "Curly braces `{1, 2, 3}` or parentheses `(1, 2, 3)` — apply the exact same erase-remove pattern for `'{'`, `'}'`, `'('`, `')'`.",
          "Space-separated inside brackets `[1 2 3 4]` — after stripping brackets, use `while (ss >> num)`."
        ]
      },
      {
        id: "io-lesson-4",
        number: 4,
        title: "Space-Separated Strings (Tokenizing Words from a Line)",
        pdfPage: "How to take Input.pdf — Pages 5–7",
        whatInputLooksLike: "apple banana cherry mango",
        whyCinFails: "Using `while (cin >> word)` reads across line breaks until EOF, making it impossible to distinguish words on Line 1 from words on Line 2 in multi-line test cases.",
        correctApproach: "Read the single line via `getline(cin >> ws, line)`, create `stringstream ss(line)`, and extract each word via `while (ss >> word) words.push_back(word);`.",
        codeExample: `#include <iostream>
#include <sstream>
#include <vector>
#include <string>
using namespace std;

int main() {
    string line;
    getline(cin >> ws, line);

    stringstream ss(line);
    vector<string> words;
    string word;

    while (ss >> word) {
        words.push_back(word);
    }

    for (const string& w : words) {
        cout << w << "\\n";
    }
    return 0;
}`,
        expectedOutput: "apple\nbanana\ncherry\nmango",
        commonMistakes: [
          "Using `getline(ss, word, ' ')` when multiple spaces exist between words — that produces empty `\"\"` tokens, whereas `ss >> word` cleanly skips multiple spaces.",
          "Forgetting `cin.ignore()` after reading an integer `N` before `getline(cin, line)`."
        ],
        difficultVariations: [
          "Comma-separated words (`apple, banana, cherry`) — use `getline(ss, word, ',')` and trim leading/trailing spaces.",
          "Sorting unique words ascending and descending (see `Previous Year Coding Questions.pdf` TCS Q23, p. 266)."
        ]
      },
      {
        id: "io-lesson-5",
        number: 5,
        title: "Decimal Input & Exact Output Formatting (setprecision)",
        pdfPage: "How to take Input.pdf — Pages 7–8",
        whatInputLooksLike: "12.34567",
        whyCinFails: "By default, `cout << num` prints up to 6 total significant digits (not decimal places) and drops trailing zeros (e.g., `1480.00` prints as `1480`), causing strict automated judges to reject the output.",
        correctApproach: "Include `<iomanip>` and apply `cout << fixed << setprecision(k) << num;` where `k` is the required number of digits after the decimal point.",
        codeExample: `#include <iostream>
#include <iomanip>
using namespace std;

int main() {
    double num;
    if (cin >> num) {
        cout << fixed << setprecision(3) << num << "\\n";
    }
    return 0;
}`,
        expectedOutput: "12.346",
        commonMistakes: [
          "Using `setprecision(3)` WITHOUT `fixed` — `cout << setprecision(3) << 12.34567` outputs `12.3` (3 significant figures total) instead of `12.346`!",
          "Using `float` instead of `double`, which suffers from 32-bit precision drift on large financial sums."
        ],
        difficultVariations: [
          "Currency prefix required (`$12.35`, TCS Q9 p. 233) — `cout << \"$\" << fixed << setprecision(2) << cost;`.",
          "Rounding an arbitrary-length 100-digit numeric string (String PDF Q9, p. 25) — must be handled as a `std::string`, not `double`."
        ]
      },
      {
        id: "io-lesson-6",
        number: 6,
        title: "2D Arrays Supplied in Flattened String Format",
        pdfPage: "How to take Input.pdf — Pages 8–11",
        whatInputLooksLike: "rows = 3, cols = 2\n\"1, 2, 3, 4, 5, 6\"",
        whyCinFails: "TCS NQT sometimes supplies matrix dimensions followed by a single comma-separated string representing all `rows * cols` elements flattened in row-major order. Standard nested `cin >> matrix[i][j]` fails on the commas.",
        correctApproach: "Read `rows` and `cols`, read the comma-separated line with `getline(cin >> ws, input)`, strip whitespace, split by `','` into a 1D vector `nums`, and populate `matrix[i][j] = nums[k++]` in nested loops.",
        codeExample: `#include <iostream>
#include <sstream>
#include <vector>
#include <string>
#include <algorithm>
using namespace std;

int main() {
    int rows = 3, cols = 2;
    string input = "1, 2, 3, 4, 5, 6";

    // Remove spaces
    input.erase(remove_if(input.begin(), input.end(), ::isspace), input.end());

    stringstream ss(input);
    string token;
    vector<int> nums;
    while (getline(ss, token, ',')) {
        if (!token.empty()) nums.push_back(stoi(token));
    }

    vector<vector<int>> matrix(rows, vector<int>(cols));
    int k = 0;
    for (int i = 0; i < rows; ++i) {
        for (int j = 0; j < cols; ++j) {
            matrix[i][j] = nums[k++];
        }
    }

    for (const auto& row : matrix) {
        for (int val : row) cout << val << " ";
        cout << "\\n";
    }
    return 0;
}`,
        expectedOutput: "1 2 \n3 4 \n5 6 ",
        commonMistakes: [
          "Swapping `rows` and `cols` when allocating `vector<vector<int>> matrix(rows, vector<int>(cols))`.",
          "Not checking `k < nums.size()` if the input string is shorter than `rows * cols`."
        ],
        difficultVariations: [
          "Nested bracketed 2D matrix `[[1,2],[3,4],[5,6]]` — strip all `'['` and `']'` characters first, then tokenize by `','` and fill `rows x cols`."
        ]
      }
    ],

    /* 15 Strict Judge Simulation Scenarios */
    strictJudgeScenarios: [
      {
        id: "sj-1",
        number: 1,
        title: "cin vs getline Buffer Collision",
        badge: "PDF-GROUNDED: How to take Input.pdf & String Easy Medium Solution.pdf (p. 1)",
        trap: "When `cin >> T;` reads an integer, it stops at the newline `'\\n'` and leaves `'\\n'` sitting in `stdin`. An immediate `getline(cin, s)` reads that empty `'\\n'` and returns an empty string `\"\"`.",
        fix: "Call `cin.ignore();` (or `cin.ignore(numeric_limits<streamsize>::max(), '\\n');`) immediately after `cin >> T;`, or use `getline(cin >> ws, s)` when leading spaces are not significant.",
        code: `int T;
cin >> T;
cin.ignore(); // Consumes the leftover newline after T
for (int i = 0; i < T; ++i) {
    string s;
    getline(cin, s); // Safely reads full line including spaces
}`
      },
      {
        id: "sj-2",
        number: 2,
        title: "Leftover Newline Across Multiple Mixed Reads",
        badge: "PDF-GROUNDED: Previous Year Coding Questions.pdf (TCS Q19, p. 256)",
        trap: "Alternating between `cin >> age` and `getline(cin, name)` inside a loop causes every second iteration to read an empty line.",
        fix: "Use `getline(cin >> ws, name)` whenever reading a non-empty line after formatted `>>` extraction.",
        code: `for (int i = 0; i < n; ++i) {
    string name;
    int age;
    getline(cin >> ws, name);
    cin >> age;
}`
      },
      {
        id: "sj-3",
        number: 3,
        title: "Multiple Consecutive Spaces Between Tokens",
        badge: "PDF-GROUNDED: How to take Input.pdf (pp. 1–2, 5–7)",
        trap: "Splitting a string manually with `find(' ')` or `getline(ss, token, ' ')` produces empty tokens `\"\"` when two or more consecutive spaces exist (`\"10   20\"`).",
        fix: "Use `stringstream ss(line); while (ss >> token)` which automatically skips any run of consecutive whitespace.",
        code: `stringstream ss(line);
string word;
while (ss >> word) { /* skips multiple spaces safely */ }`
      },
      {
        id: "sj-4",
        number: 4,
        title: "Leading and Trailing Spaces in Line Input",
        badge: "PDF-GROUNDED: How to take Input.pdf (pp. 3–5)",
        trap: "Judge test cases often pad input lines with trailing spaces or Windows `'\\r\\n'` line endings, breaking exact string comparisons or `stoi()` slices.",
        fix: "Write a clean `trim()` helper using `find_first_not_of(\" \\t\\r\\n\")` and `find_last_not_of(\" \\t\\r\\n\")`.",
        code: `string trim(const string& s) {
    size_t a = s.find_first_not_of(" \\t\\r\\n");
    if (a == string::npos) return "";
    size_t b = s.find_last_not_of(" \\t\\r\\n");
    return s.substr(a, b - a + 1);
}`
      },
      {
        id: "sj-5",
        number: 5,
        title: "Blank / Empty Lines Between Test Cases",
        badge: "GENERATED TEST VARIATION (Based on PDF getline patterns)",
        trap: "Some hidden judge inputs insert blank lines between test cases. A raw `getline(cin, line)` treats the blank line as an empty dataset.",
        fix: "Skip blank lines in a loop (`while (getline(cin, line) && trim(line).empty()) {}`) unless an empty string is an explicit valid test case.",
        code: `string line;
while (getline(cin, line)) {
    if (line.find_first_not_of(" \\t\\r\\n") == string::npos) continue;
    // Process non-empty line
}`
      },
      {
        id: "sj-6",
        number: 6,
        title: "Multiple Test Cases (T) vs Single Test Case Until EOF",
        badge: "PDF-GROUNDED: String Easy Medium Solution.pdf (pp. 1–36)",
        trap: "Assuming a single test case when the problem specification begins with `T` test cases (or vice versa) shifts all outputs by one line.",
        fix: "Always verify whether Line 1 is `T` (test cases) or `N` (array size). Wrap testcase logic in a clean `solve()` function without global state leaks.",
        code: `void solve() {
    // Declare all containers locally so no state leaks across test cases
}
int main() {
    int T;
    if (cin >> T) { while (T--) solve(); }
    return 0;
}`
      },
      {
        id: "sj-7",
        number: 7,
        title: "Reading a Complete Line Preserving Internal Spaces",
        badge: "PDF-GROUNDED: String Easy Medium Solution.pdf (Q1 & Q2, pp. 1–6)",
        trap: "In String Reversal (`Q1`) or Alphanumeric Palindrome (`Q2`), `cin >> s` drops everything after the first space (`\"A man, a plan\"` becomes `\"A\"`).",
        fix: "Always use `getline(cin, s)` when strings can contain spaces or punctuation.",
        code: `string s;
getline(cin, s);
reverse(s.begin(), s.end());
cout << s << "\\n";`
      },
      {
        id: "sj-8",
        number: 8,
        title: "Mixed Numerical and String Input on the Same Line",
        badge: "PDF-GROUNDED: Previous Year Coding Questions.pdf (TCS Q6 p. 225, Q13 p. 242)",
        trap: "Input lines like `\"Alice 85 Bob 92 Charlie 78\"` or `\"Laptop, 2, 500.00\"` mix strings, integers, and doubles on one line.",
        fix: "Read the line with `getline`, then extract typed fields from `stringstream ss(line)` (`ss >> name >> score` for space-separated, or `getline(ss, field, ',')` for CSV).",
        code: `stringstream ss(line);
string name; int marks;
while (ss >> name >> marks) {
    students.push_back({marks, name});
}`
      },
      {
        id: "sj-9",
        number: 9,
        title: "Comma-Separated Values with Optional Spaces & Negative Signs",
        badge: "PDF-GROUNDED: How to take Input.pdf (pp. 2–3) & Array Medium.pdf (Q3, p. 2)",
        trap: "Inputs like `\"-1, 0, 1, 2, -1, -4\"` combine negative signs, commas, and spaces. Naïve character-by-character digit checks (`c - '0'`) ignore the `'-'` sign and multi-digit numbers.",
        fix: "Use `getline(ss, token, ',')` and `stoll(token)` which natively parses leading spaces, `'+'`/`'-'` signs, and multi-digit integers.",
        code: `while (getline(ss, token, ',')) {
    if (token.find_first_of("0123456789") != string::npos) {
        arr.push_back(stoll(token));
    }
}`
      },
      {
        id: "sj-10",
        number: 10,
        title: "Bracket-Based Arrays [a, b, c] and Empty []",
        badge: "PDF-GROUNDED: How to take Input.pdf (pp. 3–5) & Array Easy Medium.pdf (pp. 1–10)",
        trap: "If input is `[]` (empty array), stripping `[` and `]` leaves `\"\"`, and calling `stoi` without checking for digits throws `std::invalid_argument` (Runtime Error / SIGABRT on TCS judge).",
        fix: "After stripping `[` and `]`, check `token.find_first_of(\"0123456789\") != string::npos` before calling `stoll(token)`.",
        code: `line.erase(remove(line.begin(), line.end(), '['), line.end());
line.erase(remove(line.begin(), line.end(), ']'), line.end());
stringstream ss(line); string tok;
while (getline(ss, tok, ',')) {
    if (tok.find_first_of("0123456789") != string::npos) arr.push_back(stoll(tok));
}`
      },
      {
        id: "sj-11",
        number: 11,
        title: "2D Matrix Parsing (Flattened String vs Nested Brackets)",
        badge: "PDF-GROUNDED: How to take Input.pdf (pp. 8–11)",
        trap: "A 2D matrix may arrive as `rows cols` followed by `\"1, 2, 3, 4, 5, 6\"` or `[[1,2],[3,4],[5,6]]`. Hardcoding only `cin >> mat[i][j]` fails whenever commas or brackets are present.",
        fix: "Replace all `'['`, `']'`, and `','` with spaces `' '`, then read integers cleanly with `stringstream`!",
        code: `for (char& c : line) {
    if (c == '[' || c == ']' || c == ',') c = ' ';
}
stringstream ss(line);
for (int i = 0; i < rows; ++i)
    for (int j = 0; j < cols; ++j)
        ss >> matrix[i][j];`
      },
      {
        id: "sj-12",
        number: 12,
        title: "Negative Values in Modulo, Digit Extraction & Max Subarray",
        badge: "PDF-GROUNDED: TCS NQT Number Based Coding Questions.pdf (Q15, p. 24) & Previous Year Coding Questions.pdf (Q35, p. 294)",
        trap: "Initializing `maxVal = 0` fails when all array elements are negative (`[-8, -3, -5]`). Also, in C++, `-17 % 10` evaluates to `-7`.",
        fix: "Initialize `maxVal = LLONG_MIN` (from `<climits>`). For digit operations on signed numbers, record `bool neg = (n < 0); long long x = llabs(n);`.",
        code: `#include <climits>
long long maxVal = LLONG_MIN;
for (long long x : arr) maxVal = max(maxVal, x);`
      },
      {
        id: "sj-13",
        number: 13,
        title: "Large Numerical Values & 64-Bit Overflow (long long vs int)",
        badge: "PDF-GROUNDED: String Easy Medium Solution.pdf (Q4 p. 9, Q9 p. 25) & Number PDF (Q18 p. 30)",
        trap: "32-bit `int` overflows at `2,147,483,647` ($2 \\times 10^9$). Summing $10^5$ elements of size $10^5$, computing factorials $N! \\ge 13!$, or multiplying 3 employee efficiencies (`TCS Q16 p. 250`) overflows `int`.",
        fix: "Use `long long` (up to $\\approx 9.22 \\times 10^{18}$) for sums, products, factorials, and prefix sums. For 100-digit numbers (`String PDF Q5, Q9, Q11`), process directly as `std::string`.",
        code: `long long sum = 0;
for (long long x : arr) sum += x; // Prevents 32-bit signed overflow`
      },
      {
        id: "sj-14",
        number: 14,
        title: "Decimal Precision & Rounding Rules",
        badge: "PDF-GROUNDED: How to take Input.pdf (pp. 7–8) & TCS NQT Number Based Coding Questions.pdf (Q34, p. 60)",
        trap: "Printing floating-point answers without `fixed << setprecision(k)` causes scientific notation (`1.23e+06`) or wrong decimal places.",
        fix: "Always match the exact decimal places specified in the sample output (`setprecision(2)` or `setprecision(3)` with `fixed`).",
        code: `#include <iomanip>
cout << fixed << setprecision(2) << area << "\\n";`
      },
      {
        id: "sj-15",
        number: 15,
        title: "Zero Extra Output Messages & Strict Case/Bracket Matching",
        badge: "PDF-GROUNDED: All Uploaded TCS NQT PDFs",
        trap: "Printing interactive prompts like `cout << \"Enter N: \";` or printing `[1, 2, 3]` when the judge expects `1 2 3` (or `\"True\"` instead of `\"true\"`) guarantees Wrong Answer on automated judges.",
        fix: "Never print human prompts. Match the exact casing (`true` vs `True` vs `YES`), delimiter (`\" \"` vs `\",\"`), and bracket style of the Sample Output.",
        code: `// NEVER write: cout << "Enter size: ";
// Print ONLY the exact required output format:
for (size_t i = 0; i < ans.size(); ++i) {
    cout << ans[i] << (i + 1 < ans.size() ? " " : "\\n");
}`
      }
    ]
  },

  /* ==========================================================================
     THEORY MODULE 2: ARRAY THEORY (Array Easy Medium.pdf & Array Medium.pdf)
     ========================================================================== */
  arrayTheory: {
    sourceFile: "Array Easy Medium.pdf (pp. 1–10) & Array Medium.pdf (pp. 1–14)",
    sourceNote: "Extracted all 30 story-based array problems and problem-solving patterns from Array Easy Medium.pdf (15 problems) and Array Medium.pdf (15 problems), plus foundational array patterns from the 3 uploaded Excel sheets. (Note: Array Basic(6).pdf was not among the 10 attached files.)",
    patterns: [
      {
        title: "Pattern 1: Circular Array & Rotation Mechanics (O(N) Time, O(1) Space)",
        pdfRef: "Array Easy Medium.pdf — Q1 (p. 1) & Q8 (p. 5); Array Medium.pdf — Q5 (pp. 3–4)",
        summary: "Covers checking if an array is a rotated sorted array (counting circular drops `nums[i] > nums[(i+1)%n] <= 1`), rotating an array right by K steps in O(1) extra space using the 3-Reverse algorithm, and rotating an N x N matrix 90° clockwise via Transpose + Row Reverse.",
        problemsIncluded: [
          "Q1 (Easy-Med p. 1): The Chrono-Locked Conveyor Belt — Check if rotated non-decreasing array (`drops <= 1`).",
          "Q8 (Easy-Med p. 5): The Rotational Cipher Machine — Rotate right by `k %= n` using `reverse(all)`, `reverse(0..k-1)`, `reverse(k..n-1)`.",
          "Q5 (Medium pp. 3–4): The Rotational Image Reorientation Directive — 90° clockwise matrix rotation (`swap(mat[i][j], mat[j][i])` then `reverse(row)`)."
        ],
        code: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

// Right rotate array by k positions in O(N) time and O(1) auxiliary space
void rotateRight(vector<int>& nums, int k) {
    int n = (int)nums.size();
    if (n == 0) return;
    k %= n;
    reverse(nums.begin(), nums.end());
    reverse(nums.begin(), nums.begin() + k);
    reverse(nums.begin() + k, nums.end());
}

// Rotate N x N matrix 90 degrees clockwise in-place (Array Medium.pdf Q5, pp. 3-4)
void rotateMatrix90Clockwise(vector<vector<int>>& mat) {
    int n = (int)mat.size();
    for (int i = 0; i < n; ++i) {
        for (int j = i + 1; j < n; ++j) {
            swap(mat[i][j], mat[j][i]);
        }
    }
    for (int i = 0; i < n; ++i) {
        reverse(mat[i].begin(), mat[i].end());
    }
}`
      },
      {
        title: "Pattern 2: Two-Pointer In-Place Compaction & Dutch National Flag",
        pdfRef: "Array Easy Medium.pdf — Q2 (pp. 1–2), Q4 (p. 3), Q5 (pp. 3–4); Array Medium.pdf — Q3 (pp. 2–3)",
        summary: "Uses slow/fast pointers or 3-way partitioning (`low`, `mid`, `high`) to rearrange or deduplicate arrays in a single pass with O(1) auxiliary memory, and sorted two-pointer scanning for 3Sum triplets.",
        problemsIncluded: [
          "Q2 (Easy-Med pp. 1–2): The Genetic Archive Compression Protocol — In-place deduplication of sorted array returning count `k`.",
          "Q4 (Easy-Med p. 3): The Zero-Gravity Cargo Rebalancing — Move all `0`s to end preserving relative order of non-zero elements.",
          "Q5 (Easy-Med pp. 3–4): The Tri-Color Signal Sorting Mechanism — Sort `0, 1, 2` in one pass (Dutch National Flag).",
          "Q3 (Medium pp. 2–3): The Zero-Balance Triplet Discovery Problem — Find all unique triplets summing to `0` in O(N^2)."
        ],
        code: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

// Dutch National Flag: Sort 0s, 1s, and 2s in O(N) time, O(1) space (Array Easy Medium.pdf Q5, pp. 3-4)
void sortColors(vector<int>& nums) {
    int low = 0, mid = 0, high = (int)nums.size() - 1;
    while (mid <= high) {
        if (nums[mid] == 0) swap(nums[low++], nums[mid++]);
        else if (nums[mid] == 1) mid++;
        else swap(nums[mid], nums[high--]);
    }
}

// Move Zeros to End In-Place (Array Easy Medium.pdf Q4, p. 3)
void moveZeroes(vector<int>& nums) {
    int insertPos = 0;
    for (int x : nums) {
        if (x != 0) nums[insertPos++] = x;
    }
    while (insertPos < (int)nums.size()) nums[insertPos++] = 0;
}`
      },
      {
        title: "Pattern 3: Prefix/Suffix Running Extrema, Leaders & Rainwater Trapping",
        pdfRef: "Array Easy Medium.pdf — Q7 (p. 5), Q10 (pp. 6–7); Array Medium.pdf — Q2 (pp. 1–2), Q6 (pp. 4–5), Q9 (pp. 7–8)",
        summary: "Maintains running prefix maximums and/or suffix maximums/minimums to solve Leader detection, Prior Supremacy count, Equilibrium Sentinel, Stock Buy/Sell, and Rainwater Trapping in O(N) time.",
        problemsIncluded: [
          "Q7 (Easy-Med p. 5): The Mountain Watchtower Protocol — Find all leaders `>=` all elements to their right.",
          "Q10 (Easy-Med pp. 6–7): The Equilibrium Sentinel — First element strictly greater than all left and strictly smaller than all right.",
          "Q2 (Medium pp. 1–2): The Ascending Supremacy Count — Count elements strictly greater than all prior elements (`[7, 4, 8, 2, 9] -> 3`).",
          "Q6 (Medium pp. 4–5): The Stock Oracle Challenge — Maximum profit from 1 buy and 1 sell (`maxProfit = max(maxProfit, price - minSoFar)`).",
          "Q9 (Medium pp. 7–8): The Rainwater Fortress Problem — Two-pointer trapped water calculation in O(N) time, O(1) space."
        ],
        code: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

// Trapping Rain Water in O(N) time, O(1) space (Array Medium.pdf Q9, pp. 7-8)
long long trapRainWater(const vector<int>& h) {
    int l = 0, r = (int)h.size() - 1;
    int leftMax = 0, rightMax = 0;
    long long water = 0;
    while (l <= r) {
        if (h[l] <= h[r]) {
            if (h[l] >= leftMax) leftMax = h[l];
            else water += (leftMax - h[l]);
            l++;
        } else {
            if (h[r] >= rightMax) rightMax = h[r];
            else water += (rightMax - h[r]);
            r--;
        }
    }
    return water;
}`
      },
      {
        title: "Pattern 4: Sliding Window, Two-Array Sweep & In-Place Frequency Encoding",
        pdfRef: "Array Easy Medium.pdf — Q6 (p. 4), Q11 (p. 7), Q12 (pp. 7–8); Array Medium.pdf — Q7 (pp. 5–6), Q8 (pp. 6–7)",
        summary: "Applies fixed and variable-size sliding windows for maximum frequency after K increments, minimum swaps to group elements <= K together, and minimum max-min difference in M chocolate packets.",
        problemsIncluded: [
          "Q6 (Easy-Med p. 4): The Signal Stability Analyzer — Maximum consecutive 1s.",
          "Q11 (Easy-Med p. 7): The Frequency Reconstruction Grid — In-place frequency count for `1..N` in O(N) time, O(1) space.",
          "Q12 (Easy-Med pp. 7–8): The Resource Amplification Strategy — Sort + sliding window where `(long long)nums[r]*(r-l+1) - windowSum <= k`.",
          "Q7 (Medium pp. 5–6): Hulk's Resurrection Trial — Minimum swaps to group all elements `<= K` in a contiguous window of size `count(<=K)`.",
          "Q8 (Medium pp. 6–7): The Chocolate Distribution Dilemma — Sort array and check `arr[i + M - 1] - arr[i]`."
        ],
        code: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

// Minimum swaps to group all elements <= K together (Array Medium.pdf Q7, pp. 5-6)
int minSwapsToGroup(const vector<int>& arr, int k) {
    int n = (int)arr.size();
    int good = 0;
    for (int x : arr) if (x <= k) good++;
    if (good <= 1) return 0;

    int bad = 0;
    for (int i = 0; i < good; ++i) if (arr[i] > k) bad++;

    int ans = bad;
    for (int i = 0, j = good; j < n; ++i, ++j) {
        if (arr[i] > k) bad--;
        if (arr[j] > k) bad++;
        ans = min(ans, bad);
    }
    return ans;
}`
      },
      {
        title: "Pattern 5: Monotonic Stack, Binary Search on Answer & Subset DP",
        pdfRef: "Array Medium.pdf — Q1 (p. 1), Q4 (p. 3), Q10 (pp. 8–9), Q11 (pp. 9–10), Q12 (pp. 10–11), Q13 (pp. 11–12), Q14 (pp. 12–13), Q15 (pp. 13–14)",
        summary: "Advanced medium patterns from Array Medium.pdf: O(N) adjacent pair invariant for smallest+second-smallest subarray sum, 1D boolean DP for Equal Subset Partition, Monotonic Stack for Stock Span, Binary Search on Answer for Royal Cake Division, and Bitmask DP for Galactic TSP.",
        problemsIncluded: [
          "Q1 (Medium p. 1): The Imperial Energy Corridor — Max sum of smallest & second smallest over all subarrays reduces to `max(arr[i] + arr[i+1])` in O(N).",
          "Q4 (Medium p. 3): The Equilibrium Resource Partition Protocol — Partition Equal Subset Sum using 1D DP (`dp[s] |= dp[s - num]`).",
          "Q10 (Medium pp. 8–9): The Ancient Ranking Scroll — Kth smallest via frequency array in `O(N + max_val)` without built-in sort.",
          "Q11 (Medium pp. 9–10): The Grand Central Railway Crisis — Minimum railway platforms via sorted two-pointer sweep.",
          "Q12 (Medium pp. 10–11): The Wall Street Span Analysis — Stock Span in O(N) using monotonic decreasing stack of indices.",
          "Q13 (Medium pp. 11–12): The Galactic Trade Route Optimization — Travelling Salesman Problem (`dp[mask][u]`, O(2^N * N^2)).",
          "Q14 (Medium pp. 12–13): The Royal Cake Division Strategy — Binary search on minimum sweetness across `K + 1` contiguous cuts.",
          "Q15 (Medium pp. 13–14): The Little Bear's String Treasure — Distinct substrings starting with `T1` and ending with `T2`."
        ],
        code: `#include <iostream>
#include <vector>
#include <stack>
using namespace std;

// Wall Street Stock Span in O(N) time using Monotonic Stack (Array Medium.pdf Q12, pp. 10-11)
vector<int> calculateSpan(const vector<int>& price) {
    int n = (int)price.size();
    vector<int> span(n);
    stack<int> st; // stores indices in decreasing order of price
    for (int i = 0; i < n; ++i) {
        while (!st.empty() && price[st.top()] <= price[i]) {
            st.pop();
        }
        span[i] = st.empty() ? (i + 1) : (i - st.top());
        st.push(i);
    }
    return span;
}

// Royal Cake Division: Binary Search on Answer (Array Medium.pdf Q14, pp. 12-13)
long long maximizeMinSweetness(const vector<long long>& sweet, int k) {
    long long low = 1, high = 0;
    for (long long x : sweet) high += x;
    long long ans = 0;
    while (low <= high) {
        long long mid = low + (high - low) / 2;
        int pieces = 0;
        long long cur = 0;
        for (long long x : sweet) {
            cur += x;
            if (cur >= mid) { pieces++; cur = 0; }
        }
        if (pieces >= k + 1) { ans = mid; low = mid + 1; }
        else high = mid - 1;
    }
    return ans;
}`
      }
    ]
  },

  /* ==========================================================================
     THEORY MODULE 3: STRING THEORY (String Easy Medium Solution.pdf, pp. 1–36)
     ========================================================================== */
  stringTheory: {
    sourceFile: "String Easy Medium Solution.pdf (Pages 1–36, Questions 1–11)",
    lessons: [
      {
        title: "Lesson 1: Full-Line Reversal, Case Normalization & Alphanumeric Two-Pointer Filtering",
        pdfRef: "String Easy Medium Solution.pdf — Q1 (pp. 1–2), Q2 (pp. 2–6), Q8 (pp. 23–25)",
        summary: "Handles multi-testcase full-line strings (`cin >> T; cin.ignore(); getline(cin, s);`), character classification via `<cctype>` (`isalnum`, `tolower`, `isdigit`), and O(1)-space two-pointer palindrome verification ignoring spaces and symbols.",
        code: `#include <iostream>
#include <string>
#include <cctype>
using namespace std;

// Q2 (pp. 2-6): The Alphanumeric Purity Verification Protocol
bool isAlphanumericPalindrome(const string& s) {
    int left = 0, right = (int)s.size() - 1;
    while (left < right) {
        while (left < right && !isalnum(static_cast<unsigned char>(s[left]))) left++;
        while (left < right && !isalnum(static_cast<unsigned char>(s[right]))) right--;
        if (tolower(static_cast<unsigned char>(s[left])) !=
            tolower(static_cast<unsigned char>(s[right]))) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}`
      },
      {
        title: "Lesson 2: Embedded Number Extraction & Forbidden Digit Token Filtering",
        pdfRef: "String Easy Medium Solution.pdf — Q3 (pp. 6–9) & Q4 (pp. 9–13)",
        summary: "Extracts contiguous digit runs embedded inside alphanumeric strings (`abc123xyz45 -> 123 + 45 = 168`) using an `inNumber` accumulator, and filters space-separated numeric tokens to exclude a forbidden digit (`'9'`).",
        code: `#include <iostream>
#include <string>
#include <cctype>
using namespace std;

// Q3 (pp. 6-9): The Embedded Treasury Aggregation System
long long sumEmbeddedNumbers(const string& s) {
    long long totalSum = 0, currentNum = 0;
    bool inNumber = false;
    for (char c : s) {
        if (isdigit(static_cast<unsigned char>(c))) {
            currentNum = currentNum * 10 + (c - '0');
            inNumber = true;
        } else {
            if (inNumber) {
                totalSum += currentNum;
                currentNum = 0;
                inNumber = false;
            }
        }
    }
    if (inNumber) totalSum += currentNum;
    return totalSum;
}`
      },
      {
        title: "Lesson 3: Arbitrary-Length Digit Strings (Odd Prefix, Nearest-10 Rounding & Even Substrings)",
        pdfRef: "String Easy Medium Solution.pdf — Q5 (pp. 13–15), Q9 (pp. 25–31), Q11 (pp. 34–36)",
        summary: "When numeric inputs have up to 10^5 digits, `long long` overflows. Process them directly as `std::string`: scan from right for the rightmost odd digit (`Q5`), propagate carry from the last digit for nearest-10 rounding (`Q9`: if last digit <= 5 round down to '0', if > 5 round up with carry), and count even substrings in O(N) (`Q11`: every even digit at index `i` terminates `i + 1` even substrings).",
        code: `#include <iostream>
#include <string>
using namespace std;

// Q5 (pp. 13-15): Maximum Odd Subsequence/Prefix Extraction
string largestOddNumber(const string& num) {
    for (int i = (int)num.size() - 1; i >= 0; --i) {
        if ((num[i] - '0') % 2 == 1) {
            return num.substr(0, i + 1);
        }
    }
    return "";
}

// Q9 (pp. 25-31): The Decimal Stabilization Directive (Round String to Nearest Multiple of 10)
string roundToNearestTen(string s) {
    int n = (int)s.size();
    if (n == 0) return "0";
    int lastDigit = s[n - 1] - '0';
    s[n - 1] = '0';
    if (lastDigit > 5) {
        int i = n - 2;
        while (i >= 0 && s[i] == '9') {
            s[i] = '0';
            i--;
        }
        if (i >= 0) s[i]++;
        else s = "1" + s;
    }
    return s;
}

// Q11 (pp. 34-36): The Even Substring Enumeration Protocol
long long countEvenSubstrings(const string& s) {
    long long count = 0;
    for (size_t i = 0; i < s.size(); ++i) {
        if ((s[i] - '0') % 2 == 0) {
            count += (i + 1);
        }
    }
    return count;
}`
      },
      {
        title: "Lesson 4: Order-Preserving De-Duplication, Bidirectional Isomorphism & Alternating Merge",
        pdfRef: "String Easy Medium Solution.pdf — Q6 (pp. 15–19), Q7 (pp. 19–23), Q10 (pp. 31–34)",
        summary: "Uses `unordered_set<char>` to strip duplicate characters while preserving first-appearance order (`Q6`), two `unordered_map<char, char>` tables to verify one-to-one character isomorphism (`Q7`), and two-index interleaving to merge strings (`Q10`).",
        code: `#include <iostream>
#include <string>
#include <unordered_set>
#include <unordered_map>
using namespace std;

// Q6 (pp. 15-19): Remove Duplicate Characters Preserving Order
string removeDuplicatesKeepOrder(const string& s) {
    unordered_set<char> seen;
    string result;
    for (char c : s) {
        if (seen.find(c) == seen.end()) {
            seen.insert(c);
            result.push_back(c);
        }
    }
    return result;
}

// Q7 (pp. 19-23): Cipher Isomorphism Authentication Protocol
bool areIsomorphic(const string& s1, const string& s2) {
    if (s1.size() != s2.size()) return false;
    unordered_map<char, char> m1, m2;
    for (size_t i = 0; i < s1.size(); ++i) {
        char c1 = s1[i], c2 = s2[i];
        if (m1.count(c1) && m1[c1] != c2) return false;
        if (m2.count(c2) && m2[c2] != c1) return false;
        m1[c1] = c2;
        m2[c2] = c1;
    }
    return true;
}`
      }
    ]
  },

  /* ==========================================================================
     THEORY MODULE 4: C++ STL THEORY (C++ STL.pdf, pp. 1–39)
     ========================================================================== */
  stlTheory: {
    sourceFile: "C++ STL.pdf (Pages 1–39, Complete Extraction)",
    componentsOverview: [
      { name: "1. Containers (p. 2)", desc: "Objects that store data: Sequence (`vector`, `list`, `deque`), Container Adaptors (`stack`, `queue`, `priority_queue`), Associative (`map`, `set`), Unordered Associative (`unordered_map`, `unordered_set`), and `pair`." },
      { name: "2. Algorithms (p. 2, pp. 28–37)", desc: "Procedures applied to containers via iterators: `sort`, `nth_element`, `reverse`, `rotate`, `shuffle`, `find`, `count`, `accumulate`, `min_element`, `max_element`, `equal`, `unique`, `binary_search`." },
      { name: "3. Iterators (p. 2)", desc: "Objects pointing to elements inside containers (`begin()`, `end()`, `rbegin()`, `rend()`, `cbegin()`, `cend()`), bridging algorithms and containers." },
      { name: "4. Functors (p. 2, p. 29)", desc: "Function objects / comparators such as `greater<int>()` or custom boolean comparator functions passed to `sort()` and `priority_queue`." }
    ],
    containers: [
      {
        name: "std::vector<T>",
        pdfPages: "C++ STL.pdf — Pages 3–9",
        summary: "Dynamic contiguous array that resizes automatically. Supports random access `operator[]` and `at()` in O(1), amortized O(1) `push_back()`/`emplace_back()`/`pop_back()`, and O(n) `insert()`/`erase()`. Initializable via initializer list `{1,2,3}`, size+value `(n, val)`, or another vector.",
        code: `#include <iostream>
#include <vector>
using namespace std;

int main() {
    vector<int> v = {10, 20, 30};
    v.push_back(40);
    v.insert(v.begin() + 1, 15); // {10, 15, 20, 30, 40}
    v.pop_back();                // {10, 15, 20, 30}
    cout << "Front: " << v.front() << ", Back: " << v.back() << ", Size: " << v.size() << "\\n";
    return 0;
}`
      },
      {
        name: "std::list<T> & std::deque<T>",
        pdfPages: "C++ STL.pdf — Pages 10–15",
        summary: "`list` is a doubly linked list allowing O(1) `push_front`, `push_back`, `pop_front`, `pop_back`, `splice`, `merge`, `remove`, and `unique`, but O(n) traversal. `deque` (double-ended queue) supports O(1) `push_front`, `push_back`, `pop_front`, `pop_back` AND O(1) random access.",
        code: `#include <iostream>
#include <deque>
using namespace std;

int main() {
    deque<int> dq;
    dq.push_back(10);
    dq.push_front(5);
    dq.push_back(20);
    cout << dq.front() << " " << dq.back() << " (size " << dq.size() << ")\\n";
    return 0;
}`
      },
      {
        name: "std::pair<T1, T2>",
        pdfPages: "C++ STL.pdf — Pages 16–17",
        summary: "Stores two heterogeneous values accessed via `.first` and `.second`. Supports nesting (`pair<int, pair<char, int>>`) and natural lexicographical comparison inside `vector<pair<int, string>>` when sorting.",
        code: `#include <iostream>
#include <utility>
#include <vector>
#include <algorithm>
using namespace std;

int main() {
    vector<pair<int, string>> students = {{85, "Rahul"}, {92, "Anita"}, {85, "Aman"}};
    sort(students.begin(), students.end()); // Sorts by .first, then .second
    for (const auto& p : students) cout << p.second << ": " << p.first << "\\n";
    return 0;
}`
      },
      {
        name: "std::stack<T>, std::queue<T> & std::priority_queue<T>",
        pdfPages: "C++ STL.pdf — Pages 18–23",
        summary: "`stack` provides LIFO (`push`, `pop`, `top`, `empty`, `size` in O(1)). `queue` provides FIFO (`push`, `pop`, `front`, `back` in O(1)). `priority_queue` is a Max-Heap by default (`top` in O(1), `push`/`pop` in O(log n)); use `priority_queue<int, vector<int>, greater<int>>` for a Min-Heap.",
        code: `#include <iostream>
#include <queue>
#include <vector>
using namespace std;

int main() {
    priority_queue<int> maxHeap; // Max-heap by default (p. 22)
    maxHeap.push(30); maxHeap.push(10); maxHeap.push(50);
    cout << "Max element: " << maxHeap.top() << "\\n"; // 50

    priority_queue<int, vector<int>, greater<int>> minHeap;
    minHeap.push(30); minHeap.push(10); minHeap.push(50);
    cout << "Min element: " << minHeap.top() << "\\n"; // 10
    return 0;
}`
      },
      {
        name: "std::map, std::unordered_map, std::set & std::unordered_set",
        pdfPages: "C++ STL.pdf — Pages 24–27",
        summary: "`map` and `set` are balanced BSTs (Red-Black Trees) keeping keys sorted in O(log n) per operation. `unordered_map` and `unordered_set` use hash tables providing O(1) average insert/find/erase (O(n) worst-case hash collision).",
        code: `#include <iostream>
#include <map>
#include <unordered_map>
#include <set>
using namespace std;

int main() {
    unordered_map<int, int> freq;
    for (int x : {2, 3, 2, 3, 5}) freq[x]++;
    cout << "Freq of 2: " << freq[2] << "\\n";

    set<int> uniqueSorted = {5, 1, 3, 1, 5};
    for (int x : uniqueSorted) cout << x << " "; // 1 3 5
    return 0;
}`
      },
      {
        name: "STL Sorting & Core Algorithms",
        pdfPages: "C++ STL.pdf — Pages 28–37",
        summary: "Includes `sort` (O(n log n) IntroSort, ascending or `greater<int>()` or custom comparator `compareByAge`), `nth_element` (O(n) average partial sort), `reverse`, `rotate`, `find`, `count`, `accumulate` (`<numeric>`), `min_element`, `max_element`, `equal`, `unique` (erase-unique idiom), and `binary_search` (O(log n) on sorted range).",
        code: `#include <iostream>
#include <vector>
#include <algorithm>
#include <numeric>
using namespace std;

int main() {
    vector<int> v = {4, 2, 5, 2, 1, 4};
    sort(v.begin(), v.end());
    v.erase(unique(v.begin(), v.end()), v.end()); // {1, 2, 4, 5}

    int sum = accumulate(v.begin(), v.end(), 0);
    bool hasFour = binary_search(v.begin(), v.end(), 4);
    cout << "Unique sum: " << sum << ", Found 4: " << hasFour << "\\n";
    return 0;
}`
      }
    ],
    complexityTables: {
      pdfPages: "C++ STL.pdf — Pages 38–39 (Exact Complexity Tables)",
      containers: [
        { container: "Vector", insert: "O(1) amortized at end; O(n) arbitrary", delete: "O(1) at end; O(n) arbitrary", access: "O(1)", search: "O(n) unsorted; O(log n) sorted", space: "O(n)" },
        { container: "List", insert: "O(1) with iterator", delete: "O(1) with iterator", access: "O(n)", search: "O(n)", space: "O(n)" },
        { container: "Deque", insert: "O(1) at ends; O(n) middle", delete: "O(1) at ends; O(n) middle", access: "O(1)", search: "O(n)", space: "O(n)" },
        { container: "Stack / Queue", insert: "O(1) push", delete: "O(1) pop", access: "O(1) top / front / back", search: "N/A", space: "O(n)" },
        { container: "Priority Queue", insert: "O(log n) push", delete: "O(log n) pop", access: "O(1) top", search: "N/A", space: "O(n)" },
        { container: "Map / Set", insert: "O(log n)", delete: "O(log n)", access: "O(log n)", search: "O(log n)", space: "O(n)" },
        { container: "Unordered Map / Set", insert: "O(1) avg, O(n) worst", delete: "O(1) avg, O(n) worst", access: "O(1) avg", search: "O(1) avg, O(n) worst", space: "O(n)" }
      ],
      algorithms: [
        { algorithm: "std::sort", time: "O(n log n)", space: "O(log n)" },
        { algorithm: "std::nth_element", time: "O(n) average, O(n^2) worst", space: "O(1)" },
        { algorithm: "std::reverse / std::rotate", time: "O(n)", space: "O(1)" },
        { algorithm: "std::find / std::count / std::accumulate", time: "O(n)", space: "O(1)" },
        { algorithm: "std::min_element / std::max_element / std::equal / std::unique", time: "O(n)", space: "O(1)" },
        { algorithm: "std::binary_search", time: "O(log n) (requires sorted range)", space: "O(1)" }
      ]
    }
  },

  /* ==========================================================================
     THEORY MODULE 5: RECURSION THEORY (Grounded in Uploaded Sheets & PYQ PDF)
     ========================================================================== */
  recursionTheory: {
    sourceFile: "KN Academy Coding Sheet.xlsx (Q39–Q46), Problem Solving Sheet - Updated.xlsx (Q50–Q55), Coding questions.xlsx (Q60–Q69, Q93) & Previous Year Coding Questions.pdf (pp. 238, 299)",
    sourceNote: "Transparency Note: Recursion(2).pdf was not among the 10 files attached in the upload batch. In strict compliance with your source rule ('If something is not covered by my uploaded materials, do not pretend that it is'), this module is extracted strictly from the recursion sections of your three uploaded Excel sheets and Previous Year Coding Questions.pdf.",
    lessons: [
      {
        title: "Pattern 1: Base-Case & Mathematical Recursion (Factorial, Fibonacci, Power, GCD, Array Extremes)",
        pdfRef: "KN Academy Coding Sheet.xlsx (Q39–Q46) & Problem Solving Sheet - Updated.xlsx (Q50–Q55)",
        summary: "Covers the recursive problems listed in your KN Academy & Problem Solving sheets: Power of a number `power(x, n)` via binary exponentiation in O(log n), recursive Prime check, Largest/Smallest element in an array, Reversing a number recursively, LCM/GCD via Euclidean recursion `gcd(b, a % b)`, Print 1 to N / N to 1, and Sum of Array elements.",
        code: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

// Fast Recursive Modular/Integer Exponentiation O(log exp) (KN Sheet Q39)
long long fastPower(long long base, long long exp) {
    if (exp == 0) return 1;
    long long half = fastPower(base, exp / 2);
    if (exp % 2 == 0) return half * half;
    return base * half * half;
}

// Euclidean GCD & LCM via Recursion (KN Sheet Q44)
long long gcdRec(long long a, long long b) {
    return b == 0 ? a : gcdRec(b, a % b);
}

// Recursive Array Sum & Max Element (Problem Solving Sheet Q53-Q54 & KN Sheet Q41)
long long arraySumRec(const vector<long long>& arr, int idx) {
    if (idx == (int)arr.size()) return 0;
    return arr[idx] + arraySumRec(arr, idx + 1);
}`
      },
      {
        title: "Pattern 2: Pick / Non-Pick Subset Generation & Combination Sum",
        pdfRef: "Coding questions.xlsx (Q60–Q69, Q93) & KN Academy Coding Sheet.xlsx (Q45–Q46)",
        summary: "Every subset, subsequence, or combination problem in `Coding questions.xlsx` (Subset Sums, Combination Sum I & II, Palindrome Partitioning, Print All Permutations) follows the Pick / Non-Pick recursion tree with backtracking state restoration (`current.pop_back()`).",
        code: `#include <iostream>
#include <vector>
using namespace std;

// Combination Sum: Find all combinations summing to target (Coding questions.xlsx Q62)
void findCombinations(int idx, int target, const vector<int>& arr,
                      vector<int>& current, vector<vector<int>>& ans) {
    if (target == 0) {
        ans.push_back(current);
        return;
    }
    if (idx == (int)arr.size() || target < 0) return;

    // Choice 1: Pick arr[idx] (can reuse same element)
    current.push_back(arr[idx]);
    findCombinations(idx, target - arr[idx], arr, current, ans);
    current.pop_back(); // Backtrack

    // Choice 2: Skip arr[idx]
    findCombinations(idx + 1, target, arr, current, ans);
}`
      },
      {
        title: "Pattern 3: Grid Paths & 0/1 Knapsack Recursion with Memoization",
        pdfRef: "Previous Year Coding Questions.pdf — TCS Q11 (Grid Unique Paths, p. 238) & TCS Q37 (Mr. Rao's Moving Truck 0/1 Knapsack, p. 299)",
        summary: "In TCS NQT story problems like Grid Unique Paths (`m x n` warehouse robot moving only right or down) and Mr. Rao's Moving Truck (maximizing profit within capacity `W`), pure recursion takes O(2^(m+n)) or O(2^n) and hits TLE. Adding a 2D memoization table `dp` reduces time complexity to O(m * n) or O(n * W).",
        code: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

// TCS Q11 (p. 238): Grid Unique Paths from (0,0) to (m-1, n-1)
long long uniquePaths(int m, int n) {
    vector<vector<long long>> dp(m, vector<long long>(n, 1));
    for (int i = 1; i < m; ++i) {
        for (int j = 1; j < n; ++j) {
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
        }
    }
    return dp[m - 1][n - 1];
}

// TCS Q37 (p. 299): Mr. Rao's Moving Truck (0/1 Knapsack)
int knapsack01(int W, const vector<int>& wt, const vector<int>& val) {
    int n = (int)wt.size();
    vector<int> dp(W + 1, 0);
    for (int i = 0; i < n; ++i) {
        for (int w = W; w >= wt[i]; --w) {
            dp[w] = max(dp[w], val[i] + dp[w - wt[i]]);
        }
    }
    return dp[W];
}`
      }
    ]
  },

  /* ==========================================================================
     THEORY MODULE 6: NUMBER-BASED CODING THEORY (TCS NQT Number Based PDF, pp. 1–64)
     ========================================================================== */
  numberTheory: {
    sourceFile: "TCS NQT Number Based Coding Questions.pdf (Pages 1–64, All 35 Questions)",
    groups: [
      {
        title: "Group 1: Digit Manipulation, Palindromes, Armstrong, Strong, Automorphic & Harshad Numbers",
        pdfPages: "TCS NQT Number Based Coding Questions.pdf — Q1 (p. 2), Q2 (p. 3), Q5 (p. 10), Q15 (p. 24), Q16 (p. 26), Q22 (p. 38), Q23 (p. 40), Q26 (p. 45), Q28 (p. 49), Q32 (p. 55)",
        summary: "Covers the classic digit-extraction loop (`d = temp % 10; temp /= 10;`): Palindrome check & range scan (`Q1–Q2`), Armstrong number where sum of $d^k$ equals $N$ (`Q5`), Reversing digits preserving negative sign (`Q15`), Max/Min digit (`Q16`), Strong number where $\\sum d! = N$ e.g. $145 = 1!+4!+5!$ (`Q22`, also called Relative Blood Number in `TCS Q30 p. 284`), Automorphic number where $N^2$ ends with $N$ (`Q23`), Harshad/Niven number divisible by its digit sum (`Q26`), and replacing all `0` digits with `1` (`Q32`).",
        code: `#include <iostream>
#include <cmath>
using namespace std;

// Q22 (p. 38): Strong Number (sum of factorial of digits == N, e.g. 145)
bool isStrongNumber(long long n) {
    if (n <= 0) return false;
    long long fact[10] = {1, 1, 2, 6, 24, 120, 720, 5040, 40320, 362880};
    long long temp = n, sum = 0;
    while (temp > 0) {
        sum += fact[temp % 10];
        temp /= 10;
    }
    return sum == n;
}

// Q23 (p. 40): Automorphic Number (square of N ends with N, e.g. 25 -> 625)
bool isAutomorphic(long long n) {
    if (n < 0) n = -n;
    long long sq = n * n;
    while (n > 0) {
        if (n % 10 != sq % 10) return false;
        n /= 10;
        sq /= 10;
    }
    return true;
}

// Q32 (p. 55): Replace all 0's with 1's in an integer
long long replaceZerosWithOnes(long long n) {
    if (n == 0) return 1;
    long long ans = 0, place = 1;
    while (n > 0) {
        int d = n % 10;
        if (d == 0) d = 1;
        ans += d * place;
        place *= 10;
        n /= 10;
    }
    return ans;
}`
      },
      {
        title: "Group 2: Primality, Prime Factorization, Perfect/Abundant Numbers & Goldbach Two-Prime Sum",
        pdfPages: "TCS NQT Number Based Coding Questions.pdf — Q3 (p. 6), Q4 (p. 8), Q6 (p. 13), Q20 (p. 33), Q21 (p. 35), Q27 (p. 47), Q33 (p. 58)",
        summary: "Uses $O(\\sqrt{N})$ trial division (`for (long long i = 2; i * i <= n; ++i)`): Prime check & range primes (`Q3–Q4`), Divisor pairs `i` and `n/i` for Perfect numbers (`Q6`, sum of proper divisors == $N$, e.g. 6, 28) and Abundant numbers (`Q27`, sum of proper divisors > $N$, e.g. 12), Prime Factors (`Q21`), and expressing $N$ as the sum of two primes (`Q33`: check if `isPrime(i) && isPrime(n - i)` for $2 \\le i \\le n/2$).",
        code: `#include <iostream>
#include <vector>
using namespace std;

// Q3 (p. 6): O(sqrt(N)) Prime Check
bool isPrime(long long n) {
    if (n <= 1) return false;
    if (n <= 3) return true;
    if (n % 2 == 0 || n % 3 == 0) return false;
    for (long long i = 5; i * i <= n; i += 6) {
        if (n % i == 0 || n % (i + 2) == 0) return false;
    }
    return true;
}

// Q6 (p. 13) & Q27 (p. 47): Sum of Proper Divisors in O(sqrt(N))
long long sumProperDivisors(long long n) {
    if (n <= 1) return 0;
    long long sum = 1;
    for (long long i = 2; i * i <= n; ++i) {
        if (n % i == 0) {
            sum += i;
            if (i * i != n) sum += (n / i);
        }
    }
    return sum; // Perfect if sum == n; Abundant if sum > n
}

// Q33 (p. 58): Express N as Sum of Two Prime Numbers
bool canExpressAsSumOfTwoPrimes(long long n) {
    for (long long i = 2; i <= n / 2; ++i) {
        if (isPrime(i) && isPrime(n - i)) return true;
    }
    return false;
}`
      },
      {
        title: "Group 3: Series (AP, GP, Fibonacci), GCD/LCM, Fractions, Permutations & Quadratic Roots",
        pdfPages: "TCS NQT Number Based Coding Questions.pdf — Q7–Q14 (pp. 15–23), Q17–Q19 (pp. 28–31), Q24–Q25 (pp. 42–43), Q29–Q31 (pp. 50–53), Q34–Q35 (pp. 60–62)",
        summary: "Covers Natural/Range Sums (`Q9, Q29`), Arithmetic Progression sum $S_n = \\frac{n}{2}(2a + (n-1)d)$ (`Q10`), Geometric Progression sum (`Q11`), Leap Year rule (`(y % 400 == 0) || (y % 4 == 0 && y % 100 != 0)`, `Q14`), Fibonacci & Factorial (`Q17–Q18`), GCD & LCM (`lcm = (a / gcd(a, b)) * b`, `Q24–Q25`), Permutations $P(N, R) = N!/(N-R)!$ (`Q30`), Adding two fractions $\\frac{a}{b} + \\frac{c}{d} = \\frac{ad+bc}{bd}$ reduced by GCD (`Q31`), Circle area $\\pi r^2$ (`Q34`), and Quadratic Equation roots via discriminant $D = b^2 - 4ac$ (`Q35`).",
        code: `#include <iostream>
using namespace std;

long long gcdLL(long long a, long long b) {
    a = (a < 0) ? -a : a;
    b = (b < 0) ? -b : b;
    while (b != 0) {
        long long t = a % b;
        a = b;
        b = t;
    }
    return a;
}

// Q31 (p. 53): Add Two Fractions a/b + c/d and Print Simplified Fraction
void addFractions(long long a, long long b, long long c, long long d) {
    long long num = a * d + b * c;
    long long den = b * d;
    long long g = gcdLL(num, den);
    num /= g;
    den /= g;
    if (den < 0) { num = -num; den = -den; }
    cout << num << "/" << den << "\\n";
}`
      }
    ],
    all35Index: [
      "Q1 (p. 2): Check if a number is Palindrome or Not",
      "Q2 (p. 3): Find all Palindrome Numbers in a given range",
      "Q3 (p. 6): Check if a number is Prime or not",
      "Q4 (p. 8): Prime Numbers in a given range",
      "Q5 (p. 10): Check if a number is Armstrong Number or not",
      "Q6 (p. 13): Check whether a number is Perfect Number or not",
      "Q7 (p. 15): Check whether a given number is Even or Odd",
      "Q8 (p. 16): Check whether a number is Positive, Negative, or Zero",
      "Q9 (p. 17): Sum of first N Natural Numbers",
      "Q10 (p. 18): Find Sum of AP Series",
      "Q11 (p. 20): Program to find Sum of GP Series",
      "Q12 (p. 21): Greatest of two numbers",
      "Q13 (p. 22): Greatest of three numbers",
      "Q14 (p. 23): Check if given year is a Leap Year or not",
      "Q15 (p. 24): Reverse digits of a number (preserving sign)",
      "Q16 (p. 26): Maximum and Minimum digit in a number",
      "Q17 (p. 28): Print Fibonacci Series up to Nth term",
      "Q18 (p. 30): Factorial of a Number",
      "Q19 (p. 31): Calculate the Power of a Number",
      "Q20 (p. 33): Factors of a Given Number",
      "Q21 (p. 35): Print all Prime Factors of the given number",
      "Q22 (p. 38): Check if a number is a Strong Number or not",
      "Q23 (p. 40): Check if a number is Automorphic Number",
      "Q24 (p. 42): Find GCD of two numbers",
      "Q25 (p. 43): Find LCM of two numbers",
      "Q26 (p. 45): Check if the given number is Harshad (Or Niven) Number",
      "Q27 (p. 47): Check if the number is an Abundant Number or not",
      "Q28 (p. 49): Sum Of Digits of A Number",
      "Q29 (p. 50): Find the sum of numbers in the given range",
      "Q30 (p. 52): Permutations in which N people can occupy R seats",
      "Q31 (p. 53): Program to Add two fractions",
      "Q32 (p. 55): Replace all the 0's with 1 in a given integer",
      "Q33 (p. 58): Express given number as Sum of Two Prime Numbers",
      "Q34 (p. 60): Calculate the Area of the Circle",
      "Q35 (p. 62): Program to Find Roots of a Quadratic Equation"
    ]
  },

  /* ==========================================================================
     THEORY MODULE 7: TCS PREVIOUS-YEAR CODING PATTERNS (Previous Year PDF pp. 211–309)
     ========================================================================== */
  tcsPatterns: {
    sourceFile: "Previous Year Coding Questions.pdf (TCS Section: Pages 211–309, Q1–Q40; Full PDF: Pages 1–367) & 3 Excel Sheets",
    sourceNote: "Extracted all 40 actual TCS coding questions from Previous Year Coding Questions.pdf (pp. 211–309) and cross-referenced with Coding questions.xlsx (133 items), KN Academy Coding Sheet.xlsx (49 items), and Problem Solving Sheet - Updated.xlsx (55 items). (Note: TCS 2026 Solutions(3).pdf and standalone screenshots were not in the 10-file upload batch.)",
    anatomyOfTcsProblem: [
      {
        heading: "1. Story Wrapper Around a Core Algorithmic Primitive",
        detail: "TCS NQT disguises standard O(N) or O(N log N) operations inside workplace, factory, or watchmaker narratives: e.g., sorting values {3, 6, 7} on a factory belt (TCS Q2, p. 214) is Dutch National Flag; matching Left/Right shoes (`7L`, `7R`, TCS Q17, p. 252) is hash-map frequency pairing (`min(left[size], right[size])`); finding the maximum efficiency of 3 employees with negative values (`TCS Q16, p. 250`) is `max(a[n-1]*a[n-2]*a[n-3], a[0]*a[1]*a[n-1])`."
      },
      {
        heading: "2. Non-Standard Input Representations & Multi-Field Records",
        detail: "Several TCS questions omit N (TCS Q7 p. 228: space-separated integers on a single line for Armstrong check), mix numbers and strings on one line (TCS Q6 p. 225: `K N` followed by `Marks Name` pairs), or supply CSV transaction rows (TCS Q13 p. 242)."
      },
      {
        heading: "3. Multi-Condition String & Digit Transformations",
        detail: "Questions like TCS Q21 (p. 261, custom cipher where `@ -> #`, other symbols `-> @`, letters shifted, digits shifted), TCS Q26 (p. 274, lexicographically smallest character with frequency >= p), TCS Q29 (p. 280, custom string sort using a 26-letter key order), and TCS Q39 (p. 304, extracting letters from a noisy string like `D@h*o1n&i%` and computing the single-digit recursive ASCII digital root) test careful ASCII manipulation."
      }
    ],
    featuredSolutions: [
      {
        title: "TCS Q16 (p. 250): Maximum Efficiency of 3 Employees (With Negative Efficiencies)",
        pdfRef: "Previous Year Coding Questions.pdf — TCS Question 16, Pages 250–251",
        summary: "Given N employee efficiency ratings (which can be negative or positive), find the maximum product of any 3 employees. Two negative ratings multiplied together become positive, so the maximum product is either the 3 largest numbers OR the 2 smallest (most negative) numbers multiplied by the largest number.",
        code: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main() {
    int n;
    if (!(cin >> n) || n < 3) return 0;
    vector<long long> a(n);
    for (int i = 0; i < n; ++i) cin >> a[i];
    sort(a.begin(), a.end());
    long long opt1 = a[n - 1] * a[n - 2] * a[n - 3];
    long long opt2 = a[0] * a[1] * a[n - 1];
    cout << max(opt1, opt2) << "\\n";
    return 0;
}`
      },
      {
        title: "TCS Q17 (p. 252): Shoe Pairs Matching (ID + 'L'/'R')",
        pdfRef: "Previous Year Coding Questions.pdf — TCS Question 17, Pages 252–253",
        summary: "Given N shoe tags such as `7L 7R 7L 8L 6R 7R 8R 6L`, count how many complete pairs of shoes can be formed. Each valid pair requires one `'L'` and one `'R'` of the exact same numeric size.",
        code: `#include <iostream>
#include <string>
#include <unordered_map>
#include <algorithm>
using namespace std;

int main() {
    int n;
    if (!(cin >> n)) return 0;
    unordered_map<string, int> leftCount, rightCount;
    for (int i = 0; i < n; ++i) {
        string shoe;
        cin >> shoe;
        if (shoe.empty()) continue;
        char side = shoe.back();
        string sizeStr = shoe.substr(0, shoe.size() - 1);
        if (side == 'L') leftCount[sizeStr]++;
        else if (side == 'R') rightCount[sizeStr]++;
    }
    int pairs = 0;
    for (const auto& kv : leftCount) {
        pairs += min(kv.second, rightCount[kv.first]);
    }
    cout << pairs << "\\n";
    return 0;
}`
      },
      {
        title: "TCS Q29 (p. 280, TCS NQT 2023): Custom Lexicographical String Sort by Key",
        pdfRef: "Previous Year Coding Questions.pdf — TCS Question 29, Pages 280–283",
        summary: "Given a 26-character permutation `key` defining a new alphabetical order and a target string `str`, rearrange the characters of `str` according to their relative order in `key`.",
        code: `#include <iostream>
#include <string>
#include <vector>
using namespace std;

int main() {
    string key, s;
    if (!(cin >> key >> s)) return 0;
    vector<int> freq(256, 0);
    for (unsigned char c : s) freq[c]++;
    string result;
    for (unsigned char c : key) {
        while (freq[c] > 0) {
            result.push_back(c);
            freq[c]--;
        }
    }
    cout << result << "\\n";
    return 0;
}`
      },
      {
        title: "TCS Q39 (p. 304): Hidden Name Single-Digit Lucky Number (Digital Root)",
        pdfRef: "Previous Year Coding Questions.pdf — TCS Question 39, Pages 304–306",
        summary: "Given a noisy string containing letters, digits, and special symbols (e.g., `D@h*o1n&i%`), extract only the alphabetical characters (`Dhoni`), sum their ASCII values, and repeatedly sum the digits of the result until a single-digit lucky number (1–9) is obtained.",
        code: `#include <iostream>
#include <string>
#include <cctype>
using namespace std;

int main() {
    string s;
    if (!getline(cin >> ws, s)) return 0;
    long long asciiSum = 0;
    for (unsigned char c : s) {
        if (isalpha(c)) asciiSum += static_cast<int>(c);
    }
    while (asciiSum >= 10) {
        long long nextSum = 0;
        while (asciiSum > 0) {
            nextSum += asciiSum % 10;
            asciiSum /= 10;
        }
        asciiSum = nextSum;
    }
    cout << asciiSum << "\\n";
    return 0;
}`
      }
    ],
    all40TcsQuestions: [
      "TCS Q1 (p. 211): Majority Element appearing > N/3 times",
      "TCS Q2 (p. 214): Sort Conveyor Belt packets labeled 3, 6, and 7 in-place",
      "TCS Q3 (p. 218): Missing Student Roll Call Tag in [0..N]",
      "TCS Q4 (p. 220): Primes in range [N1, N2] whose digit sum is also Prime",
      "TCS Q5 (p. 223): ThreeFive Multiples Substitution ([1..N] array)",
      "TCS Q6 (p. 225): Top K Students by Marks from 'Marks Name' lines",
      "TCS Q7 (p. 228): Identify Armstrong Numbers from space-separated line",
      "TCS Q8 (p. 231): Sum of Unique Elements (occurring exactly once)",
      "TCS Q9 (p. 233): Package Shipping Cost Calculator ($%.2f output)",
      "TCS Q10 (p. 235): Print All Continuous Subarrays with Target Sum K",
      "TCS Q11 (p. 238): Grid Unique Paths from Top-Left to Bottom-Right (m x n)",
      "TCS Q12 (p. 241): Sum of Cubes of Numbers in Range [start, end]",
      "TCS Q13 (p. 242): Store Sales Revenue Analytics (Most Sold Item, Total & Avg Revenue)",
      "TCS Q14 (p. 246): Multiplication Table Entries & Total Sum",
      "TCS Q15 (p. 247): Number of Distinct Bitwise ORs of All Contiguous Subarrays",
      "TCS Q16 (p. 250): Maximum Efficiency of 3 Employees (handling negative ratings)",
      "TCS Q17 (p. 252): Shoe Pairs Matching (Size + L/R tags)",
      "TCS Q18 (p. 254): Check if 3-Digit Number is Divisible by 9",
      "TCS Q19 (p. 256): Students Age > 20 & Average ASCII of Female Student Grades",
      "TCS Q20 (p. 259): Nearest Integer to X Divisible by Y",
      "TCS Q21 (p. 261): Multi-Rule String Cipher (@->#, symbols->@, shift letters/digits)",
      "TCS Q22 (p. 264): All Contiguous Character Substrings of a String",
      "TCS Q23 (p. 266): Unique Words Sorted Ascending and Descending",
      "TCS Q24 (p. 268): Toggle All Binary Bits of Positive Integer N",
      "TCS Q25 (p. 270): Rotate N x N Matrix 90 Degrees Clockwise",
      "TCS Q26 (p. 274, NQT 2023): Lexicographically Smallest Char with Frequency >= P",
      "TCS Q27 (p. 277, NQT 2023): Soci Horology Watchmaker Lag/Early Time Calculation",
      "TCS Q28 (p. 279, NQT 2023): Mall Product Price |Product of Digits - Sum of Digits|",
      "TCS Q29 (p. 280, NQT 2023): Custom Lexicographical String Sort by 26-Letter Key",
      "TCS Q30 (p. 284, NQT 2023): Relative Blood Number (Strong Number Check)",
      "TCS Q31 (p. 286, NQT 2023): Bastin's Largest Number from String Without Digit '9'",
      "TCS Q32 (p. 289, NQT 2023): Balanced Double Quotes (\") and Hash (#) Verification",
      "TCS Q33 (p. 290): Replace Every Array Element with its Frequency",
      "TCS Q34 (p. 292): Toggle Alphabet Case (KNacademy -> KnACADEMY)",
      "TCS Q35 (p. 294): Accountant Reverse Number Preserving Negative Sign & Dropping Leading Zeros",
      "TCS Q36 (p. 296): Find Missing Lowercase English Alphabets (Pangram Deficit)",
      "TCS Q37 (p. 299): Mr. Rao's Moving Truck (0/1 Knapsack Profit Maximization)",
      "TCS Q38 (p. 302): Ways to Represent N as Product of Two Distinct Factors",
      "TCS Q39 (p. 304): Hidden Name Lucky Number (Recursive ASCII Digital Sum)",
      "TCS Q40 (p. 307): Binary Search Index Lookup in Sorted Array"
    ]
  }
};
