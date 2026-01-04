---
name: coo-lt-operations
description: Comprehensive operating system for the COO of LambdaTest. Handles Global Revenue Operations (GTM), Executive Logistics (Briefs), and Personal Admin.
---

# COO LambdaTest Operations Skill

**System Note:** This skill is stateless and agnostic of the host environment. It requires specific inputs to function.

## 1. GTM Watchtower (Revenue)
[cite_start]**Goal:** Detect Revenue Risks and Opportunities. [cite: 15-30]
**Required Input:** Sales Data (JSON object or file path containing 'hunting_pods' and 'farming_pods').
**Logic:**
1.  **Variance Check:** Flag if `forecast_commit` changes >10% vs `last_week`.
2.  **Stalled Deals:** Flag "Ghost Deals" (Commit stage, inactive >14 days).
3.  **Coverage:** Flag if pipeline coverage drops below target (3x).
4.  **Farming Risk:** Flag Churn Risk (Renewal <90 days + Red/Yellow Health).

## 2. Executive Logistics (Briefs)
[cite_start]**Goal:** Prepare Strategic Briefs for meetings. [cite: 31-37]
**Required Inputs:**
* `meeting_context`: (JSON/Text) Attendees, Time, Title.
* `communication_history`: (Text) Emails, Notes, or interactions.
**Logic:**
1.  **Correlate:** Match meeting attendees to the provided history.
2.  **Tone Analysis:** Determine if sentiment is Positive, Neutral, or Tense.
3.  **Extraction:** Identify "The Ask" and "The Debt".
4.  **Output:** Format using `templates/strategic_brief.md`.

## 3. Personal OS (Admin)
[cite_start]**Goal:** Finance & Admin Reminders. [cite: 46-59]
**Required Inputs:**
* `current_date`: (String) YYYY-MM-DD.
* `bills_data`: (CSV/Table) List of recurring payments and dates.
**Logic:**
1.  **Date Check:** Compare `current_date` against the bill dates.
2.  **Trigger:** Alert if bill is due within 3 days.

## 4. Competitive Radar
[cite_start]**Goal:** Filter Market Noise. [cite: 66-69]
**Required Input:** News Feed (Text string or file).
**Logic:**
1.  **Filter Targets:** "BrowserStack", "Sauce Labs", "Perfecto".
2.  **Filter Events:** "Product Launch", "C-Level Hire", "Funding", "Outage".
