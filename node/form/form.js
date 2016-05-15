var http=require('http');
var server=http.createServer(function(req,res){

	if(req.url!=='/favicon.ico'){
			req.on('data',function(data){
				console.log(data)
			console.log('服务器接收到的数据:'+decodeURIComponent(data))
		})
			req.on('end',function(){
				console.log(req.body)
			console.log('服务器请求数据已全部接收完毕.')
		})
	}
	res.end()

}).listen(80);

console.log('http start @80');
