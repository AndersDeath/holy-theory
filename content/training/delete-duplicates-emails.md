---
title: Delete Duplicate Emails
tags: ['training', 'task']
languages: ['sql']
---
# Delete Duplicate Emails

```sql
delete A from Person A, Person B where A.id > B.id and A.email=B.email;
```

**Solution:**

Step-by-step breakdown of the SQL query:

1. The query uses the `DELETE` statement to remove rows from the table `Person`.

2. The tables `Person A` and `Person B` are specified in the `FROM` clause, representing two instances of the `Person` table.

3. The `WHERE` clause is used to specify the condition for deleting rows.

4. The condition `A.id > B.id` compares the `id` column values between the two instances of the `Person` table.

5. The condition `A.email = B.email` compares the `email` column values between the two instances of the `Person` table.

6. The `DELETE` statement removes the rows from the `Person` table where both conditions are satisfied.

Techniques used:

1. Table Specification: The `FROM` clause identifies the tables `Person A` and `Person B` from which to delete rows.

2. Conditional Filtering: The `WHERE` clause filters the rows based on the specified conditions.

3. Comparison Operators: The `>` operator is used to compare the `id` column values, and the `=` operator is used to compare the `email` column values.

4. Delete Statement: The `DELETE` statement is used to remove the selected rows from the table.

Summary:

The provided SQL query deletes rows from the `Person` table where the `id` value of one row is greater than the `id` value of another row, and their `email` values are the same. This ensures that only one row with the duplicate email address and the higher `id` value remains in the table.


* [Go back](../readme.md)
