for (const element of "Muzamil") {
    console.log(element)
};
let i = 0;

while (i < 6) {
    console.log(i)
    i++;
};

// for loop
let timer = 3;

while (timer > 0) {
    console.log("Time remaining: " + timer);
    timer--; // Subtract 1 each time
}

console.log("Blast off!");

// // 12345

let sum = 25;

for(let i = 1; i <= 5; i ++ ) {
    sum  = sum + i; // 40
}
console.log("sum =", sum )


// // while loop
let k = 1;

while(k <= 5) {
    console.log(k)
    k++;
};


// // do-while loop
let j = 20;
do {
    console.log("JavaScript is one of the most popular language.");
    j++;
} while (j <= 10);
  
// for-of loop 
let str = "Hello World!";
let size = 0;
for (const element of str) {
    console.log(element)
    size++;
}
console.log("string size =", size)

// for-in loop  

const student = {
    name : "Muzamil",
    age : 21,
    CGPA : 2.9,
    isPass : true,
} 
for (const key in student) {
    
    const element = student[key];
    console.log(key)
    console.log(key ,student[key])
}


// printing 1 to 100 using for loop, while loop and do while loop 

for(i = 1; i <= 100; i++){
    console.log(i)
}
    
let huh = 1
while(huh <= 100) {
    console.log(huh)
    huh++;
}

let num = 1;

do {
    console.log(num)
    num++;
} while (num <= 100);

// Print all even numbers from 0 to 100.
for(let i = 0; i <= 100; i++){
    if(i % 2 == 0){
        console.log(i)
    }
}


// Create a game where you start with any random game number. Ask the user to keep guessing the game number until the user enters correct value.

let guessnumber = 55;
let user;
while (user != guessnumber) {
    console.log("Please try again.")
    user = prompt("Guess the game number: ");
    
}
console.log("Congratulation you have been found the lucky number. It's", i)

_________________________________________________________________________________________________ 

// String Methods 
let a = "Chitori";
let str = "Hello_World!";
let str2 = "          Muza\tmil";
let str3 = "JavaScript is one of the best language.";
let str4 = " JUMA LALA";

console.log(str2);
console.log(str.length);
console.log(str[6]);
console.log(str2[5]);
// Template Literals `    `  
console.log(`The number of text are ${str2.length} string text.`);

// UpperCase and Lower case Method + trim Method
console.log(str3.toUpperCase());
console.log(str4.toLowerCase());

console.log(str2.toUpperCase());
console.log(str2.trim()); // removes the space from starting and ending.

// concatination method
console.log(a.concat(str4));
// Slicing Method
console.log(a.slice(3, 6));

// Replace and ReplaceAll Method
console.log(str4.replace("JUMA", "KHAN"));

let result = str.replace("llo_World!", "y, What's up bro?");
console.log(result);

let res = str.replace("lo", "p the");

console.log(str.replaceAll("l", "p"));

// Character Method str.cahrAt(idx)

let char = "JavaScript";
let results = char.charAt(0);
let resul = char.charAt(4);
let resu = char.charAt(6);
console.log(results, resul, resu, char[3]);

char[0] = "H";
console.log(char) // Output should be HavaScript but it will not CHANGE with it because String are Immutable. If we want to change the string in char variable so, in that case we should create a new string. This one that we did, it's not possible to change directly the string indexes to any other character words. So we should generate a new string. Whenever we want to change it with any other words so, we can replace it but we can not change it.
// for example 
char = char.replace("J", "H");
console.log(char);


// Qno: 1. Prompt the user to enter their full name. Generate a username for them based on the input.
// Start username with @ followed by their full name and ending with the fullname length.
// eg: user name = "Muzamil" , username should be "@Muzamil7"

// My logic 
let fullName = prompt("Enter your full name: ");

let userName = ("@".concat(fullName));
let r = fullName.length;
let total_result = userName.concat(r);
console.log(total_result);

// Logic of Apna College 
let fullName = prompt ("enter your fullname without spaces");
let username = "@" + fullName + fullName. length;
console. log (username) ;
