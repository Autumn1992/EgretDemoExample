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
var ToggleSwitchExample = (function (_super) {
    __extends(ToggleSwitchExample, _super);
    function ToggleSwitchExample() {
        var _this = _super.call(this) || this;
        var exml = "<e:Group xmlns:e=\"http://ns.egret.com/eui\">\n                <e:ToggleButton x=\"100\" y=\"100\">\n                    <e:Skin states=\"up,down,disabled,upAndSelected,downAndSelected,disabledAndSelected\">\n                        <e:Image source=\"resource/ToggleSwitch/toggle_switch_off.png\" includeIn=\"up,down\"/>\n                        <e:Image source=\"resource/ToggleSwitch/toggle_switch_on.png\" includeIn=\"upAndSelected,downAndSelected\"/>\n                    </e:Skin>\n                </e:ToggleButton>\n            </e:Group>";
        var clazz = EXML.parse(exml);
        var group = new clazz();
        _this.addChild(group);
        return _this;
    }
    return ToggleSwitchExample;
}(egret.Sprite));
__reflect(ToggleSwitchExample.prototype, "ToggleSwitchExample");
