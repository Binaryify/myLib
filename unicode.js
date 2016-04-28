/*
*js Unicode编码转换
*/
var decToHex = function(str) {
    var res=[];
    for(var i=0;i < str.length;i++)
        res[i]=("00"+str.charCodeAt(i).toString(16)).slice(-4);
    return "\\u"+res.join("\\u");
}
var hexToDec = function(str) {
    str=str.replace(/\\/g,"%");
    return unescape(str);
}
