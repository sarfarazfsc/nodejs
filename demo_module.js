const http = require('http');
const dt = require('./Module/myfirstmodule');

http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write('Today is : '+dt.myDateTime());
    res.end();
}).listen(8080);