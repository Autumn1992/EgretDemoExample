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
var MotionExample = (function (_super) {
    __extends(MotionExample, _super);
    function MotionExample() {
        var _this = _super.call(this) || this;
        _this.label = new egret.TextField();
        _this.label.y = 50;
        _this.label.x = 50;
        _this.addChild(_this.label);
        var motion = new egret.Motion();
        motion.addEventListener(egret.Event.CHANGE, _this.onMotion, _this);
        motion.start();
        return _this;
    }
    MotionExample.prototype.onMotion = function (e) {
        this.label.text =
            "加速度: \nx:" + e.accelerationIncludingGravity.x
                + ",\ny:" + e.accelerationIncludingGravity.y
                + ",\nz:" + e.accelerationIncludingGravity.z;
    };
    return MotionExample;
}(egret.DisplayObjectContainer));
__reflect(MotionExample.prototype, "MotionExample");
