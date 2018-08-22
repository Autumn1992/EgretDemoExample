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
 * 以下示例演示了使用 Sprite 类绘制一个正方形，然后侦听他的各种触摸事件。
 */
var SpriteExample = (function (_super) {
    __extends(SpriteExample, _super);
    function SpriteExample() {
        var _this = _super.call(this) || this;
        var sprite = new egret.Sprite();
        sprite.graphics.beginFill(0xff0000);
        sprite.graphics.drawRect(0, 0, 100, 100);
        sprite.graphics.endFill();
        _this.addChild(sprite);
        sprite.touchEnabled = true;
        sprite.addEventListener(egret.TouchEvent.TOUCH_BEGIN, _this.onTouchBegin, _this);
        sprite.addEventListener(egret.TouchEvent.TOUCH_END, _this.onTouchEnd, _this);
        sprite.addEventListener(egret.TouchEvent.TOUCH_MOVE, _this.onTouchMove, _this);
        sprite.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.onTouchTap, _this);
        return _this;
    }
    SpriteExample.prototype.onTouchBegin = function () {
        egret.log("onTouchBegin");
    };
    SpriteExample.prototype.onTouchEnd = function () {
        egret.log("onTouchEnd");
    };
    SpriteExample.prototype.onTouchMove = function () {
        egret.log("onTouchMove");
    };
    SpriteExample.prototype.onTouchTap = function () {
        egret.log("onTouchTap");
    };
    return SpriteExample;
}(egret.DisplayObjectContainer));
__reflect(SpriteExample.prototype, "SpriteExample");
