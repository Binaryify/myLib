var myRegExp=require("./regExp.js")
var expect = require('chai').expect;
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
  it('测试用户名"zuzuh",结果应该为false', function() {
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
});
