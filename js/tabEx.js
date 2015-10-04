/* ファイル名:tabEx.js
 * 概要　　　:タブを作り表示するクラスのファイル
 * 設計者　:H.Kaneko
 * 作成日　:2015.1003
 * 作成者　:T.Masuda
 * 場所　　:js/tabEx.js
 */

/* クラス名:tabEx
 * 概要　　:タブを作り表示する
 * 引数　　:String url:ダイアログのクラス名
 * 		　:Object argumentObj:インプット用データオブジェクト
 * 		　:Object returnObj:アウトプット用データオブジェクト
 * 設計者　:H.Kaneko
 * 作成日　:2015.1003
 * 作成者　:T.Masuda
 */
function tabEx(url, argumentObj, returnObj){
	//親クラスのコンストラクタを起動する
	baseWindow.call(this, url, argumentObj, returnObj);

	//デフォルト設定のオブジェクト
	//argumentObjを作る際に参考にしてください。
	this.defaultArgumentObj = {
		//ダイアログの設定データオブジェクト
		config:{
			cache: true,		//一度読み込んだコンテンツは二度読み込まない
			updateHash:false	//タブのインデックスをクリックしてもURLのハッシュが変わらないようにする
		},
		//インプット用データオブジェクト
		data:{
		}
	};

	//デフォルトのアウトプット用オブジェクト
	//returnObjを作る際に参考にしてください。
	this.defaultReturnObj = {
			//ダイアログのステータスオブジェクト
			statusObj:{
			},
			//アウトプット用データのオブジェクト
			data:{
			}
	};
	
	
	/* 関数名:run
	 * 概要　:ダイアログを生成して表示する。
	 * 引数　:String target:タブを追加する先のセレクタ、または要素
	 * 返却値:なし
	 * 設計者　:H.Kaneko
	 * 作成日　:2015.1004
	 * 作成者　:T.Masuda
	 */
	this.run = function(target){
		//ロード失敗時の例外処理を行うため、try-catch節を使う。
		try{
			//メンバのURLからHTMLデータを読み込む
			this.load(this.url);
			this.dom.instance = this;	//DOMにクラスインスタンスへの参照を登録する
			
			//argumentObj、returnObjがそれぞれ空であれば、デフォルトの物に置き換える
			this.setDefaultObjects();
			
			var tab = $(this.dom).easytabs(this.argumentObj.config);	//configの設定を使ってタブを作成する
			$(target).append(tab);	//タブを指定した先に追加する
			
		//例外をキャッチしたら
		} catch(e){
			console.log(e.stack);	//投げられたエラーオブジェクトをコンソールログに出す。
		}
	}

	/* 関数名:setDefaultObjects
	 * 概要　:メンバの各オブジェクトが空であれば、デフォルトのものを使う
	 * 引数　:なし
	 * 返却値:なし
	 * 作成日　:2015.1004
	 * 作成者　:T.Masuda
	 */
	this.setDefaultObjects = function(){
		//argumentObj、returnObjが空であればデフォルトのものを使う
		this.argumentObj = Object.keys(this.argumentObj).length? this.argumentObj: this.defaultArgumentObj;
		this.returnObj = Object.keys(this.returnObj).length? this.defaultReturnObj: this.defaultReturnObj;
	}
	
}

//baseWindowクラスを継承する
tabEx.prototype = new baseWindow();
//サブクラスのコンストラクタを有効にする
tabEx.prototype.constructor = baseWindow;
