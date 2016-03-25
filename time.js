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
