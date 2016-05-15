var http = require("http");
var fs = require("fs");

var server = http.createServer(function(req, res){
})
var url = "http://s0.hao123img.com/res/img/logo/logonew.png";
var downImg=function(url){
    http.get(url, function(res){
    var imgData = "";

    res.setEncoding("binary");


    res.on("data", function(chunk){
        imgData+=chunk;
    });

    res.on("end", function(){
    	var time=new Date().getTime();
        fs.writeFile("./public/upload/downImg/"+time+'.png', imgData, "binary", function(err){
            if(err){
                console.log("下载失败");
                console.log(err)
            }else{
            	console.log("下载图片成功");
            }
            
        });
    });
});
}

downImg(url)