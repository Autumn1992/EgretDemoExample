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
 * 以下示例演示了设置屏幕适配方式。
 * 游戏默认的适配方式在egret_loader.js和native_require.js中修改
 */
var StageScaleModeExample = (function (_super) {
    __extends(StageScaleModeExample, _super);
    function StageScaleModeExample() {
        var _this = _super.call(this) || this;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
        return _this;
    }
    StageScaleModeExample.prototype.onAddToStage = function () {
        this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
        //设置屏幕适配方式为 EXACT_FIT
        this.stage.scaleMode = egret.StageScaleMode.EXACT_FIT;
    };
    return StageScaleModeExample;
}(egret.DisplayObjectContainer));
__reflect(StageScaleModeExample.prototype, "StageScaleModeExample");
