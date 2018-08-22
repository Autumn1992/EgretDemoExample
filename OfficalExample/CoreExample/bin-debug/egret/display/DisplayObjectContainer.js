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
 * 以下示例演示了创建5个正方形，并添加到显示列表。
 */
var DisplayObjectContainerExample = (function (_super) {
    __extends(DisplayObjectContainerExample, _super);
    function DisplayObjectContainerExample() {
        var _this = _super.call(this) || this;
        for (var i = 0; i < 5; i++) {
            var shape = new egret.Shape();
            shape.graphics.beginFill(0xff0000);
            shape.graphics.drawRect(0, 0, 30, 30);
            shape.graphics.endFill();
            shape.x = i * 35;
            _this.addChild(shape);
        }
        return _this;
    }
    return DisplayObjectContainerExample;
}(egret.DisplayObjectContainer));
__reflect(DisplayObjectContainerExample.prototype, "DisplayObjectContainerExample");
