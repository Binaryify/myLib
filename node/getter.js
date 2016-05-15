var man={
	name:"fa",
	get age(){
		return new Date().getFullYear()-1994;
	},
	set age(val){
		console.log("不能设置age为"+val)
	}
}

console.log(man.age)
console.log(man.age=1)

function Foo(val) {
    this.value = val;
}
Foo.prototype = {
    set value(val) {
        this.vvv = "[" + val + "]"
    },
    get value() {
        return "Get:" + this.vvv;
    }
}
var f = new Foo("wow!");
console.log(f.value, "\n", f.vvv, "\n");
f.vvv = "oh!";
console.log(f.value, "\n", f.vvv, "\n");
