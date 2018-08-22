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
 * The following example shows the general use of a Image.
 */
/**
 * @language zh_CN
 * 下面的例子显示了一个图片的常规用法。
 */
var ImageExample = (function (_super) {
    __extends(ImageExample, _super);
    function ImageExample() {
        var _this = _super.call(this) || this;
        var image = new eui.Image();
        image.source = "resource/egret.png";
        _this.addChild(image);
        image.x = 100;
        image.y = 100;
        return _this;
    }
    return ImageExample;
}(egret.Sprite));
__reflect(ImageExample.prototype, "ImageExample");
