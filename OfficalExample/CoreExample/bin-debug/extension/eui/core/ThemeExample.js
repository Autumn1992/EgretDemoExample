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
 * The following example uses the class ThemeExample to show the skin theme
 */
/**
 * @language zh_CN
 * 以下示例使用 ThemeExample 类来显示皮肤主题
 */
var ThemeExample = (function (_super) {
    __extends(ThemeExample, _super);
    function ThemeExample() {
        var _this = _super.call(this) || this;
        _this.once(egret.Event.ADDED_TO_STAGE, _this.init, _this);
        return _this;
    }
    ThemeExample.prototype.init = function () {
        var theme = new eui.Theme("resource/green-theme.json", this.stage);
        this.progress = new eui.ProgressBar();
        this.progress.x = 30;
        this.progress.y = 30;
        this.progress.width = 200;
        this.addChild(this.progress);
        this.addEventListener(egret.Event.ENTER_FRAME, this.onEF, this);
    };
    ThemeExample.prototype.onEF = function () {
        this.progress.value += 1;
        if (this.progress.value >= 100)
            this.progress.value = 0;
    };
    return ThemeExample;
}(egret.Sprite));
__reflect(ThemeExample.prototype, "ThemeExample");
