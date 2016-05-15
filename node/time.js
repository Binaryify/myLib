 var startTime = new Date();
 
 //初始化计时器
 var start = setTimeout(function() {
    var end = new Date();
    console.log('10ms的计时器执行完成，距离程序开始' + (end - start) + 'ms');
 }, 10);

 //模拟鼠标点击事件
 function asyncReal(data, callback) {
     process.nextTick(function() {
         callback();      
      });
 }
 var asyncStart = new Date();
 asyncReal('yuanzm', function() {
     var asyncEnd = new Date();
     console.log('模拟鼠标执行事件完成，花费时间' + (asyncEnd - asyncStart) + 'ms');
 })
 
 //设定定时器
 count = 1;
 var interval = setInterval(function() {
     ++count;
     if(count === 5) {
         clearInterval(interval);
     }
     console.log('定时器事件');
 },10);
 
 //模拟第一阶段代码执行
 var first = [];
 var start = new Date();
 for(var i = 0;i < 10000000;i++){
     first.push(i);
 }
 var end = new Date();
 console.log('第一阶段代码执行完成,用时' + (end - start) + 'ms');