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
 * 以下示例使用 RectangleExample 类创建新 Rectangle 对象，然后使用 egret.log() 方法输出各种类方法的结果。
 */
var RectangleExample = (function (_super) {
    __extends(RectangleExample, _super);
    function RectangleExample() {
        var _this = _super.call(this) || this;
        var firstRect = new egret.Rectangle();
        egret.log(firstRect.toString()); // (x=0, y=0, w=0, h=0)
        var secondRect = new egret.Rectangle(1, 3, 11, 13);
        egret.log(secondRect.toString()); // (x=1, y=3, w=11, h=13)
        var thirdRect = new egret.Rectangle(5, 8, 17, 19);
        egret.log(thirdRect.toString()); // (x=5, y=8, w=17, h=19)
        var isContained = secondRect.containsRect(thirdRect);
        egret.log(isContained); // false
        return _this;
    }
    return RectangleExample;
}(egret.DisplayObjectContainer));
__reflect(RectangleExample.prototype, "RectangleExample");
