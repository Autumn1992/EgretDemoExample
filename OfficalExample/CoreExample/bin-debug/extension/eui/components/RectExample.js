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
var RectExample = (function (_super) {
    __extends(RectExample, _super);
    function RectExample() {
        var _this = _super.call(this) || this;
        var exml = "<e:Group width=\"100\" height=\"100\" xmlns:e=\"http://ns.egret.com/eui\">\n               <e:Rect height=\"100%\" width=\"100%\" fillColor=\"0xffffff\"/>\n            </e:Group>";
        var clazz = EXML.parse(exml);
        var group = new clazz();
        _this.addChild(group);
        return _this;
    }
    return RectExample;
}(eui.Group));
__reflect(RectExample.prototype, "RectExample");
