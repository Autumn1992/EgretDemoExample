/**
 * 测试
 * @author
 * @date 2017/11/14
 */
class HomeScene extends eui.Component{
	private playerList = Array<BaseElement>();
	private enemyList = Array<BaseElement>();

	private bone1:eui.Button;
	private bone10:eui.Button;
	private bone100:eui.Button;
	private clearBone:eui.Button;
	private boneList = [];
	private boneLabel:eui.Label;
	private boneGroup:eui.Group;

	private mc1:eui.Button;
	private mc10:eui.Button;
	private mc100:eui.Button;
	private clearMC:eui.Button;
	private mcList = [];
	private mcLabel:eui.Label;

	private fast0:eui.Button;
	private fast10:eui.Button;
	private fast100:eui.Button;
	private fastLabel:eui.Label;
	private clearFast:eui.Button;
	private fastList = [];

	public constructor() {
		super();
		this.skinName = "HomeSceneSkin";
		this.percentWidth = 100;
		this.percentHeight = 100;
	}

	public childrenCreated(){
		GameConfig.stage = this.stage;
		this.initDragonBones();

		this.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
		this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.boneTouch, this);
	}

	private onEnterFrame(){
		this.sortChildIndex();
		this.updatePlayerAction();
		this.updateEnemyAction();
	}	

	//创建骨骼
	private boneTouch(e:egret.TouchEvent){
		switch(e.target){
			case this.bone1:
				this.createBone(1);
			break;
			case this.bone10:	
				this.createBone(10);
			break;
			case this.clearBone:
				this.clearBones();
			break;
			case this.mc1:
				this.createMC(1);
			break;
			case this.mc10:
				this.createMC(10);
			break;
			case this.clearMC:
				this.clearMCs();
			break;
			case this.bone100:
				this.createBone(100);
			break;
			case this.mc100:
				this.createMC(100);
			break;
			case this.fast0:
				this.createFast(1);
			break;
			case this.fast10:
				this.createFast(10);
			break;
			case this.fast100:
				this.createFast(100);
			break;
			case this.clearFast:
				this.clearFasts();
			break;
		}
	}

	//创建一个骨骼
	private createBone(num:number){
		for(let i=0;i<num;i++){
			let db:TestDB = new TestDB();
			db.x = 200 + Math.random()*800;
			db.y = 300 + Math.random()*200;
			db.playAction(db.action.Skill, -1);
			this.boneGroup.addChild(db);
			this.boneList.push(db);
		}
		this.boneLabel.text =  "骨骼数量:" + this.boneList.length;
	}

	//清理骨骼
	private clearBones(){
		let len = this.boneList.length;
		for(let i=0;i<len;i++){
			let bone:TestDB = this.boneList[i];
			bone.armatureDisplay.animation.stop();
			bone.armatureDisplay.animation.reset();
			bone.armatureDisplay.dispose();
			bone.parent && bone.parent.removeChild(bone);
		}
		this.boneList.length = 0;
		this.boneLabel.text =  "骨骼数量:" + this.boneList.length;

		dragonBones.EgretFactory.factory.clear(true);
	}

	//创建一个MC
	private createMC(num:number){
		for(let i=0;i<num;i++){
			let mc:TestMC = new TestMC();
			mc.x = Math.random()*1000;
			mc.y = 150 + Math.random()*200;
			mc.play(-1);
			this.boneGroup.addChild(mc);
			this.mcList.push(mc);
		}
		this.mcLabel.text =  "动画数量:" + this.mcList.length;
	}

	//清理动画
	private clearMCs(){
		let len = this.mcList.length;
		for(let i=0;i<len;i++){
			let mc:TestMC = this.mcList[i];
			mc.stop();
			mc.parent && mc.parent.removeChild(mc);
		}
		this.mcList.length = 0;
		this.mcLabel.text =  "动画数量:" + this.mcList.length;
	}

	//创建极速骨骼
	private createFast(num:number){
		for(let i=0;i<num;i++){
			dragonBones.addMovieGroup(RES.getRes("movie"), RES.getRes("DragonBoy_texture_1_png")); // 添加动画数据和贴图
			var movie:dragonBones.Movie = dragonBones.buildMovie("DragonBoy"); // 创建 白鹭极速格式 的动画
			movie.play("walk"); // 播放动画
			movie.x = 100 + Math.random()*1000;
			movie.y = 300 + Math.random()*300;
			this.boneGroup.addChild(movie); // 添加 Movie 到显示列表
			this.fastList.push(movie);
		}
		this.fastLabel.text = "极速数量:" + this.fastList.length;
	}

	//清理极速
	private clearFasts(){
		let len = this.fastList.length;
		for(let i=0;i<len;i++){
			let fast:any = this.fastList[i];
			fast.stop();
			fast.parent && fast.parent.removeChild(fast);
		}
		this.fastList.length = 0;
		this.fastLabel.text =  "动画数量:" + this.fastList.length;
	}


	//初始化龙骨，将龙骨的配置文件写入工厂
	private initDragonBones(){
		let factory = dragonBones.EgretFactory.factory;
		let config = GameConfig.config;
		for(let key in config){
			let obj = config[key];
			let dragonbonesData = RES.getRes(obj.bones[0]);
			let textureData = RES.getRes(obj.bones[1]);
			let texture = RES.getRes(obj.bones[2]);
			factory.parseDragonBonesData(dragonbonesData);  
			factory.parseTextureAtlasData(textureData, texture);
		}
	}

	//创建我方角色
	private createPlayer(xPos:number, yPos:number){
		let daji = new DaJi();
		daji.playAction(daji.action.stand, 0);
		daji.status = Status.Stand;
		daji.camp = Camp.Player;
		daji.x = xPos;
		daji.y = yPos;
		this.addChild(daji);
		this.playerList.push(daji);
	}

	//创建敌方角色
	private createEnemy(xPos:number, yPos:number){
		if(Math.random() > 0.5){
			let bianfujing = new BianFuJing();
			bianfujing.playAction(bianfujing.action.stand, 0);
			bianfujing.status = Status.Stand;
			bianfujing.camp = Camp.Enemy;
			bianfujing.scaleX = -1;
			bianfujing.x = xPos;
			bianfujing.y = yPos;
			this.addChild(bianfujing);
			this.enemyList.push(bianfujing);
		}else{
			let bingyao = new BingYao();
			bingyao.playAction(bingyao.action.stand, 0);
			bingyao.status = Status.Stand;
			bingyao.camp = Camp.Enemy;
			bingyao.scaleX = -1;
			bingyao.x = xPos;
			bingyao.y = yPos;
			this.addChild(bingyao);
			this.enemyList.push(bingyao);
		}
	}



	//我方人员行动
	private updatePlayerAction(){
		let player:BaseElement;
		let len = this.playerList.length;
		for(let i=len-1;i>=0;i--){
			player = this.playerList[i];
			//已死亡，则移除
			if(player.status == Status.Death){
				this.playerList.splice(i,1);
			//未死亡，继续战斗
			}else if(player.isCanAttack()){
				let enemy = this.getAttackEnemey();
				if(enemy){
					player.attack(enemy);
				}
			}
		}
	}

	//敌方人员行动
	private updateEnemyAction(){
		let element:BaseElement;
		let len = this.enemyList.length;
		for(let i=len-1;i>=0;i--){
			element = this.enemyList[i];
			//已死亡，则从列表中移除
			if(element.status == Status.Death){
				this.enemyList.splice(i,1);
			//未死亡，继续战斗
			}else if(element.isCanAttack()){
				let player = this.getAttackPlayer();
				if(player){
					element.attack(player);
				}
			}
		}
	}

	//获取我方被攻击对象
	private getAttackPlayer(){
		let player:BaseElement;
		let len = this.playerList.length;

		//获取站立或受伤的
		// for(let index in this.playerList){
		// 	player = this.playerList[index];
		// 	if(player.status == Status.Stand || player.status == Status.Injured){
		// 		return player;
		// 	}
		// }

		//随机获取
		if(len > 0){
			player = this.playerList[this.getRandInt(0,len-1)];
			if(player.status == Status.Stand || player.status == Status.Injured){
				return player;
			}
		}	
		
		return null;
	}

	//获取敌方被攻击对象
	private getAttackEnemey(){
		let enemy:BaseElement;
		let len = this.enemyList.length;

		//获取站立或受伤的
		// for(let index in this.enemyList){
		// 	enemy = this.enemyList[index];
		// 	if(enemy.status == Status.Stand || enemy.status == Status.Injured){
		// 		return enemy;
		// 	}
		// }

		//随机获取
		if(len > 0){
			enemy = this.enemyList[this.getRandInt(0,len-1)];
			if(enemy.status == Status.Stand || enemy.status == Status.Injured){
				return enemy;
			}
		}
	
		return null;
	}

	//深度排序
	private sortChildIndex(){
		let arr = [];
		arr = arr.concat(this.playerList);
		arr = arr.concat(this.enemyList);
		let len = arr.length;
		let temp;
		for(let i=0;i<len;i++){
			for(let j=i+1;j<len;j++){
				if(arr[i].y > arr[j].y){
					temp = arr[i];
					arr[i] = arr[j];
					arr[j] = temp;
				}
			}
		}
		for(let i=0;i<len;i++){
			this.addChild(arr[i]);
		}
	}

	public getRandInt(start: number,end: number) {
        return start + Math.round(Math.random() * (end - start));
    }


}

