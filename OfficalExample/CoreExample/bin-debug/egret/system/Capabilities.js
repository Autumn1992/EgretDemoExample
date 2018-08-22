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
 * 以下示例演示了获取一些系统基本信息的方法。
 */
var CapabilitiesExample = (function (_super) {
    __extends(CapabilitiesExample, _super);
    function CapabilitiesExample() {
        var _this = _super.call(this) || this;
        var isMobile = egret.Capabilities.isMobile;
        var language = egret.Capabilities.language;
        var os = egret.Capabilities.os;
        var runtimeType = egret.Capabilities.runtimeType;
        var engineVersion = egret.Capabilities.engineVersion;
        var renderMode = egret.Capabilities.renderMode;
        var boundingClientWidth = egret.Capabilities.boundingClientWidth;
        var boundingClientHeight = egret.Capabilities.boundingClientHeight;
        _this.text = new egret.TextField();
        _this.text.x = 50;
        _this.text.y = 100;
        _this.text.text = "IsMobile: " + isMobile + "\n" +
            "Language: " + language + "\n" +
            "OS: " + os + "\n" +
            "RuntimeType: " + runtimeType + "\n" +
            "EngineVersion: " + engineVersion + "\n" +
            "RenderMode: " + renderMode + "\n" +
            "BoundingClientWidth: " + boundingClientWidth + "\n" +
            "BoundingClientHeight: " + boundingClientHeight;
        _this.addChild(_this.text);
        return _this;
    }
    return CapabilitiesExample;
}(egret.DisplayObjectContainer));
__reflect(CapabilitiesExample.prototype, "CapabilitiesExample");
