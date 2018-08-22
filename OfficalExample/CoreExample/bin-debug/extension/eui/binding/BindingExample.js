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
 * @language en_US
 * The following example uses the class BindingExample to show how to performing data binding
 */
/**
 * @language zh_CN
 * 以下示例使用 BindingExample 类来说明如何执行数据绑定
 */
var BindingExample = (function (_super) {
    __extends(BindingExample, _super);
    function BindingExample() {
        var _this = _super.call(this) || this;
        _this.porp = 789;
        _this.porp2 = 456;
        eui.Binding.bindProperty(_this, ["porp"], _this, "porp2");
        eui.Binding.bindHandler(_this, ["porp"], _this.watcherHander, _this);
        _this.porp = 666;
        _this.porp = 123;
        return _this;
    }
    BindingExample.prototype.watcherHander = function (value) {
        egret.log("watcherHander:" + " " + value + " " + this.porp + " " + this.porp2);
    };
    return BindingExample;
}(egret.Sprite));
__reflect(BindingExample.prototype, "BindingExample");
