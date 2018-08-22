var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
/**
*   使用以下代码将红色进行进制转换
*/
var toColorStringExample = (function (_super) {
    __extends(toColorStringExample, _super);
    function toColorStringExample() {
        var _this = _super.call(this) || this;
        var color1 = 0xFF0000;
        egret.log(color1); //16711680 
        egret.log(egret.toColorString(color1)); //#FF0000 
        return _this;
    }
    return toColorStringExample;
}(egret.DisplayObjectContainer));
__reflect(toColorStringExample.prototype, "toColorStringExample");
