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
 * The following example shows some of the tags, as well as the relative positioning.
 */
/**
 * @language zh_CN
 * 下面的例子显示了一些标签，以及相对定位。
 */
var LabelExample = (function (_super) {
    __extends(LabelExample, _super);
    function LabelExample() {
        var _this = _super.call(this) || this;
        var exml = "<e:Group width=\"600\" height=\"400\" xmlns:e=\"http://ns.egret.com/eui\">\n                <e:Label text=\"LeftTop\" left=\"0\" top=\"0\" textColor=\"0xFFFFFF\"/>\n                <e:Label text=\"RightTop\" right=\"0\" top=\"0\" textColor=\"0xFFFFFF\"/>\n                <e:Label text=\"LeftBottom\" left=\"0\" bottom=\"0\" textColor=\"0xFFFFFF\"/>\n                <e:Label text=\"RightBottom\" right=\"0\" bottom=\"0\" textColor=\"0xFFFFFF\"/>\n                <e:Label text=\"Center\" horizontalCenter=\"0\" verticalCenter=\"0\" textColor=\"0xFFFFFF\"/>\n            </e:Group>";
        var clazz = EXML.parse(exml);
        var group = new clazz();
        _this.addChild(group);
        return _this;
    }
    return LabelExample;
}(egret.Sprite));
__reflect(LabelExample.prototype, "LabelExample");
