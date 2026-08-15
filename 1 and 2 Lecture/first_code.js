// alert("Website Error! ")
// document.title = "Hello World first page"
// document.body.style.backgroundColor = "blue"

console.log("Hello World!")

console.log("web site error.")

is_student = true
console.log(is_student)

// let age = prompt("How old are you");

// if (age >= 18) {
//     console.log("You are adult.")
// } else {
//     console.log("You are not mature at all.")
// }
// console.log(age)

// var a = prompt("What your name.")
// console.log(a)

let y = "Muzamil"
const PI = 3.14
console.log(PI)

// we can't re-declared and update the const variable like
// re-declared Need an initialize 
// const a;
// console.log(a)

{
    // let is a blocked scope this curly baraket show it called a blocked scoped
    let x = 10;
    console.log(x + 5)
}

// ---------------------------------------------------------------------------------------------

let x = null;
console.log(typeof(x))

const student = {
    name : "Muzamil",
    age : 21,
    marks : 920,
    isPass : true,
};

// ---------------------------------------------------------------------------------------------

// When we use [] square brackets so we will add a quotes ""
// When we you .isPass means only . so we won't add quotes
console.log(student["marks"]);

student["age"] = student["age"] + 1;
student["name"] = "Ali Ahmed";

console.log(student.name);
console.log(student.age);
console.log(typeof(student));

// ---------------------------------------------------------------------------------------------

const prodect = {
    name : "pen",
    price : 270,
    ratingStar : 4,
    isDeal : true,
    offer : 5
};
console.log(prodect);

// ---------------------------------------------------------------------------------------------

const profile = {
    userName : "_.mz4_11__",
    following : 143,
    followers : 247,
    post : 5, 
    isMonetize : false,
    isFollow : true,
    Bio : "Less perfection, more authenticity 🖤 🧠 Where logic meets ambition 💻 Crtl + S | before life crashes 😊",       
    link : "github.com/muzamil-dev-313",
};
profile.userNumber = "313"
console.log(profile);
console.log(typeof profile["userName"])
console.log(typeof(profile["followers"]))

// ---------------------------------------------------------------------------------------------

const Student = {
    name : "Juma Khan",
    "Phone Number" : 239021935,
    marks : 1000,
};
Student.isHandsome = true;
console.log(Student)
console.log(typeof(Student))


// ---------------------------------------------------------------------------------------------

// Create a Varible of type string and try to add a number to it
let a1 = "Muzamil";
let Number = 34;
let result = a1 + Number
console.log(result)
console.log(typeof a)

// ---------------------------------------------------------------------------------------------

let age1 = 14;

if (age1 >= 18) {
    console.log("You can drive.")
}
else {
    console.log("You can't drive.")
};

// ---------------------------------------------------------------------------------------------

// if marks are greater than 10 passed else false 

let marks = 10;

let b = marks >= 10 ? ("passed") : ("false")
console.log(b)

// ---------------------------------------------------------------------------------------------

// Qno: 01 use logical operators to find whether the age of person lies between 10 and 20 ?
// Ans: 
let age2 = 15;
if (age2 >= 10 && age2 <= 20) {
    console.log("Lies.")
} else {
    console.log("Invalid number")
};

// ---------------------------------------------------------------------------------------------

// Qno: 03 Write a JavaScript program whether number is divisible by 2 and 3 
let number1 = 6;
if (number1 % 2 == 0 && number1 % 3 == 0) {
    console.log("The number is divisible by 2 and 3.")
}
else {
    console.log("The number is not divisible by 2 and 3.")
};

// ---------------------------------------------------------------------------------------------

// Qno: 04 Write a JavaScript program whether number is divisible by either 2 or 3 
let number = 2;
if (number % 2 == 0) {
    console.log("The number is divisible by 2.")
}
else if (number % 3 == 0) {
    console.log("The number is divisible by 3.")
}
else {
    console.log("The number is not divisible by either 2 and 3.")
};

// ---------------------------------------------------------------------------------------------

// Qno : 05 Print "You can drive " or "You can not drive" based on age being greater than 18 using ternary operator

let adt = 18;

let drive = adt >= 18 ? "adult" : "not adult"
console.log(drive)
// ---------------------------------------------------------------------------------------------

let t = 5;

console.log("t = ", t)

// console.log("t++ = ", t++)
// console.log("t++ =", t)
console.log("++t = ", ++t)

// ---------------------------------------------------------------------------------------------

let g = 6;
let h = 5;


console.log(g >= b)

console.log("6 > 5 =", !(g > h))

// ---------------------------------------------------------------------------------------------

let mode = "dark";
let color;

if (mode === "dark") {
    color = "black";
} else {
    color = "white"
}
console.log(color)
if (mode === "dark") console.log(mode)

// ---------------------------------------------------------------------------------------------

let ag = 25;

if (ag >= 18) {
    console.log("Vote.")
} else {
    console.log("Not vote. ")
}

// ---------------------------------------------------------------------------------------------

let num = 20;

if (num / 2 == 0) {
    console.log("Even number.")
} else {
    console.log("Odd number")
};

// ---------------------------------------------------------------------------------------------

let ae = 18;

ae >= 18 ? console.log("adult") : console.log("not adult")

// ---------------------------------------------------------------------------------------------

// const multiply = prompt("Enter the number ? ");

// if (multiply % 5 == 0) {
//     console.log(multiply, "is multiple of 5.");
// } 
// else {
//     console.log(multiply, "is not a multiple of 5");
// }

// ---------------------------------------------------------------------------------------------

// Qs2. Write a code which can give grades to students according to their scores:

// 80-100, A
// 70-89, B
// 60-69, c
// 50-59, D
// 0-49, F

// const marks = prompt("Enter the marks of a student ?")

// if (marks >= 80 && marks <= 100) {
//     console.log("The student got grade A.");
// } else if (marks >= 70 && marks < 80) {
//     console.log("The student got grade B.");
// } else if (marks >= 60 && marks < 70) {
//     console.log("The student got grade C.");
// } else if (marks >= 50 && marks < 60) {
//     console.log("The student got grade D.");
// } else if (marks < 50 && marks >= 0) {
//     console.log("The student got grade F.");
// } else if (marks > 100) {
//     console.log("The number should not be greater than 100");
// } else if (marks < 0){
//     console.log("The number should be positive and negative numbers are not allowed.")
// } else {
//     console.log("Invalid input!")
// }

let role = "admin" ;

let ob = {
    name: "Muzamnil",
    age: 21,
    occupation: "Student",
    address : {
        city : "Quetta"
    },
    [role] : "Muzamil", // computed Property
};
// console.log(ob);
console.log(ob.name);
let l = "age";
console.log(ob[l]);

for (const key in ob) {
    const element = ob[key];
    console.log(key, element);
};

let obj = JSON.parse(JSON.stringify(ob)); // Deep Clone
console.log(JSON.stringify(ob));
obj = {...ob}; // It passes the reference. And this is spread operator uses in objects. (Spread Operator)
let obj1 = Object.assign({}, ob); // This is Object.assign. It works as same like spread operator. (Objecr.assign)
console.log(obj1);
console.log(obj);
obj.address.city = "Lahore";
console.log(obj);
console.log(ob);

console.log(ob?.address?.city); // Optional chaining

console.log(ob);

// Create an object for a student with name, age, and isEnrolled. 

let Stdnt = {
    name : "Mudasir",
    age : 19,
    is_Enrolled : true,
};
console.log(Stdnt);

// Can an object key be a number or boolean? Try this 
// The answer is yes the key may be in boolean and numbers. 

let BooNum = {
    true : "Boolean",
    20 : "Number",
};
console.log(BooNum);
// console.log(Object.keys(BooNum))

// Access the value of "first-name" from this object: 
let Name = {
    "first-name": "Muzamil",
};
console.log(Name["first-name"]);

// Given a dynamic key let "age", how will you access user[key] ? 

const key = "age";
const Age = {
    age : 21,
};
console.log(Age[key]);

// From the object below, print the latitude:

const location = {
    city: "Quetta",
    coordinate: {
        lat: "30.18327° N",
        lng: "66.99645° E",
    },
};
console.log(location.coordinate.lat);

// What will happen if coordinates is missing? How can you prevent errors?
const locations = {
    city: "Quetta",
    coordinat: {
        lat: "30.18327° N",
        lng: "66.99645° E",
    },
};
console.log(location.coordinat?.lat); // Optional Chaining

// Destructure the city and lat from the location object above.

let loc = {city} = locations;
let co = {lat} = locations.coordinat;
console.log(loc);
console.log(co);

// Destructure- the- key "first—name" as G wariable called firstName.
let Na = {
    "first-name": "Muzamil",
};
let {"first-name": firstName} = Na
console.log(firstName)

// Use for—in to log all keys in this object: 
const course = {
    title: "JavaScript",
    duration: "4 weeks",
};
for (const key in course) {
    if (!Object.hasOwn(course, key)) continue;
    const element = key;
    console.log(element);
};

// Use Object.entries() to print all key—value pairs as:
console.log(Object.entries(course))
Object.entries(course).forEach(function(val){
    console.log(val);
});

// Deep clone the obj2 safely. 
// const obj2 = {info: { score: 80 }};
// const clone = {...obj2};
// clone.info.score = 100;
// console.log(clone)
// console.log(obj2)

const obj2 = {info: { score: 80 }};
const copied = JSON.parse(JSON.stringify(obj2))
copied.info.score = 100;
console.log(obj2)
console.log(copied)

// Rewrite this safely using optional chaining: 
const person = {};
// console.log( person.profile.name);
console.log(person?.profile?.name); // This will not give us error. It will give us undefined.

// Use a variable to dynamically assign a property 
const keys = "role";
let Info = {
    "First-name": "Juma",
    age: 25,
    [keys] : "student",
};
console.log(Info)