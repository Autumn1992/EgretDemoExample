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
 * 以下示例演示了使用 SpriteSheet 处理合并后的大图。
 * 可以配合 RES 模块进行加载，RES模块封装了对 SpriteSheet 的使用。
 */
var SpriteSheetExample = (function (_super) {
    __extends(SpriteSheetExample, _super);
    function SpriteSheetExample() {
        var _this = _super.call(this) || this;
        _this.startLoad();
        return _this;
    }
    SpriteSheetExample.prototype.startLoad = function () {
        //创建 ImageLoader 对象
        var loader = new egret.ImageLoader();
        //添加加载完成侦听
        loader.addEventListener(egret.Event.COMPLETE, this.onLoadComplete, this);
        var url = "resource/assets/egret_icon.png";
        //开始加载
        loader.load(url);
    };
    SpriteSheetExample.prototype.onLoadComplete = function (event) {
        var loader = event.target;
        //获取加载到的纹理对象
        var bitmapData = loader.data;
        //创建纹理对象
        var texture = new egret.Texture();
        texture.bitmapData = bitmapData;
        //创建 SpriteSheet 对象
        var spriteSheet = new egret.SpriteSheet(texture);
        egret.log(spriteSheet.getTexture("part1")); //null
        //创建一个新的 Texture 对象
        spriteSheet.createTexture("part1", 0, 0, 100, 100);
        egret.log(spriteSheet.getTexture("part1")); //egret.Texture
    };
    return SpriteSheetExample;
}(egret.DisplayObjectContainer));
__reflect(SpriteSheetExample.prototype, "SpriteSheetExample");
