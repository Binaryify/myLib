function Hello(){
	var name;
	this.setName=function(theName){
		name=theName;
	};
	this.sayHello=function(){
		console.log('hello ' +name);
	};

}
module.exports=Hello;