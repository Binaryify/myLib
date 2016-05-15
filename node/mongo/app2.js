var mongoose=require('mongoose');
Schema=mongoose.Schema;
mongoose.connect('mongodb://127.0.0.1:27017/nodedb',function(err){
// mongoose.connect('127.0.0.1:27017/nodedb',function(err){
	if(err){
		console.log("连接数据库失败");
	}else{
		console.log("连接数据库成功");
	}
});
// 储存的数据类型
var storeSchema=new Schema({
	name:String
})
// 具体要储存的数据
var stores={name:'store3'};

var db=mongoose.model('os',storeSchema);//os是数据表
db.create(stores,function(err,stores){
	if(err){
		console.log("储存数据失败");
	}else{
		db.find(function(err,stores){
			console.log(stores);
		})
	}
})
