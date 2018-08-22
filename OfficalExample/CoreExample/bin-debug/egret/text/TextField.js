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
 * 以下示例演示了使用 TextField 显示字体。
 */
var TextFieldExample = (function (_super) {
    __extends(TextFieldExample, _super);
    function TextFieldExample() {
        var _this = _super.call(this) || this;
        //创建 TextField 对象
        var label = new egret.TextField();
        //设置显示背景
        label.background = true;
        //设置背景颜色
        label.backgroundColor = 0xffffff;
        //设置显示边框
        label.border = true;
        //设置边框颜色
        label.borderColor = 0x00ff00;
        //设置字体
        label.fontFamily = "Arial";
        //设置文本颜色
        label.textColor = 0xFF0000;
        //设置字号
        label.size = 30;
        //设置显示文本
        label.text = "Hello Egret";
        //添加到显示列表
        _this.addChild(label);
        return _this;
    }
    return TextFieldExample;
}(egret.DisplayObjectContainer));
__reflect(TextFieldExample.prototype, "TextFieldExample");
