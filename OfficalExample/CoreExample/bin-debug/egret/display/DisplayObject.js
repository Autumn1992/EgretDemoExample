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
 * 以下示例演示了 DisplayObject 的各个事件。
 */
var DisplayObjectExample = (function (_super) {
    __extends(DisplayObjectExample, _super);
    function DisplayObjectExample() {
        var _this = _super.call(this) || this;
        _this.touchEnabled = true;
        _this.draw();
        _this.addEventListener(egret.Event.ADDED, _this.onAdded, _this);
        _this.addEventListener(egret.Event.ENTER_FRAME, _this.onEnterFrame, _this);
        _this.addEventListener(egret.Event.REMOVED, _this.onRemoved, _this);
        _this.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.onClick, _this);
        _this.addEventListener(egret.Event.RENDER, _this.onRender, _this);
        return _this;
    }
    DisplayObjectExample.prototype.draw = function () {
        this.graphics.beginFill(0xff0000);
        this.graphics.drawRect(0, 0, 100, 100);
        this.graphics.endFill();
    };
    DisplayObjectExample.prototype.onClick = function (event) {
        egret.log("onClick");
        this.parent.removeChild(this);
    };
    DisplayObjectExample.prototype.onAdded = function (event) {
        egret.log("onAdded");
    };
    DisplayObjectExample.prototype.onEnterFrame = function (event) {
        egret.log("onEnterFrame");
        this.removeEventListener("enterFrame", this.onEnterFrame, this);
    };
    DisplayObjectExample.prototype.onRemoved = function (event) {
        egret.log("onRemoved");
    };
    DisplayObjectExample.prototype.onRender = function (event) {
        egret.log("onRender");
    };
    return DisplayObjectExample;
}(egret.Sprite));
__reflect(DisplayObjectExample.prototype, "DisplayObjectExample");
