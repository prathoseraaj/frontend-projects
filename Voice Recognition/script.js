let element = document.getElementById("text");

const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();

recognition.lang = "en-GB";
recognition.continuous = true; // Boolean value, not a string

document.addEventListener("click", () => {
    recognition.start(); // Start recognition when the document is clicked
});

recognition.onresult = (event) => {
    for (const result of event.results) {
        element.innerText = result[0].transcript; // Display the recognized text
    }
};
