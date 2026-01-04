# GTM Analysis Workflow

**Objective:** Analyze provided revenue data to identify risks.

## 1. Input Validation
Ensure the provided input contains:
* `hunting_pods`: Array of pod objects.
* `farming_pods`: Array of account objects.

## 2. Hunting Logic (New Business)
Iterate through `hunting_pods` in the **Input Data**:
* **Variance:** Compare `current` vs `last_week`. Flag if >10%.
* **Ghost Deals:** Check `stage`="Commit" and `inactive_days` > 14.
* **Coverage:** Check if `pipeline_coverage` < 3.0.

## 3. Farming Logic (Account Management)
Iterate through `farming_pods` in the **Input Data**:
* **Churn:** Check if `renewal_date` is < 90 days away AND `health` is Red/Yellow.
* **Expansion:** Check if `utilization` > 85%.

## 4. Output
Generate a markdown report summarizing all flags found in the input.
