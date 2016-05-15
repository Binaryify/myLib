var express = require('express') 
var bodyParser = require('body-parser');
var app=express();
app.use(bodyParser());
app.post('/:key', function(req, res){  
console.log(req.params.key);//输出index   
console.log(req.body.user);//输出表单post提交的login_name  
res.send(req.body.user) 
// res.send('great you are right for post method!');//显示页面文字信息
})
app.listen(8080)  
console.log('server start @8080')