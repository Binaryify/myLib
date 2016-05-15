var http = require('http')
var querystring = require('querystring');
var postData = querystring.stringify({
    'static':1,
    'entry_id':1847,
    '__lang':'en',
    'parent_id':'',
    'armor':'e7106287804c44890183779a662fa05532c7a6b2',
    'preview':'',
    'sid':'',
    'text':'测试2',
    'author':'阿发',
    'email':'821374382@qq.com',
    'url':'',
    'bakecookie':1,
    'percent':'2%',
    'chart':'||||',
    'post':'发表'
})
var options = {
    hostname: 'www.ruanyifeng.com',
    port: 80,
    path: '/cgi-bin/mtos/mt-comments.cgi',
    method: 'post',
    header: {
        'Accept':'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
		'Accept-Encoding':'gzip, deflate',
		'Accept-Language':'zh-CN,zh;q=0.8',
		'Cache-Control':'max-age=0',
		'Connection':'keep-alive',
		'Content-Length':postData.length,
		'Content-Type':'application/x-www-form-urlencoded',
		'Cookie':'_gat=1; _ga=GA1.2.883817362.1438655301; mtcmtauth=%u963F%u53D1; mtcmtmail=821374382@qq.com; mtcmthome=',
		'Host':'www.ruanyifeng.com',
		'Origin':'http://www.ruanyifeng.com',
		'Referer':'http://www.ruanyifeng.com/blog/2015/07/monad.html',
		'Upgrade-Insecure-Requests':'1',
		'User-Agent':'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.125 Safari/537.36'
    }
}
var req=http.request(options,function(res){
	console.log('Status:'+res.statusCode);
	console.log('header:'+JSON.stringify(res.headers))
	res.on('data',function(chunk){
		console.log(Buffer.isBuffer(chunk));
	})
	res.on('end',function(){
		console.log('评论成功')
	})
	res.on('error',function(e){
		console.log('Error:'+e.message);
	})
})
req.write(postData);
req.end()
