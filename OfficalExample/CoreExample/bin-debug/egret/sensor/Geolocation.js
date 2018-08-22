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
var GeolocationExample = (function (_super) {
    __extends(GeolocationExample, _super);
    function GeolocationExample() {
        var _this = _super.call(this) || this;
        _this.label = new egret.TextField();
        _this.label.y = 50;
        _this.label.x = 50;
        _this.addChild(_this.label);
        var gps = new egret.Geolocation();
        gps.addEventListener(egret.Event.CHANGE, _this.onGotLocation, _this);
        gps.start();
        return _this;
    }
    GeolocationExample.prototype.onGotLocation = function (e) {
        this.label.text = "当前位置:" + e.latitude.toFixed(1) + "," + e.longitude.toFixed(1);
    };
    return GeolocationExample;
}(egret.DisplayObjectContainer));
__reflect(GeolocationExample.prototype, "GeolocationExample");
