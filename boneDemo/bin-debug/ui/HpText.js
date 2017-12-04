var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * 掉血文字
 * @author
 * @date 2017/11/14
 */
var HpText = (function (_super) {
    __extends(HpText, _super);
    function HpText() {
        var _this = _super.call(this) || this;
        _this.skinName = "HpTextSkin";
        return _this;
    }
    HpText.prototype.show = function (xPos, yPos, value) {
        var _this = this;
        this.hpLabel.text = value + "";
        this.x = xPos;
        this.y = yPos;
        GameConfig.stage.addChild(this);
        egret.Tween.get(this).to({ y: this.y - 100 }, 500).call(function () {
            _this.parent && _this.parent.removeChild(_this);
        }, this);
    };
    return HpText;
}(eui.Component));
__reflect(HpText.prototype, "HpText");
//# sourceMappingURL=HpText.js.map