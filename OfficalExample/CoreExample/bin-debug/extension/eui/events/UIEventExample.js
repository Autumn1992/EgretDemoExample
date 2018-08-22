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
 * The following example uses the class UIEventExample to show the ui component trigger the event
 */
/**
 * @language zh_CN
 * 以下示例使用 UIEventExample 类来演示UI组件触发事件
 */
var UIEventExample = (function (_super) {
    __extends(UIEventExample, _super);
    function UIEventExample() {
        var _this = _super.call(this) || this;
        _this.once(egret.Event.ADDED_TO_STAGE, _this.init, _this);
        return _this;
    }
    UIEventExample.prototype.init = function () {
        var panel = this.getPanel();
        panel.x = 200;
        panel.addEventListener(eui.UIEvent.CREATION_COMPLETE, this.onUIEventHandler, this);
        panel.addEventListener(eui.UIEvent.CLOSING, this.onUIEventHandler, this);
        panel.addEventListener(eui.UIEvent.MOVE, this.onUIEventHandler, this);
        this.addChild(panel);
        var list = new eui.List();
        var arr = new eui.ArrayCollection([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
        list.dataProvider = arr;
        list.itemRenderer = IR_UIEvents;
        var scroller = new eui.Scroller();
        scroller.viewport = list;
        scroller.height = 190;
        this.addChild(scroller);
        scroller.addEventListener(eui.UIEvent.CHANGE_START, this.onUIEventHandler, this);
        scroller.addEventListener(egret.Event.CHANGE, this.onChangeHander, this);
        scroller.addEventListener(eui.UIEvent.CHANGE_END, this.onUIEventHandler, this);
    };
    UIEventExample.prototype.onUIEventHandler = function (e) {
        egret.log("eui.UIEvent:", e.type);
    };
    UIEventExample.prototype.onChangeHander = function (e) {
        egret.log("egret.Event:", e.type);
    };
    UIEventExample.prototype.getPanel = function () {
        var exmlButton = "<e:Skin class=\"skins.ButtonSkin\" states=\"up,down,disabled\" minHeight=\"50\" minWidth=\"100\" xmlns:e=\"http://ns.egret.com/eui\">\n            <e:Image source=\"resource/button_up.png\" source.down=\"resource/button_down.png\" scale9Grid=\"1,3,8,8\" width=\"100%\" height=\"100%\"/>\n            <e:Label id=\"labelDisplay\" top=\"8\" bottom=\"8\" left=\"8\" right=\"8\" size=\"20\" fontFamily=\"Tahoma\" textColor=\"0xFFFFFF\" verticalAlign=\"middle\" textAlign=\"center\"/>\n        </e:Skin>";
        EXML.parse(exmlButton);
        var exml = "<e:Skin class=\"skins.PanelSkin\" xmlns:e=\"http://ns.egret.com/eui\" minWidth=\"450\" minHeight=\"25\">\n            <e:Image left=\"0\" right=\"0\" bottom=\"0\"  top=\"0\" source=\"resource/border.png\" scale9Grid=\"2,2,12,12\"/>\n            <e:Group id=\"moveArea\" left=\"0\" right=\"0\" top=\"1\" height=\"45\">\n                <e:Image left=\"0\" right=\"0\" bottom=\"0\"  top=\"0\" source=\"resource/header.png\"/>\n                <e:Label id=\"titleDisplay\" size=\"20\" fontFamily=\"Tahoma\" textColor=\"0xFFFFFF\" wordWrap=\"false\" left=\"15\" right=\"5\" verticalCenter=\"0\"/>\n            </e:Group>\n            <e:Group id=\"contentGroup\" width=\"100%\" height=\"200\" top=\"50\" bottom=\"30\"/>\n            <e:Button skinName = \"skins.ButtonSkin\" id=\"closeButton\" label=\"close\" bottom=\"5\" horizontalCenter=\"0\"/>\n        </e:Skin>";
        var clazz = EXML.parse(exml);
        var panel = new eui.Panel();
        panel.skinName = "skins.PanelSkin";
        return panel;
    };
    return UIEventExample;
}(egret.Sprite));
__reflect(UIEventExample.prototype, "UIEventExample");
var IR_UIEvents = (function (_super) {
    __extends(IR_UIEvents, _super);
    function IR_UIEvents() {
        var _this = _super.call(this) || this;
        _this.label = new eui.Label();
        _this.addChild(_this.label);
        return _this;
    }
    IR_UIEvents.prototype.dataChanged = function () {
        this.label.text = "label:" + this.data.toString();
    };
    return IR_UIEvents;
}(eui.ItemRenderer));
__reflect(IR_UIEvents.prototype, "IR_UIEvents");
