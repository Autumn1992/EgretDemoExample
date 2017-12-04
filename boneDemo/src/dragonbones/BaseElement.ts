/**
 * 人物基类
 * @author chenkai 
 * @date 2017/1/19
 */
class BaseElement extends egret.DisplayObjectContainer{
    //============ 基础属性 =================
    public hpMax:number;      //最大生命值
    public hp:number;         //当前生命值
    public ad:number;         //攻击力
    public dp:number;         //防御力
    public adTime:number;     //攻击间隔
    public adRange:number;    //攻击范围
    public moveSpeed:number;  //移动速度

    public adTimeCount:number = 0; //攻击时间计数
    public camp:Camp;              //阵营

    //============ 行为状态 ===================
    public status:Status;

    //============ 血条 ====================
    public hpBar:HpBar;



    //=========== 骨骼动画 =====================
    public armatureDisplay:dragonBones.EgretArmatureDisplay;  //骨骼动画

    //龙骨动作列表
    public action = {
		attack:"attack",
		stand:"stand",
		injured:"injured",
		death:"death",
        Idle:"Idel",
        Skill:"Skill"
	}

    public constructor(config) {
		super();
        //基本属性
        this.hpMax = config.hp;
        this.hp = config.hp;
        this.ad = config.ad;
        this.dp = config.dp;
        this.adTime = config.adTime;

        //骨骼动画
		let factory = dragonBones.EgretFactory.factory;
		this.armatureDisplay = factory.buildArmatureDisplay(config.bones[3]);
        this.addChild(this.armatureDisplay);

        //血条
        // this.hpBar = new HpBar();
        // this.hpBar.x = - this.width/2;
        // this.hpBar.y = -this.height;
        // this.hpBar.width = this.width;
        // this.addChild(this.hpBar);
    }

    //播放动作
    public playAction(action:string, playTimes:number = 1){
		this.armatureDisplay.animation.play(action, playTimes);
	}


    //攻击
    public attack(target:BaseElement){
        //设置状态
        this.status = Status.Attack;
        target.status = Status.Injured;

        //获取当前站立位置、被攻击目标前方位置
        let startX = this.x;
        let startY = this.y;
        let endX = (this.camp == Camp.Player)?(target.x - target.width/2 - this.width/2):(target.x + target.width/2 + this.width/2);
        let endY = target.y;
        
        //移动到目标面前
        egret.Tween.get(this).to({x:endX, y:endY},300).call(()=>{
            //进行攻击动作
            this.playAction(this.action.attack,1);
            //目标受伤
            target.injured(this);
            //攻击完成，返回原来站立位置
            this.armatureDisplay.once(dragonBones.EventObject.LOOP_COMPLETE, ()=>{
                egret.Tween.get(this).to({x:startX, y:startY},300).call(()=>{
                    this.playAction(this.action.stand, 0);
                    this.status = Status.Stand;
                },this);
            },this);
        },this);
        //重置攻击时间
        this.adTimeCount = 0;
    }

    //受伤
    public injured(target:BaseElement){
        //计算伤害，显示伤害数字，更新血条
        this.hp = this.hp - target.ad - this.dp;
        this.hp = this.hp<0?0:this.hp;
        this.hpBar.setProgress(this.hp/this.hpMax);
        let hpLabel:HpText = new HpText();
        hpLabel.show( this.x, this.y - this.height,target.ad);
        

        //死亡
        if(this.hp <= 0){
            this.die();
        //仍存活,播放受伤动画
        }else{
           this.status = Status.Injured;
           this.playAction(this.action.injured);
           this.armatureDisplay.once(dragonBones.EventObject.LOOP_COMPLETE, ()=>{
               this.playAction(this.action.stand, 0);
               this.status = Status.Stand;
           },this);
           
        }
    }

    //死亡
    public die(){
        this.status = Status.Death;
        this.playAction(this.action.death);
        //渐变消失
        this.armatureDisplay.once(dragonBones.EventObject.LOOP_COMPLETE,()=>{
            egret.Tween.get(this).to({alpha:0},1000);
        },this);
    }

    //检查是否能够攻击
    public isCanAttack(){
        this.adTimeCount++;
        if(this.adTimeCount > this.adTime){
            if(this.status == Status.Stand){
                return true;
            }
        }
        return false;
    }

    public destoryMe(){

        this.armatureDisplay && this.armatureDisplay.parent && this.armatureDisplay.parent.removeChild(this.armatureDisplay);
    }
}
