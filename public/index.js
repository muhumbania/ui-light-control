const ws = new WebSocket('ws://localhost:3000'); // Change the URL to match your server's URL

ws.addEventListener('open', function(event){
    console.log("Connected to a server");
});

    // function sendMessage() {
    //   const messageInput = document.getElementById('messageInput');
    //   const message = messageInput.value;
    //   ws.send(message);
    //   messageInput.value = ''; // Clear input field after sending message


const bulbOn = document.querySelector('.bulbOn');
const range = document.querySelector('.range');
const lum = document.querySelector('.lum');

console.log("connected");

range.addEventListener('change', function(){
    let value = Number(this.value);
    bulbOn.style.opacity = value/100;
});

lum.addEventListener('click', function(){
    sendMessage(1);
});

function sendMessage(message){
    ws.send(message);
}


