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
var ListExample = (function (_super) {
    __extends(ListExample, _super);
    function ListExample() {
        var _this = _super.call(this) || this;
        var exml = "<e:Scroller xmlns:e=\"http://ns.egret.com/eui\">\n                <e:List id=\"list\" width=\"200\" height=\"400\">\n                    <e:itemRendererSkinName>\n                        <e:Skin states=\"up,down,disabled\" height=\"50\">\n                            <e:Label text=\"{data.label}\" textColor=\"0xFFFFFF\" horizontalCenter=\"0\" verticalCenter=\"0\"/>\n                        </e:Skin>\n                    </e:itemRendererSkinName>\n                </e:List>\n            </e:Scroller>";
        var clazz = EXML.parse(exml);
        var scroller = new clazz();
        _this.addChild(scroller);
        var list = scroller.list;
        var collection = new eui.ArrayCollection();
        for (var i = 0; i < 20; i++) {
            collection.addItem({ "label": "Text" + i });
        }
        list.dataProvider = collection;
        return _this;
    }
    return ListExample;
}(egret.Sprite));
__reflect(ListExample.prototype, "ListExample");
