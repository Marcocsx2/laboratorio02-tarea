const http = require('http');
const fs = require('fs');

const index = fs.readFileSync('./public/index.html');

http.createServer((req, res)=> {
    res.write(index);
    res.end();
}).listen(8080, () => {
    console.log('escuchando el puerto 8080');
})

