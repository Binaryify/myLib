var mongoose=require('mongoose');
Schema=mongoose.Schema;
mongoose.connect('127.0.0.1:27017/node-oongo-examples',function(err){
	if(err){
		console.log("连接数据库失败");
	}else{
		console.log("连接数据库成功");
	}
});
var goodsSchema=new Schema({
	type:String,
	price:Number
})
var storeSchema=new Schema({
	name:String,
	goods:[goodsSchema]
});
var store1={name:'store1',goods:[{type:'food',price:11}]}
var store2={name:'store2',goods:[{type:'food',price:22}]}
var docs=[store1,store2];

var Stores=mongoose.model('stores',storeSchema);
Stores.create(docs,function(err,docs){
	if(err){
		console.log("储存数据失败");
	}else{
		Stores.find(function(err,docs){
			if(err){
				console.log("读取数据失败");
			}else{
				console.log(docs);
				console.log(docs[0].name);
				mongoose.disconnect();
			}
		})
	}
})