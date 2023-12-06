const http = require('http');

const server = http.createServer((request, response) => {
    response.end('Hello world')
})

const port = 3001

server.listen(port, () => {
    console.log('server is running di port' + port)
})