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
var DragonbonesExample = (function (_super) {
    __extends(DragonbonesExample, _super);
    function DragonbonesExample() {
        var _this = _super.call(this) || this;
        RES.getResByUrl("resource/assets/armature/skeleton.json", _this.onLoadSkeletonComplete, _this, RES.ResourceItem.TYPE_JSON);
        return _this;
    }
    DragonbonesExample.prototype.onLoadSkeletonComplete = function (data) {
        this.skeletonData = data;
        RES.getResByUrl("resource/assets/armature/texture.json", this.onLoadTextureDataComplete, this, RES.ResourceItem.TYPE_JSON);
    };
    DragonbonesExample.prototype.onLoadTextureDataComplete = function (data) {
        this.textureData = data;
        RES.getResByUrl("resource/assets/armature/texture.png", this.onLoadTextureComplete, this, RES.ResourceItem.TYPE_IMAGE);
    };
    DragonbonesExample.prototype.onLoadTextureComplete = function (data) {
        this.texture = data;
        this.createExample();
    };
    DragonbonesExample.prototype.createExample = function () {
        var factory = dragonBones.EgretFactory.factory;
        factory.parseDragonBonesData(this.skeletonData);
        factory.parseTextureAtlasData(this.textureData, this.texture);
        var armatureDisplay = factory.buildArmatureDisplay("DragonBoy");
        armatureDisplay.animation.play("walk");
        armatureDisplay.x = this.stage.stageWidth * 0.5;
        armatureDisplay.y = this.stage.stageHeight * 0.5 + 100;
        this.addChild(armatureDisplay);
        egret.Ticker.getInstance().register(function (advancedTime) {
            dragonBones.WorldClock.clock.advanceTime(advancedTime / 1000);
        }, this);
    };
    return DragonbonesExample;
}(egret.DisplayObjectContainer));
__reflect(DragonbonesExample.prototype, "DragonbonesExample");
