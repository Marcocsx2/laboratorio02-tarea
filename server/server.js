const http = require('http');
const fs = require('fs');

const index = fs.readFileSync('./public/index.html');
const about = fs.readFileSync('./public/about.html');
const service = fs.readFileSync('./public/service.html');
const clients = fs.readFileSync('./public/clients.html');
const contact = fs.readFileSync('./public/contact.html');

http.createServer((req, res) => {

    res.writeHead(200, { 'Content-type': 'text/html' });

    const url = req.url;

    if (url === '/index') {
        res.write(index);
        res.end();
    } else if (url === '/about') {
        res.write(about);
        res.end();
    } else if (url === '/service') {
        res.write(service);
        res.end();
    } else if (url === '/clients') {
        res.write(clients);
        res.end();
    } else if (url === '/contact') {
        res.write(contact);
        res.end();
    }
    res.write(index);
    res.end();
}).listen(8080, () => {
    console.log('escuchando el puerto 8080');
})

