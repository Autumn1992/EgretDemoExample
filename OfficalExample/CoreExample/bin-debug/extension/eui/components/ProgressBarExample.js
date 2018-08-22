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
var ProgressBarExample = (function (_super) {
    __extends(ProgressBarExample, _super);
    function ProgressBarExample() {
        var _this = _super.call(this) || this;
        var exml = "<e:ProgressBar xmlns:e=\"http://ns.egret.com/eui\">\n                <e:Skin>\n                    <e:Image id=\"thumb\" width=\"100%\" height=\"100%\" source=\"resource/thumb.png\" scale9Grid=\"1,1,4,4\"/>\n                    <e:Label id=\"labelDisplay\" textColor=\"0xffffff\" horizontalCenter=\"0\" verticalCenter=\"0\"/>\n                </e:Skin>\n            </e:ProgressBar>";
        var clazz = EXML.parse(exml);
        var progressBar = new clazz();
        progressBar.width = 500;
        progressBar.height = 40;
        progressBar.minimum = 0;
        progressBar.maximum = 100;
        _this.addChild(progressBar);
        var add = 1;
        _this.addEventListener(egret.Event.ENTER_FRAME, function (e) {
            progressBar.value += add;
            if (progressBar.value >= progressBar.maximum || progressBar.value <= progressBar.minimum) {
                add = -add;
            }
        }, null);
        return _this;
    }
    return ProgressBarExample;
}(egret.Sprite));
__reflect(ProgressBarExample.prototype, "ProgressBarExample");
