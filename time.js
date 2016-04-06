var formatDateTime = function(date) {
  var y = date.getFullYear();
  var m = date.getMonth() + 1;
  m = m < 10 ? ('0' + m) : m;
  var d = date.getDate();
  d = d < 10 ? ('0' + d) : d;
  var h = date.getHours();
  var minute = date.getMinutes();
  minute = minute < 10 ? ('0' + minute) : minute;
  return y + '-' + m + '-' + d ;
};
function getTime() {
  var date = new Date();
  this.year = date.getFullYear();
  this.month = date.getMonth() < 10 ? "0" + (date.getMonth() + 1) : (date.getMonth() + 1);
  this.date = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
  this.hour = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
  this.minute = date.getMinutes()
  return this.year + "-" + this.month + "-" + this.date + "T" + this.hour + ":" + this.minute + ":00"
}

function duibi(a, b) {
   var arr = a.split("-");
   var starttime = new Date(arr[0], arr[1], arr[2]);
   var starttimes = starttime.getTime();
   var arrs = b.split("-");
   var lktime = new Date(arrs[0], arrs[1], arrs[2]);
   var lktimes = lktime.getTime();
   if (starttimes >= lktimes) {
      //  alert('开始时间大于离开时间，请检查');
       return false;
   }
   else
       return true;
}
Date.prototype.format = function(format) {
       var date = {
              "M+": this.getMonth() + 1,
              "d+": this.getDate(),
              "h+": this.getHours(),
              "m+": this.getMinutes(),
              "s+": this.getSeconds(),
              "q+": Math.floor((this.getMonth() + 3) / 3),
              "S+": this.getMilliseconds()
       };
       if (/(y+)/i.test(format)) {
              format = format.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length));
       }
       for (var k in date) {
              if (new RegExp("(" + k + ")").test(format)) {
                     format = format.replace(RegExp.$1, RegExp.$1.length == 1
                            ? date[k] : ("00" + date[k]).substr(("" + date[k]).length));
              }
       }
       return format;
}
// var d = new Date().format('yyyy-mm-dd');
// console.log(d); // 2013-11-04
/*
* 获得时间差,时间格式为 年-月-日 小时:分钟:秒 或者 年/月/日 小时：分钟：秒
* 其中，年月日为全格式，例如 ： 2010-10-12 01:00:00
* 返回精度为：秒，分，小时，天
*/
function GetDateDiff(startTime, endTime, diffType) {
    //将xxxx-xx-xx的时间格式，转换为 xxxx/xx/xx的格式
    startTime = startTime.replace(/\-/g, "/");
    endTime = endTime.replace(/\-/g, "/");

    //将计算间隔类性字符转换为小写
    diffType = diffType.toLowerCase();
    var sTime = new Date(startTime);      //开始时间
    var eTime = new Date(endTime);  //结束时间
    //作为除数的数字
    var divNum = 1;
    switch (diffType) {
        case "second":
            divNum = 1000;
            break;
        case "minute":
            divNum = 1000 * 60;
            break;
        case "hour":
            divNum = 1000 * 3600;
            break;
        case "day":
            divNum = 1000 * 3600 * 24;
            break;
        default:
            break;
    }
    return parseInt((eTime.getTime() - sTime.getTime()) / parseInt(divNum));
}
// var testDate = new Date();
// var testStr = testDate.format("yyyy-MM-dd hh:mm:ss");
//
// var result = GetDateDiff("2010-02-26 16:00:00", testStr, "day");
// document.write("两者时间差为：" + result + "天了。");
// 使用的方法很简单，比如计算天数可以这样：

// GetDateDiff("2010-02-26 16:00:00", "2011-07-02 21:48:40", "day");
// 计算秒数则可以这样：

// GetDateDiff("2010-02-26 16:00:00", "2011-07-02 21:48:40", "second");
