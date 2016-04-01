//模块化基本框架,支持amd,common js ,以及浏览器下直接使用
(function(global, factory) {
  if (typeof define === 'function' && define.amd) {
    define(function() {
      return factory(global);
    });
  } else if (typeof exports === 'object') {
    module.exports = factory;
  } else {
    global.zzz = factory(global);
  }
})(this, function(global) {
  'use strict';
  function zzz() {
    console.log('dosomething...');
    //逻辑代码
  }
  return zzz;
});

// 浏览器下 直接new zzz() or import zzz from './zzz.js' new zzz()
