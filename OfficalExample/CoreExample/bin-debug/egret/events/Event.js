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
 * 以下示例演示了事件的捕获冒泡。
 */
var EventExample = (function (_super) {
    __extends(EventExample, _super);
    function EventExample() {
        var _this = _super.call(this) || this;
        _this.rotation = 45;
        var left = new egret.Shape();
        left.graphics.beginFill(0xff0000);
        left.graphics.drawRect(0, 0, 100, 100);
        left.graphics.endFill();
        left.x = 100;
        _this.addChild(left);
        left.touchEnabled = true;
        left.addEventListener(egret.TouchEvent.TOUCH_TAP, function (event) {
            egret.log("点击左侧方块，eventPhase：" + event.eventPhase);
        }, left);
        var right = new egret.Shape();
        right.graphics.beginFill(0x00ff00);
        right.graphics.drawRect(0, 0, 100, 100);
        right.graphics.endFill();
        right.x = 145;
        right.y = -40;
        _this.addChild(right);
        right.touchEnabled = true;
        right.addEventListener(egret.TouchEvent.TOUCH_TAP, function (event) {
            egret.log("点击右侧方块，eventPhase：" + event.eventPhase);
        }, right);
        _this.touchEnabled = true;
        _this.addEventListener(egret.TouchEvent.TOUCH_TAP, function (event) {
            egret.log("容器冒泡侦听，eventPhase：" + event.eventPhase);
        }, _this);
        _this.addEventListener(egret.TouchEvent.TOUCH_TAP, function (event) {
            egret.log("容器捕获侦听，eventPhase：" + event.eventPhase);
        }, _this, true);
        return _this;
    }
    return EventExample;
}(egret.DisplayObjectContainer));
__reflect(EventExample.prototype, "EventExample");
