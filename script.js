const jokeElement = document.getElementById("joke");
const button = document.getElementById("jokeBtn");

function getJoke() {
    fetch("https://icanhazdadjoke.com/slack")
        .then(res => res.json())
        .then(data => jokeElement.innerText = data.attachments[0].text);
}

button.addEventListener("click", getJoke);

