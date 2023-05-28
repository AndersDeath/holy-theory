# Employees Earning More Than Their Managers
---
# Employees Earning More Than Their Managers

```sql
SELECT a.Name AS Employee
FROM Employee a, Employee b
WHERE a.ManagerId = b.Id AND a.Salary > b.Salary
```

* [Go back](../readme.md)
