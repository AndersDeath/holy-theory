
# Combine Two Tables

```SQL
select p.FirstName, p.LastName, a.City, a.State from person p
left join address a on p.personid = a.personid

```

The SQL query retrieves the `FirstName` and `LastName` columns from the `person` table, along with the `City` and `State` columns from the `address` table. It performs a `LEFT JOIN` operation between the `person` and `address` tables using the `personid` column as the join condition.

Here's a breakdown of the query:

1. The `SELECT` statement specifies the columns to be retrieved from the tables.

2. `p.FirstName` retrieves the `FirstName` column from the `person` table.

3. `p.LastName` retrieves the `LastName` column from the `person` table.

4. `a.City` retrieves the `City` column from the `address` table.

5. `a.State` retrieves the `State` column from the `address` table.

6. The `FROM` clause specifies the source tables for the query.

7. `person p` specifies the `person` table with an alias of `p`.

8. The `LEFT JOIN` keyword performs a left outer join operation between the `person` and `address` tables.

9. `address a` specifies the `address` table with an alias of `a`.

10. The `ON` keyword specifies the join condition between the `person` and `address` tables. In this case, the join is based on matching values in the `personid` column.

The result of the query will contain rows with the `FirstName` and `LastName` values from the `person` table, along with the corresponding `City` and `State` values from the `address` table. If there is no matching address for a person, the `City` and `State` values will be `NULL` for that person.

- [Go back](../readme.md)
