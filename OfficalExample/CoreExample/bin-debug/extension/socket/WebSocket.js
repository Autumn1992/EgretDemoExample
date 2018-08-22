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
 * 下面的示例使用 WebSocketExample 类创建新 WebSocket 对象，然后与服务器通讯。
 */
var WebSocketExample = (function (_super) {
    __extends(WebSocketExample, _super);
    function WebSocketExample() {
        var _this = _super.call(this) || this;
        _this.text = "TestWebSocket";
        _this.initStateText();
        _this.initWebSocket();
        return _this;
    }
    WebSocketExample.prototype.initStateText = function () {
        this.stateText = new egret.TextField();
        this.stateText.size = 22;
        this.stateText.text = this.text;
        this.stateText.width = 480;
        this.addChild(this.stateText);
    };
    WebSocketExample.prototype.initWebSocket = function () {
        //创建 WebSocket 对象
        this.socket = new egret.WebSocket();
        //设置数据格式为二进制，默认为字符串
        this.socket.type = egret.WebSocket.TYPE_BINARY;
        //添加收到数据侦听，收到数据会调用此方法
        this.socket.addEventListener(egret.ProgressEvent.SOCKET_DATA, this.onReceiveMessage, this);
        //添加链接打开侦听，连接成功会调用此方法
        this.socket.addEventListener(egret.Event.CONNECT, this.onSocketOpen, this);
        //添加链接关闭侦听，手动关闭或者服务器关闭连接会调用此方法
        this.socket.addEventListener(egret.Event.CLOSE, this.onSocketClose, this);
        //添加异常侦听，出现异常会调用此方法
        this.socket.addEventListener(egret.IOErrorEvent.IO_ERROR, this.onSocketError, this);
        //连接服务器
        this.socket.connect("echo.websocket.org", 80);
    };
    WebSocketExample.prototype.sendData = function () {
        //创建 ByteArray 对象
        var byte = new egret.ByteArray();
        //写入字符串信息
        byte.writeUTF("Hello Egret WebSocket");
        //写入布尔值信息
        byte.writeBoolean(false);
        //写入int值信息
        byte.writeInt(123);
        byte.position = 0;
        //发送数据
        this.socket.writeBytes(byte, 0, byte.bytesAvailable);
    };
    WebSocketExample.prototype.onSocketOpen = function () {
        this.trace("WebSocketOpen");
        this.sendData();
    };
    WebSocketExample.prototype.onSocketClose = function () {
        this.trace("WebSocketClose");
    };
    WebSocketExample.prototype.onSocketError = function () {
        this.trace("WebSocketError");
    };
    WebSocketExample.prototype.onReceiveMessage = function (e) {
        //创建 ByteArray 对象
        var byte = new egret.ByteArray();
        //读取数据
        this.socket.readBytes(byte);
        //读取字符串信息
        var msg = byte.readUTF();
        //读取布尔值信息
        var boo = byte.readBoolean();
        //读取int值信息
        var num = byte.readInt();
        this.trace("收到数据:");
        this.trace("readUTF : " + msg);
        this.trace("readBoolean : " + boo.toString());
        this.trace("readInt : " + num.toString());
    };
    WebSocketExample.prototype.trace = function (msg) {
        this.text = this.text + "\n" + msg;
        this.stateText.text = this.text;
        egret.log(msg);
    };
    return WebSocketExample;
}(egret.DisplayObjectContainer));
__reflect(WebSocketExample.prototype, "WebSocketExample");
