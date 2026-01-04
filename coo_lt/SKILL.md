---
name: coo-lt-operations
description: Comprehensive operating system for the COO of LambdaTest. Handles Global Revenue Operations (GTM), Executive Logistics (Briefs), and Personal Admin.
---

# COO LambdaTest Operations Skill

**System Note:** This skill is stateless and agnostic of the host environment. It requires specific data inputs to function.

## 1. GTM Watchtower (Revenue)
[cite_start]**Goal:** Detect Revenue Risks and Opportunities. [cite: 15-30]
**Required Input:** `sales_data` (JSON object containing 'hunting_pods' and 'farming_pods').
**Logic:**
1.  [cite_start]**Variance Check:** Flag if `forecast_commit` changes >10% vs `last_week`[cite: 21].
2.  [cite_start]**Stalled Deals:** Flag "Ghost Deals" (Commit stage, inactive >14 days) [cite: 22-23].
3.  [cite_start]**Coverage:** Flag if pipeline coverage drops below target (3x)[cite: 24].
4.  [cite_start]**Farming Risk:** Flag Churn Risk (Renewal <90 days + Red/Yellow Health)[cite: 29].
**Output:** Return a Markdown formatted report.

## 2. Executive Logistics (Briefs)
[cite_start]**Goal:** Prepare Strategic Briefs for meetings. [cite: 31-37]
**Required Inputs:**
* `meeting_context`: (JSON/Text) Attendees, Time, Title.
* `communication_history`: (Text) Emails, Notes, or interactions.
**Logic:**
1.  **Correlate:** Match meeting attendees to the provided history.
2.  [cite_start]**Tone Analysis:** Determine if sentiment is Positive, Neutral, or Tense[cite: 115].
3.  [cite_start]**Extraction:** Identify "The Ask" and "The Debt" [cite: 114-115].
4.  **Output:** Return filled `templates/strategic_brief.md`.

## 3. Personal OS (Admin)
[cite_start]**Goal:** Finance & Admin Reminders. [cite: 46-59]
**Required Inputs:**
* `current_date`: (String) YYYY-MM-DD.
* `bills_data`: (CSV/Table) List of recurring payments and dates.
**Logic:**
1.  **Date Check:** Compare `current_date` against the bill dates.
2.  [cite_start]**Trigger:** Alert if bill is due within 3 days[cite: 49].
**Output:** Return formatted Alert text.

## 4. Competitive Radar
[cite_start]**Goal:** Filter Market Noise. [cite: 66-69]
**Required Input:** `news_feed` (Text string).
**Logic:**
1.  [cite_start]**Filter Targets:** "BrowserStack", "Sauce Labs", "Perfecto"[cite: 68].
2.  [cite_start]**Filter Events:** "Product Launch", "C-Level Hire", "Funding", "Outage"[cite: 69].
**Output:** Return filtered list of alerts.
