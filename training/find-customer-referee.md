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

* [Go back](../readme.md)
