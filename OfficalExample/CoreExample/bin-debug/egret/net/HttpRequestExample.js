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
 * 下面的示例使用 egret.HttpRequest 类进行网络通信。
 */
var HttpRequestExample = (function (_super) {
    __extends(HttpRequestExample, _super);
    function HttpRequestExample() {
        var _this = _super.call(this) || this;
        _this.sendGetRequest();
        _this.sendPostRequest();
        return _this;
    }
    HttpRequestExample.prototype.sendGetRequest = function () {
        var statusGetLabel = new egret.TextField();
        this.statusGetLabel = statusGetLabel;
        statusGetLabel.size = 18;
        statusGetLabel.text = "GET request being sent to httpbin.org";
        this.addChild(statusGetLabel);
        statusGetLabel.x = 50;
        statusGetLabel.y = 40;
        var request = new egret.HttpRequest();
        request.responseType = egret.HttpResponseType.TEXT;
        request.open("http://httpbin.org/get", egret.HttpMethod.GET);
        request.send();
        request.addEventListener(egret.Event.COMPLETE, this.onGetComplete, this);
        request.addEventListener(egret.IOErrorEvent.IO_ERROR, this.onGetIOError, this);
        request.addEventListener(egret.ProgressEvent.PROGRESS, this.onGetProgress, this);
    };
    HttpRequestExample.prototype.onGetComplete = function (event) {
        var request = event.currentTarget;
        egret.log("get data : ", request.response);
        var responseLabel = new egret.TextField();
        responseLabel.size = 18;
        responseLabel.text = "GET response: \n" + request.response.substring(0, 50) + "...";
        this.addChild(responseLabel);
        responseLabel.x = 50;
        responseLabel.y = 70;
        this.statusGetLabel.text = "Get GET response!";
    };
    HttpRequestExample.prototype.onGetIOError = function (event) {
        egret.log("get error : " + event);
    };
    HttpRequestExample.prototype.onGetProgress = function (event) {
        egret.log("get progress : " + Math.floor(100 * event.bytesLoaded / event.bytesTotal) + "%");
    };
    HttpRequestExample.prototype.sendPostRequest = function () {
        var statusPostLabel = new egret.TextField();
        this.statusPostLabel = statusPostLabel;
        this.addChild(statusPostLabel);
        statusPostLabel.size = 18;
        statusPostLabel.x = 300;
        statusPostLabel.y = 40;
        statusPostLabel.text = "Sending POST request to httpbin.org";
        var request = new egret.HttpRequest();
        request.responseType = egret.HttpResponseType.TEXT;
        request.open("http://httpbin.org/post", egret.HttpMethod.POST);
        request.send();
        request.addEventListener(egret.Event.COMPLETE, this.onPostComplete, this);
        request.addEventListener(egret.IOErrorEvent.IO_ERROR, this.onPostIOError, this);
        request.addEventListener(egret.ProgressEvent.PROGRESS, this.onPostProgress, this);
    };
    HttpRequestExample.prototype.onPostComplete = function (event) {
        var request = event.currentTarget;
        egret.log("post data : ", request.response);
        var responseLabel = new egret.TextField();
        responseLabel.size = 18;
        responseLabel.text = "POST response:\n" + request.response.substring(0, 50) + "...";
        this.addChild(responseLabel);
        responseLabel.x = 300;
        responseLabel.y = 70;
        this.statusPostLabel.text = "Get POST response!";
    };
    HttpRequestExample.prototype.onPostIOError = function (event) {
        egret.log("post error : " + event);
    };
    HttpRequestExample.prototype.onPostProgress = function (event) {
        egret.log("post progress : " + Math.floor(100 * event.bytesLoaded / event.bytesTotal) + "%");
    };
    return HttpRequestExample;
}(egret.DisplayObjectContainer));
__reflect(HttpRequestExample.prototype, "HttpRequestExample");
