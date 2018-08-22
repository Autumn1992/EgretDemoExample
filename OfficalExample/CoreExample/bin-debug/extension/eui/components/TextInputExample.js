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
 * The following example shows how to use the eui.TextInput class
 */
/**
 * @language zh_CN
 * 下面的例子显示了如何使用 eui.TextInput 类
 */
var TextInputExample = (function (_super) {
    __extends(TextInputExample, _super);
    function TextInputExample() {
        var _this = _super.call(this) || this;
        var textInputSkin = "\n            <e:Skin class=\"skins.TextInputSkin\" minHeight=\"40\" minWidth=\"300\" states=\"normal,disabled,normalWithPrompt,disabledWithPrompt\" xmlns:e=\"http://ns.egret.com/eui\">\n                <e:Image width=\"100%\" height=\"100%\" scale9Grid=\"1,3,8,8\" source=\"resource/button_up.png\"/>\n                <e:Rect height=\"100%\" width=\"100%\" fillColor=\"0xffffff\"/>\n                <e:EditableText id=\"textDisplay\" verticalCenter=\"0\" left=\"10\" right=\"10\"\n                                textColor=\"0x000000\" textColor.disabled=\"0xff0000\" width=\"100%\" height=\"24\" size=\"20\" />\n                <e:Label id=\"promptDisplay\" verticalCenter=\"0\" left=\"10\" right=\"10\"\n                                textColor=\"0xa9a9a9\" width=\"100%\" height=\"24\" size=\"20\" touchEnabled=\"false\" includeIn=\"normalWithPrompt,disabledWithPrompt\"/>\n            </e:Skin>\n        ";
        var textInput = new eui.TextInput();
        textInput.skinName = textInputSkin;
        _this.addChild(textInput);
        return _this;
    }
    return TextInputExample;
}(eui.Group));
__reflect(TextInputExample.prototype, "TextInputExample");
