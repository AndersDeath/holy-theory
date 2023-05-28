# Customers Who Never Order
---
# Customers Who Never Order

```SQL
SELECT Name AS Customers FROM Customers WHERE Id NOT IN( SELECT CustomerId FROM Orders);
```
* [Go back](../readme.md)
