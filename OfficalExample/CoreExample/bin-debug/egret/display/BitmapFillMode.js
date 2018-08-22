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
 * 以下示例演示了设置位图的填充方式。
 * 还可以配合 RES 模块更便捷的加载。
 */
var BitmapFillModeExample = (function (_super) {
    __extends(BitmapFillModeExample, _super);
    function BitmapFillModeExample() {
        var _this = _super.call(this) || this;
        _this.startLoad();
        return _this;
    }
    BitmapFillModeExample.prototype.startLoad = function () {
        //创建 ImageLoader 对象
        var loader = new egret.ImageLoader();
        //添加加载完成侦听
        loader.addEventListener(egret.Event.COMPLETE, this.onLoadComplete, this);
        var url = "resource/assets/egret_icon.png";
        //开始加载
        loader.load(url);
    };
    BitmapFillModeExample.prototype.onLoadComplete = function (event) {
        var loader = event.target;
        //获取加载到的纹理对象
        var bitmapData = loader.data;
        //创建纹理对象
        var texture = new egret.Texture();
        texture.bitmapData = bitmapData;
        //创建 Bitmap 进行显示
        var bitmap = new egret.Bitmap(texture);
        this.addChild(bitmap);
        //默认是以拉伸填充区域
        egret.log(bitmap.fillMode); //scale
        //设置重复位图以填充区域
        bitmap.fillMode = egret.BitmapFillMode.REPEAT;
        bitmap.width = 480;
        bitmap.height = 800;
        egret.log(bitmap.fillMode); //repeat
    };
    return BitmapFillModeExample;
}(egret.DisplayObjectContainer));
__reflect(BitmapFillModeExample.prototype, "BitmapFillModeExample");
