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