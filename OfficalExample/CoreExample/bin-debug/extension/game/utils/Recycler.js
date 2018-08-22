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
*   以下示例使用 RecyclerExample() 方法创建一个象缓存复用类，180帧后删除（稳定在1秒60帧）。
*/
var RecyclerExample = (function (_super) {
    __extends(RecyclerExample, _super);
    function RecyclerExample() {
        var _this = _super.call(this) || this;
        _this.intervalRecycler = 180;
        _this.RecyclerExample();
        return _this;
    }
    RecyclerExample.prototype.RecyclerExample = function () {
        this.recycler = new egret.Recycler(this.intervalRecycler);
        for (var i = 0; i <= 20; ++i) {
            this.recycler.push(this.creatShape());
        }
        egret.log(this.recycler.length); //21
        var temp = this.recycler.pop();
        this.addChild(temp);
        this.addEventListener(egret.Event.ENTER_FRAME, this.enterFrameFunction, this);
    };
    RecyclerExample.prototype.enterFrameFunction = function (event) {
        egret.log(this.recycler.length);
        //20
        //20
        //..
        //0
    };
    RecyclerExample.prototype.creatShape = function () {
        var shape = new egret.Shape();
        shape.graphics.lineStyle(11, 0xff0000);
        shape.graphics.drawCircle(0, 0, 50);
        shape.graphics.beginFill(0xff0000);
        shape.graphics.endFill();
        return shape;
    };
    return RecyclerExample;
}(egret.DisplayObjectContainer));
__reflect(RecyclerExample.prototype, "RecyclerExample");
