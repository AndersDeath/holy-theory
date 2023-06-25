---
title: Employee Bonus
tags: ['training', 'task']
languages: ['sql']
---
# Employee Bonus

```sql
SELECT Employee.name, Bonus.bonus
FROM Employee
LEFT JOIN Bonus ON Employee.empId = Bonus.empId
WHERE Bonus.bonus < 1000 OR Bonus.bonus IS NULL;
```

* [Go back](../readme.md)
