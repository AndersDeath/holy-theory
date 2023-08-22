# Balanced brackets
```typescript

const tokens = {
    '{': '}',
    '[': ']',
    '(': ')'
}
function isOpenTerm(s) {
    return tokens[s];
}

function matches(first, second) {
    for(let item in tokens) {
        if(item === first) {
           return tokens[item] === second
       } 
    }
    return false;
}

function isBalanced(s) {
    // Write your code here
   const stack = [];
   for(let i = 0; i < s.length; i++) {
       if(isOpenTerm(s[i])) {
           stack.push(s[i]);
       } else {
           if(stack.length === 0 || !matches(stack.pop(), s[i])) {
               return 'NO';
           }
       }
   }
   return stack.length === 0 ? 'YES' : 'NO'
}

```

**Solution:**
Below are the step-by-step explanations of the code:

1. The `tokens` object is defined, which maps opening parentheses, braces, and brackets to their corresponding closing counterparts.

2. The `isOpenTerm` function is defined, which takes one parameter:
   - `s`: a character representing an opening term.

3. The `isOpenTerm` function returns the corresponding closing term from the `tokens` object by accessing `tokens[s]`. If the opening term exists in the `tokens` object, its corresponding closing term is returned; otherwise, `undefined` is returned.

4. The `matches` function is defined, which takes two parameters:
   - `first`: a character representing an opening term.
   - `second`: a character representing a closing term.

5. The `matches` function iterates over the properties of the `tokens` object using a `for...in` loop. For each property, it checks if `item` (the opening term) is equal to `first`. If there is a match, it compares `tokens[item]` (the corresponding closing term) with `second` and returns `true` if they match; otherwise, it returns `false`.

6. If no match is found in the `tokens` object, the `matches` function returns `false`.

7. The `isBalanced` function is defined, which takes one parameter:
   - `s`: a string of parentheses, braces, and brackets.

8. A stack data structure, `stack`, is initialized as an empty array. It will be used to track opening terms.

9. The function iterates over each character of the input string using a `for` loop.

10. For each character, it checks if it is an opening term by calling the `isOpenTerm` function. If it is an opening term, it is pushed onto the stack.

11. If the character is not an opening term, it means it is a closing term. In this case, it checks if the stack is empty or if the closing term matches the last opening term on the stack using the `matches` function. If either condition fails, indicating unbalanced terms, it returns `'NO'`.

12. After processing all characters, the function checks if the stack is empty. If it is empty, it means all opening terms have been matched with their corresponding closing terms, and it returns `'YES'`. Otherwise, it returns `'NO'`.

**Techniques used:**

The following techniques are utilized within the code:

1. Defining an object to store mappings between opening and closing terms.
2. Accessing object properties using dot notation and square bracket notation.
3. Iterating over object properties using a `for...in` loop.
4. Conditional branching using `if` statements.
5. Manipulating an array-based stack by pushing and popping elements.
6. Returning results based on conditions.

** Source: http://hackerrank.com**

