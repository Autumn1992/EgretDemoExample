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
 * The following example shows how to use the eui.EditablText class
 */
/**
 * @language zh_CN
 * 下面的例子显示了如何使用 eui.EditablText 类
 */
var EditablTextExample = (function (_super) {
    __extends(EditablTextExample, _super);
    function EditablTextExample() {
        var _this = _super.call(this) || this;
        var exml = "<e:Group xmlns:e=\"http://ns.egret.com/eui\">\n                <e:layout>\n                    <e:VerticalLayout gap=\"20\"/>\n                </e:layout>\n                <e:Group>\n                    <e:Label text=\"Accout\uFF1A\" size=\"16\" textColor=\"0xFFFFFF\"/>\n                    <e:EditableText x=\"100\" size=\"16\" text=\"input accout\" textColor=\"0xAAAAFF\"/>\n                </e:Group>\n                <e:Group>\n                    <e:Label text=\"Password\uFF1A\" size=\"16\" textColor=\"0xFFFFFF\"/>\n                    <e:EditableText x=\"100\" text=\"input password\" displayAsPassword=\"true\" size=\"16\" textColor=\"0xAAAAFF\"/>\n                </e:Group>\n            </e:Group>";
        var clazz = EXML.parse(exml);
        var group = new clazz();
        _this.addChild(group);
        return _this;
    }
    return EditablTextExample;
}(egret.Sprite));
__reflect(EditablTextExample.prototype, "EditablTextExample");
