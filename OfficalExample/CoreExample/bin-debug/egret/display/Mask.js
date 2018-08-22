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
 * 以下示例演示了遮罩的使用。
 */
var MaskExample = (function (_super) {
    __extends(MaskExample, _super);
    function MaskExample() {
        var _this = _super.call(this) || this;
        var imageLoader = new Loader();
        imageLoader.once(egret.Event.COMPLETE, function (e) { return _this.onLoaded(imageLoader.images); }, _this);
        imageLoader.loadImages([
            "resource/assets/lark.png",
            "resource/assets/blendModeBG.jpg"
        ]);
        return _this;
    }
    MaskExample.prototype.onLoaded = function (images) {
        var larkBitmapData = images["resource/assets/lark.png"];
        var productsBitmapData = images["resource/assets/blendModeBG.jpg"];
        var productBmp = new egret.Bitmap(productsBitmapData);
        this.addChild(productBmp);
        var larkBmp = new egret.Bitmap(larkBitmapData);
        larkBmp.x = -larkBmp.width / 2;
        larkBmp.y = -larkBmp.height / 2;
        var mask = new egret.Sprite();
        mask.width = 0;
        mask.height = 0;
        mask.addChild(larkBmp);
        this.addChild(mask);
        productBmp.mask = mask;
        this.mask = mask;
        this.productBmp = productBmp;
        this.annimate();
        this.stage.frameRate = 60;
    };
    MaskExample.prototype.annimate = function () {
        var _this = this;
        egret.Tween.get(this.mask)
            .to({ rotation: 360, x: 300, y: 150 }, 2000, egret.Ease.cubicInOut)
            .to({ rotation: 360, x: 75, y: 100 }, 2000, egret.Ease.cubicInOut)
            .call(function () { return _this.annimate(); });
    };
    return MaskExample;
}(egret.DisplayObjectContainer));
__reflect(MaskExample.prototype, "MaskExample");
