---
title: Find Customer Referee
tags: ['training', 'task']
languages: ['sql']
---
# Find Customer Referee

```sql
SELECT name
FROM customer
WHERE referee_id IS NULL OR referee_id != 2;
```

**Solution:**

This SQL query is used to retrieve the names of customers from the `customer` table based on certain conditions.

**Query breakdown:**

1. `SELECT name`: This part of the query specifies that we want to retrieve the `name` column from the `customer` table.

2. `FROM customer`: This part of the query specifies the table from which we want to retrieve the data, which is the `customer` table.

3. `WHERE referee_id IS NULL OR referee_id != 2`: This part of the query specifies the condition for filtering the data. The query retrieves customer names where either of the following conditions is true:
   - `referee_id` is `NULL` (i.e., the customer does not have a referee).
   - `referee_id` is not equal to `2` (i.e., the customer's referee is not with an ID of `2`).

**Summary:**

The SQL query retrieves the names of customers from the `customer` table where either the `referee_id` is `NULL` (indicating no referee) or the `referee_id` is not equal to `2` (indicating a different referee from the one with an ID of `2`).

Techniques used:

1. SQL SELECT statement: The query uses the `SELECT` statement to specify the columns to retrieve from the table.

2. SQL WHERE clause: The query uses the `WHERE` clause to specify the conditions for filtering the data.

* [Go back](../readme.md)
