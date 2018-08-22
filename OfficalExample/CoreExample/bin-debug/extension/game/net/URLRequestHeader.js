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
 * 以下示例演示了将 HTTP 请求标头 header 添加到 requestHeaders 属性的数组中。
 * 该标头指出，即使应用程序具有所请求内容的缓存副本，也应当将请求转发给原始服务器。
 */
var URLRequestHeaderExample = (function (_super) {
    __extends(URLRequestHeaderExample, _super);
    function URLRequestHeaderExample() {
        var _this = _super.call(this) || this;
        _this.startLoad();
        return _this;
    }
    URLRequestHeaderExample.prototype.startLoad = function () {
        //创建 URLLoader 对象
        var loader = new egret.URLLoader();
        //设置加载方式为纹理
        loader.dataFormat = egret.URLLoaderDataFormat.TEXT;
        //添加加载完成侦听
        loader.addEventListener(egret.Event.COMPLETE, this.onLoadComplete, this);
        //添加加载失败侦听
        loader.addEventListener(egret.IOErrorEvent.IO_ERROR, this.onLoadError, this);
        var url = "http://www.[yourdomain].com/greeting.cfm";
        var request = new egret.URLRequest(url);
        //添加header
        var header = new egret.URLRequestHeader("pragma", "no-cache");
        request.requestHeaders.push(header);
        //开始加载
        loader.load(request);
    };
    URLRequestHeaderExample.prototype.onLoadComplete = function (event) {
        egret.log("onLoadComplete");
    };
    URLRequestHeaderExample.prototype.onLoadError = function () {
        egret.log("onLoadError");
    };
    return URLRequestHeaderExample;
}(egret.DisplayObjectContainer));
__reflect(URLRequestHeaderExample.prototype, "URLRequestHeaderExample");
