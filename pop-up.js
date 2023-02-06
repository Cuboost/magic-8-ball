// Get elements from HTML
const adviceText = document.getElementById("advice-text");
const textInput = document.getElementById("text-input");
const title = document.getElementById("title");
const adviceButton = document.getElementById("button");

// List of Advice
const adviceList = ["It is certain.", "It is decidedly so.", "Without a doubt.", "Yes definitely.", "You may rely on it.", "As I see it, yes.", "Most likely.", "Outlook good.", "Yes.", "Signs point to yes.", "Reply hazy, try again.", "Ask again later.", "Better not tell you now.", "Cannot predict now.", "Concentrate and ask again.", "Don't count on it.", "My reply is no.", "My sources say no.", "Outlook not so good.", "Very doubtful."];

// Tell Fortune
function tellFortune() {
    // Check Input
    if (textInput.value == "") {
        console.log("No input!");
        return;
    };
    // Disable Button
    adviceButton.disabled = true;
    // Generate Random Answer
    var randomAnswer = adviceList[Math.floor(Math.random() * adviceList.length)];
    // Hide Text Input
    textInput.classList.remove("text-input-animate");
    // Change Text
    adviceText.innerHTML = randomAnswer;
    // Change Title
    title.innerHTML = textInput.value;
    // Show Answer with Animation
    showAnswer();
    // Set Back to Defaults
    setTimeout(setDefault, 3000);
}

// Set Default
function setDefault() {
    textInput.value = "";
    textInput.classList.add("text-input-animate");
    adviceText.classList.remove("advice-text-animate");
    title.innerHTML = "Magic 8 Ball";
    adviceButton.disabled = false;
}

// Show Answer
function showAnswer() {
    textInput.classList.remove("text-input-animate");
    adviceText.classList.add("advice-text-animate");
}

// Button
const button = document.getElementById("button");
button.addEventListener("click", tellFortune);

// On Load
setDefault();