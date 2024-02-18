---
title: How to get argv in nodejs?
tags: ['question', 'interview']
languages: ['javascript', 'nodejs']
---
# How to get argv in nodejs?

In Node.js, you can access command-line arguments using the `process.argv` array. The `process.argv` array contains the command-line arguments that were passed when the Node.js process was launched. Here's how you can access and use `process.argv`:

1. **Basic Usage:**

    `process.argv` is an array where the first two elements are:

    - `process.argv[0]`: The path to the Node.js executable
    - `process.argv[1]`: The path to the JavaScript file being executed

    The actual command-line arguments start from `process.argv[2]` onwards. For example:

    ```javascript
    // app.js
    console.log(process.argv);
    ```

    If you run this script from the command line with additional arguments:

    ```
    node app.js arg1 arg2 arg3
    ```

    The output will be an array:

    ```
    [
      '/path/to/node', 
      '/path/to/app.js', 
      'arg1', 
      'arg2', 
      'arg3'
    ]
    ```

2. **Parsing Command-Line Arguments:**

    If you want to extract specific arguments, you can access them by their index in the `process.argv` array. For example, if you want to access `'arg1'` from the above example, you would use `process.argv[2]`:

    ```javascript
    // app.js
    const arg1 = process.argv[2];
    console.log('Argument 1:', arg1);
    ```

    Running the script with the same command as before will output:

    ```
    Argument 1: arg1
    ```

   If you need to parse command-line arguments in a more structured way, you might want to consider using libraries like `yargs` or `commander`, which provide a more user-friendly and powerful interface for handling command-line arguments in Node.js applications. These libraries make it easier to define options, handle flags, and manage arguments in a more intuitive manner.
