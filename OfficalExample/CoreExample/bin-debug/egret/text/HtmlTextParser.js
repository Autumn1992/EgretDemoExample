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
 * 以下示例演示了使用 HtmlTextParser 显示富文本。
 */
var HtmlTextParserExample = (function (_super) {
    __extends(HtmlTextParserExample, _super);
    function HtmlTextParserExample() {
        var _this = _super.call(this) || this;
        var label = new egret.TextField();
        label.width = 480;
        label.textAlign = egret.HorizontalAlign.CENTER;
        //使用 HtmlTextParser 解析html文本
        label.textFlow = new egret.HtmlTextParser().parser("<font size=12>妈妈再也不用担心我在</font>" +
            "<font color='#336699' size=60 strokecolor='#6699cc' stroke=2>Egret</font>" +
            "<font fontFamily='楷体'>里说一句话不能包含各种</font>" +
            "<font color=0xff0000>五</font>" +
            "<font color=0x00ff00>彩</font>" +
            "<font color=0xf000f0>缤</font>" +
            "<font color=0x00ffff>纷</font>" +
            "<font>、\n</font>" +
            "<font size=36>大</font>" +
            "<font size=6>小</font>" +
            "<font size=16>不</font>" +
            "<font size=24>一</font>" +
            "<font italic='true' color=0x00ff00>格</font>" +
            "<font size=16 color=0xf000f0>式</font>" +
            "<font i='true' color=0xf06f00>各</font>" +
            "<font fontFamily='楷体'><b>样</b></font>" +
            "<font blod='true'>的</font>" +
            "<font><i>文</i></font>" +
            "<font b='true'>字</font>" +
            "<font>了！</font>");
        _this.addChild(label);
        return _this;
    }
    return HtmlTextParserExample;
}(egret.DisplayObjectContainer));
__reflect(HtmlTextParserExample.prototype, "HtmlTextParserExample");
