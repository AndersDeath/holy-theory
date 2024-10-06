---
title: Game Play Analysis I
tags: ['training', 'task']
languages: ['sql']
---
# Game Play Analysis I

```sql
SELECT player_id, MIN(event_date) AS first_login
FROM Activity
GROUP BY player_id
```

In the given SQL query, we are selecting the `player_id` and the minimum `event_date` (earliest login date) for each player from the `Activity` table. Here's a step-by-step explanation of the query:

1. `SELECT player_id, MIN(event_date) AS first_login`: This part of the query specifies the columns we want to select. We want to retrieve the `player_id` and the minimum (`MIN`) value of the `event_date`. We also use the `AS` keyword to give the minimum `event_date` column an alias name of `first_login`.

2. `FROM Activity`: This part of the query specifies the table we are selecting data from, which is the `Activity` table.

The query will return a result set with two columns: `player_id` and `first_login`. Each row in the result set will represent a unique `player_id` along with their earliest login date (`first_login`) recorded in the `Activity` table.

Technique used in the query:
- Aggregate function (`MIN`): The `MIN` function is used to find the minimum value of the `event_date` column for each `player_id`. It helps to determine the earliest login date for each player.



* [Go back](../readme.md)
