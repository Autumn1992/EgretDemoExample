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
 * 以下示例演示了通过 URLVariables 向服务器发送数据。
 */
var URLVariablesExample = (function (_super) {
    __extends(URLVariablesExample, _super);
    function URLVariablesExample() {
        var _this = _super.call(this) || this;
        _this.sendPostRequest();
        return _this;
    }
    URLVariablesExample.prototype.sendPostRequest = function () {
        var statusPostLabel = new egret.TextField();
        this.addChild(statusPostLabel);
        statusPostLabel.x = 50;
        statusPostLabel.y = 40;
        statusPostLabel.text = "正在向httpbin.org发送POST请求";
        var url = "http://httpbin.org/post";
        var loader = new egret.URLLoader();
        loader.dataFormat = egret.URLLoaderDataFormat.TEXT;
        loader.addEventListener(egret.Event.COMPLETE, onPostComplete, this);
        var request = new egret.URLRequest(url);
        request.method = egret.URLRequestMethod.POST;
        request.data = new egret.URLVariables("test=ok");
        loader.load(request);
        function onPostComplete(event) {
            var loader = event.target;
            var data = loader.data;
            var responseLabel = new egret.TextField();
            responseLabel.text = "POST响应:  \n" + data.toString().substring(0, 50) + "...";
            this.addChild(responseLabel);
            responseLabel.x = 100;
            responseLabel.y = 230;
            statusPostLabel.text = "获得POST响应! ";
        }
    };
    return URLVariablesExample;
}(egret.DisplayObjectContainer));
__reflect(URLVariablesExample.prototype, "URLVariablesExample");
