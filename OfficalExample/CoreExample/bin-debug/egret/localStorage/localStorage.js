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
 * 以下示例演示了 Egret 存储数据的过程。
 */
var localStorageExample = (function (_super) {
    __extends(localStorageExample, _super);
    function localStorageExample() {
        var _this = _super.call(this) || this;
        egret.localStorage.setItem("testKey", "testValue");
        egret.log(egret.localStorage.getItem("testKey")); //testValue
        egret.localStorage.removeItem("testKey");
        egret.log(egret.localStorage.getItem("testKey")); //null
        egret.localStorage.setItem("testKey", "testValue");
        egret.localStorage.clear();
        egret.log(egret.localStorage.getItem("testKey")); //null
        egret.localStorage.setItem("testKey", "testValue");
        egret.localStorage.setItem("testKey", "testValue2");
        egret.log(egret.localStorage.getItem("testKey")); //testValue2
        return _this;
    }
    return localStorageExample;
}(egret.DisplayObjectContainer));
__reflect(localStorageExample.prototype, "localStorageExample");
