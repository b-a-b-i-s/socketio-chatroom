var socket = io();

var messages = document.getElementById("messages");
var form = document.getElementById("form");
var input = document.getElementById("input");
form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (input.value) {
        socket.emit("chat message", input.value);
        input.value = "";
    }
});
socket.on("chat message", function (msg) {
    var item = document.createElement("li");
    item.textContent = msg;
    console.log("🚀 ~ file: app.js ~ line 16 ~ msg", msg)
    
    messages.appendChild(item);
    window.scrollTo(0, document.body.scrollHeight);
});



// Get the input field
const inputMessage = document.querySelector("#input");

let lock = false;

// Execute a function when the user releases a key on the keyboard
inputMessage.addEventListener("keydown", function (event) {
    // Number 13 is the "Enter" key on the keyboard
    console.log(event.keyCode)
    if (event.keyCode === 13) {
        if (lock){
            inputMessage.value += "\n";

        }
        else {
            // Cancel the default action, if needed
            event.preventDefault();
            // Trigger the button element with a click
            document.querySelector("button").click();
            inputMessage.value = '';   
        }
    }
    if (event.keyCode === 17) {
        lock = true;
    }
});

inputMessage.addEventListener("keyup", function (event) {
    if (event.keyCode === 17) {
        lock = false;
    }
});


