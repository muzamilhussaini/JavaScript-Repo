// function myFunction() {
//     console.log("Hello, Today we are gonna write a Javascript functions");
//     console.log("While writing a code of JS we will learn also.");
// }
// myFunction();
// //------------------------------------------------------

// function sum(x, y) {
//     s = x + y;
//     return s;

// };
// console.log(sum(9, 8));
// //------------------------------------------------------

// // default values in function 
// function ab(v1 = 4, v2 = 3) {
//     console.log(v1 + v2);
// }
// ab();
// //------------------------------------------------------

// // Rest(...) in function. We have spread too(If it adds in the parameter of the space so that is called Rest operator.)
// function abc(...val) { // (a,b,c,d,e,f....) or (...val) or (a,b,c, ...val)
//     console.log(val);
// }
// abc(1, 2, 3, 4, 5, 6, 7, 7, 8, 8, 9, 10)
// //------------------------------------------------------

// // Return Values and early return values 
// function abcd() {
//     return 12;
// };
// let a = abcd();
// console.log(a);
// //------------------------------------------------------
// // First class function (Assign to variabes, pass as argument, return from other functions)
// let abcde = function (val) {
//     val();
// }
// abcde(function () {
//     console.log("Hello World!")
// });
// let fnc = function mul(v1, v2) {
//     return v1 + v2
// };
// console.log(fnc(2, 5));
// //------------------------------------------------------

// // Higher-order functions
// // A kind of Function that returns a function or accpet another function of parameter.
// function ac(val) { // This one is called higher order function because val accepts the function in the parameters.

// }
// ac(function () { // Not this one.

// });
// function acb() { // This one is not a high order function because it doesn't accept the function in the parameters.
//     // Can we create this as a high order function so the answer is yes, how? see below the codes are written. 
// };
// acb();

// function acv() {
//     return function () { // Now this is called high order function. Because a function returns another function in itself. When we call it so we put double bracket to run our outputs.
//         console.log("Hahahhhahaha");
//     };
// }
// acv()();
// //------------------------------------------------------

// // Pure and Impure functions.
// // A function that don't change the value of outside of the function is called pure function. 
// let n = 12;
// function aa() { // This function only works inside the blocks and outside of the blocks are not allowed in it.
//     console.log("Hi!");
// }
// aa();
// // Pure Function
// let tax = 10;
// function calculateTotal(price, tax) {
//     return price + (price * tax);
// }
// console.log(calculateTotal(100, 0.1)); // Always returns 110
// calculateTotal(100, 0.1); // Still returns 110


// // A function that change the value of outside of the function is called pure function.
// function bb() {
//     n++; // This one is impure function becase n++ will changed the value of n from 12 to 13
// }

// let taxRate = 0.1; // External state
// // Impure due to external dependency
// function calculateTotalImpure(price) {
//     return price + (price * taxRate);
// }
// let print = calculateTotalImpure(100)
// console.log(print);
// //------------------------------------------------------

// // Closures and lexical function 
// // A closure is a feature where a nested function remembers and can access variables from its parent scope, even after the parent function has finished executing.
// // In simple words, A function that return another function and return function always use a variable of it's parent function. This is called Closures.
// function name1() {
//     let h = 12;
//     return function () {
//         h++
//         console.log(h)
//     }();
// }
// name1();


// // Lexical scoping is the rule that determines where a function can look for variables, based entirely on where that function was written in the code
// function grandparent() {
//     let house = "Big House";
//     function parent() {
//         // The parent function can see "house" because it is written inside grandparent
//         console.log(house);
//     }
//     parent();
// }
// grandparent();

// function levelOne() {
//     const food = "Pizza";

//     function levelTwo() {
//         const drink = "Soda";

//         function levelThree() {
//             console.log(food + " and " + drink);
//         }

//         levelThree();
//     }

//     levelTwo();
// }
// levelOne();

// // BAD ❌
// function bad() {
//     x = 10; // Implicit global - avoid this!
// }

// // GOOD ✅
// function good() {
//     let x = 10; // Properly scoped!
// }

// function ty() {
//     return function () {
//         for (let i = 0; i < 3; i++) {
//             console.log(i)
//         }
//     }();
// }
// ty();

// //------------------------------------------------------
// // IIFE(Immediately Invoked Function Expression) 

// (function () { // function don't give it a name and call it at end.
//     console.log("Hello Muzamil")
// })(); // it already called so no need to call again that's called IIFE.

// // Convert this normal function into an I IFE 
// function init() {
//     console.log("Initialized")
// }
// (function init() {
//     console.log("Initialized.")
// })();

// //------------------------------------------------------

// // Hoisting differences between declaration and expression. 
// Ana(); // This is called Hoisting you can call it before the function declared. We can only Hoist the function statement.
// function Ana() {
//     console.log("Wow!")
// };


// // console.log(fun); // We can not access the variable function expresssion before declaration. We can't do initialization before declares something. So it means function expression will not Hoist. But function Statement will Hoist that we descussed.
// // let fun = function Not() {
// //     console.log("Wow!")
// // };
// //------------------------------------------------------

// // Use rest parameter to accept any number of scores and return the total. 

// function getScore(...scores) {
//     let total = 0;
//     scores.forEach(function (element) {
//         total = total + element
//     });
//     return total
// }
// let tt = getScore(10, 20, 30, 40, 50);
// console.log(tt)

// //------------------------------------------------------
// // Pass a function into another function and execute it inside.
// function bcd(val) {
//     val();
// }
// bcd(function () {
//     console.log("hey")
// });

// // BMI Calculator 
// function bmi(weight, height) {
//     let weights = weight / (height * height);
//     return weights
// }
// let bmis = bmi(73, 2.0)
// console.log(bmis)

// // let weight = prompt("Enter your weight in kg: ")
// // let height = prompt("Enter your height in meters: ")
// // function Bmi() {
// //     if(weight >= 0){
// //         let total = weight / (height * height);
// //         return total;
// //     }
// //     else {
// //         return "invalid"
// //     }
// // }
// // let Uu = Bmi();
// // console.log(Uu)


// // Price = Original Price × (1 − Discount % / 100) Reusable discount formula 
// function Calculator() {
//     return function (OriginaPrice, discount) {
//         let Tt = OriginaPrice * (1 - discount / 100)
//         console.log(Tt)
//     }
//         (100, 10);
// }
// Calculator();


// function getVal(val) {
//     if (val < 50)
//         return 'D'
//     else if (val <= 65)
//         return 'C'
//     else if (val <= 75)
//         return 'B'
//     else if (val <= 100) return 'A'
// };
// console.log(getVal(75));

// // Write a function getGrade(score) that:
// // Takes a student's marks (0 to 100)
// // Returns the grade based on this logic:

// // 90—100 A+
// // 80-89 A
// // 70-79 B
// // 60-69 c
// // 33-59 D
// // 0-32 Fail
// // Anything else  // Invalid marks X

// function getGrade(score) {
//     if (score >= 90 && score <= 100)
//         return "A+";
//     else if (score >= 80 && score < 90)
//         return "A";
//     else if (score >= 70 && score < 80)
//         return "B";
//     else if (score >= 60 && score < 70)
//         return "C";
//     else if (score >= 33 && score < 60)
//         return "D";
//     else if (score >= 0 && score < 33)
//         return "Fail";
//     else if (score > 100)
//         return "Number should be under 0 to 100";
//     else if (score < 0)
//         return "Marks should be positive ";
//     else
//         return "Invalid marks";
// };
// console.log(getGrade(88));

// function rps(user, computer) {
//     if (user === computer) return "Draw";
//     if (user === "scissor" && computer === "paper") return "user";
//     if (user === "paper" && computer === "rock") return "user";
//     if (user === "rock" && computer === "scissor") return "user";
//     return "computer"
// };
// console.log(rps("scissor", "rock"));


// /* Create a faulty calculator using JavaScript

// This faulty calculator does following:
// 1.It takes two numbers as input from the user
// 2.It perfoms wrong operations as follows:

// + ---> -
// * ---> +
// - ---> /
// / ---> **

// It performs wrong operation 10% of the times.

// let num = Math.random();
// console.log(num);

// */

// const mul = (a, b) => {
//     return a * b;
// };
// console.log(mul(2, 3));

// // Qs. Create a function using the "function" keyword that takes a String as an argument &
// // returns the number of vowels in the string.

// function countVowels(str) {
//     let count = 0;
//     let vowels = "aeiouAEIOU";
//     for (let i = 0; i < str.length; i++) {
//         let letter = str[i];
//         if (vowels.includes(letter)) {
//             count++;
//         };
//     };
//     return count;
// };
// console.log(countVowels("Muzamil"));

// // Qs. Create an arrow function to perform the same task.
// const Vowels = (str) => {
//     let count = 0;
//     let vowels = "aeiouAEIOU";
//     for (let i = 0; i < str.length; i++) {
//         let letter = str[i];
//         if (vowels.includes(letter)) {
//             count++;
//         };
//     };
//     return count;
// };
// console.log(Vowels("JavaScript is one of the most popular language"));


// array = [1, 2, 3, 4, 5];
// array.forEach(function printVal(val) { // forEach funtion
//     console.log(val)
// });

// let names = ["Muzamil", "Wajdan Ali", "Ali Reza"]
// names.forEach((name, i) => {
//     console.log(name.toUpperCase(), i) // forEach arrow function
// });

// // Qs. For a given array of numbers, print the square of each value using the forEach loop.

// let arr = [11, 22, 33, 44, 55];

// arr.forEach(element => {
//     console.log(element ** 2)
// });


// // Map methods
// let nums = [78, 90, 33];
// let ar = nums.map((val) => {
//     // console.log(val)
//     return val;
// });
// console.log(ar);


// // Filter methods
// let newArr = arr.filter((value) => {
//     return value % 2 === 0;
// });
// console.log(newArr);

// let red = [3, 4, 8, 10, 9];

// let rde = red.reduce((last, New) => {
//     // return last + New;
//     if (last > New) {
//         return last;
//     } else {
//         return New;
//     };
//     // return last > New ? last : New
// });
// console.log(rde)


// // Qs. We are given array of marks of students. Filter out of the marks of students that scored 90+.

// let marks = [50, 60, 87, 93, 75, 80, 90, 95, 100];

// const filtered = marks.filter((score) => {
//     if (score >= 90) {
//         return score
//     };
// });
// console.log(filtered);

// // Qs. Take a number n as input from user. Create an array of numbers from 1 to n.
// // Use the reduce method to calculate sum of all numbers in the array.
// // Use the reduce method to calculate product of all numbers in the array.

// let x = prompt("Enter n number: ");
// let b = [];

// for (let i = 1; i <= x; i++) {
//     b[i - 1] = i
// };
// console.log(b);
// let total = b.reduce((first, second) => {
//     return first + second;
// });
// console.log(total);
// let product = b.reduce((first, second) => {
//     return first * second;
// });
// console.log(product);

// let g = 14 // 0 
// let b = g % 10

// console.log(b)

// product = 1

// Jab tak n > 0:
//     lastDigit nikalo
//     product se multiply karo
//     n se last digit hata do

// return product

let i = 16
let j = 3
console.log(i % j)

let n = 10;
let t = 2;
let product = 1;
while (n > 0) {
    lastDigit = n % 10
    product = product * lastDigit 
    n = Math.floor(n / 10)
}
console.log(product)

