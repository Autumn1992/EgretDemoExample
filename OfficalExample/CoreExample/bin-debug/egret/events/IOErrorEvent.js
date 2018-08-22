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
 * 以下示例使用 IOErrorEventExample 类说明在试图加载不存在的文件时如何调度错误事件对象。
 */
var IOErrorEventExample = (function (_super) {
    __extends(IOErrorEventExample, _super);
    function IOErrorEventExample() {
        var _this = _super.call(this) || this;
        var loader = new egret.HttpRequest();
        loader.addEventListener(egret.IOErrorEvent.IO_ERROR, _this.onIOError, _this);
        loader.open("nothing.json", egret.HttpMethod.GET);
        loader.send();
        return _this;
    }
    IOErrorEventExample.prototype.onIOError = function (event) {
        egret.log("onIOError");
    };
    return IOErrorEventExample;
}(egret.DisplayObjectContainer));
__reflect(IOErrorEventExample.prototype, "IOErrorEventExample");
