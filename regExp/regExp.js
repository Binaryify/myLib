(function(global, factory) {
  if (typeof define === 'function' && define.amd) {
    define(function() {
      return factory(global);
    });
  } else if (typeof exports === 'object') {
    module.exports = factory();
  } else {
    global.myRegExp = factory(global);
  }
})(this, function(global) {
  'use strict';
  return {
    phoneReg: /^1[0-9]{10}$/,  //检验手机号码``
    // /^[a-zA-Z][a-zA-Z0-9_]{4,15}$/
    userNameReg:/^(?!_)(?!.*?_$)[a-zA-Z0-9_\u4e00-\u9fa5]+$/,  //正则表达式，只含有汉字、数字、字母、下划线不能以下划线开头和结尾
    emailReg:/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,
    tabReg:/(\/tab[0-9+])/,
    test:/(\w+)(.+)\1/ ,  //反向引用 ,匹配相同字符中间夹住的内容
    test2:/<(\w+)>(.+)<\/\1>/g  , //反向引用,匹配标签,
    test3:/s/
  }
});
