/**
 * 掉血文字
 * @author 
 * @date 2017/11/14
 */
class HpText extends eui.Component{
	private hpLabel:eui.Label;

	public constructor() {
		super();
		this.skinName = "HpTextSkin";
	}

	public show(xPos:number, yPos:number, value:number, ){
		this.hpLabel.text = value + "";
		this.x = xPos;
		this.y = yPos;
		GameConfig.stage.addChild(this);
		egret.Tween.get(this).to({y:this.y - 100},500).call(()=>{
			this.parent && this.parent.removeChild(this);
		},this);
	}
}