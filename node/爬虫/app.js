var request = require('request');
var cheerio = require("cheerio");
request('http://www.imooc.com/course/list', function(error, response, body) {
    if (!error && response.statusCode == 200) {
        $ = cheerio.load(body);
        var item = $('.js-course-lists li');
        var len = item.length;
        item.each(function(i, item) {
            console.log(i + 1)
            console.log($(this).find('h5 span').text())
            console.log("http://www.imooc.com/course/list" + $(this).find("a").attr('href'))
        })
    }
})
