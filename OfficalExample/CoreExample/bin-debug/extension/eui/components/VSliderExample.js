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
 * The following example shows a VSlider.
 */
/**
 * @language zh_CN
 * 下面的例子显示了一个 VSlider。
 */
var VSliderExample = (function (_super) {
    __extends(VSliderExample, _super);
    function VSliderExample() {
        var _this = _super.call(this) || this;
        var exml = "<e:VSlider x=\"50\" y=\"50\" height=\"300\" xmlns:e=\"http://ns.egret.com/eui\">\n                <e:Skin minWidth=\"20\" minHeight=\"8\">\n                    <e:Image id=\"track\" source=\"resource/slider/track.png\"  scale9Grid=\"1,1,4,4\" width=\"6\" height=\"100%\" verticalCenter=\"0\"/>\n                    <e:Image id=\"trackHighlight\" source=\"resource/slider/tracklight.png\" scale9Grid=\"1,1,4,4\" width=\"6\" verticalCenter=\"0\"/>\n                    <e:Image id=\"thumb\" source=\"resource/slider/thumb.png\" rotation=\"90\" x=\"15\"/>\n                </e:Skin>\n            </e:VSlider>";
        var clazz = EXML.parse(exml);
        var vslider = new clazz();
        _this.addChild(vslider);
        return _this;
    }
    return VSliderExample;
}(egret.Sprite));
__reflect(VSliderExample.prototype, "VSliderExample");
