# Employee Bonus

```sql
SELECT Employee.name, Bonus.bonus
FROM Employee
LEFT JOIN Bonus ON Employee.empId = Bonus.empId
WHERE Bonus.bonus < 1000 OR Bonus.bonus IS NULL;
```

**Solution:**

Step-by-step breakdown of the query:

1. `SELECT Employee.name, Bonus.bonus`: This part of the query selects the `name` column from the `Employee` table and the `bonus` column from the `Bonus` table.

2. `FROM Employee`: This part of the query specifies the source table, which is `Employee` in this case.

3. `LEFT JOIN Bonus ON Employee.empId = Bonus.empId`: This part of the query performs a `LEFT JOIN` between the `Employee` and `Bonus` tables based on the common column `empId`. The `LEFT JOIN` ensures that all rows from the left table (`Employee`) are included in the result, and matching rows from the right table (`Bonus`) are joined based on the specified condition.

4. `WHERE Bonus.bonus < 1000 OR Bonus.bonus IS NULL`: This part of the query filters the joined results. It includes only those rows where the `bonus` value from the `Bonus` table is less than 1000 or where the `bonus` value is `NULL`. This means that the query includes employees who have a bonus less than 1000 or employees who do not have any bonus (bonus value is `NULL`).

5. The query execution returns the `name` and `bonus` values that satisfy the condition of having a bonus less than 1000 or no bonus (`NULL`).

Techniques used:

1. SQL Query Language: The code uses SQL (Structured Query Language) to interact with the database. SQL is a standard language used for querying and manipulating relational databases.

2. SELECT Statement: The query uses the `SELECT` statement to specify the columns to be retrieved from the database.

3. LEFT JOIN: The query uses a `LEFT JOIN` to combine rows from two tables based on a common column (`empId`), including all rows from the left table (`Employee`) and matching rows from the right table (`Bonus`).

4. WHERE Clause: The query uses the `WHERE` clause to filter the rows based on the specified condition (bonus less than 1000 or `NULL`).

Summary:

The provided SQL query retrieves the `name` and `bonus` values from the `Employee` and `Bonus` tables, respectively, using a `LEFT JOIN`. It filters the results to include only employees with a bonus amount less than 1000 or employees who do not have any bonus (`NULL` value in the `bonus` column).


