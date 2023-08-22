# Duplicate Emails

```sql
select `Email` from `Person` group by `Email` having count(*) > 1
```

**Solution:**

Step-by-step breakdown of the query:

1. `SELECT Email`: This part of the query selects the `Email` column from the `Person` table.

2. `FROM Person`: This part of the query specifies the source table, which is `Person` in this case.

3. `GROUP BY Email`: This part of the query groups the results based on the values in the `Email` column. It combines rows with the same email into a single group.

4. `HAVING COUNT(*) > 1`: This part of the query filters the groups after the grouping has been done. It retains only those groups that have a count (number of occurrences) greater than 1. In other words, it selects only those email addresses that appear more than once in the `Person` table.

5. The query execution returns the `Email` values that satisfy the condition of having a count greater than 1.

Techniques used:

1. SQL Query Language: The code uses SQL (Structured Query Language) to interact with the database. SQL is a standard language used for querying and manipulating relational databases.

2. SELECT Statement: The query uses the `SELECT` statement to specify the columns to be retrieved from the database.

3. GROUP BY Clause: The query uses the `GROUP BY` clause to group the rows based on the values in the `Email` column.

4. HAVING Clause: The query uses the `HAVING` clause to filter the groups based on the condition that the count of rows in each group (`COUNT(*)`) is greater than 1.

Summary:

The provided SQL query retrieves the `Email` values from the `Person` table, groups them by `Email`, and then selects only those groups where the `Email` occurs more than once in the table.


