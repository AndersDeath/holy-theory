# Duplicate Emails

```sql
select `Email` from `Person` group by `Email` having count(*) > 1
```

* [Go back](../readme.md)
