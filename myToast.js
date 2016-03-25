var Toast = function(config) {

  this.context = config.context == null ? $('body') : config.context; //上下文

  this.message = config.message; //显示内容

  this.time = config.time == null ? 4000 : config.time; //持续时间

  this.bottom = config.bottom;

  this.init();

}

var msgEntity;

Toast.prototype = {

  //初始化显示的位置内容等

  init: function() {

    $("#toastMessage").remove();

    //设置消息体

    var msgDIV = new Array();

    msgDIV.push('<div id="toastMessage">');

    msgDIV.push('<span>' + this.message + '</span>');

    msgDIV.push('</div>');

    msgEntity = $(msgDIV.join('')).appendTo(this.context);

    //设置消息样式


    var bottom = this.bottom == null ? '20px' : this.bottom;
    msgEntity.css({
      position: 'fixed',
      // top: top,
      bottom:bottom,
      'z-index': '99',
      'background-color': 'black',
      color: 'white',
      left:"50%",
      transform:"translateX(-50%)",
      'font-size': '14px',
      padding: '10px',
      margin: '10px'
    });

    msgEntity.hide();

  },

  //显示动画

  show: function() {

    msgEntity.fadeIn(this.time / 2);

    msgEntity.fadeOut(this.time / 2);

  }

}

var myToast=function(text){
  new Toast({
    message: text
  }).show();
}
