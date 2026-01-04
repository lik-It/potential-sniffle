# Admin Sentinel Workflow

**Objective:** Check specific bills against a specific date.

## 1. Input Requirements
* **Reference Date:** The date to act as "Today".
* **Bill List:** A list of items with "Due Day" (1-31).

## 2. Watchlist Logic
Using the **Reference Date**:
1.  Identify bills in the **Bill List** due within the next 3 days.
2.  Specifically check for hardcoded criticals if present in data:
    * Day 3: FAB Card
    * Day 20: HDFC/ICICI Cards
    * Day 24: SIP Transfer

## 3. Output
Return a formatted alert for any matching items.
