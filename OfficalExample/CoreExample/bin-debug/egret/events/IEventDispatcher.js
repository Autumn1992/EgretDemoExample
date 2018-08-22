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
 * 以下示例类来说明如何实现和使用 IEventDispatcher 类。
 * 本示例通过以与 EventDispatcher 相同的方式实现 MyEventDispatcher 的每个方法来完成此任务。
 */
var IEventDispatcherExample = (function (_super) {
    __extends(IEventDispatcherExample, _super);
    function IEventDispatcherExample() {
        var _this = _super.call(this) || this;
        var key = "doSomething";
        var decorDispatcher = new MyEventDispatcher();
        decorDispatcher.addEventListener(key, _this.onEvent, _this);
        decorDispatcher.dispatchEvent(new egret.Event(key));
        return _this;
    }
    IEventDispatcherExample.prototype.onEvent = function (event) {
        egret.log("doSomething");
    };
    return IEventDispatcherExample;
}(egret.DisplayObjectContainer));
__reflect(IEventDispatcherExample.prototype, "IEventDispatcherExample");
var MyEventDispatcher = (function (_super) {
    __extends(MyEventDispatcher, _super);
    function MyEventDispatcher() {
        var _this = _super.call(this) || this;
        _this.dispatcher = new egret.EventDispatcher(_this);
        return _this;
    }
    MyEventDispatcher.prototype.once = function (type, listener, thisObject, useCapture, priority) {
        this.dispatcher.once(type, listener, thisObject, useCapture, priority);
    };
    MyEventDispatcher.prototype.addEventListener = function (type, listener, thisObject, useCapture, priority) {
        if (useCapture === void 0) { useCapture = false; }
        if (priority === void 0) { priority = 0; }
        this.dispatcher.addEventListener(type, listener, thisObject, useCapture, priority);
    };
    MyEventDispatcher.prototype.dispatchEvent = function (evt) {
        return this.dispatcher.dispatchEvent(evt);
    };
    MyEventDispatcher.prototype.hasEventListener = function (type) {
        return this.dispatcher.hasEventListener(type);
    };
    MyEventDispatcher.prototype.removeEventListener = function (type, listener, useCapture) {
        if (useCapture === void 0) { useCapture = false; }
        this.dispatcher.removeEventListener(type, listener, useCapture);
    };
    MyEventDispatcher.prototype.willTrigger = function (type) {
        return this.dispatcher.willTrigger(type);
    };
    return MyEventDispatcher;
}(egret.HashObject));
__reflect(MyEventDispatcher.prototype, "MyEventDispatcher", ["egret.IEventDispatcher"]);
