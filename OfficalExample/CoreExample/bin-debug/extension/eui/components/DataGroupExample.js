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
 * The following example demonstrates two methods to create DataGroup.
 */
/**
 * @language zh_CN
 * 下面的例子演示了两种方法来创建 DataGroup。
 */
var DataGroupExample = (function (_super) {
    __extends(DataGroupExample, _super);
    function DataGroupExample() {
        var _this = _super.call(this) || this;
        _this.createDataGroupByTypeScript();
        _this.createDataGroupByEXML();
        return _this;
    }
    DataGroupExample.prototype.createDataGroupByTypeScript = function () {
        var dataGroup = new eui.DataGroup();
        dataGroup.layout = new eui.VerticalLayout();
        dataGroup.itemRenderer = LabelRender;
        var collection = new eui.ArrayCollection();
        collection.addItem({ "label": "1", "color": 0xcc9999 });
        collection.addItem({ "label": "2", "color": 0xff9966 });
        collection.addItem({ "label": "3", "color": 0xcc3333 });
        collection.addItem({ "label": "4", "color": 0xff6666 });
        dataGroup.dataProvider = collection;
        this.addChild(dataGroup);
        dataGroup.x = 50;
        dataGroup.y = 50;
    };
    DataGroupExample.prototype.createDataGroupByEXML = function () {
        var exml = "<e:DataGroup class=\"Example.DataGroup\" xmlns:e=\"http://ns.egret.com/eui\" x=\"300\" y=\"50\">\n                <e:layout>\n                    <e:VerticalLayout gap=\"20\"/>\n                </e:layout>\n                <e:itemRendererSkinName>\n                    <e:Skin>\n                     <e:Label text=\"{data.label}\" textColor=\"{data.color}\"/>\n                    </e:Skin>\n                </e:itemRendererSkinName>\n                <e:ArrayCollection>\n                    <e:Array>\n                        <e:Object label=\"a\" color=\"0xcc9999\"/>\n                        <e:Object label=\"b\" color=\"0xff9966\"/>\n                        <e:Object label=\"c\" color=\"0xcc3333\"/>\n                        <e:Object label=\"d\" color=\"0xff6666\"/>\n                    </e:Array>\n                </e:ArrayCollection>\n            </e:DataGroup>";
        var clazz = EXML.parse(exml);
        var dataGroup2 = new clazz();
        this.addChild(dataGroup2);
    };
    return DataGroupExample;
}(egret.Sprite));
__reflect(DataGroupExample.prototype, "DataGroupExample");
var LabelRender = (function (_super) {
    __extends(LabelRender, _super);
    function LabelRender() {
        var _this = _super.call(this) || this;
        _this.label = new eui.Label();
        _this.addChild(_this.label);
        return _this;
    }
    LabelRender.prototype.dataChanged = function () {
        if (this.data) {
            this.label.text = this.data.label;
            this.label.textColor = this.data.color;
        }
    };
    return LabelRender;
}(eui.ItemRenderer));
__reflect(LabelRender.prototype, "LabelRender");
