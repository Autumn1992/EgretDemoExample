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
 * The following example uses the class TileLayoutExample to show
 * arranges the layout elements in columns and rows
 */
/**
 * @language zh_CN
 * 以下示例使用 TileLayoutExample 类来演示单元格元素
 */
var TileLayoutExample = (function (_super) {
    __extends(TileLayoutExample, _super);
    function TileLayoutExample() {
        var _this = _super.call(this) || this;
        _this.once(egret.Event.ADDED_TO_STAGE, _this.init, _this);
        return _this;
    }
    TileLayoutExample.prototype.init = function () {
        var group = new eui.Group();
        this.addChild(group);
        var layout = new eui.TileLayout();
        layout.horizontalGap = 20;
        layout.verticalGap = 20;
        layout.requestedColumnCount = 3;
        group.layout = layout;
        for (var i = 0; i < 10; i++) {
            var btn = this.getButton();
            group.addChild(btn);
        }
    };
    TileLayoutExample.prototype.getButton = function () {
        var exml = "<e:Skin class=\"skins.ButtonSkin\" states=\"up,down,disabled\" minHeight=\"50\" minWidth=\"100\" xmlns:e=\"http://ns.egret.com/eui\">\n            <e:Image source=\"resource/button_up.png\" source.down=\"resource/button_down.png\" scale9Grid=\"1,3,8,8\" width=\"100%\" height=\"100%\"/>\n            <e:Label id=\"labelDisplay\" top=\"8\" bottom=\"8\" left=\"8\" right=\"8\" size=\"20\" fontFamily=\"Tahoma\" textColor=\"0xFFFFFF\" verticalAlign=\"middle\" textAlign=\"center\"/>\n        </e:Skin>";
        var clazz = EXML.parse(exml);
        var btn = new eui.Button();
        btn.skinName = "skins.ButtonSkin";
        return btn;
    };
    return TileLayoutExample;
}(egret.Sprite));
__reflect(TileLayoutExample.prototype, "TileLayoutExample");
