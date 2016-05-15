// var express = require('express');
// var app = express();

// // 加载hbs模块
// var hbs = require('hbs');

// // 指定模板文件的后缀名为html
// app.set('view engine', 'html');

// // 运行hbs模块
// app.engine('html', hbs.__express);

// app.get('/', function (req, res){
//     res.render('index');
// });

// app.get('/about', function(req, res) {
//     res.render('about');
// });

// app.get('/article', function(req, res) {
//     res.render('article');
// });
 
// app.listen(3000);
// console.log('3000')


var express = require('express');
var app = express();
var bodyParser=require('body-parser');
var hbs = require('hbs');

// 加载数据模块
var blogEngine = require('./blog');
// app.use(bodyParser.urlencoded());
app.set('view engine', 'html');
app.engine('html', hbs.__express);
// app.use(express.bodyParser());
 
app.get('/', function(req, res) {
   res.render('index',{title:"最近文章", entries:blogEngine.getBlogEntries()});
});
 
app.get('/about', function(req, res) {
   res.render('about', {title:"自我介绍"});
});
 
app.get('/article/:id', function(req, res) {
   var entry = blogEngine.getBlogEntry(req.params.id);
   res.render('article',{title:entry.title, blog:entry});
});
app.get('/afa', function(req, res) {
   res.render('fa',{title:'标题'});
});
 
app.listen(3000);
console.log(3000)