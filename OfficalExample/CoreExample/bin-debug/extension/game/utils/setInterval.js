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
*   以下示例使用 setInterval() 方法创建一个计时间隔，以 1 秒的固定间隔调用 myRepeatingFunction() 方法。
*/
var setIntervalExample = (function (_super) {
    __extends(setIntervalExample, _super);
    function setIntervalExample() {
        var _this = _super.call(this) || this;
        _this.intervalDuration = 1000; // duration between intervals, in milliseconds
        _this.SetIntervalExample();
        return _this;
    }
    setIntervalExample.prototype.SetIntervalExample = function () {
        var intervalId = egret.setInterval(this.myRepeatingFunction, this, this.intervalDuration, ["Hello", "World"]);
    };
    setIntervalExample.prototype.myRepeatingFunction = function (obj) {
        egret.log(obj[0] + " " + obj[1]);
    };
    return setIntervalExample;
}(egret.DisplayObjectContainer));
__reflect(setIntervalExample.prototype, "setIntervalExample");
