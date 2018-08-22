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
 * The following example uses the class TileOrientationExample to show
 *  the property orientation in TileLayout class
 */
/**
 * @language zh_CN
 * 以下示例使用 TileOrientationExample 类来演示 TileLayout 类的 orientation 可定义的值
 */
var TileOrientationExample = (function (_super) {
    __extends(TileOrientationExample, _super);
    function TileOrientationExample() {
        var _this = _super.call(this) || this;
        _this.once(egret.Event.ADDED_TO_STAGE, _this.init, _this);
        return _this;
    }
    TileOrientationExample.prototype.init = function () {
        var arrValues = [eui.TileOrientation.ROWS, eui.TileOrientation.COLUMNS];
        for (var i = 0, max = arrValues.length; i < max; i++) {
            var group = new eui.Group();
            group.width = 550;
            group.height = 180;
            group.y = i * 250;
            this.addChild(group);
            var layout = new eui.TileLayout();
            layout.orientation = arrValues[i];
            layout.requestedColumnCount = 3;
            layout.requestedRowCount = 3;
            group.layout = layout;
            var txt = this.getTxt(arrValues[i]);
            txt.x = 350;
            txt.y = i * 250;
            this.addChild(txt);
            for (var j = 0; j < 6; j++) {
                var btn = this.getButton();
                group.addChild(btn);
            }
        }
    };
    TileOrientationExample.prototype.getTxt = function (value) {
        var txt = new egret.TextField;
        txt.size = 20;
        txt.textColor = 0xffffff;
        txt.text = value;
        return txt;
    };
    TileOrientationExample.prototype.getButton = function () {
        var exml = "<e:Skin class=\"skins.ButtonSkin\" states=\"up,down,disabled\" minHeight=\"50\" minWidth=\"100\" xmlns:e=\"http://ns.egret.com/eui\">\n            <e:Image source=\"resource/button_up.png\" source.down=\"resource/button_down.png\" scale9Grid=\"1,3,8,8\" width=\"100%\" height=\"100%\"/>\n            <e:Label id=\"labelDisplay\" top=\"8\" bottom=\"8\" left=\"8\" right=\"8\" size=\"20\" fontFamily=\"Tahoma\" textColor=\"0xFFFFFF\" verticalAlign=\"middle\" textAlign=\"center\"/>\n        </e:Skin>";
        var clazz = EXML.parse(exml);
        var btn = new eui.Button();
        btn.skinName = "skins.ButtonSkin";
        return btn;
    };
    return TileOrientationExample;
}(egret.Sprite));
__reflect(TileOrientationExample.prototype, "TileOrientationExample");
