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
 * The following example shows a HSlider.
 */
/**
 * @language zh_CN
 * 下面的例子显示了一个 HSlider。
 */
var HSliderExample = (function (_super) {
    __extends(HSliderExample, _super);
    function HSliderExample() {
        var _this = _super.call(this) || this;
        var exml = "<e:Skin minWidth=\"20\" minHeight=\"8\"  xmlns:e=\"http://ns.egret.com/eui\">\n                <e:Image id=\"track\" source=\"resource/slider/track.png\" scale9Grid=\"1,1,4,4\" width=\"100%\" height=\"6\" verticalCenter=\"0\"/>\n                <e:Image id=\"trackHighlight\" source=\"resource/slider/tracklight.png\" scale9Grid=\"1,1,4,4\" height=\"6\" verticalCenter=\"0\"/>\n                <e:Image id=\"thumb\" source=\"resource/slider/thumb.png\" verticalCenter=\"0\"/>\n            </e:Skin>";
        var hslider = new eui.HSlider();
        hslider.skinName = exml;
        hslider.width = 300;
        hslider.x = 100;
        hslider.y = 50;
        _this.addChild(hslider);
        return _this;
    }
    return HSliderExample;
}(egret.Sprite));
__reflect(HSliderExample.prototype, "HSliderExample");
