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
var TouchEventExample = (function (_super) {
    __extends(TouchEventExample, _super);
    function TouchEventExample() {
        var _this = _super.call(this) || this;
        _this.touchEventDemo();
        _this.touchCancelDemo();
        return _this;
    }
    TouchEventExample.prototype.touchEventDemo = function () {
        var container = new egret.Sprite();
        this.addChild(container);
        container.rotation = 45;
        var left = new egret.Shape();
        left.graphics.beginFill(0xff0000);
        left.graphics.drawRect(0, 0, 100, 100);
        left.graphics.endFill();
        left.x = 100;
        container.addChild(left);
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
        container.addChild(right);
        right.touchEnabled = true;
        right.addEventListener(egret.TouchEvent.TOUCH_TAP, function (event) {
            egret.log("点击右侧方块，eventPhase：" + event.eventPhase);
        }, right);
        container.touchEnabled = true;
        container.addEventListener(egret.TouchEvent.TOUCH_TAP, function (event) {
            egret.log("容器冒泡侦听，eventPhase：" + event.eventPhase);
        }, this);
        container.addEventListener(egret.TouchEvent.TOUCH_TAP, function (event) {
            egret.log("容器捕获侦听，eventPhase：" + event.eventPhase);
        }, this, true);
    };
    TouchEventExample.prototype.touchCancelDemo = function () {
        var scroller = new eui.Scroller();
        scroller.x = 250;
        var list = new eui.List();
        var ac = new eui.ArrayCollection([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]);
        list.dataProvider = ac;
        list.itemRendererSkinName = "\n        <e:Skin states=\"up,down,disabled\" minHeight=\"50\" minWidth=\"100\" xmlns:e=\"http://ns.egret.com/eui\">\n                <e:Image width=\"100%\" height=\"100%\" scale9Grid=\"1,3,8,8\" alpha.disabled=\"0.5\"\n                         source=\"resource/button_up.png\"\n                         source.down=\"resource/button_down.png\"/>\n                <e:Label text=\"{data}\" top=\"8\" bottom=\"8\" left=\"8\" right=\"8\"\n                         textColor=\"0xFFFFFF\" verticalAlign=\"middle\" textAlign=\"center\"/>\n            </e:Skin>";
        scroller.viewport = list;
        scroller.height = 200;
        this.addChild(scroller);
        scroller.addEventListener(egret.TouchEvent.TOUCH_BEGIN, function () { egret.log("111 Scroller Begin"); }, this);
        list.addEventListener(egret.TouchEvent.TOUCH_BEGIN, function () { egret.log("111 List Begin"); }, this);
        scroller.addEventListener(egret.TouchEvent.TOUCH_END, function () { egret.log("222 Scroller END"); }, this);
        list.addEventListener(egret.TouchEvent.TOUCH_END, function () { egret.log("222 List END"); }, this);
        scroller.addEventListener(egret.TouchEvent.TOUCH_TAP, function () { egret.log("33 Scroller Tap"); }, this);
        list.addEventListener(egret.TouchEvent.TOUCH_TAP, function () { egret.log("33 List Tap"); }, this);
        //scroller 滚动后会触发 touchCancel 事件
        //dispatch touchcancel event after scroller move
        scroller.addEventListener(egret.TouchEvent.TOUCH_CANCEL, function () { egret.log("44 Scroller cancel"); }, this);
        list.addEventListener(egret.TouchEvent.TOUCH_CANCEL, function () { egret.log("44 List cancel"); }, this);
    };
    return TouchEventExample;
}(egret.DisplayObjectContainer));
__reflect(TouchEventExample.prototype, "TouchEventExample");
