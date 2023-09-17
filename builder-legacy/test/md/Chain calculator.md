# Chain calculator

```typescript
function ChainCalculator(given) {
    this.num = given || 0;
    const actions = {
        half: ['this.num = this.num/2; return this;'],
        quarter: ['this.num = this.num/4; return this;'],
        third: ['this.num = this.num/3; return this;'],
        pow: ['given', 'this.num = Math.pow(this.num, given); return this;'],
        sqrt: ['this.num = Math.sqrt(this.num); return this;'],
        log: [`console.log(this.num); return this;`],
        sum: ['given',`this.num += given; return this;`],
        minus: ['given',`this.num -= given; return this;`],
        multiply: ['given',`this.num *= given; return this;`],
        divide: ['given',`this.num /= given; return this;`],
        finish: ['return this.num;']
    }

    for(const key in actions) {
        this[key] = new Function(...actions[key])
    }
}
const calculator = new ChainCalculator();

calculator.log().sum(15).log().sum(10).log().finish().log()
```

The code above defines a `ChainCalculator` constructor function that creates calculator objects with chainable operations. The calculator can perform various mathematical operations on a number value and supports method chaining. The operations are defined as properties of the calculator object, and each operation returns the calculator object itself, allowing for sequential method calls.

Here's a step-by-step breakdown of the code:

1. The `ChainCalculator` constructor function is defined, which takes an optional parameter `given` (defaults to 0). This parameter represents the initial value of the calculator.

2. Inside the constructor function, the `num` property is assigned the value of `given`. This property holds the current number value.

3. The `actions` object is defined, which maps operation names to their corresponding code strings. Each code string is an array of statements that modify the `num` property and return the calculator object.

4. A loop is used to iterate over each key (operation name) in the `actions` object.

5. For each key, a new function is created using the `Function` constructor. The code string for the corresponding operation is passed as arguments to the `Function` constructor to create the function.

6. The newly created function is assigned as a property of the calculator object using the current key (operation name).

7. The `...actions[key]` syntax is used to spread the code string array elements as separate arguments to the `Function` constructor. This allows the function to be defined with the statements from the code string.

8. After the loop, an instance of the `ChainCalculator` is created using the `new` keyword, without passing any arguments. This creates a calculator object with an initial value of 0.

9. The `calculator` object is used to chain method calls, performing various operations on the number value.

10. The `log()` method is called on the `calculator` object, which logs the current number value to the console. It returns the `calculator` object itself.

11. The `sum(15)` method is called on the `calculator` object, which adds 15 to the current number value. It returns the `calculator` object itself.

12. The `log()` method is called again, logging the updated number value to the console.

13. The `sum(10)` method is called, adding 10 to the current number value.

14. The `log()` method is called once more, logging the final number value to the console.

15. The `finish()` method is called, which returns the final number value.

16. The `log()` method is called again, but since it doesn't return the `calculator` object, it doesn't have any effect.

Please note that the code provided uses the `Function` constructor to dynamically create functions from code strings. While this approach offers flexibility, it can also be potentially unsafe if the code strings come from untrusted sources. It's important to ensure that the code strings used in this manner are secure and not susceptible to code injection vulnerabilities.



