---
title: Customers Who Never Order
tags: ['training', 'task']
languages: ['sql']
---
# Customers Who Never Order

```SQL
SELECT Name AS Customers FROM Customers WHERE Id NOT IN( SELECT CustomerId FROM Orders);
```
* [Go back](../readme.md)
