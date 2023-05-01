---
title: Employees Earning More Than Their Managers
tags: ['training', 'task']
languages: ['sql']
---
# Employees Earning More Than Their Managers

```sql
SELECT a.Name AS Employee
FROM Employee a, Employee b
WHERE a.ManagerId = b.Id AND a.Salary > b.Salary
```

* [Go back](../readme.md)
