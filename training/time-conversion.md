---
title: Time conversion
tags: ["training", "task"]
languages: ["typescript"]
---

# Time conversion

```typescript
function timeConversion(s: string): string {
  const strArr = s.split(":");
  const modifier = strArr[2].slice(-2);
  let hours = strArr[0];
  if (modifier === "PM" && strArr[0] !== "12") {
    hours = +strArr[0] + 12 + "";
  }
  if (modifier === "AM" && strArr[0] === "12") {
    hours = "00";
  }
  return `${hours}:${strArr[1]}:${strArr[2].slice(0, -2)}`;
}
```

- **Input**: A time string in 12-hour format (`s`).

- **Output**: The corresponding time in 24-hour format.

1. **Split the Time String**:

   - Split the input time string `s` using the colon (`:`) delimiter.
   - Create an array `strArr` containing hours, minutes, and seconds.

2. **Extract the Modifier (AM/PM)**:

   - Get the last two characters of the seconds component to determine if it's "AM" or "PM".
   - Store the modifier in the `modifier` variable.

3. **Convert Hours for PM**:

   - If the modifier is "PM" and the hours are not already 12, add 12 to the hours.
   - Convert the hours to a number using `+`, add 12, and convert it back to a string.

4. **Convert Hours for AM**:

   - If the modifier is "AM" and the hours are 12, set the hours to "00".

5. **Compose and Return the New Time String**:
   - Construct a new time string using the modified hours, original minutes, and seconds (excluding the modifier).

**Techniques Used**:

- **String Splitting**: The input time string is split into an array.
- **Conditional Statements**: Used to handle AM and PM cases and modify the hours accordingly.
- **String Manipulation**: Creating the final time string by composing different parts.

**Algorithm**:

1. Split the input time string into an array of hours, minutes, and seconds.
2. Determine the AM/PM modifier.
3. Convert hours according to the modifier.
4. If AM and hours are 12, set hours to "00".
5. Compose the new time string using the modified hours, original minutes, and seconds.

**Time Complexity**:

- String splitting and manipulation: O(1)

**Space Complexity**:

- Space for the `strArr` array: O(1)
- Other variables: O(1)

Overall space complexity: O(1)
