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
 * @language en_US
 * The following example uses the class WatcherExample to show how to
 * defines utility method that you can use with bindable properties.
 */
/**
 * @language zh_CN
 * 以下示例使用 WatcherExample 类来说明如何监视绑定属性的改变
 */
var WatcherExample = (function (_super) {
    __extends(WatcherExample, _super);
    function WatcherExample() {
        var _this = _super.call(this) || this;
        _this.porp = 789;
        eui.Watcher.watch(_this, ["porp"], _this.watcherHander, _this);
        _this.porp = 666;
        _this.porp = 123;
        return _this;
    }
    WatcherExample.prototype.watcherHander = function (value) {
        egret.log("watcherHander:" + " " + value + " " + this.porp);
    };
    return WatcherExample;
}(egret.Sprite));
__reflect(WatcherExample.prototype, "WatcherExample");
