// setTimeout(()=> {
//     console.log("Hello");
// }, 2000);

// setInterval(function() {
//     console.log("Hi");
// }, 3000);

// const time = setTimeout(()=> {
//     console.log("Hey");
// }, 5000);
// clearTimeout(time);

// const interval = setInterval(function() {
//     console.log("Running...");
// }, 4000);

// clearInterval(interval);

// let count = 10;
 
// const timer = setInterval(()=> {
//     console.log(count)
//     count--;
//     if (count < 0) {
//         clearInterval(timer);
//         console.log("Time's Up!")
//     }
// }, 1000);

// const progress = document.querySelector(".progress-bar");
// const percentage = document.querySelector(".percentage");
// const h2 = document.querySelector("h2");

// let counter = 0;
// let seconds = 5;

// const progressBar = setInterval(()=> {
//     if (counter < 100) {
//         counter++;
//         progress.style.width = `${counter}%`
//         percentage.textContent = `${counter}%`
//     } else {
//         h2.textContent = "Downloaded";
//         clearInterval(progressBar);
//     }
// }, (seconds * 1000) / 100);


// // Auto-hide alert banner after 3s 
// const hide = document.querySelector(".hide");

// setTimeout(()=> {
//     hide.style.display = "none"
// }, 3000);

// // ============================================================ 

// // Delayed Message
// // After 3 seconds display:
// // Hello Muzamil

// setTimeout(()=> {
//     console.log("Hello Muzamil");
// }, 3000);

// // Multiple Delays
// // Print:
// // HTML
// // after 1 second
// // CSS
// // after 2 seconds
// // JavaScript
// // after 3 seconds Using Nested setTimeout 

// setTimeout(() => {
//     console.log("HTML");

//     setTimeout(() => {
//         console.log("CSS");

//         setTimeout(() => {
//             console.log("JavaScript");

//         }, 1000);

//     }, 1000);

// }, 1000);


// // Question 3: Repeating Message
// // Print:
// // Learning JavaScript...
// // every 2 seconds.

// setInterval(()=>{
//     console.log("Learning JavaScript..")
// }, 2000);

// // Question 4: Stop Interval
// // Create an interval that prints:
// // Hello
// // every second.
// // Stop it after 5 seconds.
// const stops = setInterval(() => {
//     console.log("Hello");
// }, 1000); 

// setTimeout(() => {
//     clearInterval(stops);
// }, 5100);

// // ========================================================== 

// // Intermediate Level

// // ===========================================================

// // Question 5: Counter

// // Output:
// // 1
// // 2
// // 3
// // 4
// // 5
// // every second.
// // After reaching 5, stop automatically.

// let C = 0;

// const reach = setInterval(() => {

//     console.log(++C); // Using Pre-increment | Adds 1 to C AND prints it at the same time!

//     if (C >= 5) {
//         clearInterval(reach);
//     }
// }, 1000);


// // Question 6: Countdown
// // Create a countdown
// // 10
// // 9
// // 8
// // 7
// // ...
// // 0
// // After reaching 0:

// // Time's Up!
// // and stop.

// let countdown = 10;
// let reaching = setInterval(() => {
//     console.log(countdown);
//     countdown--;

//     if (countdown < 0) {
//         console.log("Time's Up!")
//         clearInterval(reaching);
//     }
// }, 1000);


// // Question 7: Auto Redirect Simulation
// // After 5 seconds print:
// // Redirecting...

// setTimeout(() => {
//     console.log("Redirecting...")
// }, 5000);


// // Question 8: Loading Effect
// // Output:
// // Loading.
// // Loading..
// // Loading...

// // continuously every second.

// let dots = 1;
// let stopDots = setInterval(() => {
//     let dotString = ".".repeat(dots);
//     console.log(`Loading${dotString}`)
    
//     dots++
//     // dots = 0
//     if (dots > 3) {
//         dots = 1
//     }
// }, 1000);


// // Challenge Level
// // Question 9: Digital Clock

// // Display current time every second.
// // Example:
// // 10:45:01
// // 10:45:02
// // 10:45:03

// // Hint:
// // new Date()


// setInterval(() => {
//     const date = new Date()

//     // let hour = date.getHours();
//     // let changeHour = hour.toString();
//     // let final = changeHour.padStart(2, "0");
//     // // console.log(final);


//     // let minutes = date.getMinutes();
//     // let changeMinutes = minutes.toString();
//     // let ans = changeMinutes.padStart(2, "0");
//     // // console.log(ans);


//     // let second = date.getSeconds();
//     // let changeSecond = second.toString();
//     // let Final = changeSecond.padStart(2, "0");
//     // // console.log(Final);

//     // console.log(`${final}:${ans}:${Final}`);
//     // console.log(Totally)

//     let hour = date.getHours().toString().padStart(2, "0");
//     let minutes = date.getMinutes().toString().padStart(2, "0");
//     let second = date.getSeconds().toString().padStart(2, "0");

//     console.log(`${hour}:${minutes}:${second}`)


// }, 1000);


// // Question 10: Start & Stop Button Logic
// // Create:
// // <button>Start</button>
// // <button>Stop</button>
// // When Start is clicked:
// // Hello
// // prints every second.
// // When Stop is clicked:
// // Interval stops.

