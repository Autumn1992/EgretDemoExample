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
 * 以下示例演示了 getDefinitionByName 的使用方式。
 */
var getDefinitionByNameExample = (function (_super) {
    __extends(getDefinitionByNameExample, _super);
    function getDefinitionByNameExample() {
        var _this = _super.call(this) || this;
        egret.log(egret.getDefinitionByName("egret.DisplayObject")); //egret.DisplayObject对象
        egret.log(egret.getDefinitionByName("egret.Nothing")); //null
        var cls = egret.getDefinitionByName("egret.Shape");
        var shape = new cls();
        shape.graphics.beginFill(0xff0000);
        shape.graphics.drawRect(0, 0, 100, 100);
        shape.graphics.endFill();
        shape.x = shape.y = 100;
        _this.addChild(shape);
        return _this;
    }
    return getDefinitionByNameExample;
}(egret.DisplayObjectContainer));
__reflect(getDefinitionByNameExample.prototype, "getDefinitionByNameExample");
