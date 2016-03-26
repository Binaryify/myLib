(function(){
  function readFile() {
    var file = this.files[0];
    //这里我们判断下类型如果不是图片就返回 去掉就可以上传任意文件
    if (!/image\/\w+/.test(file.type)) {
      alert("请确保文件为图像类型");
      return false;
    }
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function(e) {
      if ($('#userImg').attr('src') != '') {
        $('#userImg').cropper('destroy');
      }
      $('#userImg').attr('src', this.result);
      $('#userImg').cropper({
        aspectRatio: 1 / 1
      });
    }
  }
  $('#userImg').click(function() {
    chooseImg()
  })
  var chooseImg = function() {
    $('#file1').click();
    if (typeof(FileReader) === 'undefined') {
      alert("抱歉，你的浏览器不支持 FileReader，请使用现代浏览器操作！");
    } else {
      $('#file1')[0].addEventListener('change', readFile, false);
    }
  }
  $('#sub').click(function() {
    var src = $('#userImg').eq(0).attr("src");
    var canvasdata = $("#userImg").cropper("getCanvasData");
    var cropBoxData = $("#userImg").cropper('getCropBoxData');
    convertToData(src, canvasdata, cropBoxData, function(basechar) {
      alert('截图base64已生成')
      console.log(basechar)
    })
  })

})()
