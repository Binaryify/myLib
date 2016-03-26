//图像裁剪
function convertToData(url, canvasdata, cropdata, callback) {
  var cropw = cropdata.width; // 剪切的宽
  var croph = cropdata.height; // 剪切的宽
  var imgw = canvasdata.width; // 图片缩放或则放大后的高
  var imgh = canvasdata.height; // 图片缩放或则放大后的高

  var poleft = canvasdata.left - cropdata.left; // canvas定位图片的左边位置
  var potop = canvasdata.top - cropdata.top; // canvas定位图片的上边位置

  var canvas = document.createElement("canvas");
  var ctx = canvas.getContext('2d');

  canvas.width = cropw;
  canvas.height = croph;

  var img = new Image();
  img.src = url;

  img.onload = function() {
    this.width = imgw;
    this.height = imgh;
    // 这里主要是懂得canvas与图片的裁剪之间的关系位置
    ctx.drawImage(this, poleft, potop, this.width, this.height);
    var base64 = canvas.toDataURL('image/jpg', 1); // 这里的“1”是指的是处理图片的清晰度（0-1）之间，当然越小图片越模糊，处理后的图片大小也就越小
    callback && callback(base64) // 回调base64字符串
  }
}
