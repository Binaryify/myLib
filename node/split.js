var i="1234567890";
console.log(i.split("").sort(function(){
	return (Math.random()-0.5);
}).join(""));