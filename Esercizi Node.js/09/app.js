const { createServer } = require('node:http');

function createApp() {
    return createServer((request, response) => {
        response.statusCode = 200;

        response.setHeader('Content-Type', 'text/html');

        // const jsonResponseBody = JSON.stringify({ location: 'Mars' });

        response.end(`Welcome to the World Wide Web!`);
    })
}

module.exports = createApp;
