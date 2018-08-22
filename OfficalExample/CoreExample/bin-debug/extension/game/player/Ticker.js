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
 * 以下示例演示了使用 Ticker 注册和删除帧函数。
 */
var TickerExample = (function (_super) {
    __extends(TickerExample, _super);
    function TickerExample() {
        var _this = _super.call(this) || this;
        _this.passTime = 0;
        //注册事件侦听
        egret.Ticker.getInstance().register(_this.onTick, _this);
        egret.log("register");
        return _this;
    }
    TickerExample.prototype.onTick = function (dt) {
        //累加时间，dt是帧时间间隔以毫秒为单位
        this.passTime += dt;
        egret.log("onTick");
        //经过5秒后删除帧函数
        if (this.passTime > 5000) {
            egret.Ticker.getInstance().unregister(this.onTick, this);
            egret.log("unregister");
        }
    };
    return TickerExample;
}(egret.DisplayObjectContainer));
__reflect(TickerExample.prototype, "TickerExample");
