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
 * 以下示例演示了使用 Graphics 类绘制圆形、圆角矩形和正方形。
 */
var GraphicsExample = (function (_super) {
    __extends(GraphicsExample, _super);
    function GraphicsExample() {
        var _this = _super.call(this) || this;
        _this.drawCircle();
        _this.drawRoundRect();
        _this.drawRect();
        return _this;
    }
    GraphicsExample.prototype.drawCircle = function () {
        var shape = new egret.Shape();
        shape.graphics.beginFill(0xff0000);
        shape.graphics.drawCircle(0, 0, 100);
        shape.graphics.endFill();
        this.addChild(shape);
    };
    GraphicsExample.prototype.drawRoundRect = function () {
        var shape = new egret.Shape();
        shape.graphics.beginFill(0x00ff00);
        shape.graphics.drawRoundRect(100, 100, 100, 100, 10, 10);
        shape.graphics.endFill();
        this.addChild(shape);
    };
    GraphicsExample.prototype.drawRect = function () {
        var shape = new egret.Shape();
        shape.graphics.beginFill(0x0000ff);
        shape.graphics.drawRect(200, 200, 100, 100);
        shape.graphics.endFill();
        this.addChild(shape);
    };
    return GraphicsExample;
}(egret.DisplayObjectContainer));
__reflect(GraphicsExample.prototype, "GraphicsExample");
