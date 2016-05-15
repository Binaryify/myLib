var EventEmitter=require('events').EventEmitter;
var event=new EventEmitter();
event.on('some_event',function(){
	console.log('some_event occured.');
})


var i=0;
setInterval(function(){
	event.emit('some_event');
	i++;
	i=i*3;
	console.log(i)
},1000)
