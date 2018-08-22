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
 * 以下示例演示了舞台方向旋转变化事件的使用。
 */
var StageOrientationEventExample = (function (_super) {
    __extends(StageOrientationEventExample, _super);
    function StageOrientationEventExample() {
        var _this = _super.call(this) || this;
        _this.once(egret.Event.ADDED_TO_STAGE, _this.onAddStage, _this);
        return _this;
    }
    StageOrientationEventExample.prototype.onAddStage = function () {
        this.text = new egret.TextField();
        this.text.text = "Text init.";
        this.text.x = 50;
        this.text.y = 100;
        this.addChild(this.text);
        this.stage.addEventListener(egret.StageOrientationEvent.ORIENTATION_CHANGE, this.onOrientationChange, this);
    };
    StageOrientationEventExample.prototype.onOrientationChange = function (e) {
        egret.log("onOrientationChange");
        this.text.text = "onOrientationChange";
    };
    return StageOrientationEventExample;
}(egret.DisplayObjectContainer));
__reflect(StageOrientationEventExample.prototype, "StageOrientationEventExample");
