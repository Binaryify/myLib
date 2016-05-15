var Person = function(name) {
    this.name = name;
}

var p = {}
p.__proto__ = Person.prototype
Person.call(p, '老王'); ///new 的过程
console.log(p.name);

function old(arg1,arg2,arg3){
	arg1={};
	arg1.__proto__=arg2.prototype;
	arg2.call(arg1,arg3);
	return arg1;
}
var n;
var i=old(n,Person,'hehe');
console.log(i.name);
console.log(i);
