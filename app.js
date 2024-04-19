import fs from 'fs';
// import { createServer } from 'http';
import { SerialPort } from 'serialport';

// Import parsers from SerialPort
import pkg from '@serialport/parser-readline';
const { Readline } = pkg;

// Read the contents of 'index.html'
const index = fs.readFileSync('index.html');

const port = new SerialPort({
    path: '\Device\Silabser0',
    baudRate: 9600,
    dataBits: 8,
    parity: 'none',
    stopBits: 1,
    flowControl: false
});

// Create a new instance of the Readline parser
const parser = port.pipe(new Readline({ delimiter: '\r\n' }));







port.pipe(parser);

const app = http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(index);
});

const io = require('socket.io').listen(app);

io.on('connection', function(socket) {
    
    socket.on('lights',function(data){
        
        console.log( data );
        port.write( data.status );
    
    });
    
});

app.listen(3000);