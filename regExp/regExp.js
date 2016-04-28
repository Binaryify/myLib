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
    // emojiReg:/(\ud83d[\uda00-\ude4f])|[\u2b55]|[\u274c]/,
    emojiReg:/(\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD79\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED0\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3]|\uD83E[\uDD10-\uDD18\uDD80-\uDD84\uDDC0])|([\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u2388\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692-\u2694\u2696\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299])|(\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF])|(\uD83E[\uDD10-\uDD18\uDD80-\uDD84\uDDC0])/,
     //http://stackoverflow.com/questions/22006218/replace-emoji-unicode-symbol-using-regexp-in-javascript
    test1:/(\w+)(.+)\1/ ,  //反向引用 ,匹配相同字符中间夹住的内容
    test2:/<(\w+)>(.+)<\/\1>/g  , //反向引用,匹配标签,
    test3:/s/
  }
});
