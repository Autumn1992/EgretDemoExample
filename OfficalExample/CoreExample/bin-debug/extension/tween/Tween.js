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
 * 以下示例演示了使用 Tween 实现简单动画。
 */
var TweenExample = (function (_super) {
    __extends(TweenExample, _super);
    function TweenExample() {
        var _this = _super.call(this) || this;
        var shape = new egret.Shape();
        shape.graphics.beginFill(0xff0000);
        shape.graphics.drawRect(0, 0, 100, 100);
        shape.graphics.endFill();
        shape.x = shape.y = 100;
        _this.addChild(shape);
        //创建 Tween 对象
        egret.Tween.get(shape, {
            loop: true,
            onChange: _this.onChange,
            onChangeObj: _this //更新函数作用域
        })
            .to({ rotation: 360 }, 2000) //设置2000毫秒内 rotation 属性变为360
            .wait(1000) //设置等待1000毫秒
            .call(_this.onComplete, _this, ["param1", { key: "key", value: 3 }]); //设置回调函数及作用域，可用于侦听动画完成
        return _this;
    }
    TweenExample.prototype.onChange = function () {
        egret.log("onChange");
    };
    TweenExample.prototype.onComplete = function (param1, param2) {
        egret.log("onComplete");
        egret.log(param1);
        egret.log(param2);
    };
    return TweenExample;
}(egret.DisplayObjectContainer));
__reflect(TweenExample.prototype, "TweenExample");
