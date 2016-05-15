var nodegrass = require('nodegrass');
// var sqlite3 = require('sqlite3').verbose();
// var db = new sqlite3.Database('blog.db');
var tmp = 0;
var qq=852573943;
function nodepa(tmp) {
    if (tmp == 10) tmp--;
    nodegrass.get("http://taotao.qq.com/cgi-bin/emotion_cgi_homepage_msg?owneruin=" + qq+ "&start=" + tmp + "&num=10&format=jsonp", function(data, status, headers) {
        var json = JSON.parse(data.slice(10, -2));
        for (var s in json['result']['posts']) {
            // db.run("insert into qzone values('" + (Number(s) + tmp).toString() + "','" + json['result']['posts'][s]['content'].toString() + "','" + json['result']['posts'][s]['create_time'].toString() + "','" + json['result']['posts'][s]['createTime2'].toString() + "')", function() {
            //     if (this.changes == undefined || this.changes == null)console.log("err");
            // })
            console.log(json['result']['posts'][s]['content']);
            console.log(json['result']['posts'][s]['createTime2']);
            console.log(Number(s) + tmp);
        }
        if (tmp < 2640) nodepa(tmp + 10);
        else return;
    }, 'utf-8').on('error', function(e) {
        console.log("Got error: " + e.message);
    });
}
nodepa(tmp);