const http = require('http');
var url= require('url');
const fs = require('fs');
const path = require("path");

const server = http.createServer((req, res) => {
// res.setHeader('Access-Control-Allow-Origin', '*');
// res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
// res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
let url_parse = url.parse(req.url,true)
let info_peticio = {
"req_method":req.method,
"req_url":req.url,
"req_url_decoded":decodeURIComponent(req.url),
"url_parse_pathname":url_parse.pathname,
"url_parse_search":url_parse.search,
"url_parse_query":url_parse.query
}
let file_path= path.join(__dirname,"contingut_servidor/"+url_parse.pathname);
fs.access(file_path, fs.constants.F_OK, (err) => {
    if(err){
        console.log("No existeix el fitxer "+file_path);
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end('404 Not Found');
        return;
    }else{
        console.log("Existeix el fitxer "+file_path);
        fs.readFile(file_path, 'utf8', (err, data) => {
            if (err) {
                console.error('Error llegint el fitxer:', err);
                res.writeHead(500, {'Content-Type': 'text/plain'});
                res.end('500 Internal Server Error');
                return;
            }else{
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.write(data);
                res.end();
                return;
            }
        });
    }
});


// res.setHeader('Content-Type', 'application/json');
// res.setHeader('Content-Type', 'text/html');
// res.statusCode = 200;
// res.write(JSON.stringify(info_peticio))
// res.end();
// return;
});
server.listen(8089, () => {
console.log('Servidor iniciat al port 8089');
});
