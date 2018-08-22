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
 * 以下示例演示了使用 RenderTexture 类绘制显示对象。
 */
var RenderTextureExample = (function (_super) {
    __extends(RenderTextureExample, _super);
    function RenderTextureExample() {
        var _this = _super.call(this) || this;
        _this.startLoad();
        return _this;
    }
    RenderTextureExample.prototype.startLoad = function () {
        //创建 ImageLoader 对象
        var loader = new egret.ImageLoader();
        //添加加载完成侦听
        loader.addEventListener(egret.Event.COMPLETE, this.onLoadComplete, this);
        var url = "resource/assets/egret_icon.png";
        //开始加载
        loader.load(url);
    };
    RenderTextureExample.prototype.onLoadComplete = function (event) {
        var loader = event.target;
        //获取加载到的纹理对象
        var bitmapData = loader.data;
        //创建纹理对象
        var texture = new egret.Texture();
        texture.bitmapData = bitmapData;
        //使用 RenderTexture 进行显示
        var renderTexture = new egret.RenderTexture();
        renderTexture.drawToTexture(new egret.Bitmap(texture));
        //将绘制好的 RenderTexture 进行显示
        var bitmap = new egret.Bitmap(renderTexture);
        this.addChild(bitmap);
    };
    return RenderTextureExample;
}(egret.DisplayObjectContainer));
__reflect(RenderTextureExample.prototype, "RenderTextureExample");
