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
 * The following example shows how to use the eui.BitmapLabel class
 */
/**
 * @language zh_CN
 * 下面的例子显示了如何使用 eui.BitmapLabel 类
 */
var BitmapLabelExample = (function (_super) {
    __extends(BitmapLabelExample, _super);
    function BitmapLabelExample() {
        var _this = _super.call(this) || this;
        RES.getResByUrl("resource/assets/font.fnt", _this.onLoadComplete, _this, RES.ResourceItem.TYPE_FONT);
        return _this;
    }
    BitmapLabelExample.prototype.onLoadComplete = function (font) {
        var bitmapLabel = new eui.BitmapLabel();
        bitmapLabel.font = font;
        this.addChild(bitmapLabel);
        bitmapLabel.text = "Hello Egret";
    };
    return BitmapLabelExample;
}(eui.Group));
__reflect(BitmapLabelExample.prototype, "BitmapLabelExample");
