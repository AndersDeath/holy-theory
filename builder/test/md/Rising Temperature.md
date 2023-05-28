# Rising Temperature
---
# Rising Temperature

```SQL
# Write your MySQL query statement below

SELECT w1.id
FROm Weather w1, Weather w2
WHERE w1.Temperature > w2.Temperature
AND datediff(w1.recordDate, w2.recordDate) = 1;
```

* [Go back](../readme.md)