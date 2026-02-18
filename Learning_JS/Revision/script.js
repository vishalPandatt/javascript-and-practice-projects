// // Function Feature: -- we can assign a function to a variable, we can pass a function as an argument to another function, we can return a function from a function, we can have anonymous functions, we can have named function expressions, we can have immediately invoked function expressions (IIFE), we can have closures, we can have higher-order functions.


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


// Block Scope:-- Block scope is a type of scope that is created by a block of code, such as a loop or an if statement. Variables and functions defined in a block scope can only be accessed within that block.

// Function Scope:-- Function scope is a type of scope that is created by a function. Variables and functions defined in a function scope can only be accessed within that function.

// Shadowing:-- Shadowing is a phenomenon that occurs when a variable or function in a local scope has the same name as a variable or function in a parent scope. In this case, the variable or function in the local scope will "shadow" the variable or function in the parent scope, meaning that it will take precedence over it.
// we can not shadowing a let or const variable in var variable but we can shadowing a var variable in let or const variable. because of the temporal dead zone. 

// Laximal Scope: -- Block inside another block. each block has its own scope. The inner block can access the variables and functions of the outer block, but the outer block cannot access the variables and functions of the inner block. This is called lexical scope.

// Closures: -- A closure is a function that has access to the variables and functions of its parent scope, even after the parent function has finished executing. This is because the inner function retains a reference to the variables and functions of the outer function, allowing it to access them even after the outer function has returned. Closures are often used to create private variables and functions, as well as to implement data encapsulation and modular programming.
// (function along with its lexical scope bundole together is called closure)

//  currying: -- Currying is a functional programming that transforms a function with multiple arguments into a sequence of functions that each take a single argument.

// Higher Order Function: -- A higher-order function is a function that takes one or more functions as arguments and/or returns a function as its result.

// Recursion: -- Recursion is a programming technique in which a function calls itself in order to solve a problem. Recursion can be used to solve problems that can be broken down into smaller, similar subproblems. 


// Asynchronous Programming: -- Asynchronous programming is a programming paradigm that allows for non-blocking operations. In JavaScript, asynchronous programming is often achieved using callbacks, promises, and async/await syntax. For example, when making an API call, instead of blocking the main thread while waiting for the response, asynchronous programming allows the application to continue running and handle the response once it is received.

// Event Delegation: -- Event delegation is a technique in JavaScript that allows you to handle events on a parent element instead of attaching event listeners to individual child elements.

// Prototypal Inheritance: -- Prototypal inheritance is a feature in JavaScript that allows objects to inherit properties and methods from other objects. In JavaScript, every object has a prototype, which is another object that it inherits from.

// Event Bubbling: -- Event bubbling is a mechanism in JavaScript where an event starts from the target element and then propagates up through its ancestors in the DOM tree. When an event occurs on an element, it first triggers any event handlers attached to that element, and then it continues to bubble up to its parent elements, triggering any event handlers attached to those parents as well. This process continues until it reaches the root of the DOM tree. Event bubbling allows for efficient event handling.

// Event Capturing: -- Event capturing is a mechanism in JavaScript where an event starts from the root of the DOM tree and propagates down to the target element. When an event occurs, it first triggers any event handlers attached to the root element, and then it continues to capture down through its descendants until it reaches the target element, triggering any event handlers attached to those descendants as well.


// Debouncing: -- Debouncing is a technique in JavaScript that limits the rate at which a function can be executed.


// Throttling: -- Throttling is a technique in JavaScript that limits the number of times a function can be executed over a certain period of time. It is often used to improve performance and reduce the number of times a function is called in response to events such as scrolling, resizing, or typing.


// Memoization: -- Memoization is a technique in JavaScript that optimizes the performance of a function by caching its results. When a memoized function is called with a particular set of arguments, it checks if the result for those arguments is already stored in the cache. If it is, it returns the cached result instead of executing the function again. If not, it executes the function, stores the result in the cache, and then returns it. This can significantly improve the performance of functions.

// Ṣet timeout: -- The setTimeout() function is a built-in JavaScript function that allows you to execute a function after a specified delay. It takes two arguments: the first is the function to be executed, and the second is the delay in milliseconds before the function is executed. For example, setTimeout(() => { console.log("Hello, World!"); }, 1000); will log "Hello, World!" to the console after a delay of 1 second (1000 milliseconds).

// function greet(){
//     let i =0;
//     setTimeout(function(){
//         console.log(i);
//     }, 1000);
//     console.log("Hello, World!");
// };

// greet();

// Anonymous Function: -- An anonymous function is a function that does not have a name. It is often used as a callback function or as an argument to another function. 


// Immediately Invoked Function Expression (IIFE): -- An IIFE is a function that is defined and executed immediately. It is often used to create a new scope and avoid polluting the global scope.


// Function Statement and Function Expression: -- A function statement is a function that is defined using the function keyword and has a name. we can access the function before iniclize it because of hosting.
// // Example:
// function greet() {
//     console.log("Hello, World!");
// }

// Function Expression: -- A function expression is a function that is defined using the function keyword and does not have a name. It can be assigned to a variable or passed as an argument to another function.Example:
// let greet = function() {
//     console.log("Hello, World!");
// }

// Named Function Expression: -- A named function expression is a function that is defined using the function keyword and has a name. It can be assigned to a variable or passed as an argument to another function. Example:
// let greet = function greetFunction() {
//     console.log("Hello, World!");
// }

// Different between Parameter and Argument: -- A parameter is a variable that is defined in the function declaration and is used to receive a value when the function is called. An argument is the actual value that is passed to the function when it is called.
//  For example, in the function declaration function greet(name) { console.log("Hello, " + name); }, name is a parameter. When we call the function greet("John"), "John" is an argument.

// First Class Function: -- A first-class function is a function that can be treated as a first-class citizen in a programming language. This means that the function can be assigned to a variable, passed as an argument to another function, and returned from a function.

// Function Feature: -- we can assign a function to a variable, we can pass a function as an argument to another function, we can return a function from a function, we can have anonymous functions, we can have named function expressions, we can have immediately invoked function expressions (IIFE), we can have closures, we can have higher-order functions.

// Arrow Function: -- An arrow function is a concise way to write a function in JavaScript. It is defined using the => syntax and does not have its own this, arguments, super, or new.target. Arrow functions are often used for short, simple functions and for functions that do not require their own this context. For example:
// let greet = (name) => {
//     console.log("Hello, " + name);
// }

// Callback Function: -- A callback function is a function that is passed as an argument to another function and is executed after the parent function has completed its execution. Callback functions are often used for asynchronous programming and event handling. For example:
// function fetchData(callback) {
//     setTimeout(() => {}, 1000);
//     callback("Data fetched successfully!");
// }