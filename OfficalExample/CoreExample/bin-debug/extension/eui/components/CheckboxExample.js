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
 * The following example shows how to use the eui.Checkbox class
 */
/**
 * @language zh_CN
 * 下面的例子显示了如何使用 eui.Checkbox 类
 */
var CheckboxExample = (function (_super) {
    __extends(CheckboxExample, _super);
    function CheckboxExample() {
        var _this = _super.call(this) || this;
        var checkboxSkin = "<e:Skin states=\"up,down,disabled,upAndSelected,downAndSelected,disabledAndSelected\" xmlns:e=\"http://ns.egret.com/eui\">\n                <e:Group width=\"100%\" height=\"100%\">\n                    <e:layout>\n                        <e:HorizontalLayout verticalAlign=\"middle\"/>\n                    </e:layout>\n                    <e:Image fillMode=\"scale\" alpha=\"1\" alpha.disabled=\"0.5\" alpha.down=\"0.7\"\n                             source=\"resource/CheckBox/checkbox_unselect.png\"\n                             source.upAndSelected=\"resource/CheckBox/checkbox_select_up.png\"\n                             source.downAndSelected=\"resource/CheckBox/checkbox_select_down.png\"\n                             source.disabledAndSelected=\"resource/CheckBox/checkbox_select_disabled.png\"/>\n                    <e:Label id=\"labelDisplay\" size=\"20\" textColor=\"0x707070\"\n                             textAlign=\"center\" verticalAlign=\"middle\"\n                             fontFamily=\"Tahoma\"/>\n                </e:Group>\n            </e:Skin>";
        var checkbox = new eui.CheckBox();
        //组件可以接受：皮肤类定义,皮肤类名,皮肤实例,EXML文件内容,或外部EXML文件路径作为 skinName 的值
        //这里我们直接用 EXML 内容作为 skinName
        checkbox.skinName = checkboxSkin;
        checkbox.label = "CheckBox Example";
        checkbox.addEventListener(egret.Event.CHANGE, function (e) { return checkbox.label = checkbox.selected ? "Selected" : "Unselected"; }, _this);
        checkbox.x = 50;
        checkbox.y = 50;
        _this.addChild(checkbox);
        return _this;
    }
    return CheckboxExample;
}(eui.Group));
__reflect(CheckboxExample.prototype, "CheckboxExample");
