# GTM Analysis Workflow

**Objective:** Analyze provided revenue data structure to identify risks.

## 1. Input Validation
Ensure the provided `sales_data` object contains:
* `hunting_pods`: Array of pod objects.
* `farming_pods`: Array of account objects.

## 2. Hunting Logic (New Business)
Iterate through `hunting_pods` in the **Input Data**:
* **Variance:** Compare `forecast_commit_current` vs `forecast_commit_last_week`. Flag if variance > 10% (positive or negative).
* **Ghost Deals:** Check deals where `stage` is "Commit". If `last_activity_days_ago` > 14, FLAG as "Stalled/Ghost Deal".
* **Coverage:** Check if `pipeline_coverage` < 3.0. FLAG if true.

## 3. Farming Logic (Account Management)
Iterate through `farming_pods` in the **Input Data**:
* **Churn:** Check if `renewal_date` is < 90 days from now AND `health_score` is "Red" or "Yellow". FLAG IT.
* **Expansion:** Check if `license_utilization` > 85%. FLAG IT.

## 4. Output Generation
Compile all identified flags into a markdown summary.
