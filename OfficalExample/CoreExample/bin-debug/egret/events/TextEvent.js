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
 * 以下示例加载一个 MP3 文件，进行播放，并输出播放该 MP3 文件时所发生的声音事件的相关信息。
 */
var TextEventExample = (function (_super) {
    __extends(TextEventExample, _super);
    function TextEventExample() {
        var _this = _super.call(this) || this;
        var linkTxt = new egret.TextField();
        linkTxt.addEventListener(egret.TextEvent.LINK, _this.onLink, _this);
        linkTxt.touchEnabled = true;
        var htmlText = _this.createLink("eventText", "Click for link event");
        linkTxt.textFlow = new egret.HtmlTextParser().parser(htmlText);
        _this.addChild(linkTxt);
        return _this;
    }
    TextEventExample.prototype.createLink = function (eventText, text) {
        var link = "";
        link += "<font color='#FF0000'>";
        link += "<a href='event:" + eventText + "'>" + text + "</a>";
        link += "</font>";
        return link;
    };
    TextEventExample.prototype.onLink = function (event) {
        egret.log("onLink, event.text : " + event.text);
    };
    return TextEventExample;
}(egret.DisplayObjectContainer));
__reflect(TextEventExample.prototype, "TextEventExample");
