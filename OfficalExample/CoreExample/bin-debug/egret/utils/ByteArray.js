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
 * 下面的示例使用 ByteArrayExample 类创建新 ByteArray 对象，然后使用 egret.log() 方法输出各种类方法的结果。
 */
var ByteArrayExample = (function (_super) {
    __extends(ByteArrayExample, _super);
    function ByteArrayExample() {
        var _this = _super.call(this) || this;
        var byteArray = new egret.ByteArray();
        byteArray.writeUTF("Hello Egret");
        byteArray.writeBoolean(false);
        byteArray.writeByte(32);
        byteArray.position = 0;
        egret.log(byteArray.readUTF()); //Hello Egret
        egret.log(byteArray.readBoolean()); //false
        egret.log(byteArray.readByte()); //32
        return _this;
    }
    return ByteArrayExample;
}(egret.DisplayObjectContainer));
__reflect(ByteArrayExample.prototype, "ByteArrayExample");
