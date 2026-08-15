
let username = document.querySelector("#username");
let form = document.querySelector("form");
let hidden = document.querySelector("#hidden");
let hide = document.querySelector("#hide");

form.addEventListener("submit", (e)=> {
    e.preventDefault();

    const trim = username.value.trim();

    if (trim === "") {
        hidden.style.display = "block"
    } else if (trim.length < 3) {
        hide.style.display = "block";
        hidden.style.display = "none"
    } else {
        hide.style.display = "none"
    };
});