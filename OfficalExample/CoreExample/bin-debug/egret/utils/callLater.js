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
 * 以下示例演示了使用 callLater 实现延迟函数。
 */
var callLaterExample = (function (_super) {
    __extends(callLaterExample, _super);
    function callLaterExample() {
        var _this = _super.call(this) || this;
        //创建 TextField 对象
        _this.label = new egret.TextField();
        //设置文本颜色
        _this.label.textColor = 0xFF0000;
        //设置字号
        _this.label.size = 30;
        //设置显示文本
        _this.label.text = "Hello Egret";
        //添加到显示列表
        _this.addChild(_this.label);
        egret.log("beforeCallLater");
        egret.callLater(_this.onCallLater, _this);
        egret.log("afterCallLater");
        return _this;
    }
    callLaterExample.prototype.onCallLater = function () {
        egret.log("onCallLater");
        this.label.text = "callLater";
    };
    return callLaterExample;
}(egret.DisplayObjectContainer));
__reflect(callLaterExample.prototype, "callLaterExample");
