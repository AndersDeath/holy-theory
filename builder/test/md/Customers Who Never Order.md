# Customers Who Never Order

```SQL
SELECT Name AS Customers FROM Customers WHERE Id NOT IN( SELECT CustomerId FROM Orders);
```

**Solution:**

Step-by-step breakdown of the SQL query:

1. The query selects the `Name` column from the `Customers` table and aliases it as `Customers`.

2. The `FROM` clause specifies the table `Customers` from which to retrieve the data.

3. The `WHERE` clause filters the results based on a condition.

4. The condition uses the `NOT IN` operator and a subquery to check if the `Id` column of the `Customers` table is not present in the `CustomerId` column of the `Orders` table.

5. The subquery selects the `CustomerId` column from the `Orders` table.

6. The `NOT IN` operator negates the condition, selecting only the rows where the `Id` column of `Customers` does not exist in the `CustomerId` column of `Orders`.

7. The query returns the result set with the selected `Name` column aliased as `Customers`.

Techniques used:

1. Column Selection: The query uses the `SELECT` statement to specify the `Name` column from the `Customers` table.

2. Table Specification: The `FROM` clause identifies the table `Customers` from which to retrieve the data.

3. Conditional Filtering: The `WHERE` clause filters the results based on a condition involving the `NOT IN` operator and a subquery.

4. Subquery: The subquery is used to retrieve the `CustomerId` column from the `Orders` table for comparison in the outer query.

5. Alias: The `AS` keyword is used to alias the selected `Name` column as `Customers` in the result set.

Summary:

The provided SQL query retrieves the names of customers from the `Customers` table who do not have any corresponding orders in the `Orders` table. It achieves this by using a subquery with the `NOT IN` operator to exclude customers whose `Id` values exist in the `CustomerId` column of the `Orders` table.


