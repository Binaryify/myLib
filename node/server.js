var http=require('http');
var server=http.createServer(function(req,res){
	res.writeHead(200,{"Content-Type":"text/plain"});
	res.end('hello world\n');

}).listen(8000);

console.log('http start @8000');