---
title: Classes More Than 5 Students
tags: ["training", "task"]
languages: ["sql"]
---

# Classes More Than 5 Students

```SQL
SELECT class
FROM Courses
GROUP BY class
HAVING COUNT(student) >= 5;
```

1. **Select Statement:**

   - Use the `SELECT` statement to retrieve data from the database.

2. **Column Selection:**

   - Specify the column to be selected as `class`.

3. **Table Specification:**

   - Specify the table from which to retrieve data as `Courses`.

4. **Grouping:**

   - Use the `GROUP BY` clause to group the results based on the values in the "class" column.

5. **Counting Distinct Students:**

   - Use the `COUNT(student)` function within the `HAVING` clause to filter groups where the count of distinct values in the "student" column is greater than or equal to 5.

6. **Filtering with HAVING Clause:**

   - Apply the `HAVING` clause to filter groups based on the count condition.

7. **Final Result:**
   - Retrieve and display the distinct values in the "class" column that meet the specified criteria.

The result is a list of distinct class values from the "Courses" table where there are at least 5 distinct students enrolled in each class.
