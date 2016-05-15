var http = require('http')
var querystring = require('querystring');
var postData = querystring.stringify({
    'contents': '慕课网怎么盈利的',
    'mid': 8952
})
var options = {
    hostname: 'www.imooc.com',
    port: 80,
    path: '/course/docomment',
    method: 'post',
    header: {
        'Accept':'application/json, text/javascript, */*; q=0.01',
        'Accept-Encoding':'gzip, deflate',
        'Accept - Language': 'zh - CN, zh;q = 0.8',
        'Connection': 'keep - alive',
        'Content - Length': postData.length,
        'Content - Type': 'application / x - www - form - urlencoded;charset = UTF - 8',
        'Cookie': 'imooc_uuid = ab3c8ea9 - 18 a3 - 4 fb5 - 820 c - 1515 df73469e;PHPSESSID = mpaken2ema9f2qpq74m6097dp7;loginstate = 1;apsid = QxM2ZhMWJmZWMwZTM3ZDNjZTg4MmZhYzMwOGM4ZjUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMTI0NTM0MwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4MjEzNDczODJAcXEuY29tAAAAAAAAAAAAAAAAAAAAADU2MWM4MTVhZGY2ZjAwMjk3NGY1NjdkMDY4MjgyMDRhIRfaVCEX2lQ % 3 DYj;cvde = 55 ceb0cb74b9d - 11;Hm_lvt_f0cfcccd7b1393990c78efdeebff3968 = 1438742687, 1439179302, 1439514229, 1439609036;Hm_lpvt_f0cfcccd7b1393990c78efdeebff3968 = 1439609274',
        'Host': 'www.imooc.com',
        'Origin': 'http: //www.imooc.com',
        'Referer': 'http: //www.imooc.com/video/8952',
        'User - Agent': 'Mozilla / 5.0(Windows NT 10.0; WOW64) AppleWebKit / 537.36(KHTML, like Gecko) Chrome / 44.0.2403.125 Safari / 537.36',
        'X - Requested - With': 'XMLHttpRequest'
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
