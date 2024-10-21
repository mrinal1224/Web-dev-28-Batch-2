### Array Questions

1. **Reverse Array:**
   - Write a function `reverseArray(arr)` that takes an array as input and returns a new array with elements in reverse order.

2. **Remove Duplicates:**
   - Create a function `removeDuplicates(arr)` that removes duplicate elements from an array and returns a new array.
   - Example: 
     ```javascript
     removeDuplicates([1, 2, 2, 3, 4, 4]); // [1, 2, 3, 4]
     ```

3. **Find Maximum:**
   - Write a function `findMax(arr)` that returns the largest number in an array.
   - Example:
     ```javascript
     findMax([4, 1, 7, 3]); // 7
     ```

4. **Sum of Elements:**
   - Implement `sumArray(arr)` to return the sum of all elements in an array.
   - Example:
     ```javascript
     sumArray([1, 2, 3]); // 6
     ```

5. **Flatten Nested Arrays:**
   - Write a function `flattenArray(arr)` that flattens a nested array into a single-level array.
   - Example:
     ```javascript
     flattenArray([1, [2, [3, 4]]]); // [1, 2, 3, 4]
     ```

### Object Questions

6. **Merge Two Objects:**
   - Create a function `mergeObjects(obj1, obj2)` that merges two objects.
   - Example:
     ```javascript
     mergeObjects({a: 1}, {b: 2}); // {a: 1, b: 2}
     ```

7. **Count Properties:**
   - Write a function `countProperties(obj)` that returns the number of properties in an object.
   - Example:
     ```javascript
     countProperties({a: 1, b: 2}); // 2
     ```

8. **Deep Clone an Object:**
   - Implement `deepClone(obj)` that creates a deep copy of the given object.

9. **Filter Object by Keys:**
   - Write a function `filterByKeys(obj, keys)` that returns a new object containing only the specified keys from the original object.
   - Example:
     ```javascript
     filterByKeys({a: 1, b: 2, c: 3}, ['a', 'c']); // {a: 1, c: 3}
     ```

10. **Swap Keys and Values:**
    - Write a function `swapKeysAndValues(obj)` that swaps the keys and values of an object.
    - Example:
      ```javascript
      swapKeysAndValues({a: 1, b: 2}); // {1: 'a', 2: 'b'}
      ```

### String Questions

11. **Reverse String:**
    - Create a function `reverseString(str)` that returns the reversed version of a given string.
    - Example:
      ```javascript
      reverseString("hello"); // "olleh"
      ```

12. **Count Vowels:**
    - Write a function `countVowels(str)` that counts the number of vowels in a string.
    - Example:
      ```javascript
      countVowels("hello world"); // 3
      ```

13. **Check Palindrome:**
    - Create a function `isPalindrome(str)` that checks if a string is a palindrome.
    - Example:
      ```javascript
      isPalindrome("racecar"); // true
      ```

14. **Remove Whitespaces:**
    - Implement `removeWhitespaces(str)` that removes all spaces from a string.
    - Example:
      ```javascript
      removeWhitespaces("hello world"); // "helloworld"
      ```

15. **Capitalize Every Word:**
    - Write a function `capitalizeWords(str)` that capitalizes the first letter of every word in a string.
    - Example:
      ```javascript
      capitalizeWords("hello world"); // "Hello World"
      ```

### Execution Context and Hoisting Questions

16. **Predict Output:**
    - What will be the output of the following code?
      ```javascript
      console.log(a);
      var a = 10;
      ```
    - Explain why.

17. **Scope Example:**
    - Write a function `checkScope()` to demonstrate how `let`, `var`, and `const` behave differently inside a block scope.

18. **Hoisting of Functions:**
    - Predict the output:
      ```javascript
      greet();
      function greet() {
          console.log("Hello!");
      }
      ```

19. **Hoisting with `let` and `var`:**
    - Write a short code example showing how `let` and `var` differ in terms of hoisting.

20. **Temporal Dead Zone:**
    - Explain the concept of Temporal Dead Zone with an example using `let` and `const`.

### Variable Declaration Questions

21. **Reassign `let`, `var`, and `const`:**
    - Write code that demonstrates reassigning values to `let`, `var`, and `const`, and explain the outcomes.

22. **Variable Shadowing:**
    - Create an example showing variable shadowing using `let` and `var`.

23. **Global Scope vs Local Scope:**
    - Write code to explain the difference between global and local scopes using `var`, `let`, and `const`.

24. **Block Scope with `let`:**
    - Create an example that demonstrates block scoping with `let`.

25. **Differences between `var`, `let`, and `const`:**
    - Write a code snippet that highlights the key differences between these variable declarations.

### Higher-Order Function Questions

26. **Use `map` to Transform Array:**
    - Write a function `doubleNumbers(nums)` that doubles each number in the array using `map`.
    - Example:
      ```javascript
      doubleNumbers([1, 2, 3]); // [2, 4, 6]
      ```

27. **Use `filter` to Remove Falsey Values:**
    - Create a function `filterFalsey(arr)` that removes all falsey values from an array using `filter`.
    - Example:
      ```javascript
      filterFalsey([0, 1, false, 2, "", 3]); // [1, 2, 3]
      ```

28. **Find Object in Array:**
    - Write a function `findUser(users, name)` that uses `find` to return the user object matching the given name.
    - Example:
      ```javascript
      findUser([{name: 'Alice'}, {name: 'Bob'}], 'Bob'); // {name: 'Bob'}
      ```

29. **Use `reduce` to Sum Array Elements:**
    - Write a function `sumArray(nums)` that returns the sum of numbers in an array using `reduce`.
    - Example:
      ```javascript
      sumArray([1, 2, 3, 4]); // 10
      ```

30. **Check All Even Numbers using `every`:**
    - Write a function `allEven(nums)` that checks if all elements in an array are even using `every`.
    - Example:
      ```javascript
      allEven([2, 4, 6]); // true
      allEven([1, 2, 3]); // false
      ```

