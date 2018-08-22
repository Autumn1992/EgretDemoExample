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
 * 下面的示例使用 GetResByUrlExample 类展示RES.getResByUrl加载资源。
 */
var GetResByUrlExample = (function (_super) {
    __extends(GetResByUrlExample, _super);
    function GetResByUrlExample() {
        var _this = _super.call(this) || this;
        //加载图片资源
        RES.getResByUrl("resource/assets/egret_icon.png", function (texture) {
            //将加载完的资源进行显示
            this.addChild(new egret.Bitmap(texture));
        }, _this, RES.ResourceItem.TYPE_IMAGE);
        //加载声音资源
        RES.getResByUrl("resource/assets/sound.mp3", function (sound) {
            egret.log("播放加载完的声音资源");
            sound.play(0, 1);
        }, _this, RES.ResourceItem.TYPE_SOUND);
        return _this;
    }
    return GetResByUrlExample;
}(egret.DisplayObjectContainer));
__reflect(GetResByUrlExample.prototype, "GetResByUrlExample");
