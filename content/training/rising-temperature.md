---
title: Rising Temperature
tags: ['training', 'task']
languages: ['sql']
---
# Rising Temperature

```SQL
# Write your MySQL query statement below

SELECT w1.id
FROm Weather w1, Weather w2
WHERE w1.Temperature > w2.Temperature
AND datediff(w1.recordDate, w2.recordDate) = 1;
```

1. **SELECT Statement**:
   - The query starts with the `SELECT` statement, indicating that we want to retrieve certain columns from the database.

2. **Column Selection**:
   - The column selected in the query is `w1.id`. This suggests that we are interested in fetching the `id` values from the `Weather` table.

3. **FROM Clause**:
   - The `FROM` clause specifies the tables involved in the query. In this case, it lists two instances of the `Weather` table: `w1` and `w2`. These instances are used as aliases to differentiate between two separate occurrences of the same table.

4. **WHERE Clause**:
   - The `WHERE` clause specifies the conditions that the data must satisfy for the query to return results.
   - `w1.Temperature > w2.Temperature`: This condition checks if the temperature of `w1` is greater than the temperature of `w2`.
   - `datediff(w1.recordDate, w2.recordDate) = 1`: This condition checks if the difference in days between the `recordDate` of `w1` and `w2` is equal to 1. This effectively checks if the two records have consecutive dates.

5. **Result**:
   - The query will retrieve the `id` values from the `Weather` table where the temperature of the first record (`w1`) is greater than the temperature of the second record (`w2`) and the dates of the two records are consecutive.

In summary, this SQL query retrieves the `id` values of records from the `Weather` table where the temperature of the first record is higher than the temperature of the next consecutive record. It essentially finds records with a temperature increase between consecutive days.
