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
 * @language en_US
 * The following example uses the class ScrollPolicyExample to show the policy of the scroller
 */
/**
 * @language zh_CN
 * 以下示例使用 ScrollPolicyExample 类来控制滚动条的策略
 */
var ScrollPolicyExample = (function (_super) {
    __extends(ScrollPolicyExample, _super);
    function ScrollPolicyExample() {
        var _this = _super.call(this) || this;
        var scrollerAuto = _this.getScroller();
        scrollerAuto.scrollPolicyV = eui.ScrollPolicy.AUTO;
        scrollerAuto.height = 190;
        _this.addChild(scrollerAuto);
        var txt1 = _this.getTxt(eui.ScrollPolicy.AUTO);
        txt1.y = 400;
        _this.addChild(txt1);
        var scrollerAuto2 = _this.getScroller();
        scrollerAuto2.x = 120;
        scrollerAuto2.scrollPolicyV = eui.ScrollPolicy.AUTO;
        scrollerAuto2.height = 400;
        _this.addChild(scrollerAuto2);
        var txt2 = _this.getTxt(eui.ScrollPolicy.AUTO);
        txt2.x = 120;
        txt2.y = 400;
        _this.addChild(txt2);
        var scrollerON = _this.getScroller();
        scrollerON.scrollPolicyV = eui.ScrollPolicy.ON;
        scrollerON.x = 240;
        scrollerON.height = 400;
        _this.addChild(scrollerON);
        var txt3 = _this.getTxt(eui.ScrollPolicy.ON);
        txt3.x = 240;
        txt3.y = 400;
        _this.addChild(txt3);
        var scrollerOFF = _this.getScroller();
        scrollerOFF.scrollPolicyV = eui.ScrollPolicy.OFF;
        scrollerOFF.x = 360;
        scrollerOFF.height = 400;
        _this.addChild(scrollerOFF);
        var txt4 = _this.getTxt(eui.ScrollPolicy.OFF);
        txt4.x = 360;
        txt4.y = 400;
        _this.addChild(txt4);
        return _this;
    }
    ScrollPolicyExample.prototype.getScroller = function () {
        var list = new eui.List();
        var arr = new eui.ArrayCollection([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
        list.dataProvider = arr;
        list.itemRenderer = IR_ScrollPolicy;
        var scroller = new eui.Scroller();
        scroller.viewport = list;
        return scroller;
    };
    ScrollPolicyExample.prototype.getTxt = function (value) {
        var txt = new egret.TextField;
        txt.size = 20;
        txt.textColor = 0xffffff;
        txt.text = value;
        return txt;
    };
    return ScrollPolicyExample;
}(egret.Sprite));
__reflect(ScrollPolicyExample.prototype, "ScrollPolicyExample");
var IR_ScrollPolicy = (function (_super) {
    __extends(IR_ScrollPolicy, _super);
    function IR_ScrollPolicy() {
        var _this = _super.call(this) || this;
        _this.label = new eui.Label();
        _this.addChild(_this.label);
        return _this;
    }
    IR_ScrollPolicy.prototype.dataChanged = function () {
        this.label.text = "label:" + this.data.toString();
    };
    return IR_ScrollPolicy;
}(eui.ItemRenderer));
__reflect(IR_ScrollPolicy.prototype, "IR_ScrollPolicy");
