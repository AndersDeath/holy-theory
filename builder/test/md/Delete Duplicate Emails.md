# Delete Duplicate Emails
---
# Delete Duplicate Emails

```sql
delete A from Person A, Person B where A.id > B.id and A.email=B.email;
```
* [Go back](../readme.md)