var globalArray=[];
function pushItem(obj){
  var flag=false;
  var globalIndex;
  globalArray.map(function(item,index){
    if(obj.id==item.id){
      flag=true;
      globalIndex=index;
    }
  })
  if(flag){
    globalArray[globalIndex]=obj;
  }else {
    globalArray.push(obj)
  }
}
pushItem({"id":"1","shopName":"海鲜披萨","money":"40","totle":"290"})
pushItem({"id":"2","shopName":"牛肉披萨","money":"30","totle":"101"})
pushItem({"id":"2","shopName":"牛肉披萨","money":"30","totle":"100"})
pushItem({"id":"2","shopName":"牛肉披萨","money":"30","totle":"99"})
pushItem({"id":"3","shopName":"榴莲披萨","money":"25","totle":"222"})
console.log(globalArray)
