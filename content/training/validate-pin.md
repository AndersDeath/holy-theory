---
title: Validate pin
tags: ["training", "task"]
languages: ["typescript"]
---

# Validate pin

```typescript
const validatePin = (pin: string): boolean => {
  if (pin.length !== 4 && pin.length !== 6) return false;
  return /^[0-9]{4}$|^[0-9]{6}$/gm.test(pin);
};
```

- **Input**:

  - `pin`: A string representing a PIN code.

- **Output**:
  - A boolean value indicating whether the given PIN is valid.

1. **Length Validation**:

   - Check if the length of the input `pin` is either 4 or 6.
   - If the length is not 4 or 6, return `false`, indicating that the PIN is not valid.

2. **Regular Expression Validation**:

   - Use a regular expression `/^[0-9]{4}$|^[0-9]{6}$/gm` to validate the PIN:
     - `^[0-9]{4}$`: Matches exactly 4 digits.
     - `|`: OR operator.
     - `^[0-9]{6}$`: Matches exactly 6 digits.
     - `/gm`: Flags for global and multiline matching.

3. **Test the Regular Expression**:
   - Use the `.test(pin)` method of the regular expression object to test if the `pin` matches the pattern.
   - Return the result of the test (either `true` if the PIN matches the pattern, or `false` if it doesn't).

**Techniques Used**:

- **Regular Expressions**: The code uses regular expressions to validate the PIN format.

**Algorithm**:

1. Check if the length of the input `pin` is either 4 or 6.

   - If not, return `false`.

2. Use the regular expression `/^[0-9]{4}$|^[0-9]{6}$/gm` to validate the PIN format.

3. Test the regular expression using `.test(pin)` and return the result.

**Time Complexity**:

- The time complexity of this code is O(1) as both length validation and regular expression matching are constant time operations.

**Space Complexity**:

- The space complexity is O(1) as the code uses a constant amount of extra space for the regular expression and variables.
