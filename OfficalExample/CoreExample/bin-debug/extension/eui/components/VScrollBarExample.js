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
 * The following example shows a HSlider.
 */
/**
 * @language zh_CN
 * 下面的例子显示了一个垂直带滚动条的 List。
 */
var VScrollBarExample = (function (_super) {
    __extends(VScrollBarExample, _super);
    function VScrollBarExample() {
        var _this = _super.call(this) || this;
        var exml = "<e:Group xmlns:e=\"http://ns.egret.com/eui\">\n                <e:Image width=\"200\" height=\"400\" source=\"resource/selected.png\" scale9Grid=\"1,1,4,4\"/>\n                <e:Scroller >\n                    <e:Skin>\n                        <e:HScrollBar id=\"horizontalScrollBar\" width=\"100%\" height=\"30\" bottom=\"0\">\n                            <e:Skin>\n                                <e:Image width=\"100%\" height=\"100%\" source=\"resource/track.png\" scale9Grid=\"1,1,4,4\"/>\n                                <e:Image id=\"thumb\" width=\"30\" height=\"30\" source=\"resource/thumb.png\"  scale9Grid=\"1,1,4,4\"/>\n                            </e:Skin>\n                        </e:HScrollBar>\n                        <e:VScrollBar id=\"verticalScrollBar\" width=\"30\" height=\"100%\" right=\"0\">\n                            <e:Skin>\n                                <e:Image width=\"100%\" height=\"100%\" source=\"resource/track.png\" scale9Grid=\"1,1,4,4\"/>\n                                <e:Image id=\"thumb\" width=\"30\" height=\"30\" source=\"resource/thumb.png\"  scale9Grid=\"1,1,4,4\"/>\n                            </e:Skin>\n                        </e:VScrollBar>\n                    </e:Skin>\n                        <e:List id=\"list\" width=\"200\" height=\"400\">\n                            <e:layout>\n                                <e:VerticalLayout gap=\"20\"/>\n                            </e:layout>\n                            <e:itemRendererSkinName>\n                                <e:Skin states=\"up,down,disabled\" height=\"50\">\n                                    <e:Label text=\"{data.label}\" textColor=\"0\" horizontalCenter=\"0\" verticalCenter=\"0\"/>\n                                </e:Skin>\n                            </e:itemRendererSkinName>\n                            <e:ArrayCollection>\n                                <e:Array>\n                                    <e:Object label=\"Item1\"/>\n                                    <e:Object label=\"Item2\"/>\n                                    <e:Object label=\"Item3\"/>\n                                    <e:Object label=\"Item4\"/>\n                                    <e:Object label=\"Item5\"/>\n                                    <e:Object label=\"Item6\"/>\n                                    <e:Object label=\"Item7\"/>\n                                    <e:Object label=\"Item8\"/>\n                                    <e:Object label=\"Item9\"/>\n                                    <e:Object label=\"Item10\"/>\n                                </e:Array>\n                            </e:ArrayCollection>\n                        </e:List>\n                </e:Scroller>\n            </e:Group>";
        var clazz = EXML.parse(exml);
        var scroller = new clazz();
        _this.addChild(scroller);
        return _this;
    }
    return VScrollBarExample;
}(egret.Sprite));
__reflect(VScrollBarExample.prototype, "VScrollBarExample");
