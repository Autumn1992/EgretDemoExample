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
 * 下面的示例使用 MatrixExample 类创建新 Matrix 对象，然后使用 egret.log() 方法输出各种类方法的结果。
 */
var MatrixExample = (function (_super) {
    __extends(MatrixExample, _super);
    function MatrixExample() {
        var _this = _super.call(this) || this;
        var myMatrix = new egret.Matrix();
        egret.log(myMatrix.toString()); // (a=1, b=0, c=0, d=1, tx=0, ty=0)
        myMatrix.translate(100, 100);
        egret.log(myMatrix.toString()); // (a=1, b=0, c=0, d=1, tx=100, ty=100)
        myMatrix.scale(2, 3);
        egret.log(myMatrix.toString()); // (a=2, b=0, c=0, d=3, tx=200, ty=300)
        return _this;
    }
    return MatrixExample;
}(egret.DisplayObjectContainer));
__reflect(MatrixExample.prototype, "MatrixExample");
