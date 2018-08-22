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
 * 以下示例演示了使用 getTimer 获取启动 Egret 引擎以来经过的毫秒数。
 */
var getTimerExample = (function (_super) {
    __extends(getTimerExample, _super);
    function getTimerExample() {
        var _this = _super.call(this) || this;
        egret.Tween.get(_this, { loop: true }).wait(1000).call(function () {
            egret.log(egret.getTimer());
        });
        return _this;
    }
    return getTimerExample;
}(egret.DisplayObjectContainer));
__reflect(getTimerExample.prototype, "getTimerExample");
