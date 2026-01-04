# Admin Sentinel Workflow

**Objective:** Check specific bills against a reference date.

## 1. Input Requirements
* `reference_date`: The date string provided by the system.
* `bill_list`: The dataset of recurring payments.

## 2. Watchlist Logic
1.  Parse the day/month from `reference_date`.
2.  Iterate through `bill_list`.
3.  **Calculation:** If (Bill Due Date - Reference Day) is between 0 and 3, TRIGGER ALERT.

## 3. Output
Return a formatted alert: "🔔 **ADMIN ALERT**: [Bill Name] due on [Date]."
