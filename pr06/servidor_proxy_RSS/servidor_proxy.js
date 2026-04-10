const http = require('http');
const https = require('https');
const url = require('url');
const fs = require('fs');
const path = require('path');

const PORT = 3000;

const server = http.createServer((req, res) => {
    // Configurar headers CORS
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    // Manejar preflight requests
    if (req.method === 'OPTIONS') {
        res.writeHead(200);
        res.end();
        return;
    }

    // Ruta del proxy para RSS
    if (req.url.startsWith('/proxy-rss?url=')) {
        const queryParams = url.parse(req.url, true).query;
        const targetUrl = queryParams.url;

        if (!targetUrl) {
            res.writeHead(400, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: 'URL no proporcionada' }));
            return;
        }

        // Detectar si es HTTP o HTTPS
        const protocol = targetUrl.startsWith('https') ? https : http;

        protocol.get(targetUrl, (response) => {
            let data = '';

            response.on('data', (chunk) => {
                data += chunk;
            });

            response.on('end', () => {
                res.writeHead(200, { 
                    'Content-Type': response.headers['content-type'],
                    'Access-Control-Allow-Origin': '*'
                });
                res.end(data);
            });
        }).on('error', (error) => {
            res.writeHead(500, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: error.message }));
        });
        return;
    }

    // Servir fitxers estàtics (HTML, CSS, JS)
    let filePath = '.' + req.url;
    if (filePath === './') {
        filePath = './exercici_XHR.html';
    }

    const extname = path.extname(filePath).toLowerCase();
    let contentType = 'text/html';

    switch (extname) {
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.css':
            contentType = 'text/css';
            break;
        case '.json':
            contentType = 'application/json';
            break;
    }

    fs.readFile(filePath, (error, content) => {
        if (error) {
            res.writeHead(404, { 'Content-Type': 'text/html' });
            res.end('<h1>404 - Fitxer no trobat</h1>', 'utf-8');
        } else {
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content, 'utf-8');
        }
    });
});

server.listen(PORT, () => {
    console.log(`Servidor proxy funcionant a http://localhost:${PORT}`);
    console.log(`Ruta proxy RSS: http://localhost:${PORT}/proxy-rss?url=YOUR_RSS_URL`);
});
