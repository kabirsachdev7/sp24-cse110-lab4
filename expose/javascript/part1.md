# Part 1
1. `values added: 20`
2. `final result: 20`
3. `values added: 20`
4. Line 13 results in a ReferenceError because the variable `result` is declared within the `if` block using `let` and hence is not accessible outside of it. Thus, `result` is not defined in the scope where `console.log` is being called.
5. Line 9 does not print anything because the code would throw an error when trying to reassign `result` on line 7
6. Line 13 would result in a `ReferenceError` as `result` is not accesible outside the block in which it's defined due to the `const` declaration in line 5. 
