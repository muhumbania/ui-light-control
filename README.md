# ui-light-control

A ui animation connected to a board for bulb brightness control

The technologies used are html, css and JavaScript for the frontend
and the backend,

There is an node server receiving data from the backend using a websocket
After the data is received, its then sent to an arduino through a serial port.

On the Arduino end there is an esp8266 reading on the serial port and control the bulb brightness 
according to the data received 