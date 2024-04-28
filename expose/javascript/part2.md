# Part 2
1. At line 12, the console will log and print the value `3` because that's the value of `i` when the `for` loop exits, after incrementing through the indices of the `prices` array which has three elements.
2. Line 13 will print 150 because the variable `discountedPrice` has function scope, and hence, in the last iteration of the `for` loop, `discountedPrice` calculautes the last item which is 150. 
3. Line 14 will print out 150 because the variable `finalPrice` has function scope, and so it can be read outside of the `for` loop. The last value. at `i = 2` that is assigned to `finalPrice` before the loop terminates results in 150. 
4. This function will return `[50, 100, 150]` since it applies the 50% discount from the input argument to each price, and subsequently rounds them to the nearest cent. The new discounted price is then pushed into the discounted array. 
5. Line 12 will cause an error saying that `i` is not defined, because the variable `i` is declared using `let` which makes it scope limited to only within the for-loop. Since line 12 isn't nested in the for loop, attempting to print out `i` causes an error due to being out of scope. 
6. Line 13 will cause an error stating that `discountedPrice` is not defined, since we are using `let` to declare it, which limits it to only being within the block-scope. We can only access `discountedPrice` within the for-loop, and hence, attempting to print it ouside of the `for` loop will result in an error.
7. Line 14 will print the the value `150`, since the variable `finalPrice` is declared in the function-scope. After all the iterations performed in the `for` loop, the final value calculated by `finalPrice` will be 150 and is able to be printed due to the scope functionality of `finalPrice`.
8. The function will return `[50, 100, 150]` which is the result of the integer values in the array being discounted by the specified `0.5` amount. There is no errors in the code. 
9. Line 11 will cause an error stating that the variable `i` is not defined. Since `i` is defined using `let` and it is within the `for` loop, it has block-scope functionality. Thus, when attempting, to print `i` outside of the `for` loop we encounter an out of scope error. 
10. Line 12 will print out `3` since the `const` variable and was defined to be `prices.length`, which is `3` and cannot be reassigned. 
11. The function will return `[50, 100, 150]`, since `discountedPrice` in the `for` loop is always being declared using the `const` keyword so it does not throw an error. The variable `i` is also declared with block-scope functionality and is not being accessed out of scope. Additionally, `discounted` has full scope so can be returned normally. 

## Data Types
12. a) `student.name`   \
    b) `student.['Grad Year']`\
    c) `student.greeting()` \
    d) `student.['Favorite Teacher'].name` \
    e) `student.courseLoad[0]` 


## Basic Operators & Type Conversions
13. a) Output: `32`; The integer `2` is convertered to a string following concatenation. \
    b) Output: `1`; The string `3` is converted to a `int` to allow for arithmetic operations. \
    c) Output: `3`; `null` gets mapped to the integer of 0\
    d) Output: `3null`;  `null` is converted to a string following concatenation \
    e) Output: `4`; `true` gets mapped to its integer representation of `1` \
    f) Output: `0`; This is because `false` is converted to its integer representation `0` and, similarly, `null` is converted to its integer representation `0` \ 
    g) Output: `3undefined`; This is because `undefined` is converted to its string representation \
    h) Output: `NaN`; When subtracting, both `3` and `undefined` attempt to convert to integers. However, only `3` is able to convert to an `int`, but not `undefined`, and thus, this results in a calculation error.

14. a) Output: `true`; Since the string is converted to an `int` and then the comparison happens between two numbers which is true in this case. \
    b) Output: `false`; When comparing strings, we use lexicographic order, and since `2` is considered greather than `1` the comparison halts there and is `false` \
    c) Output: `true`; The string `2` is converted to the int `2` and the comparison is `true` \
    d) Output: `false`; The strict equality operator checks for value equality without type conversion. Since there are 2 different types, it results in `false` immediately. \
    e) Output: `false`; The boolean `true` is converted to `1` when compared with `int`, and so this equality becomes `false`.\
    f) Output: `true`; `Boolean(2)` type-casts int `2` into a boolean, which is becomes `true`. Thus, `true === true` is true. 

15. The `==` operator checks if two values are equal after converting them to a common type, whereas the `===` operator checks if two values are equal without type conversion, meaning that both the value and the type must be the same – with strict equality. 
    
## Loops
16. Refer to `part2-question16.js` in `expose/javascript`


## Functions
17. When the function `modifyArray` is invoked with the initial array `[1,2,3]` and the doSomething callback, it processes each element to produce a new array `[2,4,6]`. Inside `modifyArray`, a fresh array is created to hold the processed elements. It loops over the initial array, applying the `doSomething` function to each element. This function takes a number, doubles it, and the result is appended to the new array. Once all elements have been doubled and added to the new array, it is returned, yielding the transformed array `[2,4,6]`.

18. Refer to `part2-question18.js` in `expose/javascript`
19. Output of code in `part2-question18.js`:
```
1
4
3
2
```