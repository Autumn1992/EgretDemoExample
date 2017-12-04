/**
 * 龙骨配置列表
 * @author
 * @date 2017/11/14
 */
class GameConfig {
	public static stage:egret.Stage;

	public static config = {
		//蝙蝠精
		"bianfujing": {
			"bones":["bianfujing_ske_json","bianfujing_tex_json", "bianfujing_tex_png", "bianfujing"],
			"hp":100,
			"ad":10,
			"dp":2,
			"adTime":60,
			"adRange":100,
			"moveSpeed":10
		},    

		 //冰妖
		"bingyao": {
			"bones":["bingyao_ske_json","bingyao_tex_json", "bingyao_tex_png", "bingyao"],   
			"hp":100,
			"ad":10,
			"dp":2,
			"adTime":80,
			"adRange":100,
			"moveSpeed":10
		},

		//妲己
		"daji": {
			"bones":["daji_ske_json","daji_tex_json", "daji_tex_png", "daji"], 
			"hp":200,
			"ad":20,
			"dp":2,
			"adTime":100,
			"adRange":100,
			"moveSpeed":10
		},

		"TestDB": {
			"bones":["js1_ske_json","js1_tex_json", "js1_tex_png", "armatureName"], 
			"hp":200,
			"ad":20,
			"dp":2,
			"adTime":100,
			"adRange":100,
			"moveSpeed":10
		}
	}


}

//人物状态
enum Status{
	Stand,     //站立
	Attack,    //攻击
	Injured,   //受伤
	Death      //死亡
}

enum Camp{
	Player,   //我方
	Enemy     //敌方
}