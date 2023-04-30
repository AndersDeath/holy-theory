---
title: Combine Two Tables
tags: ['training', 'task']
languages: ['sql']
---
# Combine Two Tables

```SQL
select p.FirstName, p.LastName, a.City, a.State from person p
left join address a on p.personid = a.personid

```

* [Go back](../readme.md)