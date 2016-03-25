var topInfo = function(config){
  this.context = config.context == null ? $('body') : config.context; //上下文
  this.message=config.message;
  this.time = config.time == null ? 30000 : config.time; //持续时间
  this.speed=config.speed==null?3:config.speed
  this.init();
}
var infoEntity;
topInfo.prototype={
  init:function(){
    $("#topInfo").remove();
    var msgDIV = new Array();
    msgDIV.push('<div id="topInfo">');
    msgDIV.push('<marquee scrollAmount='+this.speed+' width=100%>' + this.message + '</marquee>');
    msgDIV.push('</div>');
    infoEntity = $(msgDIV.join('')).appendTo(this.context);
    infoEntity.css({
      'height':"50px",
      'line-height': '50px',
      'width':'80%',
      'color':'white',
      'background':'rgb(56,126,245)',
      'position':'fixed',
      'z-index': '999999999',
      'bottom':'100px',
      'left':'50%',
      'pointer-events': 'none',
      'transform':'translateX(-50%) translateY(-50%)'
    });

    infoEntity.hide();
  },
  show: function() {
    infoEntity.fadeIn(1000);
    infoEntity.fadeOut(this.time -1000);
    setTimeout(function(){
      console.log(111)
      $("#topInfo").remove();
    },this.time)

  }

}
var mytopInfo=function(text,speed){
  new topInfo({
    message: text,
    speed:speed
  }).show();
}
