var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * 人物基类
 * @author chenkai
 * @date 2017/1/19
 */
var BaseElement = (function (_super) {
    __extends(BaseElement, _super);
    function BaseElement(config) {
        var _this = _super.call(this) || this;
        _this.adTimeCount = 0; //攻击时间计数
        //龙骨动作列表
        _this.action = {
            attack: "attack",
            stand: "stand",
            injured: "injured",
            death: "death",
            Idle: "Idel",
            Skill: "Skill"
        };
        //基本属性
        _this.hpMax = config.hp;
        _this.hp = config.hp;
        _this.ad = config.ad;
        _this.dp = config.dp;
        _this.adTime = config.adTime;
        //骨骼动画
        var factory = dragonBones.EgretFactory.factory;
        _this.armatureDisplay = factory.buildArmatureDisplay(config.bones[3]);
        _this.addChild(_this.armatureDisplay);
        return _this;
        //血条
        // this.hpBar = new HpBar();
        // this.hpBar.x = - this.width/2;
        // this.hpBar.y = -this.height;
        // this.hpBar.width = this.width;
        // this.addChild(this.hpBar);
    }
    //播放动作
    BaseElement.prototype.playAction = function (action, playTimes) {
        if (playTimes === void 0) { playTimes = 1; }
        this.armatureDisplay.animation.play(action, playTimes);
    };
    //攻击
    BaseElement.prototype.attack = function (target) {
        var _this = this;
        //设置状态
        this.status = Status.Attack;
        target.status = Status.Injured;
        //获取当前站立位置、被攻击目标前方位置
        var startX = this.x;
        var startY = this.y;
        var endX = (this.camp == Camp.Player) ? (target.x - target.width / 2 - this.width / 2) : (target.x + target.width / 2 + this.width / 2);
        var endY = target.y;
        //移动到目标面前
        egret.Tween.get(this).to({ x: endX, y: endY }, 300).call(function () {
            //进行攻击动作
            _this.playAction(_this.action.attack, 1);
            //目标受伤
            target.injured(_this);
            //攻击完成，返回原来站立位置
            _this.armatureDisplay.once(dragonBones.EventObject.LOOP_COMPLETE, function () {
                egret.Tween.get(_this).to({ x: startX, y: startY }, 300).call(function () {
                    _this.playAction(_this.action.stand, 0);
                    _this.status = Status.Stand;
                }, _this);
            }, _this);
        }, this);
        //重置攻击时间
        this.adTimeCount = 0;
    };
    //受伤
    BaseElement.prototype.injured = function (target) {
        var _this = this;
        //计算伤害，显示伤害数字，更新血条
        this.hp = this.hp - target.ad - this.dp;
        this.hp = this.hp < 0 ? 0 : this.hp;
        this.hpBar.setProgress(this.hp / this.hpMax);
        var hpLabel = new HpText();
        hpLabel.show(this.x, this.y - this.height, target.ad);
        //死亡
        if (this.hp <= 0) {
            this.die();
            //仍存活,播放受伤动画
        }
        else {
            this.status = Status.Injured;
            this.playAction(this.action.injured);
            this.armatureDisplay.once(dragonBones.EventObject.LOOP_COMPLETE, function () {
                _this.playAction(_this.action.stand, 0);
                _this.status = Status.Stand;
            }, this);
        }
    };
    //死亡
    BaseElement.prototype.die = function () {
        var _this = this;
        this.status = Status.Death;
        this.playAction(this.action.death);
        //渐变消失
        this.armatureDisplay.once(dragonBones.EventObject.LOOP_COMPLETE, function () {
            egret.Tween.get(_this).to({ alpha: 0 }, 1000);
        }, this);
    };
    //检查是否能够攻击
    BaseElement.prototype.isCanAttack = function () {
        this.adTimeCount++;
        if (this.adTimeCount > this.adTime) {
            if (this.status == Status.Stand) {
                return true;
            }
        }
        return false;
    };
    BaseElement.prototype.destoryMe = function () {
        this.armatureDisplay && this.armatureDisplay.parent && this.armatureDisplay.parent.removeChild(this.armatureDisplay);
    };
    return BaseElement;
}(egret.DisplayObjectContainer));
__reflect(BaseElement.prototype, "BaseElement");
//# sourceMappingURL=BaseElement.js.map