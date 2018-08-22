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
 * The following example shows how to extend eui.Range to a instrumentation style Component
 */
/**
 * @language zh_CN
 * 下面的例子显示了如何实现一个仪表效果的 eui.Range 组件
 */
var RangeViewerExample = (function (_super) {
    __extends(RangeViewerExample, _super);
    function RangeViewerExample() {
        var _this = _super.call(this) || this;
        _this.skinName =
            "<e:Skin class=\"skins.RangeViewerSkin\" minWidth=\"30\" minHeight=\"18\" xmlns:e=\"http://ns.egret.com/eui\">\n\t        <e:Image x=\"0\" y=\"0\" source=\"resource/range-background.png\"/>\n\t        <e:Image id=\"pointer\" x=\"60\" y=\"60\" source=\"resource/pointer.png\"/>\n        </e:Skin>";
        return _this;
    }
    RangeViewerExample.prototype.updateSkinDisplayList = function () {
        var range = this.maximum - this.minimum;
        var rate = (this.value - this.minimum) / range;
        var angle = -150 + rate * 120;
        this.pointer.rotation = angle;
    };
    return RangeViewerExample;
}(eui.Range));
__reflect(RangeViewerExample.prototype, "RangeViewerExample");
var RangeExample = (function (_super) {
    __extends(RangeExample, _super);
    function RangeExample() {
        var _this = _super.call(this) || this;
        var rangeViewer = new RangeViewerExample();
        rangeViewer.minimum = 0;
        rangeViewer.maximum = 120;
        rangeViewer.x = 50;
        rangeViewer.y = 50;
        var timer = new egret.Timer(1000);
        timer.addEventListener(egret.TimerEvent.TIMER, function (e) { return rangeViewer.value = Math.random() * 120; }, _this);
        timer.start();
        _this.addChild(rangeViewer);
        return _this;
    }
    return RangeExample;
}(eui.Group));
__reflect(RangeExample.prototype, "RangeExample");
