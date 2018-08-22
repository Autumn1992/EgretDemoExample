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
 * 以下示例演示了使用 NumberUtilsExample 的使用方式。
 */
var numberUtilsExample = (function (_super) {
    __extends(numberUtilsExample, _super);
    function numberUtilsExample() {
        var _this = _super.call(this) || this;
        egret.log(egret.NumberUtils.isNumber("dd")); //false
        egret.log(egret.NumberUtils.isNumber(3312)); //true
        egret.log(egret.NumberUtils.sin(30));
        egret.log(egret.NumberUtils.cos(30));
        return _this;
    }
    return numberUtilsExample;
}(egret.DisplayObjectContainer));
__reflect(numberUtilsExample.prototype, "numberUtilsExample");
