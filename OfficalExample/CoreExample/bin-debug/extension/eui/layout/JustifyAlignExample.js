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
 * The following example uses the class JustifyAlignExample to show
 * the values for property horizontalAlign
 */
/**
 * @language zh_CN
 * 以下示例使用 JustifyAlignExample 类来演示 horizontalAlign 属性的对齐常量值
 */
var JustifyAlignExample = (function (_super) {
    __extends(JustifyAlignExample, _super);
    function JustifyAlignExample() {
        var _this = _super.call(this) || this;
        _this.once(egret.Event.ADDED_TO_STAGE, _this.init, _this);
        return _this;
    }
    JustifyAlignExample.prototype.init = function () {
        var arrAlign = [eui.JustifyAlign.JUSTIFY, eui.JustifyAlign.CONTENT_JUSTIFY];
        for (var i = 0, max = arrAlign.length; i < max; i++) {
            var group = new eui.Group();
            group.width = 500;
            group.height = 100;
            group.y = i * 120;
            this.addChild(group);
            var layout = new eui.HorizontalLayout();
            layout.horizontalAlign = arrAlign[i];
            group.layout = layout;
            var txt = this.getTxt(arrAlign[i]);
            txt.x = 500;
            txt.y = i * 120;
            this.addChild(txt);
            for (var j = 0; j < 4; j++) {
                var btn = this.getButton();
                group.addChild(btn);
            }
        }
    };
    JustifyAlignExample.prototype.getTxt = function (value) {
        var txt = new egret.TextField;
        txt.text = value;
        txt.textColor = 0xffffff;
        return txt;
    };
    JustifyAlignExample.prototype.getButton = function () {
        var exml = "<e:Skin class=\"skins.ButtonSkin\" states=\"up,down,disabled\" minHeight=\"50\" minWidth=\"100\" xmlns:e=\"http://ns.egret.com/eui\">\n            <e:Image source=\"resource/button_up.png\" source.down=\"resource/button_down.png\" scale9Grid=\"1,3,8,8\" width=\"100%\" height=\"100%\"/>\n            <e:Label id=\"labelDisplay\" top=\"8\" bottom=\"8\" left=\"8\" right=\"8\" size=\"20\" fontFamily=\"Tahoma\" textColor=\"0xFFFFFF\" verticalAlign=\"middle\" textAlign=\"center\"/>\n        </e:Skin>";
        var clazz = EXML.parse(exml);
        var btn = new eui.Button();
        btn.skinName = "skins.ButtonSkin";
        return btn;
    };
    return JustifyAlignExample;
}(egret.Sprite));
__reflect(JustifyAlignExample.prototype, "JustifyAlignExample");
