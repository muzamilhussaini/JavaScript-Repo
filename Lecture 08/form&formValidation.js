let username = document.querySelector("#username");
let form = document.querySelector("form");
let hidden = document.querySelector("#hidden");
let hide = document.querySelector("#hide");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let selection = document.querySelector("select");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    let isValid = true;

    const trim = username.value.trim();

    if (trim === "") {
        hidden.style.display = "block"
        isValid = false;
    } else if (trim.length < 3) {
        hide.style.display = "block";
        hidden.style.display = "none";
        isValid = false;
    } else {
        hide.style.display = "none";
        hidden.style.display = "none";
    };

    const emailValue = email.value;
    const regex = /^[a-z0-9]{3,}@(gmail|email)\.com$/;

    if (!regex.test(emailValue)) {
        document.querySelector(".testEmail").style.display = "block";
        isValid = false;
    } else {
        document.querySelector(".testEmail").style.display = "none";
    };

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;
    const passwordValue = password.value.trim();

    if (!passwordRegex.test(passwordValue)) {
        document.querySelector(".testPassword").style.display = "block";
        isValid = false;
    } else {
        document.querySelector(".testPassword").style.display = "none";
    };

    const selectValue = selection.value

    if (selectValue === "") {
        document.querySelector(".selected").style.display = "block"
        isValid = false;
    } else {
        document.querySelector(".selected").style.display = "none"
    }
    
    const obj = {
        username: username.value,
        email: email.value,
        password: password.value,
    }
    console.log(obj)

    if (isValid) {
        alert("Form Submitted Successfully");
        form.reset();
    } else {
        alert("Please fill the requirements")
    }
    
});


const Regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

let test = Regex.test("javaScript@script.org")
console.log(test);

// Custom Regex 
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// ^[^\s@]+     -> One or more characters before @
// @            -> Must contain @
// [^\s@]+      -> One or more characters after @
// \.           -> Must contain a dot (.)
// [^\s@]+$     -> Domain extension (com, net, org, etc.)

const Email = "karbalaimuzamil50@gmail.com";

if (emailRegex.test(Email)) {
    console.log("Valid Email");
} else {
    console.log("Invalid Email");
};
