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
 * The following example shows the general use of a Group.
 */
/**
 * @language zh_CN
 * 下面的例子显示了一个 Group 的常规用法。
 */
var GroupExample = (function (_super) {
    __extends(GroupExample, _super);
    function GroupExample() {
        var _this = _super.call(this) || this;
        var exml = "<e:Group xmlns:e=\"http://ns.egret.com/eui\">\n                <e:layout>\n                 <e:HorizontalLayout gap=\"20\"/>\n                </e:layout>\n                <e:Group>\n                    <e:layout>\n                        <e:VerticalLayout gap=\"20\"/>\n                    </e:layout>\n                    <e:Label text=\"BeiJIng\" textColor=\"0xFFFFFF\"/>\n                    <e:Label text=\"sunny\" textColor=\"0xFFFFCC\"/>\n                    <e:Image source=\"resource/sunny.png\"/>\n                </e:Group>\n                <e:Group>\n                    <e:layout>\n                        <e:VerticalLayout gap=\"20\"/>\n                    </e:layout>\n                    <e:Label text=\"ShangHai\" textColor=\"0xFFFFFF\"/>\n                    <e:Label text=\"cloudy\" textColor=\"0xFFFFCC\"/>\n                    <e:Image source=\"resource/cloudy.png\"/>\n                </e:Group>\n            </e:Group>";
        var clazz = EXML.parse(exml);
        var group = new clazz();
        _this.addChild(group);
        return _this;
    }
    return GroupExample;
}(egret.Sprite));
__reflect(GroupExample.prototype, "GroupExample");
