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
*   以下示例使用 setTimeout() 方法在指定的延迟期之后调用另一个方法。
*/
var setTimeoutExample = (function (_super) {
    __extends(setTimeoutExample, _super);
    function setTimeoutExample() {
        var _this = _super.call(this) || this;
        _this.delay = 1000; // delay before calling myDelayedFunction
        _this.SetTimeoutExample();
        return _this;
    }
    setTimeoutExample.prototype.SetTimeoutExample = function () {
        var intervalId = egret.setTimeout(this.myDelayedFunction, this, this.delay, ["Hello", "World"]);
        return intervalId;
    };
    setTimeoutExample.prototype.myDelayedFunction = function (obj) {
        egret.log(obj[0] + " " + obj[1]); //Hello World
    };
    return setTimeoutExample;
}(egret.DisplayObjectContainer));
__reflect(setTimeoutExample.prototype, "setTimeoutExample");
