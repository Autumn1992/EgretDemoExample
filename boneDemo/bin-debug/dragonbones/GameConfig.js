var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 * 龙骨配置列表
 * @author
 * @date 2017/11/14
 */
var GameConfig = (function () {
    function GameConfig() {
    }
    GameConfig.config = {
        //蝙蝠精
        "bianfujing": {
            "bones": ["bianfujing_ske_json", "bianfujing_tex_json", "bianfujing_tex_png", "bianfujing"],
            "hp": 100,
            "ad": 10,
            "dp": 2,
            "adTime": 60,
            "adRange": 100,
            "moveSpeed": 10
        },
        //冰妖
        "bingyao": {
            "bones": ["bingyao_ske_json", "bingyao_tex_json", "bingyao_tex_png", "bingyao"],
            "hp": 100,
            "ad": 10,
            "dp": 2,
            "adTime": 80,
            "adRange": 100,
            "moveSpeed": 10
        },
        //妲己
        "daji": {
            "bones": ["daji_ske_json", "daji_tex_json", "daji_tex_png", "daji"],
            "hp": 200,
            "ad": 20,
            "dp": 2,
            "adTime": 100,
            "adRange": 100,
            "moveSpeed": 10
        },
        "TestDB": {
            "bones": ["js1_ske_json", "js1_tex_json", "js1_tex_png", "armatureName"],
            "hp": 200,
            "ad": 20,
            "dp": 2,
            "adTime": 100,
            "adRange": 100,
            "moveSpeed": 10
        }
    };
    return GameConfig;
}());
__reflect(GameConfig.prototype, "GameConfig");
//人物状态
var Status;
(function (Status) {
    Status[Status["Stand"] = 0] = "Stand";
    Status[Status["Attack"] = 1] = "Attack";
    Status[Status["Injured"] = 2] = "Injured";
    Status[Status["Death"] = 3] = "Death"; //死亡
})(Status || (Status = {}));
var Camp;
(function (Camp) {
    Camp[Camp["Player"] = 0] = "Player";
    Camp[Camp["Enemy"] = 1] = "Enemy"; //敌方
})(Camp || (Camp = {}));
//# sourceMappingURL=GameConfig.js.map