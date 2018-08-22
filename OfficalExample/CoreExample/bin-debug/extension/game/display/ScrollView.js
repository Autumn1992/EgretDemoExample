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
 * 以下示例演示了 ScrollView 滚动组件的使用。
 */
var ScrollViewExample = (function (_super) {
    __extends(ScrollViewExample, _super);
    function ScrollViewExample() {
        var _this = _super.call(this) || this;
        _this.startLoad();
        return _this;
    }
    ScrollViewExample.prototype.startLoad = function () {
        //创建 ImageLoader 对象
        var loader = new egret.ImageLoader();
        //添加加载完成侦听
        loader.addEventListener(egret.Event.COMPLETE, this.onLoadComplete, this);
        var url = "resource/assets/egret_icon.png";
        //开始加载
        loader.load(url);
    };
    ScrollViewExample.prototype.onLoadComplete = function (event) {
        var loader = event.target;
        //获取加载到的纹理对象
        var bitmapData = loader.data;
        //创建纹理对象
        var texture = new egret.Texture();
        texture.bitmapData = bitmapData;
        //创建 Bitmap
        var bitmap = new egret.Bitmap(texture);
        //创建 ScrollView
        var scrollView = new egret.ScrollView();
        //设置滚动内容
        scrollView.setContent(bitmap);
        //设置滚动区域宽高
        scrollView.width = 100;
        scrollView.height = 100;
        this.addChild(scrollView);
    };
    return ScrollViewExample;
}(egret.DisplayObjectContainer));
__reflect(ScrollViewExample.prototype, "ScrollViewExample");
