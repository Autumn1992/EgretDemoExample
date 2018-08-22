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
 * The exmaple follow shows a panel.
 */
/**
 * @language zh_CN
 * 下面的例子演示了一个面板。
 */
var PanelExample = (function (_super) {
    __extends(PanelExample, _super);
    function PanelExample() {
        var _this = _super.call(this) || this;
        var exml = "<e:Panel title=\"title panel\" xmlns:e=\"http://ns.egret.com/eui\">\n                    <e:Skin>\n                        <e:Image width=\"100%\" height=\"100%\" source=\"resource/track.png\" scale9Grid=\"1,1,4,4\"/>\n                        <e:Group id=\"moveArea\" width=\"100%\" height=\"40\">\n                            <e:Image width=\"100%\" height=\"100%\" source=\"resource/thumb.png\" scale9Grid=\"1,1,4,4\"/>\n                            <e:Label id=\"titleDisplay\" text=\"Title\" textColor=\"0\" horizontalCenter=\"0\" verticalCenter=\"0\"/>\n                        </e:Group>\n                        <e:Button id=\"closeButton\" right=\"-15\" y=\"-15\">\n                            <e:Skin states=\"up,down,disabled\">\n                                <e:Image width=\"50\" height=\"50\" source=\"resource/close.png\" scaleX.up=\"1\" scaleX.down=\"0.95\" scaleY.up=\"1\" scaleY.down=\"0.95\"/>\n                            </e:Skin>\n                        </e:Button>\n                    </e:Skin>\n                </e:Panel>";
        var clazz = EXML.parse(exml);
        var panel = new clazz();
        panel.width = 600;
        panel.height = 400;
        panel.y = 100;
        _this.addChild(panel);
        return _this;
    }
    return PanelExample;
}(egret.Sprite));
__reflect(PanelExample.prototype, "PanelExample");
