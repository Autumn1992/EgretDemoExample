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
 * 以下示例演示了设置显示对象的混合模式。
 * 还可以配合 RES 模块更便捷的加载。
 */
var BlendModeExample = (function (_super) {
    __extends(BlendModeExample, _super);
    function BlendModeExample() {
        var _this = _super.call(this) || this;
        _this.startLoad();
        return _this;
    }
    BlendModeExample.prototype.startLoad = function () {
        //创建 ImageLoader 对象
        var loader = new egret.ImageLoader();
        //添加加载完成侦听
        loader.addEventListener(egret.Event.COMPLETE, this.onLoadComplete, this);
        var url = "resource/assets/button.png";
        //开始加载
        loader.load(url);
    };
    BlendModeExample.prototype.onLoadComplete = function (event) {
        var loader = event.target;
        //获取加载到的纹理对象
        var bitmapData = loader.data;
        //创建纹理对象
        var texture = new egret.Texture();
        texture.bitmapData = bitmapData;
        //创建 Bitmap 进行显示
        var bitmap = new egret.Bitmap(texture);
        this.addChild(bitmap);
        var bitmap = new egret.Bitmap(texture);
        //设置混合模式为叠加效果
        bitmap.blendMode = egret.BlendMode.ADD;
        bitmap.x = bitmap.y = 25;
        this.addChild(bitmap);
    };
    return BlendModeExample;
}(egret.DisplayObjectContainer));
__reflect(BlendModeExample.prototype, "BlendModeExample");
