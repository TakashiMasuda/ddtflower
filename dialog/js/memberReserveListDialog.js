/* ファイル名:memberReserveListDialog.js
 * 概要　　　:テスト用ダイアログ
 * 作成者　:T.Masuda
 * 場所　　:dialog/js/memberReserveListDialog.js
 */

/* クラス名:memberReserveListDialog.js
 * 概要　　:URLからダイアログのHTMLファイルを取得して表示する。
 * 親クラス:baseDialog
 * 引数	 :Element dialog:ダイアログのDOM
 * 作成者　:T.Masuda
 * 場所　　:dialog/js/memberReserveListDialog.js
 */
function memberReserveListDialog(dialog){
	baseDialog.call(this, dialog);	//親クラスのコンストラクタをコールする

	/* 関数名:dispContents
	 * 概要　:openDialogから呼ばれる、画面パーツ設定用関数
	 * 引数　:なし
	 * 返却値:なし
	 * 設計者　:H.Kaneko
	 * 作成日　:2015.0813
	 * 作成者　:T.Masuda
	 */
	this.dispContents = function(){
		//DBから1件もレコードを取得できなければ例外を投げてアラートダイアログに変化させる
		try{
			//画面を表示する準備をする
			this.constructionContent();
		//レコードが取得できていなければ
		}catch (e){
			//ダイアログをアラートのダイアログに変える
			this.showAlertNoReserve();
		}

		//ダイアログの画面パーツをセットする
		this.dispContentsHeader();	//ダイアログ上部
		this.dispContentsMain();		//ダイアログ中部
		this.dispContentsFooter();	//ダイアログ下部
	}

	/* 関数名:constructionContent
	 * 概要　:JSONやHTMLをcreateLittleContentsクラスインスタンスにロードする。
	 * 引数　:なし
	 * 返却値:なし
	 * 設計者　:H.Kaneko
	 * 作成日　:2015.0815
	 * 作成者　:T.Masuda
	 */
	this.constructionContent = function(){
		//主に分岐処理を行うためにtry catchブロックを用意する
		try{
			this.getJson();	//JSONを取得する
			//取得したデータが0のときダイアログを開いても閉じ,データがあるならそのままダイアログを開く
			if (!this.getTableData(LESSON_TABLE)) {
				throw new cannotGetAnyRecordException();
			}

			this.getDom();			//画面パーツ作成に必要なHTMLテンプレートを取得する
			this.customizeJson();	//取得したJSONを加工する
		//例外時処理
		}catch(e){
			//予約一覧のレコードが取得できなかったら
			if(e instanceof cannotGetAnyRecordException){
				//もう一度例外を投げ、dispContents内で処理する
				throw new cannotGetAnyRecordException();
			}
		}
	};
	
	/* 関数名:getJson
	 * 概要　:JSONを取得する(オーバーライドして内容を定義してください)
	 * 引数　:なし
	 * 返却値:なし
	 * 設計者　:H.Kaneko
	 * 作成日　:2015.0815
	 * 作成者　:T.Masuda
	 * 修正日　:2015.0822
	 * 修正者　:T.Masuda
	 * 内容	　:当関数内でsetLessonDataToJSONをコールするようにしました
	 */
	this.getJson = function(){
		//このダイアログ用のJSONファイルを取得する
		this[VAR_CREATE_TAG].getJsonFile(RESERVE_LIST_JSON);
		//授業データを取得する
		commonFuncs.setLessonDataToJSON(this[DIALOG_CLASS], this[VAR_CREATE_TAG]);	
	};

	/* 関数名:getDom
	 * 概要　:createTag用テンプレートHTMLを取得する(オーバーライドして内容を定義してください)
	 * 引数　:なし
	 * 返却値:なし
	 * 設計者　:H.Kaneko
	 * 作成日　:2015.0822
	 * 作成者　:T.Masuda
	 */
	this.getDom = function(){
		//会員ページ 授業一覧ダイアログのテンプレートHTMLを取得する
		this[VAR_CREATE_TAG].getDomFile(RESERVE_LIST_HTML);		
	};
	
	/* 関数名:getTableData
	 * 概要　:サーバからテーブルのデータを取得し、中身が空かどうかのチェックを行う。
	 * 引数　:String tableName:テーブルのJSONのキー
	 * 返却値:boolean:テーブルのデータがあるかどうかを判定して返す
	 * 作成日　:2015.0814
	 * 作成者　:T.Masuda
	 */
	this.getTableData = function(tableName){
		//予約できる授業のデータ一覧をDBから取得してテーブルを作る準備をする
		this[VAR_CREATE_TAG].getJsonFile(URL_GET_JSON_ARRAY_PHP, this.create_tag.json[tableName], tableName);
		//予約データが取得できていたらtrue、そうでなければfalseを返す
		return this[VAR_CREATE_TAG].json[tableName][TABLE_DATA_KEY].length != 0? true: false;
	}
	
	/* 関数名:customizeJson
	 * 概要　:constructionContentで取得したJSONの加工を行う。オーバーライドして定義されたし
	 * 引数　:なし
	 * 返却値:なし
	 * 設計者　:H.Kaneko
	 * 作成日　:2015.0815
	 * 作成者　:T.Masuda
	 */
	this.customizeJson = function(){
		//テーブル置換用の時限データを取得する
//		this.getReplacedTableData(tableName);
		commonFuncs.tableReplaceAndSetClass(LESSON_TABLE, LESSON_TABLE_REPLACE_FUNC, true, this.create_tag, LESSON_TABLE_RECORD);
		//授業一覧のJSON配列に授業開始~終了時間の列を追加する
//		this.setStartAndEndTimeColumn(LESSON_TABLE, START_AND_END_TIME, START_TIME, END_TIME, ' ~ ');
	};

	
	/* 関数名:getReplacedTableData
	 * 概要　:存在する時限情報を取得する
	 * 引数　:なし
	 * 返却値:なし
	 * 作成日　:2015.0815
	 * 作成者　:T.Masuda
	 */
	this.getReplacedTableData = function(tableName){
		//授業のデータを取得する
		var tableData = this[VAR_CREATE_TAG].json[tableName][TABLE_DATA_KEY];
		//授業のデータから、その日の存在する時限一覧を取得する。
		this.timeStudentsCount = getTotalStudentsOfTimeTable(tableData);
	}
	
	/* 関数名:dispContentsHeader
	 * 概要　:画面パーツ設定用関数のヘッダー部分作成担当関数
	 * 引数　:なし
	 * 返却値:なし
	 * 設計者　:H.Kaneko
	 * 作成日　:2015.0814
	 * 作成者　:T.Masuda
	 */
	this.dispContentsHeader = function(){
		//ダイアログのタイトルを変更する
		this.setDialogTitle(this.dialogClass.getArgumentDataObject().dateJapanese);
	}

	/* 関数名:dispContentsMain
	 * 概要　:画面パーツ設定用関数のメイン部分作成担当関数
	 * 引数　:なし
	 * 返却値:なし
	 * 設計者　:H.Kaneko
	 * 作成日　:2015.0814
	 * 作成者　:T.Masuda
	 */
	this.dispContentsMain = function(){
		//ダイアログのコンテンツを挿入する
		this.insertDialogContents();
	}

	/* 関数名:dispContentsFooter
	 * 概要　:画面パーツ設定用関数のフッター部分作成担当関数
	 * 引数　:なし
	 * 返却値:なし
	 * 設計者　:H.Kaneko
	 * 作成日　:2015.0814
	 * 作成者　:T.Masuda
	 */
	this.dispContentsFooter = function(){
		this.insertFooterContents();	//フッターのコンテンツを作る
		//ダイアログの位置を修正する
		this.setDialogPosition(POSITION_CENTER_TOP);
	}
	
	/* 関数名:insertFooterContents
	 * 概要　:フッターのコンテンツを作る
	 * 引数　:なし
	 * 返却値:なし
	 * 作成日　:2015.0815
	 * 作成者　:T.Masuda
	 */
	this.insertFooterContents = function(){
		//レッスンのステータス領域を作る
		this.create_tag.outputTag(EXPLAIN + 1, EXPLAIN + 1, CURRENT_DIALOG_SELECTOR);
	}
	
	/* 関数名:setCallback
	 * 概要　:ダイアログのイベントコールバックを設定する
	 * 引数　:なし
	 * 返却値:なし
	 * 作成日　:2015.0822
	 * 作成者　:T.Masuda
	 */
	this.setCallback = function(){
		//ダイアログを閉じるときは破棄するように設定する
		this.dialogClass.setCallbackCloseOnAfterOpen(this.dialogClass.destroy);
		//予約確認ダイアログを出すイベントを登録する
		this.whenRecordSelectEvent(SELECTOR_LESSON_TABLE);
	}
	
	/* 関数名:insertDialogContents
	 * 概要　:ダイアログのメインのコンテンツを作る
	 * 引数　:なし
	 * 返却値:なし
	 * 作成日:2015.0815
	 * 作成者:T.Masuda
	 */
	this.insertDialogContents = function(){
		//予約可能授業一覧テーブルの外側の領域を作る
		this.create_tag.outputTag(TABLE_AREA, TABLE_AREA, CURRENT_DIALOG_SELECTOR);
		//予約できる授業のデータ一覧テーブルを作る
		this.create_tag.outputTagTable(LESSON_TABLE, LESSON_TABLE, SELECTOR_TABLE_AREA);
		//テーブルの値を置換する
		commonFuncs.dbDataTableReplaceExecute(SELECTOR_LESSON_TABLE, this.create_tag.json[LESSON_TABLE][TABLE_DATA_KEY], LESSON_TABLE_REPLACE_FUNC, this.timeStudentsCount);

		//テーブルの値をクライアント側で編集して画面に表示する
//		commonFuncs.tableReplaceAndSetClass(LESSON_TABLE, LESSON_TABLE_REPLACE_FUNC, true, this.create_tag, LESSON_TABLE_RECORD);
	}

	/* 関数名:setArgumentObj
	 * 概要　:ダイアログに渡すオブジェクトを生成する
	 * 引数　:なし
	 * 返却値:なし
	 * 作成日　:015.08.15
	 * 作成者　:T.Masuda
	 */
	this.setArgumentObj = function() {

		//新たにオブジェクトを作り、親ダイアログから引き継いだargumentObjの内容をセットする
		var argumentObj = $.extend(true, {}, this.dialog[0].instance.argumentObj, this.recordData[DATA_KEY]);
		
		//子ダイアログに渡すオブジェクトを生成する
		$.extend(true, argumentObj.data,	//元データ
				{parentDialogEx:this.dialog[0].instance},	//このダイアログのクラスインスタンス
				{parentDialogCreateTag:this.createTag},		//このダイアログのcreateTag
				recordData.data,		//行データ
				recordData.number		//行番号
		);
		
		return argumentObj;	//生成したオブジェクトを返す
	}

	/* 関数名:showAlertNoReserve
	 * 概要　:予約なしのアラートダイアログを作る
	 * 引数　:なし
	 * 返却値:なし
	 * 作成日　:015.08.15
	 * 作成者　:T.Masuda
	 */
	this.showAlertNoReserve = function(){
		//授業の予約データがないことをダイアログに表示する
		this.dialogClass.setAlertContents(ERROR_LESSONLIST);
		//ダイアログを閉じるときは破棄するように設定する
		this.dialogClass.setCallbackCloseOnAfterOpen(this.dialogClass.destroy);
	}

	/* 関数名:whenRecordSelectEvent
	 * 概要　:テーブルのレコードを渡して処理させるダイアログを開くイベントを登録する
	 * 引数　:String target:データ取得元のテーブルのセレクタ
	 * 返却値:なし
	 * 作成日　:2015.08.15
	 * 作成者　:T.Masuda 
	 */
	this.whenRecordSelectEvent = function(target) {
		var thisElem = this;							//イベント内でのクラスインスタンス参照のため、変数にthisを格納する
		//予約一覧の行を選択して、予約確認ダイアログを表示する処理
		$dialog.on(CLICK + TAG_CHILD_TR, target, function(){
			//クリックした行の番号とデータを取得する
			this.recordData = this.getClickTableRecordData(this, LESSON_TABLE, LESSON_TABLE_RECORD, thisElem.create_tag);
			//残席の記号を取得する
			var restMarkNow = $(SELECTOR_TARGET_LESSON_TABLE + EQ_FRONT + (this.recordData.number) + CLOSE_AND_TD_TAG).eq(INT_4).text();
			
			//残席が✕でないものでかつ、会員が受講できないようになっている授業(NFDなど)についてはクリックして予約確認ダイアログは開かない
			if (thisElem.create_tag.json[LESSON_TABLE][TAG_TABLE][recordData.number][COLUMN_NAME_DEFAULT_USER_CLASSWORK_COST]
				&& restMarkNow != CHAR_INVALIDATE) {
				var dialogUrl = '';	//ダイアログのURLを格納する変数を用意する
				//予約が初めてのときに予約ダイアログを開く(予約履歴がない、またはキャンセルの人の処理)
				if(thisElem.create_tag.json[LESSON_TABLE][TABLE_DATE_KEY][recordData.number][COLUMN_NAME_USER_WORK_STATUS] != 1) {
					//予約確認ダイアログのURLをセットする
					dialogUrl = HTML_MEMBER_RESERVE_CONFIRM_DIALOG;
				//予約済みであれば
				} else {
					//予約キャンセルダイアログのURLをセットする
					dialogUrl = HTML_MEMBER_RESERVE_CANCEL_DIALOG;
				}
				
				this.openDialog(dialogUrl);	//ダイアログを開く
			}
		});
	}

	/*
	 * 関数名:getClickTableRecordData
	 * 概要　:クリックされたテーブルの行にある連想配列のデータを取得する。
	 		使い方としてクリックイベントの中で使う
	 * 引数　:string:tableName:データ取得対象のテーブルクラス名
	 		string:clickRecordClassName:クリックされたレコードのクラス名
	 		createTagInstance:creator:クリエイトタグインスタンス名
	 * 返却値:object:returnObject:取得したデータの結果
	 * 作成日　:2015.08.08
	 * 作成者　:T.Yamamoto
	 */
	this.getClickTableRecordData = function(clickTarget, tableName, clickRecordClassName, creator) {
		//クリックされたのが何行目なのかを取得する。ここでのthisはクリックされた時に要素を指す
		var rowNum = $(DOT + clickRecordClassName).index(clickTarget);
		//次のダイアログに渡すデータを変数に入れる
		var recordObject = creator.json[tableName][TABLE][rowNum];
		//取得したデータを返却する
		var returnObject = {
			number:rowNum,			//クリックされた行番号
			data:recordObject		//クリックされた行のデータ
		}
		//取得した行の番号とデータを返す
		return returnObject;
	}
}

//継承の記述
memberReserveListDialog.prototype = new baseDialog();
//サブクラスのコンストラクタを有効にする
memberReserveListDialog.prototype.constructor = baseDialog;