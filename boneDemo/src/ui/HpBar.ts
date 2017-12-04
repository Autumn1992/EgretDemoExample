/**
 * 血条
 * @author
 * @date 2017/11/14
 */
class HpBar extends eui.Component{
	private bar:eui.Rect;

	public constructor() {
		super();
		this.skinName = "HpBarSkin";
	}

	public childrenCreated(){
		
	}

	//value 百分比
	public setProgress(value:number){
		this.bar.scaleX = value;
	}
}