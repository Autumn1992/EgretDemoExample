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
 * The following example shows how to assign a button to skin.
 */
/**
 * @language zh_CN
 * 下面的例子演示了如何给一个按钮赋值皮肤。
 */
var SkinExample = (function (_super) {
    __extends(SkinExample, _super);
    function SkinExample() {
        var _this = _super.call(this) || this;
        var exml = "<e:Button xmlns:e=\"http://ns.egret.com/eui\">\n                <e:Skin states=\"up,down,disabled\">\n                    <e:Image width=\"50\" height=\"50\" source=\"resource/close.png\" scaleX.up=\"1\" scaleX.down=\"0.95\" scaleY.up=\"1\" scaleY.down=\"0.95\"/>\n                </e:Skin>\n            </e:Button>";
        var clazz = EXML.parse(exml);
        var button = new clazz();
        _this.addChild(button);
        return _this;
    }
    return SkinExample;
}(egret.Sprite));
__reflect(SkinExample.prototype, "SkinExample");
