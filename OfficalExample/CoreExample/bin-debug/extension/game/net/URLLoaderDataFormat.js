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
 * 以下示例演示了使用 URLLoader 设置不同的 dataFormat 加载不同的资源。
 */
var URLLoaderDataFormatExample = (function (_super) {
    __extends(URLLoaderDataFormatExample, _super);
    function URLLoaderDataFormatExample() {
        var _this = _super.call(this) || this;
        _this.startLoad(egret.URLLoaderDataFormat.TEXTURE, "resource/assets/egret_icon.png");
        _this.startLoad(egret.URLLoaderDataFormat.TEXT, "resource/assets/icons.json");
        _this.startLoad(egret.URLLoaderDataFormat.SOUND, "resource/assets/sound.mp3");
        return _this;
    }
    URLLoaderDataFormatExample.prototype.startLoad = function (dataFormat, url) {
        //创建 URLLoader 对象
        var loader = new egret.URLLoader();
        //设置加载方式
        loader.dataFormat = dataFormat;
        //添加加载完成侦听
        loader.addEventListener(egret.Event.COMPLETE, this.onLoadComplete, this);
        var request = new egret.URLRequest(url);
        //开始加载
        loader.load(request);
    };
    URLLoaderDataFormatExample.prototype.onLoadComplete = function (event) {
        var loader = event.target;
        egret.log("dataFormat : " + loader.dataFormat);
        //获取加载到的对象
        var data = loader.data;
        egret.log("data : " + data);
    };
    return URLLoaderDataFormatExample;
}(egret.DisplayObjectContainer));
__reflect(URLLoaderDataFormatExample.prototype, "URLLoaderDataFormatExample");
