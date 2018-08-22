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
 * 以下示例演示了使用 is 检查指定对象是否为 Egret 框架内指定接口或类或其子类的实例
 */
var isExample = (function (_super) {
    __extends(isExample, _super);
    function isExample() {
        var _this = _super.call(this) || this;
        var sprite = new egret.Sprite();
        egret.log(egret.is(sprite, "egret.Sprite")); //true
        egret.log(egret.is(sprite, "egret.Shape")); //false
        return _this;
    }
    return isExample;
}(egret.DisplayObjectContainer));
__reflect(isExample.prototype, "isExample");
