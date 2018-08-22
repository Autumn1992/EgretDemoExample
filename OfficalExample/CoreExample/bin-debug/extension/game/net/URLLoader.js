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
 * 以下示例演示了使用 URLLoader 加载图片资源。
 */
var URLLoaderExample = (function (_super) {
    __extends(URLLoaderExample, _super);
    function URLLoaderExample() {
        var _this = _super.call(this) || this;
        _this.startLoad();
        return _this;
    }
    URLLoaderExample.prototype.startLoad = function () {
        //创建 URLLoader 对象
        var loader = new egret.URLLoader();
        //设置加载方式为纹理
        loader.dataFormat = egret.URLLoaderDataFormat.TEXTURE;
        //添加加载完成侦听
        loader.addEventListener(egret.Event.COMPLETE, this.onLoadComplete, this);
        //添加加载失败侦听
        loader.addEventListener(egret.IOErrorEvent.IO_ERROR, this.onLoadError, this);
        var url = "resource/assets/egret_icon.png";
        var request = new egret.URLRequest(url);
        //开始加载
        loader.load(request);
    };
    URLLoaderExample.prototype.onLoadComplete = function (event) {
        egret.log("onLoadComplete");
        var loader = event.target;
        //获取加载到的纹理对象
        var texture = loader.data;
        egret.log(texture);
    };
    URLLoaderExample.prototype.onLoadError = function () {
        egret.log("onLoadError");
    };
    return URLLoaderExample;
}(egret.DisplayObjectContainer));
__reflect(URLLoaderExample.prototype, "URLLoaderExample");
