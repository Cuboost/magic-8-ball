// Advice element in HTML
const advice = document.getElementById("advice");
const shake = document.getElementById("shake");

// List of Advice
const adviceList = ["It is certain.", "It is decidedly so.", "Without a doubt.", "Yes definitely.", "You may rely on it.", "As I see it, yes.", "Most likely.", "Outlook good.", "Yes.", "Signs point to yes.", "Reply hazy, try again.", "Ask again later.", "Better not tell you now.", "Cannot predict now.", "Concentrate and ask again.", "Don't count on it.", "My reply is no.", "My sources say no.", "Outlook not so good.", "Very doubtful."];

// Function
function tellFortune() {
    var randomAnswer = adviceList[Math.floor(Math.random() * adviceList.length)];
    advice.innerHTML = randomAnswer;
}

// Button
shake.addEventListener("click", tellFortune)

// On Load
tellFortune;