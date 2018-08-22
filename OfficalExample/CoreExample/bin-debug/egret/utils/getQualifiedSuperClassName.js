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
 * 以下示例演示了 getQualifiedClassNameExample 的使用方式。
 */
var getQualifiedSuperClassNameExample = (function (_super) {
    __extends(getQualifiedSuperClassNameExample, _super);
    function getQualifiedSuperClassNameExample() {
        var _this = _super.call(this) || this;
        var sp1 = new egret.Sprite();
        var sp2 = new egret.Shape();
        egret.log(egret.getQualifiedSuperclassName(sp1)); //egret.DisplayObjectContainer
        egret.log(egret.getQualifiedSuperclassName(sp2)); //egret.DisplayObject
        return _this;
    }
    return getQualifiedSuperClassNameExample;
}(egret.DisplayObjectContainer));
__reflect(getQualifiedSuperClassNameExample.prototype, "getQualifiedSuperClassNameExample");
