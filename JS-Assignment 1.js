// todo: 1. Convert the string "123" to a number and add 7. (0.5 Grade)
// Output Example: 130

// let x = "123";
// let y = +x + 7;
// console.log(y);
//----------------------------------------------------------------------------------------

// todo: 2. Check if the given variable is falsy and return "Invalid" if it is. (0.5 Grade)
// • Input Example: 0
// • Output Example: "Invalid"

// const value = 0;
// if (!value) {
//   console.log("Invalid");
// } else {
//   console.log("Valid");
// }
//----------------------------------------------------------------------------------------

// todo: 3. Use for loop to print all numbers between 1 and 10, skipping even numbers using continue (0.5 Grade)
//  • Output Example:1, 3, 5, 7, 9

// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (let i = 0; i < array.length; i++) {
//   const element = array[i];
//   if (element % 2 === 0) {
//     continue;
//   }
//   console.log(element);
// }
//----------------------------------------------------------------------------------------
// todo: 4. Create an array of numbers and return only the even numbers using filter method. (0.5 Grade)
// • Input Example: [1, 2, 3, 4, 5]
// • Output Example: [2,4]/

// array = [1, 2, 3, 4, 5];
// even = array.filter(even);
// function even(num) {
//   if (num % 2 === 0) {
//     return num;
//   }
// }
// console.log(even);

// ! anotherWay
// array = [1, 2, 3, 4, 5];
// even = array.filter((even) => even % 2 === 0);
// console.log(even);

//----------------------------------------------------------------------------------------

//todo: 5. Use the spread operator to merge two arrays, then return the merged array. (0.5 Grade)
// • Input Example: [1, 2, 3], [4, 5, 6]
// • Output Example: [1, 2, 3, 4, 5, 6]

// arr1 = [1, 2, 3];
// arr2 = [4, 5, 6];
// totalArrays = [...arr1, ...arr2];
// console.log(totalArrays);

// ! anotherWay
// arr1 = [1, 2, 3];
// arr2 = [4, 5, 6];
// totalArrays = arr1.concat(arr2);
// console.log(totalArrays);

//----------------------------------------------------------------------------------------

//todo: 6. Use a switch statement to return the day of the week given a number (1 = Sunday ...., 7 = Saturday). (0.5 Grade)
// • Input Example: 2
// • Output Example: “Monday”

// let day = 2;
// switch (day) {
//   case 1:
//     console.log("Sunday");
//     break;
//   case 2:
//     console.log("Monday");
//     break;
//   case 3:
//     console.log("Tuesday");
//     break;
//   case 4:
//     console.log("Wednesday");
//     break;
//   case 5:
//     console.log("Thursday");
//     break;
//   case 6:
//     console.log("Friday");
//     break;
//   case 7:
//     console.log("Saturday");
//     break;
//   default:
//     console.log("Invalid");
//     break;
// }

//----------------------------------------------------------------------------------------
//todo: 7. Create an array of strings and return their lengths using map method (0.5 Grade)
// • Input: ["a", "ab", "abc"]
// • Output Example: [1, 2, 3]

// arr = ["a", "ab", "abc"];
// length = arr.map((length) => length.length);
// console.log(length);

//----------------------------------------------------------------------------------------
// todo: 8. Write a function that checks if a number is divisible by 3 and 5. (0.5 Grade)
// • Input Example: 15
// • Output Example: “Divisible by both”

// let num = 15;
// if (num % 3 === 0 && num % 5 === 0) {
//   console.log("Divisible by both");
// }

//----------------------------------------------------------------------------------------
//  todo: 9. Write a function using arrow syntax to return the square of a number (0.5 Grade)
// • Input Example: 5
// • Output Example: 25

// let num = 9;
// let square = (num) => num * num;
// console.log(square(num));

//----------------------------------------------------------------------------------------
//  todo: 10.Write a function that destructures an object to extract values and returns a formatted string. (0.5 Grade)
// • Input Example: const person = {name: 'John', age: 25}
// • Output Example: 'John is 25 years old'

// const person = { name: "John", age: 25 };
// const { name, age } = person;
// console.log(`'${name} is ${age} years old'`);

//----------------------------------------------------------------------------------------
//  todo: 11.Write a function that accepts multiple parameters (two or more) and returns their sum. (0.5 Grade)
// • Input Example: 1, 2, 3, 4, 5
// • Output Example: 15

// function sumAll() {
//   let total = 0;
//   for (let i = 0; i < arguments.length; i++) {
//     total += arguments[i];
//   }
//   return total;
// }
// console.log(sumAll(1, 2, 3, 4, 5));

//----------------------------------------------------------------------------------------
//  todo: 12. Write a function that returns a promise which resolves after 3 seconds with a 'Success' message. (0.5 Grade)
// • Output Example: “Success”

// function delayedSuccess() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (true) {
//         resolve("Success");
//       } else {
//         reject(new Error("Error"));
//       }
//     }, 3000);
//   });
// }

// delayedSuccess()
//   .then((message) => {
//     console.log(message);
//   })
//   .catch((error) => {
//     console.error("Error:", error);
//   });

// ! anotherWay

// async function run() {
//   const result = await delayedSuccess();
//   console.log(result);
// }
// run();

//----------------------------------------------------------------------------------------
//  todo: 13. Write a function to find the largest number in an array. (0.5 Grade)
// • Input Example: [1, 3, 7, 2, 4]
// • Output Example: 7

// function largestNumber(arr) {
//   let largest = arr[0];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > largest) {
//       largest = arr[i];
//     }
//   }
//   return largest;
// }
// console.log(largestNumber([1, 3, 7, 2, 4]));

//----------------------------------------------------------------------------------------
// todo: 14. Write a function that takes an object and returns an array containing only its keys. (0.5 Grade)
// • Input Example: name: "John", age: 30}
// • Output Example: ["name", "age"]

// const person = { name: "John", age: 30 };
// const keys = Object.keys(person);
// console.log(keys);

//--------------------------------------------------------------------------------------------------------
//  todo: 15. Write a function that splits a string into an array of words based on spaces. (0.5 Grade)
// • Input: "The quick brown fox"
// • Output: ["The", "quick", "brown", "fox"]

// let string = "The quick brown fox";
// string.split(" ");
// console.log(string.split(" "));

// ==============================================================================================================================================================

// B. Part 2: Essay Questions (2.5 Grade):
// todo: 1. What is the difference between forEach and for...of? When would you use each? (0.5 Grade)

// forEach
//  forEach is a higher-order function that iterates over each element of an array and executes a callback function for each element.
// ! example (forEach)
// const numbers = [1, 2, 3, 4, 5];
// numbers.forEach((num) => console.log(num));

// for...of
//  for...of is a loop that iterates over each element of an iterable object, such as an array or a string.
// ! example (for...of)
// const numbers = [1, 2, 3, 4, 5];
// for (const num of numbers) {
//   console.log(num);
// }
// todo: 2. What is hoisting and what is the Temporal Dead Zone (TDZ)? Explain with examples. (0.5 Grade)
// Variable Hoisting
//  Hoisting is JavaScript's behaviour of moving variable and function declarations to the top of their containing scope during compilation.
// 1- var declarations are hoisted and initialized with undefined.
// ! examples (var Hosting) (1)
//  console.log(a); // undefined
// var a = 5;
//is hoisted to the top of its scope and initialized with undefined, so accessing it before the declaration doesn’t throw an error.

// 2- let and const declarations are hoisted but not initialized, leading to the TDZ.
// ! example (let - const Hosting) (2)
// console.log(b); // ReferenceError: Cannot access 'b' before initialization
// let b = 10;
// is hoisted but not initialized, so accessing it before the declaration results in a ReferenceError.

// Temporal Dead Zone
//  The Temporal Dead Zone refers to the period between the entering of a scope and the actual declaration of a variable using let or const.
//    During this period, the variable is in an "uninitialized" state and accessing it will result in a ReferenceError.
// ! example (let - const TDZ)(1)
// console.log(b); // ReferenceError: Cannot access 'b' before initialization
// let b = 10;
// ! examples (var TDZ) (2)
// 2- var declarations do not have a TDZ and are initialized as undefined.
// console.log(a); // undefined
// var a = 5;
// --------------------------------------------------------------------------------------------------------------------

// todo: 3. What are the main differences between == and ===? (0.5 Grade)
// 1- === checks for strict equality, meaning both the value and type must be identical for the comparison to return true.
// 2- === compares objects and arrays by reference, while == compares them by value.
// 3- The == operator performs type coercion, converting values to the same type before comparison, while === does not.
// --------------------------------------------------------------------------------------------------------------------

// todo: 4. Explain how try-catch works and why it is important in async operations. (0.5 Grade)
//try-catch:
//  Errors in async/await are handled using try...catch: Handles errors such as network failure or invalid responses.
//  The (try block) contains the code that might throw an error, while the (catch block) contains the code that handles the error.

// ! example (try-catch)
// try {
//    Code that might throw an error
// } catch (error) {
//    Code to handle the error
// }

//important in async operations:
//  In async operations, try-catch blocks are used to handle errors that may occur during the execution of the code.
//  The try block contains the code that might throw an error, while the catch block contains the code that handles the error.

//--------------------------------------------------------------------------------------------------------------------

// todo: 5. What’s the difference between type conversion and coercion? Provide examples of each. (0.5 Grade)
// Type Conversion (Explicit)
//     is the process in JavaScript in which the data type of the variables is converted from one type to another type manually such as converting strings, numbers, or booleans when needed in a program..
// Type Coercion (Implicit)
//     is the automatic conversion of one data type to another by JavaScript during operations.
