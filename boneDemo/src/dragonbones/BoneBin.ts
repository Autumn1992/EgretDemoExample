/**
 * 二进制
 */
class BoneBin extends egret.DisplayObjectContainer{
	public armatureDisplay:dragonBones.EgretArmatureDisplay;

	public constructor() {
		super();

		let factory = dragonBones.EgretFactory.factory;
		factory.parseDragonBonesData(RES.getRes("Dragon_ske_dbbin"));
		factory.parseTextureAtlasData(RES.getRes("Dragon_tex2_json"), RES.getRes("Dragon_tex3_png"));
		
		this.armatureDisplay = factory.buildArmatureDisplay("Dragon");
		this.armatureDisplay.animation.play("walk");
		this.armatureDisplay.scaleX = 0.2;
		this.armatureDisplay.scaleY = 0.2;

		this.addChild(this.armatureDisplay);
	}

	public destoryMe(){
		this.parent && this.parent.removeChild(this);
		this.armatureDisplay.animation.reset();
		this.armatureDisplay.dispose();

		let factory = dragonBones.EgretFactory.factory;
		factory.clear(true);
	}
}