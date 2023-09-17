# Integer to Roman

```typescript

function intToRoman(num: number): string {
    const M = ['', 'M', 'MM', 'MMM'];
    const C = ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'];
    const X = ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'];
    const I = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];

    return (
        M[Math.floor(num / 1000)] +
        C[Math.floor((num % 1000) / 100)] +
        X[Math.floor((num % 100) / 10)] +
        I[num % 10]
    );
};

```

The code is a TypeScript function that converts an integer to its Roman numeral representation. It uses predefined arrays for thousands (M), hundreds (C), tens (X), and ones (I) places to build the Roman numeral string.

Here's a step-by-step explanation of the code:

1. The function `intToRoman` takes an integer `num` as input and returns a string representing its Roman numeral equivalent.

2. Four arrays `M`, `C`, `X`, and `I` are defined to represent Roman numerals for thousands, hundreds, tens, and ones places, respectively. Each array contains the Roman numerals for the numbers from 0 to 9 in their corresponding places.

3. The function returns the Roman numeral by concatenating the Roman numerals for each place together.

4. To convert the integer to its Roman numeral representation:
   - `Math.floor(num / 1000)` calculates the thousands place value and retrieves the corresponding Roman numeral from the `M` array.
   - `Math.floor((num % 1000) / 100)` calculates the hundreds place value and retrieves the corresponding Roman numeral from the `C` array.
   - `Math.floor((num % 100) / 10)` calculates the tens place value and retrieves the corresponding Roman numeral from the `X` array.
   - `num % 10` calculates the ones place value and retrieves the corresponding Roman numeral from the `I` array.

5. The Roman numerals for each place are concatenated to form the final Roman numeral representation of the given integer.

Techniques used in this code include:
- Utilizing predefined arrays to represent Roman numerals for different places (thousands, hundreds, tens, and ones).
- Utilizing integer division and remainder operations to extract the place values (thousands, hundreds, tens, and ones) from the given number.
- Concatenating the Roman numerals for each place to construct the final Roman numeral representation of the integer.


