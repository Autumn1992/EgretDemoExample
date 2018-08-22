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
var TabBarExample = (function (_super) {
    __extends(TabBarExample, _super);
    function TabBarExample() {
        var _this = _super.call(this) || this;
        var exml = "<e:Group xmlns:e=\"http://ns.egret.com/eui\">\n                <e:TabBar dataProvider=\"{viewStack}\">\n                    <e:layout>\n                        <e:HorizontalLayout gap=\"20\"/>\n                    </e:layout>\n                    <e:itemRendererSkinName>\n                        <e:Skin states=\"up,down\" height=\"50\">\n                            <e:Label text=\"{data}\" textColor.down=\"0xFFFFFF\" textColor.up=\"0x666666\" horizontalCenter=\"0\" verticalCenter=\"0\"/>\n                        </e:Skin>\n                    </e:itemRendererSkinName>\n                </e:TabBar>\n                <e:ViewStack y=\"50\" id=\"viewStack\">\n                    <e:Group name=\"tab1\">\n                        <e:Label text=\"TestPanel1\" x=\"50\" y=\"50\"/>\n                    </e:Group>\n                    <e:Group name=\"tab2\">\n                        <e:Label text=\"TestPanel2\" x=\"50\" y=\"50\"/>\n                    </e:Group>\n                </e:ViewStack>\n            </e:Group>";
        var clazz = EXML.parse(exml);
        var group = new clazz();
        _this.addChild(group);
        return _this;
    }
    return TabBarExample;
}(egret.Sprite));
__reflect(TabBarExample.prototype, "TabBarExample");
