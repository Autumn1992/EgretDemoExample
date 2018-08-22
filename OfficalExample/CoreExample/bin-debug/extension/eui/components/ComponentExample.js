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
 * Usually eui.Component is used as a container for basic layout.
 */
/**
 * @language zh_CN
 * 通常 eui.Component 可以作为简单布局的容器。
 */
var ComponentExample = (function (_super) {
    __extends(ComponentExample, _super);
    function ComponentExample() {
        var _this = _super.call(this) || this;
        var shape = new egret.Shape();
        shape.graphics.beginFill(0x666666);
        shape.graphics.drawRect(0, 0, 400, 300);
        shape.graphics.endFill();
        _this.addChild(shape);
        var exml = "<e:Skin xmlns:e=\"http://ns.egret.com/eui\">\n                <e:Label text=\"\u6807\u9898\" horizontalCenter=\"0\"/>\n                <e:Label text=\"egret\" right=\"0\" bottom=\"0\"/>\n            </e:Skin>";
        var component = new eui.Component();
        component.width = 400;
        component.height = 300;
        component.skinName = exml;
        _this.addChild(component);
        return _this;
    }
    return ComponentExample;
}(egret.Sprite));
__reflect(ComponentExample.prototype, "ComponentExample");
