let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;
function checkGuess() {
  let userGuess = Number(document.getElementById("userInput").value);
  attempts++;

  if (!userGuess) {
    document.getElementById("message").innerText = "Please enter a number!";
    return;
  }

  if (userGuess === randomNumber) {
    document.getElementById("message").innerText = "🎉 Correct! You won!";
  } 
  else if (userGuess > randomNumber) {
    document.getElementById("message").innerText = "📉 Too high!";
  } 
  else {
    document.getElementById("message").innerText = "📈 Too low!";
  }

  document.getElementById("attempts").innerText = "Attempts: " + attempts;
  // document.getElementById("sjhdka").innerHTML = "shdakjshdkjahsdkjhakgndofuwenfkhi"
  
}
function hello(call){
  let a = document.querySelector("#attempts")
  a.innerHTML += `<p>hello</p>`

}

function resetGame() {
  randomNumber = Math.floor(Math.random() * 100) + 1;
  attempts = 0;
  document.getElementById("message").innerText = "";
  document.getElementById("attempts").innerText = "";
  document.getElementById("userInput").value = "";
}