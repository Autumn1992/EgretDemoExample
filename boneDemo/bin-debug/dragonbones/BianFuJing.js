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
 * 蝙蝠精
 * @author
 * @date 2017/11/14
 */
var BianFuJing = (function (_super) {
    __extends(BianFuJing, _super);
    function BianFuJing() {
        return _super.call(this, GameConfig.config.bianfujing) || this;
    }
    return BianFuJing;
}(BaseElement));
__reflect(BianFuJing.prototype, "BianFuJing");
//# sourceMappingURL=BianFuJing.js.map