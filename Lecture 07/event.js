// Event Listener
// syntax 
// addEventListener
// first: Select node element name or we can say select variable that you will name for that element name. for example h1 for heading 1 we can also name for h1 heading the variable its upto you

// second: we will then select or add the listener event and with adding event name (event name maybe click, double click, key down, or mouseover)

// third:  We will add a function because we need to run our eventListener 
// element.addEventListener("event name ("click")", function(){
// })
// h1.addEventListener('click', function(){
// }) 
// removeEventListener 
// In remove event listener we first create a function, after creating a function then we will add listener give it an action and call our function so our event will work(what will happen if we write removeEventListener and event action and our function that we define alread in this call our event will remove it won't work)
// Create a function give it a name

let h1 = document.querySelector("h1");
h1.addEventListener('click', function () {
    h1.style.color = "red"
});

let p = document.querySelector(".colorChanging");
p.addEventListener("click", function () {
    p.style.color = "green";
    p.style.backgroundColor = "yellow"
    p.style.fontSize = "20px"
});
p.addEventListener("dblclick", function () {
    p.style.color = "black";
    p.style.fontSize = "25px"
})

function element() {
    p.style.display = "none"
}
p.addEventListener("dblclick", element); // Do the display of paragraph none 
p.removeEventListener("dblclick", element); // Remove the listener. When we double click because we said to our listener make our action double click.

let i = document.querySelector(".inp");
// i.addEventListener("input", function(data){
//     console.log("typed")
//     // console.log(data)
// });
let span = document.querySelector(".test")
i.addEventListener("input", function (evt) {
    if (evt.data !== null) { // if you click backspace key the backspace, data is null so we use it variable name and .data !== null then our console will not show us null when we use backspace.
        // console.log(evt.data)
        span.textContent = evt.data
    }
    // console.log(evt.data)
})

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
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
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

// 7. Change Image on Click
// HTML:
// <img id="img" src="image1.jpg" width="200">
// <button>Change Image</button>
// Task:
// When the Button click then image source should be change.
let changedSRC = document.querySelector("#imgBTN");
let SRC = document.querySelector("#img");
changedSRC.addEventListener("click", () => {
    SRC.setAttribute("src", "image2.jpg");
});


// 8. Add Item to List
// HTML:
// <input type="text" id="item">
// <button>Add</button>
// <ul id="list"></ul>

// Task:
// Input mein jo text hai usko new <li> bana kar list mein add karo.
const inPut = document.querySelector("#item");
const addBtn = document.querySelector("#addBtn");
const list = document.querySelector("#list");

// addBtn.addEventListener("click", ()=> {
//     const lies = document.createElement("li");
//     const trimValue = inPut.value.trim();

//     if(trimValue === "") {
//         lies.textContent = "Sorry, please write something here!"
//         list.appendChild(lies)
//     } else {
//         lies.textContent = inPut.value
//         list.appendChild(lies)
//         inPut.value = ""
//     };
//     // console.log("Character count:", inPut.value.length); 
// });

function handleItems() {
    const lies = document.createElement("li");
    const trimValue = inPut.value.trim();

    if (trimValue === "") {
        lies.textContent = "Sorry, please write something here!";
        list.appendChild(lies);
    } else {
        lies.textContent = trimValue
        list.appendChild(lies)
        inPut.value = ""
    };
};
addBtn.addEventListener("click", handleItems);

inPut.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        handleItems();
    };
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

// select a link and updates its href to point to https://github.com/muzamilhussaini

let update_a = document.querySelector(".updating");
update_a.href = "https://github.com/muzamilhussaini"

// add a title attribute to a div dynamically.

let title = document.querySelector(".title");
title.setAttribute("title", "Here is the lorem22");

// Remove the disabled attribute from a button
const ReBtn = document.querySelector(".visit-now");
const myAccount = document.querySelector(".myAccount");
ReBtn.removeAttribute("disabled");
ReBtn.addEventListener("click", () => {
    // myAccount.href = "https://github.com/muzamilhussaini";
    myAccount.setAttribute("href", "https://github.com/muzamilhussaini")
});

let toggle = document.querySelector(".toogle");
toggle.classList.toggle("ToggleHasBeenAdded");
toggle.classList.toggle("toogle"); // This one wil remove

// Add a highlight class to every even item in a list. 
let ull = document.querySelectorAll(".ull li:nth-child(2n)");
ull.forEach(element => {
    element.classList.add("highlight")
});

let hover = document.querySelector(".div-box");
// hover.addEventListener('onmouseover', ()=> {
//     console.log('This is a div box')
// })
hover.onmouseover = () => {
    console.log("This Text is inside div box"); // If we handle our event as inline event and also js file. So the priority should be given to js file not inline event.
};
hover.onmouseover = () => {
    console.log("I'm a div"); // now the first one overwrite, This one will print on console.
};
// If you again write a code on this div so the first code will overwrite then, the last code will appear.

hover.onmouseover = (event) => {
    console.log(event)
    console.log(event.type)
    console.log(event.target)
    console.log(event.clientX)
    console.log(event.clientX, event.clientY)
}

// Event Objects
const event = document.querySelector('#event')
event.onclick = (event) => {
    console.log(event)
    console.log(event.type)
    console.log(event.target)
    console.log(event.clientX)
    console.log(event.clientX, event.clientY)
}


const mode = document.querySelector(".mode");
let body = document.querySelector("body")
let currentMode = "light"
mode.addEventListener("click", () => {
    if (currentMode === "light") {
        currentMode = "dark"
        // document.body.style.backgroundColor = "black"
        body.classList.add("dark")
        body.classList.remove("light")
    } else {
        currentMode = "light"
        // document.body.style.backgroundColor = "white"
        body.classList.add("light")
        body.classList.remove("dark")
    }
});


let selection = document.querySelector("#selection")
let selHeading = document.querySelector(".selHeading")
selection.addEventListener("change", function(details){
    console.log(details);
    console.log(details.target.value);
    // selHeading.textContent = "Device Selected"
    selHeading.textContent = `${details.target.value} Device Selected`
});



// home when mouse over on something then it should happens something in the document, anything you want 
