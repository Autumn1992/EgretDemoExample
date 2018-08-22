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
 * 以下示例演示了使用 BitmapText 显示特殊字体。
 */
var BitmapFontExample = (function (_super) {
    __extends(BitmapFontExample, _super);
    function BitmapFontExample() {
        var _this = _super.call(this) || this;
        RES.getResByUrl("resource/assets/font.fnt", _this.onLoadComplete, _this, RES.ResourceItem.TYPE_FONT);
        return _this;
    }
    BitmapFontExample.prototype.onLoadComplete = function (font) {
        var bitmapText = new egret.BitmapText();
        bitmapText.font = font;
        this.addChild(bitmapText);
        bitmapText.text = "Hello Egret";
    };
    return BitmapFontExample;
}(egret.DisplayObjectContainer));
__reflect(BitmapFontExample.prototype, "BitmapFontExample");
