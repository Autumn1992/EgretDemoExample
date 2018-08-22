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
var DeviceOrientationExample = (function (_super) {
    __extends(DeviceOrientationExample, _super);
    function DeviceOrientationExample() {
        var _this = _super.call(this) || this;
        _this.label = new egret.TextField();
        _this.label.y = 50;
        _this.label.x = 50;
        _this.addChild(_this.label);
        var orientation = new egret.DeviceOrientation();
        orientation.addEventListener(egret.Event.CHANGE, _this.onOrientation, _this);
        orientation.start();
        return _this;
    }
    DeviceOrientationExample.prototype.onOrientation = function (e) {
        this.label.text =
            "方向: \nalpha:" + e.alpha
                + ",\nbeta:" + e.beta
                + ",\ngamma:" + e.gamma;
    };
    return DeviceOrientationExample;
}(egret.DisplayObjectContainer));
__reflect(DeviceOrientationExample.prototype, "DeviceOrientationExample");
