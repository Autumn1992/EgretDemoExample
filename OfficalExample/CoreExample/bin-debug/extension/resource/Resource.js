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
 * 下面的示例使用 ResourceExample 类展示使用RES模块加载资源过程。
 */
var ResourceExample = (function (_super) {
    __extends(ResourceExample, _super);
    function ResourceExample() {
        var _this = _super.call(this) || this;
        _this.text = "TestResource";
        _this.initStateText();
        //添加资源配置加载完成事件
        RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE, _this.onConfigComplete, _this);
        //加载配置
        _this.trace("开始加载配置文件");
        RES.loadConfig("resource/resource.json", "resource/assets/");
        return _this;
    }
    /**
     * 配置文件加载完成,开始预加载preload资源组。
     */
    ResourceExample.prototype.onConfigComplete = function (event) {
        this.trace("配置文件加载成功");
        RES.removeEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        //添加资源组加载完成事件
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
        //添加资源组加载失败事件
        RES.addEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this);
        //添加资源加载失败事件
        RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, this.onResourceItemLoadError, this);
        //添加资源组加载进度事件
        RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
        //开始加载 preload 资源组
        this.trace("开始加载preload组");
        RES.loadGroup("preload");
    };
    /**
     * preload资源组加载完成
     */
    ResourceExample.prototype.onResourceLoadComplete = function (event) {
        if (event.groupName == "preload") {
            RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
            RES.removeEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this);
            RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
            this.trace("preload组加载完成");
            this.trace("开始加载一个不存在的资源");
            RES.getResAsync("nothing", function () { }, this);
        }
    };
    /**
     * preload资源组加载进度
     * Loading process of preload resource group
     */
    ResourceExample.prototype.onResourceProgress = function (event) {
        if (event.groupName == "preload") {
            this.trace("preload资源加载进度 : " + event.itemsLoaded + " / " + event.itemsTotal);
        }
    };
    /**
     * 资源组加载出错
     */
    ResourceExample.prototype.onResourceLoadError = function (event) {
        this.trace("preload组加载失败");
        //忽略加载失败的项目
        this.onResourceLoadComplete(event);
    };
    /**
     * 资源加载出错
     */
    ResourceExample.prototype.onResourceItemLoadError = function (event) {
        this.trace("项目加载失败,url : " + event.resItem.url);
    };
    ResourceExample.prototype.initStateText = function () {
        this.stateText = new egret.TextField();
        this.stateText.size = 22;
        this.stateText.text = this.text;
        this.stateText.width = 480;
        this.addChild(this.stateText);
    };
    ResourceExample.prototype.trace = function (msg) {
        this.text = this.text + "\n" + msg;
        this.stateText.text = this.text;
        egret.log(msg);
    };
    return ResourceExample;
}(egret.DisplayObjectContainer));
__reflect(ResourceExample.prototype, "ResourceExample");
