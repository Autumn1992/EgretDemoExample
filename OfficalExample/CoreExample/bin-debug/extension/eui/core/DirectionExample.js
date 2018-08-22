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
 * The following example uses the class DirectionExample to control the progressbar’s move direction
 */
/**
 * @language zh_CN
 * 以下示例使用 DirectionExample 类来控制进度条增长方向
 */
var DirectionExample = (function (_super) {
    __extends(DirectionExample, _super);
    function DirectionExample() {
        var _this = _super.call(this) || this;
        _this.once(egret.Event.ADDED_TO_STAGE, _this.init, _this);
        return _this;
    }
    DirectionExample.prototype.init = function () {
        this.progress_LTR = this.getProgressBar();
        this.progress_LTR.direction = eui.Direction.LTR;
        this.progress_LTR.width = 200;
        this.addChild(this.progress_LTR);
        this.progress_RTL = this.getProgressBar();
        this.progress_RTL.y = 50;
        this.progress_RTL.direction = eui.Direction.RTL;
        this.progress_RTL.width = 200;
        this.addChild(this.progress_RTL);
        this.progress_TTB = this.getProgressBar();
        this.progress_TTB.width = 60;
        this.progress_TTB.y = 100;
        this.progress_TTB.direction = eui.Direction.TTB;
        this.progress_TTB.height = 200;
        this.addChild(this.progress_TTB);
        this.progress_BTT = this.getProgressBar();
        this.progress_BTT.width = 60;
        this.progress_BTT.x = 100;
        this.progress_BTT.y = 100;
        this.progress_BTT.direction = eui.Direction.BTT;
        this.progress_BTT.height = 200;
        this.addChild(this.progress_BTT);
        this.addEventListener(egret.Event.ENTER_FRAME, this.onEF, this);
    };
    DirectionExample.prototype.onEF = function () {
        this.progress_LTR.value += 1;
        if (this.progress_LTR.value >= 100)
            this.progress_LTR.value = 0;
        this.progress_RTL.value += 1;
        if (this.progress_RTL.value >= 100)
            this.progress_RTL.value = 0;
        this.progress_TTB.value += 1;
        if (this.progress_TTB.value >= 100)
            this.progress_TTB.value = 0;
        this.progress_BTT.value += 1;
        if (this.progress_BTT.value >= 100)
            this.progress_BTT.value = 0;
        //this.getProgressBar();
    };
    DirectionExample.prototype.getProgressBar = function () {
        var exml = "<e:Skin class=\"skins.ProgressBarSkin\" xmlns:e=\"http://ns.egret.com/eui\" minWidth=\"30\" minHeight=\"18\">\n            <e:Image source=\"resource/track.png\" scale9Grid=\"1,1,4,4\" width=\"100%\" height=\"100%\" verticalCenter=\"0\"/>\n            <e:Image id=\"thumb\" height=\"100%\" width=\"100%\" source=\"resource/thumb.png\"/>\n            <e:Label id=\"labelDisplay\" textAlign=\"center\" verticalAlign=\"middle\" size=\"15\" fontFamily=\"Tahoma\" textColor=\"0x707070\" horizontalCenter=\"0\" verticalCenter=\"0\"/>\n        </e:Skin>";
        var clazz = EXML.parse(exml);
        var bar = new eui.ProgressBar();
        bar.skinName = "skins.ProgressBarSkin";
        return bar;
    };
    return DirectionExample;
}(egret.Sprite));
__reflect(DirectionExample.prototype, "DirectionExample");
