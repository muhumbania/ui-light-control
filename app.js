const fs = require('fs');
const http = require('http');
const express = require('express');
// import { createServer } from 'http';
const { SerialPort } =  require('serialport');
const ejs = require('ejs');

const PORT = 3000;

// const parsers = SerialPort.parsers;

const port = new SerialPort({
    path: 'COM3',
    baudRate: 115200,
    dataBits: 8,
    parity: 'none',
    stopBits: 1,
    flowControl: false
});


// port.pipe(parser);


const WebSocket = require('ws');
const app = express();
app.use(express.static('public'));




let server = app.listen(PORT, () => console.log(`Listening on ${ PORT }`));

const wss = new WebSocket.Server({ server });

wss.on('connection', function connection(ws) {
    console.log('Client connected');
  
    ws.on('message', function incoming(message) {
      console.log('Received:', message);
    });

});
  

app.get('/', function(req, res){
    res.render('index.ejs');
    // port.write("1");
})

