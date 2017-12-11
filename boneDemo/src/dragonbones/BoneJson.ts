/**
 * Json格式骨骼
 */
class BoneJson extends egret.DisplayObjectContainer{
	public armatureDisplay:dragonBones.EgretArmatureDisplay;

	public constructor() {
		super();
		let factory = dragonBones.EgretFactory.factory;
		let dragonbonesData = RES.getRes("Dragon_ske_json");
		let textureData = RES.getRes("Dragon_tex_json");
		let texture = RES.getRes("Dragon_tex_png");
		factory.parseDragonBonesData(dragonbonesData);
		factory.parseTextureAtlasData(textureData, texture);


		this.armatureDisplay = factory.buildArmatureDisplay("Dragon");
		this.armatureDisplay.animation.play("walk", 0);
		this.armatureDisplay.scaleX = 0.2;
		this.armatureDisplay.scaleY = 0.2;
        this.addChild(this.armatureDisplay);
	}

	public destoryMe(){
		this.armatureDisplay.animation.stop();
		this.armatureDisplay.animation.reset();
		this.armatureDisplay.dispose();
		this.armatureDisplay = null;
		this.parent && this.parent.removeChild(this);
	}
}