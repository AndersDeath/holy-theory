---
title: Big countries
tags: ['training', 'task']
languages: ['sql']
---
# Big countries

```sql
SELECT name, population, area FROM World WHERE population >= 25000000 OR area >= 3000000;
```

The given code is a SQL query. It selects the columns `name`, `population`, and `area` from the `World` table and applies a filter using the `WHERE` clause. The filter specifies that only rows satisfying either the condition `population >= 25000000` or the condition `area >= 3000000` should be returned. Here's the breakdown of the query:

- `SELECT`: Specifies the columns to be retrieved from the table.
- `name, population, area`: The columns to be selected.
- `FROM World`: Specifies the table `World` from which the data will be retrieved.
- `WHERE`: Specifies the condition for filtering the rows.
- `population >= 25000000 OR area >= 3000000`: The filtering condition. It checks if either the population is greater than or equal to 25,000,000 or the area is greater than or equal to 3,000,000.

In summary, the query selects the `name`, `population`, and `area` columns from the `World` table, and only retrieves the rows where either the population is greater than or equal to 25,000,000 or the area is greater than or equal to 3,000,000.


* [Go back](../readme.md)
