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
 * 以下示例演示了 Egret 和 Java 发送数据的过程。
 */
var ExternalInterfaceExample = (function (_super) {
    __extends(ExternalInterfaceExample, _super);
    function ExternalInterfaceExample() {
        var _this = _super.call(this) || this;
        egret.ExternalInterface.addCallback("sendToJS", function (message) {
            egret.log("message form native : " + message); //message form native : message from native
        });
        egret.ExternalInterface.call("sendToAndroid", "message from js");
        return _this;
        //对应的Java代码：
        //IGameExternalInterface externalInterface = gameEngine.game_engine_get_externalInterface();
        //externalInterface.run();
        //externalInterface.addCallBack("sendToAndroid", new IGameExternalInterfaceCallBack(){
        //public void callBack(String str){
        //        Log.i("externalInterface", "message form js : " + str);
        //        IGameExternalInterface externalInterface = gameEngine.game_engine_get_externalInterface();
        //        externalInterface.call("sendToJS", "message from native");
        //    }
        //});
    }
    return ExternalInterfaceExample;
}(egret.DisplayObjectContainer));
__reflect(ExternalInterfaceExample.prototype, "ExternalInterfaceExample");
