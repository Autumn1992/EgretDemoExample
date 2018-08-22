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
 * The following example shows the general use of a ItemRenderer.
 */
/**
 * @language zh_CN
 * 下面的例子显示了一个 ItemRenderer 的常规用法。
 */
var ItemRendererExample = (function (_super) {
    __extends(ItemRendererExample, _super);
    function ItemRendererExample() {
        var _this = _super.call(this) || this;
        var exml = "<e:DataGroup class=\"Example.DataGroup\" xmlns:e=\"http://ns.egret.com/eui\" x=\"300\" y=\"50\">\n                <e:layout>\n                    <e:VerticalLayout gap=\"20\"/>\n                </e:layout>\n                    <e:itemRendererSkinName>\n                        <e:Skin>\n                            <e:Label text=\"{data.label}\" textColor=\"{data.color}\"/>\n                        </e:Skin>\n                    </e:itemRendererSkinName>\n                <e:ArrayCollection>\n                    <e:Array>\n                        <e:Object label=\"a\" color=\"0xcc9999\"/>\n                        <e:Object label=\"b\" color=\"0xff9966\"/>\n                        <e:Object label=\"c\" color=\"0xcc3333\"/>\n                        <e:Object label=\"d\" color=\"0xff6666\"/>\n                    </e:Array>\n                </e:ArrayCollection>\n            </e:DataGroup>";
        var clazz = EXML.parse(exml);
        var dataGroup = new clazz();
        _this.addChild(dataGroup);
        return _this;
    }
    return ItemRendererExample;
}(egret.Sprite));
__reflect(ItemRendererExample.prototype, "ItemRendererExample");
