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
 *   以下示例使用 Timer 创建计时器,并侦听egret.TimerEvent.TIMER与egret.TimerEvent.TIMER_COMPLETE事件。
 */
var TimerEventExample = (function (_super) {
    __extends(TimerEventExample, _super);
    function TimerEventExample() {
        var _this = _super.call(this) || this;
        var timer = new egret.Timer(1000, 5);
        timer.addEventListener(egret.TimerEvent.TIMER, _this.timerFunc, _this);
        timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE, _this.timerComFunc, _this);
        timer.start();
        return _this;
    }
    TimerEventExample.prototype.timerFunc = function (event) {
        egret.log("timerFunc count" + event.target.currentCount);
        //timerFunc count1
        //timerFunc count2
        //timerFunc count3
        //timerFunc count4
        //timerFunc count5
    };
    TimerEventExample.prototype.timerComFunc = function (event) {
        egret.log("timerComFunc count" + event.target.currentCount);
        ////timerFunc count5
    };
    return TimerEventExample;
}(egret.DisplayObjectContainer));
__reflect(TimerEventExample.prototype, "TimerEventExample");
