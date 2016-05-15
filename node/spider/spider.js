var http = require('http'); 
var cheerio=require('cheerio')

var url='http://movie.douban.com/subject/11529526/'
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
	var $=cheerio.load(html)
	var info=$('#content h1');
	console.log(info.text())
	// console.log(info.html())
	// var info=$('img')
	// info.each(function(i,e){
	// 	console.log($(e).attr('src'))
	// })
}

