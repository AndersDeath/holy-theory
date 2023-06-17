# Student Attendance Record I

```typescript
function checkRecord(s: string): boolean {
  let absentCount = 0;
  let lateCount = 0;

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (char === "A") {
      absentCount++;

      if (absentCount > 1) {
        return false;
      }
    }

    if (char === "L") {
      lateCount++;

      if (lateCount > 2 && s[i - 1] === "L" && s[i - 2] === "L") {
        return false;
      }
    } else {
      lateCount = 0;
    }
  }

  return true;
};
```
