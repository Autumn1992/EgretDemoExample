/**
 * 主页场景
 * @author chenkai
 * @since 2017/4/20
 */
class HomeScene extends eui.Component{
	private shakeTool:ShakeTool;
	private label0:eui.Label;
	private label1:eui.Label;
	private label2:eui.Label;
	private label3:eui.Label;

	public constructor() {
		super();
		this.skinName = "HomeSceneSkin";
	}

	public childrenCreated(){
		this.shakeTest();
	}

	private shakeTest(){
		this.shakeTool = new ShakeTool();
		this.shakeTool.addEventListener(egret.Event.CHANGE, this.onChange,this);
		this.shakeTool.start();
	}

	private onChange(e:egret.Event){
		var data = e.data;
		//用户大概晃动了手机2-3次
		if(data.shakeCount > 6){
			egret.log("摇一摇完成");
			this.shakeTool.stop();
		}
	}
}