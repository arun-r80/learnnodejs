
const http = require('http');
const express = require('express');
const env = require('./env');
const config = env.envconfig(process.env.NODE_ENV || 'dev');



const PORT = config.port;
const host = config.host;
const app = express();
app.get('/', (req, res)=> {
    res.send('Hello, World!!');
})

app.listen(PORT, ()=> console.log("Server Started!!"))

// const http = require('http');

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello, World!\n');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });