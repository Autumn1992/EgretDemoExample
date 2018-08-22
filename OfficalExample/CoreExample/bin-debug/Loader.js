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
var Loader = (function (_super) {
    __extends(Loader, _super);
    function Loader() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.images = {};
        _this.resCount = 0;
        return _this;
    }
    Loader.prototype.loadImages = function (urls) {
        var _this = this;
        this.resCount = urls.length;
        urls.forEach(function (url) {
            var loader = new egret.ImageLoader();
            var finishHandler = function (e) {
                _this.images[url] = loader.data;
                if (_this.resCount == Object.keys(_this.images).length)
                    _this.dispatchEventWith(egret.Event.COMPLETE);
            };
            loader.once(egret.Event.COMPLETE, finishHandler, _this);
            loader.once(egret.IOErrorEvent.IO_ERROR, finishHandler, _this);
            loader.load(url);
        });
    };
    return Loader;
}(egret.EventDispatcher));
__reflect(Loader.prototype, "Loader");
