# Meeting Prep Workflow

**Objective:** Generate a "Strategic Brief" from context and history.

## 1. Context Analysis
* Parse `meeting_context` to identify the **Target Client** and **Attendees**.
* Scan `communication_history` for matching names or company domains.

## [cite_start]2. Intelligence Extraction [cite: 113-115]
Analyze the matched history for:
* **The Ask:** What was the specific last request made?
* **The Tone:** Is the language Defensive, Urgent (Tense), or Collaborative (Positive)?
* **The Debt:** Is there an outstanding action item on our side?

## 3. Brief Construction
* Map findings to the `templates/strategic_brief.md` structure.
* **Heuristic Check:**
    * If **Tone = Tense**, set Strategy to "Remediation" (The Firm Coach).
    * If **Tone = Positive**, set Strategy to "Expansion" (The Diplomat).

## 4. Output
Return the completed markdown string.
