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
 * The following example shows how to use the eui.Button class
 */
/**
 * @language zh_CN
 * 下面的例子显示了如何使用 eui.Button 类
 */
var ButtonExample = (function (_super) {
    __extends(ButtonExample, _super);
    function ButtonExample() {
        var _this = _super.call(this) || this;
        var buttonSkin = "<e:Skin class=\"skins.ButtonSkin\" states=\"up,down,disabled\" minHeight=\"50\" minWidth=\"100\" xmlns:e=\"http://ns.egret.com/eui\">\n                <e:Image width=\"100%\" height=\"100%\" scale9Grid=\"1,3,8,8\" alpha.disabled=\"0.5\"\n                         source=\"resource/button_up.png\"\n                         source.down=\"resource/button_down.png\"/>\n                <e:Label id=\"labelDisplay\" top=\"8\" bottom=\"8\" left=\"8\" right=\"8\"\n                         textColor=\"0xFFFFFF\" verticalAlign=\"middle\" textAlign=\"center\"/>\n                <e:Image id=\"iconDisplay\" horizontalCenter=\"0\" verticalCenter=\"0\"/>\n            </e:Skin>";
        var button = new eui.Button();
        //组件可以接受：皮肤类定义,皮肤类名,皮肤实例,EXML文件内容,或外部EXML文件路径作为 skinName 的值
        //这里我们直接用 EXML 内容作为 skinName
        button.skinName = buttonSkin;
        button.label = "Button";
        button.addEventListener(egret.TouchEvent.TOUCH_TAP, function (e) { return button.label = " Tap! "; }, _this);
        button.x = 50;
        button.y = 50;
        _this.addChild(button);
        return _this;
    }
    return ButtonExample;
}(eui.Group));
__reflect(ButtonExample.prototype, "ButtonExample");
