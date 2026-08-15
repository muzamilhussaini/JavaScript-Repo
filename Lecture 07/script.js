let h1 = document.querySelector("h1");

window.addEventListener("keyup", function (dets) {
    // console.log(dets.key)
    // h1.textContent = dets.key;
    if (dets.key === " ") {
        h1.textContent = "SPC"
    } else {
        h1.textContent = dets.key
    };
});


let btn = document.querySelector("#btn");
let fileinp = document.querySelector("#file");

btn.addEventListener("click", () => {
    fileinp.click()
});

fileinp.addEventListener("change", function (evt) {
    btn.textContent = evt.target.files[0].name
    console.log(evt)
});


let form = document.querySelector("form");
let inputs = document.querySelectorAll("input");
let main = document.querySelector("#main");

form.addEventListener("submit", (element) => {
    element.preventDefault();

    let card = document.createElement("div");
    card.classList.add("card");

    let profile = document.createElement("div");
    profile.classList.add("profile");

    card.appendChild(profile);

    let img = document.createElement("img");
    let selectedFile = inputs[0].files[0];

    let imageObjectURL = URL.createObjectURL(selectedFile);
    img.setAttribute("src", imageObjectURL);


    profile.appendChild(img);

    // console.log(card)

    let h3 = document.createElement("h3");
    h3.textContent = inputs[1].value
    card.appendChild(h3);

    let h5 = document.createElement("h5");
    h5.textContent = inputs[2].value
    card.appendChild(h5);

    let p = document.createElement("p");
    p.textContent = inputs[3].value
    card.appendChild(p);

    main.appendChild(card);


    inputs.forEach((inps) => {

        if (inps.type !== "submit") {
            inps.value = "";
            btn.textContent = "Upload File"; 
        };
    });
});


let hoverdiv = document.querySelector(".hover");

hoverdiv.addEventListener("mouseover", ()=> {
    hoverdiv.style.background = "linear-gradient(135deg, #667eea 0%, #3d9c30 100%)"
});

hoverdiv.addEventListener("mouseout", ()=> {
    hoverdiv.style.background = "linear-gradient(135deg, #3d9c30 0%, #2a5f8b 100%)"
})

// let dot = document.querySelector(".dot");

// window.addEventListener("mousemove", (e)=> {
//     dot.style.top = e.clientY + "px"
//     dot.style.left = e.clientX + "px"
// })

// Event Bubbling
let ul = document.querySelector("ul");
ul.addEventListener("click", function(e){
    // ul.style.textDecoration = "line-through"
    // alert("Clicked")
    console.log(e)
    console.log(e.target)
    // e.target.style.textDecoration = "line-through"
    e.target.classList.toggle("line-through")
});

let a = document.querySelector(".a");
let b = document.querySelector(".b");
let c = document.querySelector(".c");
let button = document.querySelector("button");

button.addEventListener("click", ()=> {
    console.log("Button Clicked!")
}); // Bubbling phase
c.addEventListener("click", ()=> {
    console.log("C Clicked!")
}); // Bubbling phase
b.addEventListener("click", ()=> {
    console.log("B Clicked!")
}, true); // Capture phase
a.addEventListener("click", ()=> {
    console.log("A Clicked!")
}, true); // Capture phase

let Count = document.querySelector(".Count");
let span = document.querySelector("span");

Count.addEventListener("input", (evt)=>{
    // console.log(evt)
    // console.log(Count.value.length)
    // span.textContent = Count.value.length
    // span.textContent = 20 - Count.value.length

    // if (span.textContent < 0) {
    //     span.style.color = "red"
    // } else {
    //     span.style.color = "black"
    // }
    span.textContent = evt.target.value.length
})