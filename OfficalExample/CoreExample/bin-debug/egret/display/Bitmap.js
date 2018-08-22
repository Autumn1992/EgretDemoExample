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
 * 以下示例演示了使用 ImageLoader 加载图片资源并使用 Bitmap 进行显示。
 * 还可以配合 RES 模块更便捷的加载。
 */
var BitmapExample = (function (_super) {
    __extends(BitmapExample, _super);
    function BitmapExample() {
        var _this = _super.call(this) || this;
        _this.startLoad();
        return _this;
    }
    BitmapExample.prototype.startLoad = function () {
        //创建 ImageLoader 对象
        var loader = new egret.ImageLoader();
        //添加加载完成侦听
        loader.addEventListener(egret.Event.COMPLETE, this.onLoadComplete, this);
        var url = "resource/assets/egret_icon.png";
        //开始加载
        loader.load(url);
    };
    BitmapExample.prototype.onLoadComplete = function (event) {
        var loader = event.target;
        //获取加载到的纹理对象
        var bitmapData = loader.data;
        //创建纹理对象
        var texture = new egret.Texture();
        texture.bitmapData = bitmapData;
        //创建 Bitmap 进行显示
        this.addChild(new egret.Bitmap(texture));
    };
    return BitmapExample;
}(egret.DisplayObjectContainer));
__reflect(BitmapExample.prototype, "BitmapExample");
