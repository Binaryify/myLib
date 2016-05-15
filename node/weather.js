var http = require('http');
var url='http://www.weather.com.cn/adat/sk/101280301.html';
http.get(url,function(res){
	var html=""
	res.on('data',function(data){
		html+=data;
	})
	res.on('end',function(){
		getInfo(html);
	}).on('error',function(){
		console.log('获取信息错误')
	})
})


function getInfo(html){
	var json = JSON.parse(html);
	var info=json.forecast;
	console.log(info.city+"\n日期:"+info.date_y+""+info.week+"\n"+info.weather1+"\n"+info.temp1+"\n"+info.wind1)
}
