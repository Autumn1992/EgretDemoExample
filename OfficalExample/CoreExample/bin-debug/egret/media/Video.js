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
 * 以下示例加载一个视频文件，进行播放，并以两种方式演示视频的控制。
 */
var VideoExample = (function (_super) {
    __extends(VideoExample, _super);
    function VideoExample() {
        var _this = _super.call(this) || this;
        [0, 1].forEach(function (i) {
            var video = new egret.Video();
            video.x = 50;
            video.y = i * 280 + 20;
            video.width = 427;
            video.height = 240;
            video.fullscreen = i == 0;
            egret.log(video.fullscreen, i == 0);
            video.poster = video.fullscreen ? "resource/posterfullscreen.jpg" : "resource/posterinline.jpg";
            video.touchEnabled = true;
            video.once(egret.TouchEvent.TOUCH_TAP, _this.playVideo, _this);
            video.load("resource/video/trailer.mp4");
            _this.addChild(video);
            var text = new egret.TextField();
            text.text = "Loading";
            text.x = 50;
            text.y = (i + 1) * 280 - 20;
            video.addEventListener(egret.Event.COMPLETE, function (e) { return text.text = "Loaded, click video to play"; }, _this);
            _this.addChild(text);
        });
        return _this;
    }
    VideoExample.prototype.playVideo = function (e) {
        egret.log(this);
        var video = e.target;
        video.play();
        video.once(egret.TouchEvent.TOUCH_TAP, this.stopVideo, this);
        video.once(egret.Event.ENDED, this.stopVideo, this);
    };
    VideoExample.prototype.stopVideo = function (e) {
        var video = e.target;
        video.removeEventListener(egret.Event.ENDED, this.stopVideo, this);
        video.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.stopVideo, this);
        video.pause();
        video.once(egret.TouchEvent.TOUCH_TAP, this.playVideo, this);
    };
    return VideoExample;
}(egret.DisplayObjectContainer));
__reflect(VideoExample.prototype, "VideoExample");
