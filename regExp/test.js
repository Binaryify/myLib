var myRegExp=require("./regExp.js")
var expect = require('chai').expect;
var decToHex = function(str) {
    var res=[];
    for(var i=0;i < str.length;i++)
        res[i]=("00"+str.charCodeAt(i).toString(16)).slice(-4);
    return "\\u"+res.join("\\u");
}
describe('正则表达式测试', function() {
  it('测试号码"1316960000x",结果应该为false', function() {
    expect(myRegExp.phoneReg.test('1316960000x')).to.be.false;
  });
  it('测试号码"13169600000",结果应该为true', function() {
    expect(myRegExp.phoneReg.test('13169600000')).to.be.true;
  });
  it('测试号码"1316900000",结果应该为false', function() {
    expect(myRegExp.phoneReg.test('1316900000')).to.be.false;
  });
  it('测试用户名"zuzuh",结果应该为true', function() {
    expect(myRegExp.userNameReg.test('zuzuh')).to.be.true;
  });
  it('测试用户名"!zuzuh",结果应该为false', function() {
    expect(myRegExp.userNameReg.test('!zuzuh')).to.be.false;
  });
  it('测试用户名"zuzuh_",结果应该为false', function() {
    expect(myRegExp.userNameReg.test('zuzuh_')).to.be.false;
  });
  it('测试用户名"zu_zuh",结果应该为true', function() {
    expect(myRegExp.userNameReg.test('zu_zuh')).to.be.true;
  });
  it('测试用户名"_zuzuh",结果应该为false', function() {
    expect(myRegExp.userNameReg.test('_zuzuh')).to.be.false;
  });
  it('邮箱"xx.qq.com",结果应该为false', function() {
    expect(myRegExp.emailReg.test('xx.qq.com')).to.be.false;
  });
  it('邮箱"xx@qq.com",结果应该为true', function() {
    expect(myRegExp.emailReg.test('xx@qq.com')).to.be.true;
  });
  it('邮箱"1821000000@qq.com",结果应该为true', function() {
    expect(myRegExp.emailReg.test('1821000000@qq.com')).to.be.true;
  });
  it('测试URL:"/tab1?code=001085067272c6157e7ef037cb82a41E&state=STATE&code=001085067272c6157e7ef037cb82a41E&state=STATE",结果应该为"/tab1"', function() {
    expect(myRegExp.tabReg.exec('/tab1?code=001085067272c6157e7ef037cb82a41E&state=STATE&code=001085067272c6157e7ef037cb82a41E&state=STATE')[0]).to.equal('/tab1')
  });
  it('测试emoji表情"😂",结果应该为true',function(){
    expect(myRegExp.emojiReg.test('😂')).to.be.true;
  })
  it('测试emoji表情"😄",结果应该为true',function(){
    expect(myRegExp.emojiReg.test('😄')).to.be.true;
  })
  it('测试emoji表情"👍",结果应该为true',function(){
    expect(myRegExp.emojiReg.test('👍')).to.be.true;
  })
  it('测试emoji表情"🙏",结果应该为true',function(){
    expect(myRegExp.emojiReg.test('🙏')).to.be.true;
  })
  it('测试emoji表情"⭕",结果应该为true',function(){
    expect(myRegExp.emojiReg.test('⭕')).to.be.true;
  })
  it('测试emoji表情"❌",结果应该为true',function(){
    expect(myRegExp.emojiReg.test('❌')).to.be.true;
  })
});
