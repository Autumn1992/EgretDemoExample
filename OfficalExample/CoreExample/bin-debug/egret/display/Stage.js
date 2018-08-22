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
 * 以下示例演示了激活舞台或调整舞台大小时调度事件。
 */
var StageExample = (function (_super) {
    __extends(StageExample, _super);
    function StageExample() {
        var _this = _super.call(this) || this;
        var stage = egret.MainContext.instance.stage;
        //添加激活侦听
        stage.addEventListener(egret.Event.ACTIVATE, _this.activateHandler, _this);
        //添加取消激活侦听
        stage.addEventListener(egret.Event.DEACTIVATE, _this.deactivateHandler, _this);
        //添加屏幕大小改变侦听
        stage.addEventListener(egret.Event.RESIZE, _this.resizeHandler, _this);
        return _this;
    }
    StageExample.prototype.activateHandler = function () {
        egret.log("activateHandler");
    };
    StageExample.prototype.deactivateHandler = function () {
        egret.log("deactivateHandler");
    };
    StageExample.prototype.resizeHandler = function () {
        egret.log("resizeHandler");
        var stage = egret.MainContext.instance.stage;
        egret.log("stageWidth: " + stage.stageWidth + " stageHeight: " + stage.stageHeight);
    };
    return StageExample;
}(egret.DisplayObjectContainer));
__reflect(StageExample.prototype, "StageExample");
