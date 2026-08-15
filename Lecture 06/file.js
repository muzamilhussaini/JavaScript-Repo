// document.getElementById("#btn").innerHTML = 
// console.log(document.body.childNodes[1]);
document.body.childNodes[1].innerText = "Hellow World!"
document.body.style.background = "yellow";

let Elementh1 = document.getElementById("myheading");
console.log(Elementh1);

let h2El = document.getElementById("H2ID");
h2El.innerText = h2El.innerText + " from Apna College.";

let access = document.querySelectorAll(".box");
console.log(access[0].innerText = "The text of first div has been changed.");
console.log(access[1].innerText = "The text of second div has been changed.");
console.log(access[2].innerText = "The text of third div has been changed.");

// Qs. Create a new button element. Give it a text "click me", background color of red & text color of white.
// Insert the button as the first element inside the body tag. 

let NewBtn = document.createElement("button");
NewBtn.innerText = "click me";
let body = document.querySelector("body").prepend(NewBtn);
NewBtn.style.backgroundColor = "red";
NewBtn.style.color = "white";
NewBtn.style.border = "1px solid blue";
// NewBtn.innerHTML = "<i>click me</i>";

// Qs. Create a <p> tag in html, give it a class & some styling. 
// Now create a new class in CSS and try to append this class to the <p> element. 
// Did you notice, how you overwrite the class name when you add a new one? 
// Solve this problem using classList. 
const element = document.querySelector(".paragraph");
element.classList.add("New-para");
// element.classList.remove("New-para");
// element.classList.toggle("paragraph");

const p01 = document.getElementById("para-01");
console.log(p01.firstChild);

let span = document.querySelector("span");
// document.querySelector("span").innerHTML = "<strong>Hey there I am  span</strong>";
span.innerHTML = "<strong>Hey there I am  span</strong>";
span.style.color = "blue";
console.dir(span);
// span.hidden = true; 
// span.style.visibility = "hidden"

let anchorTag = document.querySelector("a");
// anchorTag.href = "https://www.youtube.com/"; // Overview is that, you can convert href of any A tag. you can chnage it directly.
console.dir(anchorTag);
anchorTag.setAttribute("href", "https://www.google.com/");
console.log(anchorTag.getAttribute("href"));
// anchorTag.removeAttribute("href");


let src = document.querySelector("div img");
src.setAttribute("src", "img.jpg");


let test = document.createElement("p");
test.textContent = "Hello World!"
console.log(test.isConnected); // Returns false
document.body.appendChild(test);
console.log(test.isConnected); // Returns true
document.body.removeChild(test);


// let divheading = document.createElement("h1");
// divheading.textContent = "Hey I just came from outside";
// document.querySelector("div:last-of-type").appendChild(divheading);

// let Div = document.querySelector("div:last-of-type");

// let target = Div.querySelector("h1:nth-of-type(3)");
// Div.removeChild(target);

// Practice Questions of DOM Manipulation 
// 1. Change Text on Button Click 
// <p id="text">Hello World</p>
// <button>Change Text</button>
// "Hello JavaScript"
let btn = document.querySelector(".btn");
let paragr = document.querySelector("#text")

// using Event listener with fat arrow function 
btn.addEventListener("click", () => {
    // document.querySelector("#text").textContent = "Hello JavaScript";
    paragr.textContent = "Hello JavaScript";
});

// using normal function and onclick
// btn.onclick = function (){
//     document.querySelector("#text").textContent = "Hello JavaScript"
// }

// 2. Change Background Color 
let changeColor = document.querySelector(".change_color");
changeColor.addEventListener("click", () => {
    document.body.style.backgroundColor = "white";
});

// 3. Show Input Value 
let Input = document.querySelector("#name");
let inputBtn = document.querySelector(".btn-2");
let pa = document.querySelector("#result");

// inputBtn.addEventListener("click", ()=> {
//     pa.textContent = Input.value

// });

inputBtn.addEventListener("click", () => {
    if (Input.value === "") {
        pa.textContent = "Please type something first!"
    } else {
        pa.textContent = Input.value
    };
});


// 4. Hide a Paragraph 
let hide = document.querySelector(".hide");
let para = document.querySelector("#para");

hide.addEventListener("click", () => {
    para.style.display = "none";
});


// 5. Toggle Paragraph Visibility 
let hides = document.querySelector(".hides");
let paRa = document.querySelector("#paRa");
hides.addEventListener("click", () => {
    if (paRa.style.display === "none") {
        paRa.style.display = "block"
    } else {
        paRa.style.display = "none";
    };
});

// 6. Count Button Clicks

let count = 0;
let countBtn = document.querySelector(".countBtn");
let paraCount = document.querySelector(".paraCount");

countBtn.addEventListener("click", () => {
    count += 1
    paraCount.textContent = `Count: ${count}`
});
countBtn.addEventListener('dblclick', function () {
    count += 1
    paraCount.textContent = `Count: ${count}`
});

const onclik = document.querySelector("#clickButton");
const ondlc = document.querySelector("#dblclickButton");
onclik.addEventListener('click', () => {
    document.querySelector("#message").textContent = "Single clicked"
});
ondlc.addEventListener('dblclick', () => {
    document.querySelector("#message").textContent = "Double clicked"
});


// Select all <li> elements and print their text using a loop.
let ul = document.querySelectorAll("#my-list li");

ul.forEach((element, index) => {
    console.log(`${index + 1}: ${element.textContent}`);
    element.classList.add("fruits")
});

for (let index = 0; index < ul.length; index++) {
    const element = ul[index].textContent;
    console.log(element)
};

// How to get the src of an image using JavaScript?
const imag = document.querySelector(".imag");
console.log(imag.src);
console.log(imag.getAttribute("src"));

// What does setAttribute() do? setAttribute will change the attribute and their value.
imag.setAttribute("src", "img.jpg");

// select a link and updates its href to point to https://github.com/muzamil-dev-313

let update_a = document.querySelector(".updating");
update_a.href = "https://github.com/muzamil-dev-313"

// add a title attribute to a div dynamically.

let title = document.querySelector(".title");
title.setAttribute("title", "Here is the lorem22");

// Remove the disabled attribute from a button
const ReBtn = document.querySelector(".visit-now");
const myAccount = document.querySelector(".myAccount");
ReBtn.removeAttribute("disabled");
ReBtn.addEventListener("click", () => {
    // myAccount.href = "https://github.com/muzamil-dev-313";
    myAccount.setAttribute("href", "https://github.com/muzamil-dev-313")
});

let toggle = document.querySelector(".toogle");
toggle.classList.toggle("dark");
toggle.classList.toggle("toogle");

// Add a highlight class to every even item in a list. 
let ull = document.querySelectorAll(".ull li:nth-child(2n)");
ull.forEach(element => {
    element.classList.add("highlight")
})
