
const http = require('http');
const env = require('./env');
const config = env.envconfig(process.env.NODE_ENV || 'dev');



const PORT = config.port;
const host = config.host;

const server = http.createServer(
    (req, res)=>{
        res.statusCode = 200;
        res.setHeader('Content-Type','text/plain');
        res.end('Hello, World!');
    }
);

server.listen(PORT,host, () => {
    console.log("Server Started!!!\n ",server.address());
    console.log("Process Id:", process.pid);
});

process.on('SIGTERM',() => 
    server.close((err) =>{
        console.log("Process Terminated with Error: ", err)
    } ));




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