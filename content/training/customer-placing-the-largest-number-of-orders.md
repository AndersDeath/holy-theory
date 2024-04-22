---
title: Customer Placing the Largest Number of Order
tags: ["training", "task"]
languages: ["sql"]
---

# Customer Placing the Largest Number of Order

```SQL
SELECT customer_number
FROM Orders
GROUP BY customer_number
HAVING COUNT(order_number) = (
    SELECT COUNT(order_number)
    FROM Orders
    GROUP BY customer_number
    ORDER BY COUNT(order_number) DESC
    LIMIT 1
);

```

**Solution:**
This SQL query retrieves the `customer_number` from the `Orders` table for customers who have placed the maximum number of orders. Here's a breakdown of the query:

1. **Main Query:**

   - The main query selects the `customer_number` from the `Orders` table.
   - It uses the `GROUP BY` clause to group the orders based on the `customer_number`.
   - The `HAVING` clause filters the results to include only those groups where the count of `order_number` is equal to the maximum count of `order_number` in the entire table.

2. **Subquery:**
   - The subquery calculates the count of `order_number` for each `customer_number`.
   - It uses the `GROUP BY` clause to group the orders based on the `customer_number`.
   - The `ORDER BY` clause orders the results by the count of `order_number` in descending order.
   - The `LIMIT 1` clause ensures that only the row with the maximum count is selected.

The main idea is to compare the count of orders for each customer with the maximum count across all customers, and select only those customers whose order count matches the maximum.
