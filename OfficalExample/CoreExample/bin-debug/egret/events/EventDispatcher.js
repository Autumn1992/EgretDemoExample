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
 * 以下示例使用 EventDispatcherExample 和 CustomDispatcher 类（EventDispatcher 的子类）来说明如何创建和调度自定义事件。该示例执行下列任务：
 * 1.在构造函数创建一个局部变量 dispatcher，并将其赋给新的 CustomDispatcher 实例。
 * 2.在 CustomDispatcher 内，设置一个字符串以便事件具有名称 action，并且声明 doAction() 方法。当调用此方法时，此方法将使用 EventDispatcher.dispatchEventWith() 调度该事件。
 * 3.然后使用 dispatcher 属性添加 action 事件侦听器和关联的订阅者方法 actionHandler()，这样在调度事件时可以只输出有关该事件的信息。
 * 4.调用 doAction() 方法，从而调度 action 事件。
 */
var EventDispatcherExample = (function (_super) {
    __extends(EventDispatcherExample, _super);
    function EventDispatcherExample() {
        var _this = _super.call(this) || this;
        var dispatcher = new CustomDispatcher();
        dispatcher.addEventListener(CustomDispatcher.ACTION, _this.onAction, _this);
        dispatcher.doAction();
        return _this;
    }
    EventDispatcherExample.prototype.onAction = function (event) {
        egret.log("onAction");
    };
    return EventDispatcherExample;
}(egret.DisplayObjectContainer));
__reflect(EventDispatcherExample.prototype, "EventDispatcherExample");
var CustomDispatcher = (function (_super) {
    __extends(CustomDispatcher, _super);
    function CustomDispatcher() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CustomDispatcher.prototype.doAction = function () {
        this.dispatchEventWith(CustomDispatcher.ACTION);
    };
    CustomDispatcher.ACTION = "action";
    return CustomDispatcher;
}(egret.EventDispatcher));
__reflect(CustomDispatcher.prototype, "CustomDispatcher");
