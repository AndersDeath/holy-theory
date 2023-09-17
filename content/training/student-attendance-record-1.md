---
title: Student Attendance Record I
tags: ["training", "task"]
languages: ["typescript"]
---

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
}
```

**Description:**

1. **Input and Output**:

   - The `checkRecord` function takes a string `s` representing a student's attendance record and returns a boolean value indicating whether the record meets certain conditions.

2. **Absent and Late Counts**:

   - `absentCount` keeps track of the number of "A" (absent) occurrences in the attendance record.
   - `lateCount` keeps track of consecutive "L" (late) occurrences in the attendance record.

3. **Iteration**:

   - The code iterates through the string `s` character by character.

4. **Checking Absences**:

   - If the current character is "A" (absent), the `absentCount` is incremented.
   - If `absentCount` exceeds 1 (more than one "A"), the function returns `false`.

5. **Checking Lates**:

   - If the current character is "L" (late), the `lateCount` is incremented.
   - If `lateCount` reaches 3 and the previous two characters were also "L", the function returns `false`.

6. **Resetting Late Count**:

   - If the current character is not "L", the `lateCount` is reset to 0.

7. **Returning the Result**:
   - If the attendance record meets all conditions (at most one "A" and no more than two consecutive "L"s), the function returns `true`.

**Techniques used:**

1. String manipulation and parsing.
2. Tracking counts and conditions based on specific characters.
3. Iterating through a string and accessing characters.

**Algorithm Complexity:**

- Time Complexity: O(n), where n is the length of the input string `s`. The code iterates through the string once.
- Space Complexity: O(1), as only a constant amount of extra space is used (for variables like `absentCount` and `lateCount`).

This code efficiently checks a student's attendance record to ensure it meets the specified conditions.

- [Go back](../readme.md)
