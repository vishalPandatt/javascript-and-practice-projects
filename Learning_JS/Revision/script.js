// // Data Types in JavaScript: --

// // Data types are mainly 2 types
// // 1. Primitive data types
// // 2. Non-primitive data types

// // in primitive data types there are two types of data types
// // 1. Numeric data types
// // 2. Non-numeric data types

// // in primitive-type data types there are seven types of data types
// // 1. Number
// // 2. String
// // 3. undefined
// // 4. null
// // 5. Boolean
// // 6. Symbol
// // 7. BigInt

// //  in non-primitive data types there are two types of data types
// // 1. Object
// // 2. Array
// // 3. Function


// // 1. BigInt: It is a new data type in JavaScript that can represent large number integers. For example:
// let bigIntValue = 1234567890123456789012345678901234567890n;

// // 2. Symbol: It is a new data type in JavaScript that can represent unique identifiers. For example:
// let symbolValue = Symbol('uniqueIdentifier');

// // 3. Function: It is a new data type in JavaScript that can represent a block of code that can be executed when called. For example:
// function greet() {
//     console.log("Hello, World!");
// }

// // 4. Object: It is a non-primitive data type in JavaScript that can represent a collection of key-value pairs. For example:
// let person = {
//     name: "John",
//     age: 30,
//     city: "New York"
// };

// // 5. null: that represents the absence of any value. For example:
// let nullValue = null;

// // 6. undefined: that represents a variable that has been declared but has not been assigned a value. For example:
// let undefinedValue;

// // 7. Boolean: that represents a logical value that can be either true or false. For example:
// let isJavaScriptFun = true;


// // Operators in JavaScript: --

// // 1. Arithmetic Operators: These operators are used to perform mathematical operations. For example:
// // (+, -, *, /, %, **)

// // 2. Assignment Operators: These operators are used to assign values to variables. For example:
// // (=, +=, -=, *=, /=, %=, **=)

// // 3. Comparison Operators: These operators are used to compare two values and return a boolean value. For example:
// // (==, ===, !=, !==, >, <, >=, <=)

// // 4. Logical Operators: These operators are used to combine multiple boolean expressions and return a boolean value. For example:
// // (&&, ||, !)

// // 5. Bitwise Operators: These operators are used to perform bitwise operations on binary numbers. For example:
// // (&, |, ^, ~, <<, >>, >>>)

// // 6. Ternary Operator: This operator is used to evaluate a condition and return one of two values based on the result. For example:
// let age = 18;
// let canVote = (age >= 18) ? "Yes" : "No";
// console.log(canVote); // Output: Yes

// // Switch Statement in JavaScript: --

// // The switch statement is used to perform different actions based on different conditions. For example:    
// let day = 2;
// switch (day) {
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Tuesday");
//         break;
//     case 3:
//         console.log("Wednesday");
//         break;
//     default:       
//         console.log("Invalid day");
// }

// // Loops in JavaScript: --

// // 1. For Loop: It is used to repeat a block of code a specified number of times. For example:
// for (let i = 0; i < 5; i++) {
//     console.log(i);
// }



// Hosting in JS
// we can access the function even before we have iniclize it.

// Call Stack in JS: --call stack is a use to execute the code in order. JS is a synchronous single threaded language. It means that only one thing can be executed at a time. The call stack is a data structure that keeps track of the function calls in the program. When a function is called, it is added to the call stack. When the function is finished executing, it is removed from the call stack. If there are any errors in the code, they will be thrown when the function is executed and will be caught by the call stack. 

// but we can only access var variable before iniclize it. we can not access let and const variable before iniclize it. because of the temporal dead zone. The temporal dead zone is the time between the creation of the variable and its iniclization. During this time, the variable is in a state of "dead" and cannot be accessed. If we try to access the variable during this time, it will throw a ReferenceError.

// let or const veriable are iniclized in different location in memory than var variable. var variable is iniclized in global scope and let and const variable are iniclized in block scope.

// var x = 1;
// a();
// b();
// console.log(x);

// function a() {
//     var x = 2;
//     console.log(x);
// };

// function b() {
//     var x = 3;
//     console.log(x);
// }


// Scope: where we can access the variable and function in our code. There are three types of scope in JavaScript: --

// 1. Global Scope: Variables and functions defined in the global scope can be accessed from anywhere in the code.

// 2. Local Scope: Variables and functions defined in a local scope can only be accessed within that scope.

// 3. Block Scope: Variables and functions defined in a block scope can only be accessed within that block.

// Scope Chain: -- Scope chain is a mechanism that allows a function to access variables and functions defined in its parent scope. When a function is called, it creates a new scope. If the function tries to access a variable or function that is not defined in its own scope, it will look for it in the parent scope. This process continues until it reaches the global scope. If the variable or function is not found in any of the scopes, it will return undefined.

// Laxical Envirment in JS: -- Laxica Envirment is a local memory where the variable and function are stored. It is created when a function is called and destroyed when the function is finished executing.


// Unfdefined: -- It is a default value of a variable that has been declared but has not been assigned a value. 

// Not Defined: -- It is an error that occurs when we try to access a variable that has not been declared.

// Null: -- It is a value that represents the absence of any value. It is an assignment value that can be assigned to a variable to indicate that it has no value.

// TypeError: -- It is an error that occurs when we try to perform an operation on a value of the wrong type. For example, if we try to call a function on a variable that is not a function, it will throw a TypeError.

// SyntaxError: -- It is an error that occurs when we try to execute code that has a syntax error. For example, if we forget to close a parenthesis or a curly brace, it will throw a SyntaxError.

// ReferenceError: -- It is an error that occurs when we try to access a variable that is not defined. For example, if we try to access a variable that has not been declared, it will throw a ReferenceError.