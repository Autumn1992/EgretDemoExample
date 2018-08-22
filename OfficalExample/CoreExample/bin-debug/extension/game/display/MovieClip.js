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
 * 以下示例演示了 MovieClip 序列帧动画的使用。
 * 该示例中假设资源已经用RES模块加载完成
 */
var MovieClipExample = (function (_super) {
    __extends(MovieClipExample, _super);
    function MovieClipExample() {
        var _this = _super.call(this) || this;
        var loader = new egret.HttpRequest();
        loader.responseType = egret.HttpResponseType.TEXT;
        loader.addEventListener(egret.Event.COMPLETE, _this.onLoadJsonComplete, _this);
        loader.open("resource/assets/chunli.json", egret.HttpMethod.GET);
        loader.send();
        return _this;
    }
    MovieClipExample.prototype.onLoadJsonComplete = function (event) {
        var loader = event.target;
        this.data = JSON.parse(loader.response);
        var imageLoader = new egret.ImageLoader();
        imageLoader.addEventListener(egret.Event.COMPLETE, this.onLoadTextureComplete, this);
        imageLoader.load("resource/assets/chunli.png");
    };
    MovieClipExample.prototype.onLoadTextureComplete = function (event) {
        var loader = event.target;
        //获取加载到的纹理对象
        var bitmapData = loader.data;
        //创建纹理对象
        this.texture = new egret.Texture();
        this.texture.bitmapData = bitmapData;
        this.createMovieClip();
    };
    MovieClipExample.prototype.createMovieClip = function () {
        //创建动画工厂
        var mcDataFactory = new egret.MovieClipDataFactory(this.data, this.texture);
        //创建 MovieClip，将工厂生成的 MovieClipData 传入参数
        var mc = new egret.MovieClip(mcDataFactory.generateMovieClipData("test"));
        this.addChild(mc);
        //添加播放完成事件
        mc.addEventListener(egret.Event.COMPLETE, function () {
            egret.log("COMPLETE");
        }, this);
        //添加循环播放完成事件
        mc.addEventListener(egret.Event.LOOP_COMPLETE, function () {
            egret.log("LOOP_COMPLETE");
        }, this);
        //播放攻击动画
        mc.gotoAndPlay("attack", -1);
    };
    return MovieClipExample;
}(egret.DisplayObjectContainer));
__reflect(MovieClipExample.prototype, "MovieClipExample");
