const fs = require('fs');
const http = require('http');
// import { createServer } from 'http';
const { SerialPort } =  require('serialport');

// Import parsers from SerialPort
// const Readline = require('@serialport/parser-readline');
// const { Readline } = pkg;

// Read the contents of 'index.html'
const index = fs.readFileSync('index.html');
// const parsers = SerialPort.parsers;

const port = new SerialPort({
    path: 'COM3',
    baudRate: 9600,
    dataBits: 8,
    parity: 'none',
    stopBits: 1,
    flowControl: false
});

// Create a new instance of the Readline parser
// const parser = port.pipe(new Readline({ delimiter: '\r\n' }));

// const parser = new parsers.Readline({
//     delimiter: '\r\n'
// });





// port.pipe(parser);

const app = http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(index);
});

const { Server } = require('socket.io');
const io = new Server(app);


io.on('connection', function(socket) {
    
    socket.on('lights',function(data){
        
        console.log( data );
        port.write( data.status );
    
    });
    
});

app.listen(3000, function(){
    console.log('Server listening on port 3000...');
});