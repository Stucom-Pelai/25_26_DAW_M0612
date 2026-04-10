const http = require('http');
var url= require('url');
const server = http.createServer((req, res) => {
// res.setHeader('Access-Control-Allow-Origin', '*');
res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
let url_parse = url.parse(req.url,true)
let info_peticio = {
"req_method":req.method,
"req_url":req.url,
"req_url_decoded":decodeURIComponent(req.url),
"url_parse_pathname":url_parse.pathname,
"url_parse_search":url_parse.search,
"url_parse_query":url_parse.query
}
res.setHeader('Content-Type', 'application/json');
// res.setHeader('Content-Type', 'text/html');
res.statusCode = 200;
res.write(JSON.stringify(info_peticio))
res.end();
return;
});
server.listen(8089, () => {
console.log('Servidor iniciat al port 8089');
});
