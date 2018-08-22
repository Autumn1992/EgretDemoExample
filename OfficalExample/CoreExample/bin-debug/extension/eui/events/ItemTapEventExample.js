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
 * The following example uses the class ItemTapEventExample to show the represents events that are emitted when a item has been touched
 */
/**
 * @language zh_CN
 * 以下示例使用 ItemTapEventExample 类来演示列表项触碰事件
 */
var ItemTapEventExample = (function (_super) {
    __extends(ItemTapEventExample, _super);
    function ItemTapEventExample() {
        var _this = _super.call(this) || this;
        var list = new eui.List();
        var arr = new eui.ArrayCollection(["a1", "a2", "a3", "a4", "a5", "a6"]);
        list.dataProvider = arr;
        list.itemRenderer = IR_ItemTapEvent;
        _this.addChild(list);
        list.addEventListener(eui.ItemTapEvent.ITEM_TAP, _this.onItemTapHandler, _this);
        return _this;
    }
    ItemTapEventExample.prototype.onItemTapHandler = function (e) {
        egret.log(e.item);
        egret.log(e.itemRenderer);
        egret.log(e.itemIndex);
    };
    return ItemTapEventExample;
}(egret.Sprite));
__reflect(ItemTapEventExample.prototype, "ItemTapEventExample");
var IR_ItemTapEvent = (function (_super) {
    __extends(IR_ItemTapEvent, _super);
    function IR_ItemTapEvent() {
        var _this = _super.call(this) || this;
        _this.label = new eui.Label();
        _this.addChild(_this.label);
        return _this;
    }
    IR_ItemTapEvent.prototype.dataChanged = function () {
        this.label.text = "label:" + this.data.toString();
    };
    return IR_ItemTapEvent;
}(eui.ItemRenderer));
__reflect(IR_ItemTapEvent.prototype, "IR_ItemTapEvent");
