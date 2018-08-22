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
var RadioButtonGroupExample = (function (_super) {
    __extends(RadioButtonGroupExample, _super);
    function RadioButtonGroupExample() {
        var _this = _super.call(this) || this;
        var skinExml = "<e:Skin class=\"skins.RadioButtonSkin\" states=\"up,down,disabled,upAndSelected,downAndSelected,disabledAndSelected\" xmlns:e=\"http://ns.egret.com/eui\">\n                <e:Image height=\"22\" includeIn=\"disabledAndSelected\" source=\"resource/RadioButton/radiobutton_select_disabled.png\"/>\n                <e:Image height=\"22\" includeIn=\"downAndSelected\" source=\"resource/RadioButton/radiobutton_select_down.png\"/>\n                <e:Image height=\"22\" includeIn=\"upAndSelected\" source=\"resource/RadioButton/radiobutton_select_up.png\"/>\n                <e:Image height=\"22\" includeIn=\"up,down,disabled\" source=\"resource/RadioButton/radiobutton_unselect.png\"/>\n                <e:Label x=\"38\" id=\"labelDisplay\" textColor=\"0xffffff\" size=\"18\"/>\n            </e:Skin>";
        EXML.parse(skinExml);
        var exml = "<e:Group xmlns:e=\"http://ns.egret.com/eui\">\n                <e:layout>\n                    <e:VerticalLayout gap=\"20\"/>\n                </e:layout>\n\n                <e:RadioButton id=\"radio1\" groupName=\"en\" label=\"A. This is a radioButton.\" skinName=\"skins.RadioButtonSkin\"/>\n                <e:RadioButton id=\"radio2\" groupName=\"en\" label=\"B. This is a progressBar.\" skinName=\"skins.RadioButtonSkin\"/>\n                \n                <e:RadioButton id=\"radio3\" groupName=\"cn\" label=\"1. \u4ECA\u5929\u662F\u6674\u5929.\" skinName=\"skins.RadioButtonSkin\"/>\n                <e:RadioButton id=\"radio4\" groupName=\"cn\" label=\"2. \u4ECA\u5929\u662F\u96E8\u5929.\" skinName=\"skins.RadioButtonSkin\"/>\n            </e:Group>";
        var clazz = EXML.parse(exml);
        var group = new clazz();
        _this.addChild(group);
        group.radio1.group.addEventListener(eui.UIEvent.CHANGE, function (evt) {
            var radioGroup = evt.target;
            egret.log(radioGroup.selectedValue);
            egret.log(group.radio1.selected);
        }, _this);
        group.x = 50;
        group.y = 50;
        return _this;
    }
    return RadioButtonGroupExample;
}(egret.Sprite));
__reflect(RadioButtonGroupExample.prototype, "RadioButtonGroupExample");
