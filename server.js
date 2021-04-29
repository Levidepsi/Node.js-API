const http = require('http');

const todos = [
    {id:1, text:' todo one'},
    {id:2, text:' todo two'},
    {id:3, text:' todo three'}
]

const server = http.createServer((req, res ) => {
    // const { headers, url, method} = req;
    // console.log(headers, url, method);
    // res.statusCode = 404;
    // res.setHeader('Content-Type', 'text/json');
    // res.setHeader('X-Powered-By', 'Node.js');
    res.writeHead(404, {
        'Content-Type':'text/json',
        'X-Powered-By': 'Node.js'
    })
    // res.write('Hello')
    res.end(JSON.stringify({
        success: false,
        data: null,
        error: 'Not Found'
    }));
});

const PORT = 5000;

server.listen(PORT, () => console.log(`Server is running on port${PORT}`));