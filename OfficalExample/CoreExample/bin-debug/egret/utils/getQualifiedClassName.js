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
var getQualifiedClassNameExample = (function (_super) {
    __extends(getQualifiedClassNameExample, _super);
    function getQualifiedClassNameExample() {
        var _this = _super.call(this) || this;
        egret.log(egret.getQualifiedClassName(egret.DisplayObject)); //egret.DisplayObject
        egret.log(egret.getQualifiedClassName(window)); //Window
        return _this;
    }
    return getQualifiedClassNameExample;
}(egret.DisplayObjectContainer));
__reflect(getQualifiedClassNameExample.prototype, "getQualifiedClassNameExample");
