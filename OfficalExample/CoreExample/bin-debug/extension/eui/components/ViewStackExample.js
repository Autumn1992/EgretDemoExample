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
var ViewStackExample = (function (_super) {
    __extends(ViewStackExample, _super);
    function ViewStackExample() {
        var _this = _super.call(this) || this;
        var exml = "<e:Group xmlns:e=\"http://ns.egret.com/eui\">\n                <e:TabBar dataProvider=\"{viewStack}\">\n                    <e:layout>\n                        <e:HorizontalLayout gap=\"20\"/>\n                    </e:layout>\n                    <e:itemRendererSkinName>\n                        <e:Skin states=\"up,down\" height=\"50\">\n                            <e:Label text=\"{data}\" textColor.down=\"0xFFFFFF\" textColor.up=\"0x666666\" horizontalCenter=\"0\" verticalCenter=\"0\"/>\n                        </e:Skin>\n                    </e:itemRendererSkinName>\n                </e:TabBar>\n                <e:ViewStack y=\"50\" id=\"viewStack\">\n                    <e:Group name=\"Page1\">\n                        <e:Panel width=\"400\" height=\"300\" title=\"title panel\" xmlns:e=\"http://ns.egret.com/eui\" y=\"50\">\n                            <e:Skin>\n                                <e:Image width=\"100%\" height=\"100%\" source=\"resource/track.png\" scale9Grid=\"1,1,4,4\"/>\n                                <e:Group id=\"moveArea\" width=\"100%\" height=\"40\">\n                                    <e:Image width=\"100%\" height=\"100%\" source=\"resource/thumb.png\" scale9Grid=\"1,1,4,4\"/>\n                                    <e:Label id=\"titleDisplay\" text=\"\u6807\u9898\" textColor=\"0\" horizontalCenter=\"0\" verticalCenter=\"0\"/>\n                                </e:Group>\n                                <e:Button id=\"closeButton\" right=\"-15\" y=\"-15\">\n                                    <e:Skin states=\"up,down,disabled\">\n                                        <e:Image width=\"50\" height=\"50\" source=\"resource/close.png\" scaleX.up=\"1\" scaleX.down=\"0.95\" scaleY.up=\"1\" scaleY.down=\"0.95\"/>\n                                    </e:Skin>\n                                </e:Button>\n                            </e:Skin>\n                        </e:Panel>\n                    </e:Group>\n                    <e:Group name=\"Page2\">\n                        <e:List id=\"list\" width=\"200\" height=\"400\" y=\"50\">\n                            <e:layout>\n                                <e:VerticalLayout gap=\"20\"/>\n                            </e:layout>\n                            <e:itemRendererSkinName>\n                                <e:Skin states=\"up,down,disabled\" height=\"50\">\n                                    <e:Label text=\"{data.label}\" textColor=\"0\" horizontalCenter=\"0\" verticalCenter=\"0\"/>\n                                </e:Skin>\n                            </e:itemRendererSkinName>\n                            <e:ArrayCollection>\n                                <e:Array>\n                                    <e:Object label=\"Text1\"/>\n                                    <e:Object label=\"Text2\"/>\n                                    <e:Object label=\"Text3\"/>\n                                    <e:Object label=\"Text4\"/>\n                                    <e:Object label=\"Text5\"/>\n                                    <e:Object label=\"Text6\"/>\n                                    <e:Object label=\"Text7\"/>\n                                    <e:Object label=\"Text8\"/>\n                                    <e:Object label=\"Text9\"/>\n                                    <e:Object label=\"Text10\"/>\n                                </e:Array>\n                            </e:ArrayCollection>\n                        </e:List>\n                    </e:Group>\n                </e:ViewStack>\n            </e:Group>";
        var clazz = EXML.parse(exml);
        var group = new clazz();
        _this.addChild(group);
        return _this;
    }
    return ViewStackExample;
}(egret.Sprite));
__reflect(ViewStackExample.prototype, "ViewStackExample");
