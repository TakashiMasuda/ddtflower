//JSONとHTMLのパーツのひな形から、HTMLのパーツを作り上げる関数群。

//createTagコール時の引数として使う定数。
CREATETAG_FIRST 				= -1;
//@add 2015.0610 T,Masuda「JSON」と「DOM」の文字列の定数を追加しました
//固定の文字列の定数を定義していく
CHAR_DOT										= '.';
CHAR_HYPHEN										= '-';
CHAR_RIGHT_ARROW								= '>';
MESSAGE_SUCCESS_RESERVED						= '予約を承りました。';
MESSAGE_SUCCESS_CANCELED						= '予約をキャンセルしました。';
MESSAGE_SUCCESS_PROFILE_UPDATE					= 'プロフィールを変更しました。';
MESSAGE_SUCCESS_PASSWORD_UPDATE					= 'パスワードを変更しました。';
MESSAGE_FAILED_RESERVED							= '予約の処理に失敗しました。時間をおいてもう一度お試しください。';
MESSAGE_FAILED_CONNECT							= '通信に失敗しました。時間をおいてもう一度お試しください。';
MESSAGE_LOGIN_ERROR								= 'idまたはパスワードが間違っています';
SELECTOR_ALL_CHILD								= '> *';				//全ての子要素のセレクタ
SELECTOR_ALLCHILD_CLASS_FRONT					= ' > *[class="';
SELECTOR_CLOSE_ATTRIBUTE						= '"]';
SELECTOR_KEYS									= '.keys'; 
SELECTOR_MAIN									= '.main';
SELECTOR_NUMBERING_OUGHTER						= '.numberingOuter';
SELECTOR_VALUES									= '.values';
SELECTOR_LESSON_TABLE							= '.lessonTable';
SELECTOR_RESERVE_LESSON_LIST_DIALOG_TR			= '.reserveLessonListDialog table tr';
SELECTOR_RESERVE_LESSON_LIST_DIALOG_TD			= '.reserveLessonListDialog table tr td';
SELECTOR_RESERVE_LESSON_LIST_DIALOG				= '.reserveLessonListDialog';
SELECTOR_MEMBER_RESERVED_CONFIRM_DIALOG			= '.memberReservedConfirmDialog';
SELECTOR_MEMBER_RESERVED_CONFIRM_DIALOG_CONTENT	= '.memberReservedConfirmDialogContent';
STR_FAILD_TO_CREATE								= 'の作成に失敗しました。';	//outputTagでパーツの作成を失敗したときのメッセージ
STR_ARROW_LEFT_DOUBLE							= '<<';
STR_TEXT										= 'text';
STR_HTML										= 'html';
STR_BODY										= 'body';
STR_NUMBERING									= 'numbering';
STR_PRE											= 'pre';
STR_KEY_AND_VALUE								= 'keyAndValue';
STR_VALUELABEL									= 'valueLabel';
STR_VALUES										= 'values';
STR_KEYS										= 'keys';
STR_EDITVALUE									= 'editValue';
STR_NAME										= 'name';
STR_CLICK										= 'click';
STR_STYLE										= 'style';
STR_OPEN										= 'open';
STR_RESERVE_LESSON_LIST_DIALOG					= 'reserveLessonListDialog';
STR_LESSON_TABLE_AREA							= 'lessonTableArea';
STR_DIALOG										= 'dialog';
STR_TR											= 'tr';
STR_JSON  										= 'json';				//json
STR_DOM  										= 'dom';				//dom
STR_OBJECT 										= 'object';				//objectかどうかの判定に使う
STR_TRANSPORT_FAILD_MESSAGE						= '通信に失敗しました。';	//通信失敗のメッセージ
STR_POST										= 'POST';				//リクエストのPOSTメソッド設定
STR_HTML										= 'HTML';				//AJAXのレスポンスの指定をHTMLにする時に使う
STR_AUTO										= 'auto';
STR_FONT_SIZE									= 'font-size';
STR_TAG_TABLE									= 'tagTable';
STR_LESSON_TABLE								= 'lessonTable';
STR_MEMBER_RESERVED_CONFIRM_DIALOG_CONTENT		= 'memberReservedConfirmDialogContent';
SYMBOL_UNIT										= ' 〜 ';
TAG_DIV											= '<div></div>';
TAG_SPAN										= '<span></span>'; 
TAG_LABEL										= '<label></label>';
TAG_TEXTAREA									= '<textarea></textarea>'; 
URL_GET_JSON_STRING_PHP							= 'php/GetJSONString.php';
URL_GET_JSON_ARRAY_PHP							= 'php/GetJSONArray.php';
URL_GET_JSON_ARRAY_FOR_JQGRID_PHP				= 'php/GetJSONArrayForJqGrid.php';
URL_SAVE_JSON_DATA_PHP							= 'php/SaveJSONRecord.php';
STR_LESSON_TABLE								= 'lessonTable';
STR_RESERVE_LESSON_LIST_DIALOG					= 'reserveLessonListDialog';
STR_CENTER_CENTER								= 'center center';
STR_MEMBER_RESERVED_CONFIRM_DIALOG				= 'memberReservedConfirmDialog';
STR_EVENT										= 'event';
STR_COLSPAN										= 'colspan';
VALUE_0_5EM										= '0.5em';
STR_MEMBER_INFORMATION							= 'memberInfomation';
STR_REPLACE_TABLE								= 'replaceTable';
SP_SELECTOR_REPLACE_TABLE						= ' .replaceTable';
//処理の分岐のフラグの数値
PATTERN_ADD = 0;
PATTERN_REPLACE = 1;
//outputNumberingTagで用いる記事のオブジェクトの親のキー。
ARTICLE_OBJECT_KEY								= 'table';
USER_ID = 'userId';
ADMIN_AUTHORITY									= '80';	//管理者権限のIDの定数							
ACCOUNT_HEADER									= 'accountHeader';	//アカウント管理のJSONのキー
EMPTY						= '';								//空文字
SLASH						= '/';								//スラッシュ記号
DOT							= '.';								//ドット

//ログインエラー時の状態の整数値定数
TITLE = 'title';		//タイトルの文字列
STATE_NOT_LOGIN	= 0;	//非ログイン時
STATE_TIMEOUT	= 1;	//タイムアウト時
LOGIN = 'ログイン';		//ログインダイアログのタイトル「ログイン」
RE_LOGIN = '再ログイン';	//再ログインダイアログのタイトル「再ログイン」
LOGIN_MESSAGE = '';		//ログインダイアログのメッセージ
RE_LOGIN_MESSAGE = '';	//再ログインダイアログのメッセージ
URL_LOGIN_DIALOG = 'dialog/loginDialog.html';	//ログインダイアログのHTMLファイルのURL
URL_ADMIN_PAGE = 'adminPage.html'; //管理者ページのURL
URL_MEMBER_PAGE = 'memberPage.html'; //管理者ページのURL

function createTag(){
	this.json = null;			//JSONデータを格納する変数。
	this.dom = '';				//ひな形のHTMLのDOMを格納する変数。
	this.numbering = '';		//ブログページのナンバリングのJSON連想配列。
	this.formData = {};			//フォームデータを格納する連想配列。
	//add T.Masuda 2015/0417 予約ダイアログを作る関数を格納した連想配列を用意する。
	this.reservedDialog = {};	

	/*
	 * 関数名:this.getJsonFile = function(jsonPath,map)
	 * 概要  :JSONファイルを取得して返す。
	 * 引数  :String jsonPath:JSONを要求する先。
	 * 		:Object map:サーバへ渡す値の連想配列。実際に送信する際にはJSON文字列への変換を行う
	 * 		:String key:取得したJSONを格納するためのキー。
	 * 返却値  :Object
	 * 作成者:T.Masuda
	 * 作成日:2015.02.12
	 * 変更者:T.Masuda
	 * 変更日:2015.03.30
	 * 内容　:サーバへ連想配列を渡せる様に変更しました。
	 * 変更者:T.Masuda
	 * 変更日:2015.06.09
	 * 内容　:サーバへJSON文字列を渡せる様に変更しました。また、キー名を指定してJSONを格納できるように変更しました。
	 */
	this.getJsonFile = function(jsonPath, map, key){
		//一時的に値を保存する変数tmpを宣言する。
		var tmp;
		
		//mapに何も入力されていなければ、空の連想配列を代入する。入力されていればJSON文字列に変換する
		map = map === void(0) ? {json:""} : JSON.stringify(map);
		//Ajax通信でjsonファイルを取得する。
		$.ajax({
			//jsonファイルのURLを指定する。
			url: jsonPath,
			//取得するファイルの形式をJSONに指定する。
			dataType: 'JSON',
			//POSTメソッドでデータを送信する
			type:'POST',
			//同期通信を行う。
			async: false,
			//サーバへ連想配列を送信する。
			data: {json:map,key:''},
			//キャッシュを無効にする。
			cache:false,
			//通信完了時の処理を記述する。
			success: function(json){
				//通常通りJSONが取得できていれば(JSONにcreateTagStateのキーがない)
				if(!('createTagState' in json)){
					//クラスのメンバjsonに取得したjsonの連想配列を格納する。
					tmp = json;
				//返ってきたJSONにログイン状態のキーがあれば
				} else{
					//ログイン状態の例外を投げる。
					throw new loginStateError(parseInt(json.createTagState));	
				}
			},
			//通信失敗時の処理。
			error:function(){
				//エラーのダイアログを出す。
				alert('通信に失敗しました。');
			}
		});

		//@mod 2015.0609 T.Masuda 条件分岐を追加しました
		//フィールドのメンバのjsonが空であれば
		if(this.json == null){
			//keyが入力されていたら、オブジェクトを生成し、その中にtmpを格納する。
			//そうでなければ、そのままtmpを格納する
			this.json = key !== void(0) && key!= ''?{key:tmp}:tmp;
			//キーが入力されていたら
		} else if(key !== void(0)){
			//指定したキーにJSONを格納する
//			this.json[key] = tmp;
			this.replaceData(PATTERN_ADD, this.json[key], tmp);
		//既にJSONが格納されていたら
		} else {
			//連想配列を連結する。
			this.json = $.extend(true, this.json, tmp);
		}
	};

	/* 
	 * 関数名:this.getDomFile = function((domPath))
	 * 概要  :JSONファイルを取得して返す。
	 * 引数  :String jsonPath
	 * 返却値  :Object
	 * 作成者:T.Masuda
	 * 作成日:2015.02.12
	 */
	this.getDomFile = function(htmlPath){
		//一時的に値を保存する変数tmpを宣言する。
		var tmp;
		
		//Ajax通信でjsonファイルを取得する。
		$.ajax({
			//jsonファイルのURLを指定する。
			url: htmlPath,
			//取得するファイルの形式をJSONに指定する。
			dataType: 'HTML',
			//同期通信を行う。
			async: false,
			//キャッシュを無効にする。
			cache:false,
			//通信完了時の処理を記述する。
			success: function(html){
				//クラスのメンバdomに取得したDOMのオブジェクトを格納する。
				tmp = html;
			},
			//通信失敗時の処理。
			error:function(){
				//エラーのダイアログを出す。
				alert('通信に失敗しました。');
			}
		});
		
		//DOMが空であれば
		if(this.dom == ''){
			//クラスのメンバのdomにtmpのHTML文字列をオブジェクトに変換して格納する。
			this.dom = $(tmp);
		//既にDOMがあれば
		} else {
			//DOMを追加する。
			$(this.dom).append($('> *',tmp));
		}
	};

	/* 
	 * 関数名:readyCreateTag
	 * 概要  :JSON、DOMのトップノードを引数で指定して返す
	 * 引数  :String key, String domNodeName
	 * 返却値  :Object:JSON、DOMのトップノードをオブジェクトにまとめて返す
	 * 設計者:H.Kaneko
	 * 作成者:T.Masuda
	 * 作成日:2015.06.09
	 */
	this.readyCreateTag = function(key, domNodeName){
		//domNodeNameがundefined(未入力)であれば、キー名をdomNodeNameにする。
		domNodeName = domNodeName === undefined ? key : domNodeName;
			
		//JSONとDOMのトップノードをオブジェクトにまとめて返す
		return {json:this.getMapNode(key), dom:this.getDomNode(domNodeName)};
	}	
	
	/* 
	 * 関数名:this.outputTag = function(key, domNodeName, appendTo)
	 * 概要  :JSONのキー、DOMのノードを指定して画面パーツを作り追加する。
	 * 引数  :String key, String domNodeName, String appendTo
	 * 返却値  :なし
	 * 設計者:H.Kaneko
	 * 作成者:T.Masuda
	 * 作成日:2015.02.20
	 * 修正者:T.Masuda
	 * 修正日:2015.06.09
	 * 内容　:createTagに渡す値を取得するコードをサブ関数化しました(指示者:H.Kaneko)
	 */
	this.outputTag = function(key, domNodeName, appendTo){
		//@mod 2015.0609 T.Masuda JSON、DOMをオブジェクトにまとめて取得するようにしました(指示者:H.Kaneko)
		var headNodes = this.readyCreateTag(key, domNodeName);
		
		//@mod 2015.0609 T.Masuda createTagの引数をオブジェクトから取得した値にしました(指示者:H.Kaneko)
		// createTagでキーに対応したHTMLのパーツを作成し、変数tagに格納する。
		var tag = this.createTag(headNodes[STR_JSON], headNodes[STR_DOM]);
		// パーツの作成に成功したならば
		if(tag != null){
			//@mod 2015.03.10 T.Masuda 第三引数appendToに対応しました。(指示者:H.Kaneko)
			//appendToが入力されていれば
			if(appendTo != null){
				//appendで、作成したタグをappendToに追加する。
				$(appendTo).append(tag);
			//appendToが空であれば	
			} else {
				//appendで作成したタグをmainに追加する。
				$(SELECTOR_MAIN).append(tag);
			}
			//@mod 2015.03.10 T.Masuda ここまで変更しました。(指示者:H.Kaneko)
		// パーツの作成に失敗したならば
		} else{
			//失敗のメッセージダイアログを出す。
			console.log(key + 'の作成に失敗しました。');
		}
	}
	
	/* 
	 * 関数名:this.createTag = function(curMapNode, curDomNode)
	 * 概要  :JSON連想配列のキーからタグに値を格納する。
	 * 引数  :Object curMapNode:カレントのJSONのオブジェクト
	 * 　　  :Element curDomNode:カレントのDOMの先頭
	 * 返却値  :なし
	 * 設計者:H.Kaneko
	 * 作成者:T.Masuda
	 * 作成日:2015.02.19
	 */
	this.createTag = function(curMapNode, curDomNode){
		
		//マップ、DOMが取得できていなかったら
		if(curMapNode == null || curDomNode == undefined){
			//処理を終える。
			return null;
		}
				
		//連想配列に子がいる限りループする。
		for(key in curMapNode){
			var mapNode = curMapNode[key];	//mapNodeの内容をcurMapNode内のmapNodeの参照に切り替える。
			var attribute = false;				//属性値を格納する変数
				if(key == 'cancel~0'){
					console.log('key:' + key + ' dom:' + curDomNode);
					//break;
				}
			
			//キーがtextであれば
			if(key == 'text'){
				//curDomにテキストtextメソッドで追加する。
				curDomNode.text(mapNode);
			//キーがHTMLであれば
			} else if(key == 'html'){
				//curDomにテキストをhtmlメソッドで追加する。
				curDomNode.html(mapNode);
			//mapNodeが配列であれば
			} else if($.isArray(mapNode)){
				//キー名でタグを作成し、そのテキストにキー値をセットする。
				this.createTagArray(key, mapNode, curDomNode);
			//mapNodeが子であれば
			} else if(typeof mapNode == 'object'){
				//カレントの子DOMノードからkeyを持つDOMノードを取得する。
				var domNode = this.getDomChild(key, curDomNode);
				//domNodeがundefinedでなければ
				//@mod 2015.0611 T.Masuda 「DOMが取得できなかったとき」の条件文を修正しました
				if(domNode[0] !== void(0)){
					//子ノードへ再帰する。
					this.createTag(mapNode, domNode);
				}
			//curDomNodeのAttribute配列からmapNodeのキー値を持つノードを取得する。
			} else if(attribute = curDomNode[0].getAttributeNode(key)){
				//取得したノードにmapNodeの値をセットする。
				attribute.value = mapNode;
			}
		}
	
		//curDomNodeを返す。
		return curDomNode;
	};
	
	/* 
	 * 関数名:this.getMapNode = function(key)
	 * 概要  :JSON連想配列の最上階層からキーに対応した値を取り出す。
	 * 引数  :String key
	 * 返却値  :Object
	 * 作成者:T.Masuda
	 * 作成日:2015.02.12
	 */
	this.getMapNode = function(key){
		//クラスメンバの連想配列からキーに応じた連想配列を返す。
		return this.json[key];
	};

	/* 
	 * 関数名:this.getDomNode = function(key)
	 * 概要  :キーに対応するHTMLのパーツを返す。
	 * 引数  :String key
	 * 返却値  :jQuery
	 * 作成者:T.Masuda
	 * 作成日:2015.02.12
	 * 内容  :テンプレートのHTMLそのものではなく、コピーを返す様に変更しました。
	 */
	this.getDomNode = function(key){
		//メンバのHTMLからキーに対応した要素をコピーして返す。
		return $($(' > *[class="' + key +'"]', this.dom).clone(false));
	};
	
	/* 
	 * 関数名:this.createTagArray = function(mapNode, domNode)
	 * 概要  :リストタイプのタグを配置する。
	 * 引数  :String key, Object mapNode, jQuery domNode
	 * 返却値  :なし
	 * 設計者:H.Kaneko
	 * 作成者:T.Masuda
	 * 作成日:2015.02.19
	 * 内容　:本来想定されていた動作に修正されました。
	 */
	this.createTagArray = function(key, mapNode, domNode){
		//domNodeのキーの要素を取得する。
		domNode = this.getDomChild(key, domNode); 
		
		//引数にnullがあれば
		if(key == null || mapNode == null || domNode == null){
			//処理をやめる。
			return;
		}

		//不足しているタグの個数を算出する。
		var clones = mapNode.length - 1;
		//domNodeを必要な分コピーする。
		for(var i = 0; i < clones; i++){
			//1個目のmapNodeの後ろに自身のコピーを追加する。
			$(domNode[0]).after($(domNode[0]).clone(false));
		}

		//mapNodeの配列分ループする。
		for(var i = 0; i < mapNode.length; i++){
			//mapNode[i]が配列であれば
			if($.isArray(mapNode[i])){
				//キー名でタグを作成し、そのテキストにキー値をセットする。
				this.createTagArray(key, mapNode, curDomNode);
			//mapNode[i]が子であれば
			} else if(typeof mapNode[i] == 'object'){
				//カレントのDOMノードの子ノードを取得する。子ノードは属性で特定する。
				//@mod 2015.0704 T.Masuda テーブル用配列「table」によるエラー回避の修正をしました
				var childDomNode = domNode[0] !== void(0) ? this.getDomChild(' > [' + domNode[0].children[0].attributes[0].name + ']', domNode) : null;
				//childDomNodeがnullでなければ
				if(childDomNode){
					//子ノードへ再帰する。
					this.createTag(mapNode[i], childDomNode);
				}
			//ただのテキストであれば
			} else {
				//テキストを書き込む。
				$(domNode).text(mapNode[i]);
			}
			
			//domNodeを次に移動する。
			domNode = $(domNode).next();
		}
	}

	/* 
	 * 関数名:this.getDomChild = function(key, domNode)
	 * 概要  :リストタイプのタグを配置する。
	 * 引数  :String key, jQuery domNode
	 * 返却値  :なし
	 * 設計者:H.Kaneko
	 * 作成者:T.Masuda
	 * 作成日:2015.02.19
	 * 内容　:タグに対応しました。
	 */
	this.getDomChild = function(key, domNode){
		var domNodeReturn;							//domNodeの返却用変数を作る。

		//子要素の識別子が記述されていなければ
		if(key.indexOf('>') == -1){
			domNodeReturn = $('.' + key, domNode);	//domNodeの子の階層からkeyのクラスを持つノードを取得する。
		//子要素のセレクタであったら
		}else{
			domNodeReturn = $(key, domNode);	//domNodeの子の階層から指定した属性を持つノードを取得する。
		}
		//DOMの取得に失敗したら
		if(domNodeReturn[0] == null){
			//domNodeの子の階層からkeyのタグ名を持つノードを取得する。
			domNodeReturn = $(key, domNode);
		}
		
		//domNodeReturnを返す。
		return domNodeReturn;
	}
	
	/* 
	 * 関数名:this.outputNumberingTag = function(jsonName, startPage, displayPageMax, displayPage, pageNum, targetArea)
	 * 概要  :ナンバリングと、それに応じたブログのページを作る。
	 * 使い方の補足:この関数をコールする前に、記事挿入先のタグとnumberingOuterクラスを持つタグを作成してください。
	 * 引数  :String jsonName:処理対象となるJSONのキー名。
	 * 		 int startPage:表示する1つ目のナンバリングの数
	 * 		 int displayPageMax:表示するナンバリングの最大数
	 * 		 int displayPage:表示するブログのページ番号
	 * 		 int pageNum:1ページに表示する記事数。
	 * 		 String targetArea:記事の追加先のセレクタ。
	 * 		String callBack:実行させたいコードの文字列
	 * 返却値  :なし
	 * 設計者:H.Kaneko
	 * 作成者:T.Masuda
	 * 作成日:2015.03.12
	 * 変更者:T.Masuda
	 * 変更日:2015.04.08
	 * 内容　:引数を追加して1ページに複数の記事を表示するのに対応しました。
	 * 変更者:T.Masuda
	 * 変更日:2015.04.09
	 * 内容　:引数に作成した記事の追加先を追加しました。
	 * 変更者:T.Masuda
	 * 変更日:2015.07.29
	 * 内容　:新しい記事の形式に対応しました。配列にも対応します。
	 * 変更者:T.Masuda
	 * 変更日:2015.08.08
	 * 内容　:日付による記事絞り込みに対応しました。
	 */
	this.outputNumberingTag = function(jsonName, startPage, displayPageMax, displayPage, pageNum, targetArea, callBack){
		
		var articles = this.checkArticleDate(jsonName);	//日付を確認する関数を実行する
		//記事の絞り込みが行われていたら、そのまま代入する。そうでなければjsonNameからオブジェクトを取得する
		articles = articles != null? articles:this.getMapNode(jsonName);	
		
		//numberingの内容をクリアする（numberingはクラスのメンバとして宣言する）
		this.numbering = {};		

		//ナンバリング用のJSONを作る。
		this.createNumbering(jsonName, startPage, displayPageMax, displayPage ,pageNum, targetArea, callBack, articles);
		
		//記事を消す
		$(targetArea).empty();

		
		//JSONが配列形式であれば
		if($.isArray(articles.table)){
			//コンテンツ表示
			$(targetArea).append(this.createTagTable(articles, this.getDomNode(jsonName) , pageNum, displayPage));
		//JSONが連想配列形式であれば
		} else {
			//コンテンツ表示
			this.outputKeyNumberObject(articles, jsonName, targetArea, pageNum, displayPage)
		}
		
		//ナンバリングを消す。
		$('.numberingOuter').empty();
		
		// add T.Masuda 2015/0421 ナンバリングが生成されない時にcreateTagのエラーがコンソールに出力されるバグの修正
		// add T.Masuda 2015/0422 numberingオブジェクトが生成されていない状況への対応
		//ナンバリングのオブジェクトがあれば
		if('numbering' in this.json && '1' in this.json.numbering){
			//ナンバリング用Tagを表示する。
			this.outputTag('numbering', 'numbering', '.numberingOuter');
			//現在表示中のページに対応するナンバリングの色を変える。
			this.selectPageNumber(displayPage);
		}
		
		//スクロール位置が低ければ
		if($(window).scrollTop() > $(".main").offset().top){
			//スクロール位置を上に戻す。記事が見えなくならないようにするため、.mainの縦座標を基準に移動する。
			window.scroll(0,$(".main").offset().top);
		}
		
		//コールバック関数が入力されていれば
		if(callBack !== void(0) && callBack != 'undefined'){
			var evaled = eval(callBack);	//評価する
			//evaledが関数であれば
			if(evaled instanceof Function == true){
				evaled();	//関数を実行する
			}
		}
	}

	/* 
	 * 関数名:this.createNumbering = function(jsonName, startPage, displayNum, pageNum)
	 * 概要  :ブログページのナンバリング(ページャ)を作る。
	 * 引数  :String jsonName:JSON名。
	 * 		 int startPage:表示する1つ目のナンバリングの番号。
	 * 		 int displayPageMax:表示するナンバリングの最大個数。
	 * 		 int pageNum:1ページに表示する記事数。
	 * 		Function callBack:終了後に実行する関数
	 * 		articles Object:記事データ
	 * 返却値  :なし
	 * 設計者:H.Kaneko
	 * 作成者:T.Masuda
	 * 作成日:2015.03.12
	 * 変更者:T.Masuda
	 * 変更日:2015.04.08
	 * 内容　:引数pageNumを追加し、1ページに複数の記事を載せることに対応しました。
	 */
	this.createNumbering = function(jsonName, startPage, displayPageMax, displayPage, pageNum, targetArea, callBack, articles){
		//ページ数を取得する。
		var pageMax = Math.ceil(this.getJsonObjectNum(jsonName, articles) / pageNum);
		
		//ページ数が1以下ならナンバリングを作成せずに終了する。
		if(pageMax <= 1){
			//空のナンバリングを用意する
			this.numbering = {};						//メンバのナンバリングを空オブジェクトにする
			this.json['numbering'] = this.numbering;	//JSON内のナンバリングをメンバのナンバリングで上書きする
			return;										//処理を終えて呼び出し元に戻る
		}
		
		// <<ボタンを作る。(1ページ前に進める)
		this.createNumberingAround(this.numbering, 'pre', '<<', startPage,
										displayPageMax, displayPage-1, pageMax, jsonName, pageNum, targetArea, callBack);

		//ナンバリングの中の最後の数字を算出して変数に格納する。最終ページを超えていれば最終ページに丸める。
		var lastPage = (startPage + displayPageMax) <= pageMax ? (startPage + displayPageMax) : pageMax;
		
		//for文でナンバリングを必要なだけ作る。
		for(var i = startPage; i <= lastPage; i++){
			var indexText = (i - startPage + 1).toString();	//ナンバリングのボタンの連番の数値を文字列にする。
			var map = {};									//ページ数をキーとしたオブジェクトを生成する。
			map[indexText] = {};							//mapにindexTextの値をキーとした連想配列を追加する。
			
			//"text"キーにページ数を設定する。
			map[indexText]['text'] = i;
			//関数実行属性にoutputNumberingTagを設定する。
			map[indexText]['onclick'] = 'creator.outputNumberingTag("' 
				+ jsonName + '",' + startPage + ', ' + displayPageMax + ',' + i + ', ' + pageNum + ',"' + targetArea + '","' + callBack +'")';
			//numberingオブジェクトの中に、作成したオブジェクトを追加する。
			this.numbering[indexText] = map[indexText];
		}
			
		// <<ボタンを作る。(1ページ後に進める)
		this.createNumberingAround(this.numbering, 'next', '>>', startPage,
										displayPageMax, displayPage+1, pageMax, jsonName, pageNum, targetArea, callBack);
			
		//メンバjsonオブジェクトにnumberingオブジェクトを追加する。
		this.json['numbering'] = this.numbering;
		//numberingオブジェクトを返す。
		return this.numbering;
	}
	
	/* 
	 * 関数名:this.createNumberingAround = function(numbering, key, numberingString, startPage, displayPageMax, displayPage, pageMax,, jsonName, pageNum, targetArea)
	 * 概要  :ナンバリングの<<、>>を作る。
	 * 引数  :object numbering:ナンバリングが格納されている連想配列
	 * 		 string key:キー名。'pre'または'next'が入っている。
	 * 		 String numberingString:該当するナンバリングの文字。
	 * 		 int startPage:表示する最初のナンバリングの番号。
	 * 		 int displayPageMax:表示するナンバリングの個数。
	 * 		 int displayPage:現在のページ番号。
	 * 		 int pageMax:全ページ数。
	 * 		String jsonName:JSON名。
	 * 		int pageNum:1ページに表示する記事数。
	 * 		String targetArea:記事の追加先。
	 * 		Function callBack:終了後に実行する関数
	 * 返却値  :なし
	 * 設計者:H.Kaneko
	 * 作成者:T.Masuda
	 * 作成日:2015.03.12
	 */
	this.createNumberingAround = function(numbering, key, numberingString, startPage, displayPageMax, displayPage, pageMax, jsonName, pageNum, targetArea, callBack){
		var startAroundPage;
		
		//開始ページを算出する
		//前移動の場合
		if (key === 'pre' && startPage > 1) {
			//開始ページを算出、1ページ以下の場合には1ページに丸める
			startAroundPage = startPage > displayPage ? (startPage-1) : startPage;		
		//後移動の場合
		} else if (key === 'next' && (startPage+displayPageMax) < pageMax) {
			//開始ページを算出、表示ページが最終ページを超えている場合、最終ページから開始ページを逆算する。
			startAroundPage = (startPage+displayPageMax) < displayPage ? startPage+1 : startPage;		
		//上記以外の場合
		} else {
			return;
		}
		
		var keyObj = {};	//keyオブジェクトを生成する。
		keyObj[key] = {};	//keyのキーを持った連想配列を追加する。
		
		//有効属性をONにする。
		keyObj[key]['enable'] = 'on';
		//実際に設定する文字をtextに設定する。
		keyObj[key]['text'] = numberingString;
		
		//関数実行属性をoutputNumberingTagに設定する。
		keyObj[key]['onclick'] = 'creator.outputNumberingTag("' + jsonName +'",'
			+ Math.round(startAroundPage) +','+ displayPageMax + ',' + displayPage +', ' + pageNum + ',"' + targetArea + '","' + callBack +'")';
		
		//numberingオブジェクトの中に追加する。
		numbering[key] = keyObj[key];
	}

	/* 
	 * 関数名:getJsonObjectNum
	 * 概要  :メンバjsonの指定キー内の整数値のキーの数を返す。
	 * 引数  :String jsonName:メンバJSONルートの処理対象のJSONのキー名。
	 * 		:Object Articles:記事データの連想配列
	 * 返却値  :int:整数値のキーの数を返す。
	 * 作成者:T.Masuda
	 * 作成日:2015.03.13
	 * 変更者:T.Masuda
	 * 変更日:2015.07.29
	 * 内容　:jsonNameと定数「ARTICLE_OBJECT_KEY」で走査対象のオブジェクトを指定するようにしました。
	 * 変更者:T.Masuda
	 * 変更日:2015.08.08
	 * 内容　:引数を増やして記事絞り込みに対応しました。
	 */
	this.getJsonObjectNum = function(jsonName, articles){
		//返却する値を格納するための変数を宣言、0で初期化する。
		var retNum = 0;

		//@mod 2015.0729 T.Masuda 走査対象のオブジェクトを変えました。
		//メンバのJSONルートにある、引数の文字列と一致するキーのオブジェクトのtableキーを走査対象にする。
		//tableキーの文字列は定数で定義してあるので任意で変更可。
		//@mod 2015.0809 T.Masuda 引数のオブジェクトから記事数を取得するようにしましたなければメンバを見ます。
		$searchObject = articles !== void(0)? articles[ARTICLE_OBJECT_KEY]: this.json[jsonName][ARTICLE_OBJECT_KEY];
		
		//配列であれば
		if($.isArray($searchObject)){
			retNum = $searchObject.length;	//要素数を取り出す
		//連想配列であれば
		} else {
			//該当するオブジェクトを走査する。
			for(key in $searchObject){
				//for(key in this.json){
				//2015.0729 ここまで変更しました。
				//キーが数字であれば
				if(!(isNaN(key))){
					//retNumに1を足す
					retNum++;
				}
			}
		}
		
		//retNumを返す。
		return retNum;
	}
	
	/* 
	 * 関数名:this.selectPageNumber = function(displayPage)
	 * 概要  :選択中のページナンバーの色を変える。
	 * 引数  :int displayPage:表示中のページ番号。
	 * 返却値  :なし
	 * 作成者:T.Masuda
	 * 作成日:2015.03.13
	 */
	this.selectPageNumber = function(displayPage){
		//全てのページナンバーからselectクラスを除去する。
		$('.numbering li').removeClass('select');
		//選択中のページナンバーのタグにselectクラスを付与して色を変える。
		$('.numbering li:contains(' + displayPage + ')').addClass('select');
	}

	/*
	 * 関数名:this.createElementTag = function(stackKey, curMapNode, topDomNode)
	 * 概要  :JSONのノードに対応したタグを作る。
	 * 引数  :String stackKey:
	 * 　　　:Object curMapNode:
	 * 　　　:Element topDomNode:
	 * 返却値  :なし
	 * 設計者:H.Kaneko
	 * 作成者:T.Masuda
	 * 作成日:2015.04.01
	 */
	this.createElementTag = function(stackKey, curMapNode, topDomNode){
		//curMapNodeがnullであれば
		if(curMapNode == null){
			return;	//処理を終える。
		}
		
		//ノードがある限りループする。
		for(key in curMapNode){
			var mapNode = curMapNode[key];	//ループで走査しているキーの値を取得する。
			var curDomNode = null;			//カレントのDOMノードを格納する変数を宣言、nullで初期化する。
			
			//mapNodeが配列であれば
			if($.isArray(mapNode)){
				//スタックした文字列とテキストの配列からタグ群を作り出す。
				curDomNode = this.createKeysToTagArray(stackKey, mapNode, key);
			//オブジェクトであれば
			} else if(typeof mapNode == "object"){
				stackKey.push(key);			//stackKeyにkeyを追加する。
				this.createElementTag(stackKey, mapNode, topDomNode);	//再帰呼び出しを行う。
				stackKey.pop();				//stackKeyの末尾を削除する。
			//textであれば
			} else if(key == 'text'){
				//スタックしたkey文字列とテキストをタグ化する。
				curDomNode = this.createKeysToTag(stackKey, mapNode, key);
			//htmlであれば
			} else if(key == 'html'){
				//スタックしたkey文字列とテキストをタグ化する。
				curDomNode = this.createKeysToTag(stackKey, mapNode, key);
			}
			//DOMが生成されていたら
			if(curDomNode != null){
				//topDomNodeの最後尾にcurDomNodeを追加する。
				$(topDomNode).append($(curDomNode));
			}
		}
	}	

	/*
	 * 関数名:this.createKeysToTag = function(curStackKey, mapNode, key)
	 * 概要  :スタックからキーのタグ、テキストから編集用のタグを作る。
	 * 引数  :Array curStackKey:キー名のスタック。
	 * 　　　:String mapNode:JSONのテキスト。
	 * 　　　:String key:カレントのキー。
	 * 返却値  :Element
	 * 設計者:H.Kaneko
	 * 作成者:T.Masuda
	 * 作成日:2015.04.01
	 */
	this.createKeysToTag = function(curStackKey, mapNode, key){
		//retDomに外枠となるタグを格納する。
		var retDom = $('<div></div>')
						.addClass('keyAndValue')	//キーと値の組み合わせの意味合いのクラスを枠に付ける。
						.append($('<span></span>')	//キーの要素を格納するタグを生成する。
								.addClass('keys'))
						.append($('<span></span>')	//値の要素を格納するタグを生成する。
								.addClass('values')
						);

		//キーのタグを群を作る。
		var keys = this.createKeyTags(curStackKey);
		//キーのタグをまとめるタグに追加する。
		$('.keys', retDom).append(keys);

		curStackKey.push(key);	//スタックにカレントのキーを加える。
		
		//スタックの文字列を_を区切り文字にして連結する。
		var connectedKey = curStackKey.join('_');
		//編集用テキストエリアのラベルを追加する。
		$('.values', retDom).append($('<label></label>').addClass('valueLabel').text(key));
		//編集用テキストエリアを追加する。name属性には_で区切ったキーを格納する。
		$('.values', retDom).append($('<textarea></textarea>').addClass('editValue').val(mapNode).attr('name', connectedKey));

		curStackKey.pop();	//末尾に加えたキーを消す。
		
		//作成したDOMを返す。
		return retDom;
	}
	
	/*
	 * 関数名:this.createKeysToTagArray = function(curStackKey, mapNode, key)
	 * 概要  :スタックからキーのタグ、テキストから編集用のタグを複数作る。
	 * 引数  :Array curStackKey:キー名のスタック。
	 * 　　　:String mapNode:JSONの文字列配列。
	 * 　　　:String key:カレントのキー。
	 * 返却値  :Element
	 * 設計者:H.Kaneko
	 * 作成者:T.Masuda
	 * 作成日:2015.04.01
	 */
	this.createKeysToTagArray = function(curStackKey, mapNode, key){
		//retDomに外枠となるタグを格納する。
		var retDom = $('<div></div>')
						.addClass('keyAndValue')	//キーと値の組み合わせの意味合いのクラスを枠に付ける。
						.append($('<span></span>')	//キーの要素を格納するタグを生成する。
								.addClass('keys'))
						.append($('<span></span>')	//値の要素を格納するタグを生成する。
								.addClass('values')
						);
	
		curStackKey.push(key);	//スタックにカレントのキーを加える。
		//キーのタグを群を作る。
		var keys = this.createKeyTags(curStackKey);
		//キーのタグをまとめるタグに追加する。
		$('.keys', retDom).append(keys);
		
		//スタックの文字列を_を区切り文字にして連結する。
		var connectedKey = curStackKey.join('_');
		//テキスト編集用のタグを入れるタグのjQueryオブジェクトを生成、保存する。
		var $values = $('.values', retDom);
		//ループのカウント用にmapNodeの要素数を取得する。
		var mapNodeArrayLength = mapNode.length;
		
		//mapNodeを走査する。
		for(var i = 0; i < mapNodeArrayLength; i++){
			//編集用テキストエリアを追加する。name属性には_で区切ったキーを格納する。
			$values.append($('<textarea></textarea>').addClass('editValue').val(mapNode[i]).attr('name', connectedKey));
		}
		
		curStackKey.pop();	//末尾に加えたキーを消す。
		
		//作成したDOMを返す。
		return retDom;		
	}

	/*
	 * 関数名:this.createKeyTags = function(curStackKey)
	 * 概要  :キーのタグ群を作る。
	 * 引数  :Array curStackKey:キーのスタック。
	 * 返却値  :Element
	 * 設計者:H.Kaneko
	 * 作成者:T.Masuda
	 * 作成日:2015.04.01
	 */
	this.createKeyTags = function(curStackKey){
		var retDom = $('<div></div>');	//返却用の変数を宣言、初期化する。仮の枠となるdivタグを生成する。
		//スタックの要素数を取得する。
		var stackLength = curStackKey.length;
		
		//curStackKeyを走査する。
		for(var i = 0; i < stackLength; i++){
			//最後の要素でなければ
			if(i < stackLength - 1){
				//キーのタグをretDomに追加する。
				$(retDom).append($('<span></span>').addClass('key').text(curStackKey[i]));
			//最後の要素なら
			} else {
				//キーのタグをretDomに追加する。
				$(retDom).append($('<span></span>').addClass('key currentKey').text(curStackKey[i]));
			}
		}

		//作成したDOMを返す。
		return $(' > span', retDom);
	}
	
	/*
	 * 関数名:this.updateElementJson = function(topMapNode, topDomNode)
	 * 概要  :タグの内容をJSONに反映させる。
	 * 引数  :Object topMapNode:更新対象のJSONの先頭のノード
	 * 　　　:Element topDomNode:先頭のDOM
	 * 返却値  :なし
	 * 設計者:H.Kaneko
	 * 作成者:T.Masuda
	 * 作成日:2015.04.01
	 */
	this.updateElementJson = function(topMapNode, topDomNode){
		//ループ内ではthisでクラスインスタンスを参照できないので、変数に格納しておく
		var own = this;
		var prevName = "";	//1回前の走査した要素のname属性を保存する変数を用意する。
		//弟DOMがある限りループする。編集用テキストエリアのDOMを走査することで、この処理を実現する。
		$('.editValue', topDomNode).each(function(){
			var thisName = $(this).attr('name');	//現在のDOMのname属性を取得する。
			//前回の走査が配列ノードの2番目以降であればスキップする。
			if(thisName != prevName){
				//テキストエリアのname属性からスタックキーを生成する。
				var stackKey = thisName.split('_');
				//スタックキーからカレントのキーを取り出す。
				var key = stackKey[stackKey.length - 1];
				
				//スタックkeyに一致するノードを返す。
				var mapNode = own.findMapNode(stackKey, topMapNode);
				
				//ノードがtextであれば
				if(key == 'text'){
					//タグの文字列をJSONノードにセットする。
					mapNode[key] = $(this).val();
					//htmlであれば
				} else if(key == 'html'){
					//タグの文字列をJSONノードにセットする。
					mapNode[key] = $(this).val();
					//配列であれば
				} else if($.isArray(mapNode[key])){
					//処理対象となるDOMを全て取得する。
					var $targetArray = $('textarea[name="' + thisName + '"]', topDomNode);
					//DOMの配列の要素数を取得する。
					var arrayLength = $targetArray.length;
					//JSONの配列にリサイズが必要であれば、DOM配列の要素数と一致させる(リサイズする)。
					mapNode[key] = new Array(arrayLength);
					//配列数分ループ
					$targetArray.each(function(i){
						//JSON側の文字列配列にDOM配列の文字列をコピーする。
						mapNode[key][i] = $(this).val();
					});
				}
			}
			
			prevName = thisName;	//前回のname属性を更新する。
		});
	}

	/*
	 * 関数名:this.findMapNode = function(curStackKey, curMapNode)
	 * 概要  :トークン文字列に該当するJSONノードを探し返す。
	 * 引数  :Array curStackKey:スタックされたキーの配列
	 * 　　　:Object curMapNode:カレントの連想配列のノード
	 * 返却値  :なし
	 * 設計者:H.Kaneko
	 * 作成者:T.Masuda
	 * 作成日:2015.04.01
	 */
	this.findMapNode = function(curStackKey, curMapNode){
		//連想配列のノードを返却するための変数を宣言、nullで初期化する。
		var returnMapNode = null;
		
		//引数がnullなら
		if(curStackKey == null || curMapNode == null){
			return;	//処理を終える。
		}
		
		//先頭のトークンを取得する。
		var key = curStackKey[0];
		//keyに一致したNodeがあれば
		if(key in curMapNode){
			//curStackKeyから先頭トークンを取り除く
			curStackKey.shift();
			//keyに該当するノードを取得する。
			var mapNode = curMapNode[key];
			//curStackKeyが空であれば ※完全に空になるまでやるとノードの参照が失われるため、空になる一歩手前までにします。
			if(curStackKey.length == 1){
				//現在のノードを返却用の変数に格納する。
				returnMapNode = mapNode;
			//そうでなければ
			} else {
				//再帰して階層を潜る。
				//@mod 2015.0627 T.Masuda 
				returnMapNode = this.findMapNode(curStackKey, mapNode);
			}
		}
		
		//ノードを返す。
		return returnMapNode;
	}

	/*
	 * 関数名:this.getJsonForCustomize = function(rootName, jsonPath)
	 * 概要  :編集用にJSONを取得する。
	 * 引数  :String rootName:JSONを格納するキー
	 * 　　  :String jsonPath:JSONファイルのURL
	 * 返却値  :なし
	 * 作成者:T.Masuda
	 * 作成日:2015.04.01
	 */
	this.getJsonForCustomize = function(rootName, jsonPath){
		//一時的に値を保存する変数tmpを宣言する。
		var tmp;

		//Ajax通信でjsonファイルを取得する。
		$.ajax({
			//jsonファイルのURLを指定する。
			url: jsonPath,
			//取得するファイルの形式をJSONに指定する。
			dataType: 'JSON',
			//同期通信を行う。
			async: false,
			//キャッシュを無効にする。
			cache:false,
			//通信完了時の処理を記述する。
			success: function(json){
				//クラスのメンバjsonに取得したjsonの連想配列を格納する。
				tmp = json;
			},
			//通信失敗時の処理。
			error:function(){
				//エラーのダイアログを出す。
				alert('通信に失敗しました。');
			}
		});

		//フィールドのメンバのjsonが空であれば
		if(tmp != null){
			//クラスのメンバのjsonにtmpの連想配列を格納する。
			this.json[rootName] = tmp;
		} 
	}
	
	/* 
	 * 関数名:this.outputTagTable = function(key, domNodeName, appendTo)
	 * 概要  :JSON配列からテーブルを作り、画面に追加する
	 * 引数  :String key:JSON配列を格納しているキー
	 * 	　　 :String domNodeName:テーブルのクラス名
	 * 	　　 :String appendTo:作成したテーブルの追加先
	 * 返却値  :なし
	 * 設計者:H.Kaneko
	 * 作成者:T.Masuda
	 * 作成日:2015.06.09
	 */
	this.outputTagTable = function(key, domNodeName, appendTo){
		//取得するJSONとDOMの先頭のノードをオブジェクトにまとめて取得する
		var headNodes = this.readyCreateTag(key, domNodeName);
		
		// createTagTableでテーブルを作成し、変数tagに格納する。
		var tag = this.createTagTable(headNodes[STR_JSON], headNodes[STR_DOM]);
		// パーツの作成に成功したならば
		if(tag != null){
			//appendToが入力されていれば
			if(appendTo != null){
				//appendで、作成したタグをappendToに追加する。
				$(appendTo).append(tag);
			//appendToが空であれば	
			} else {
				//appendで作成したタグをmainに追加する。
				$('.main').append(tag);
			}
		// テーブルの作成に失敗した場合
		} else{
			//失敗のメッセージダイアログを出す。
			console.log(key + 'の作成に失敗しました。');
		}
	}	

	/*
	 * 関数名:createTagTable
	 * 概要  :配列と、その配列に格納された行に相当するオブジェクト群からレコード数可変のテーブルを作る
	 * 引数  :Array mapNode:テーブルのデータを格納した配列
	 * 　　  :Element domNode:テーブルのHTML
	 * 　　  :int pageNum:表示する記事数
	 * 　　  :int displayPage:表示するページ数
	 * 返却値 :Element:作成したテーブルのDOMを返す
	 * 設計者:H.Kaneko
	 * 作成者:T.Masuda
	 * 作成日:2015.06.09
	 */
	this.createTagTable = function(mapNode, domNode , pageNum, displayPage){
		//mapNodeからテーブル用のデータを取り出す
		var mapNodeArray = mapNode.table;
		//見出し行用のDOMを格納する変数を宣言する
		var colNameNode = null;
		//何度も使うため、テーブルのjQueryオブジェクトを生成して変数に格納しておく
		var $table = $(domNode);
		//mapNodeの要素数を取得する。
		var mapNodeArrayLength = mapNodeArray.length;
		//レコードの列数を取得する
		var mapObjectLength = Object.keys(mapNodeArray[0]).length;
		
		startIndex = 0;		//記事の表示開始インデックスを算出する
		endCount = mapNodeArrayLength; 	//記事の表示終了インデックスを算出する。
		
		//デバッグ用
		//pageNum = 10;
		//displayPage = 3;
		
		//ページ番号、表示記事数が引数にあったら
		if(pageNum !== void(0) && displayPage !== void(0)){
			//表示する記事と記事数を指定するための値を算出する
			startIndex = pageNum * (displayPage - 1);		//記事の表示開始インデックスを算出する
			//記事の表示終了インデックスを算出する。記事配列の最大数を超えていたら、元の数値に戻す。
			endCount = pageNum * displayPage > mapNodeArrayLength? mapNodeArrayLength: pageNum * displayPage;
			pageNum = startIndex >= endCount? 0: endCount - startIndex;
		//ページ番号、表示記事数が入力されていなければ
		} else {
			//記事数 = 配列の要素数にする
			pageNum = mapNodeArrayLength;
		}
		 
		 //設定データを格納するための変数を用意する
		var config = null;
		
		//設定データが存在すれば
		if(mapNode.config !== void(0)){
			config = mapNode.config;	//列設定データを取得する
		}

		//テーブルの1行目のjQueryオブジェクトを生成し、変数に保存する。
		//tableタグ直下に自動生成されるtbodyタグの取得をスキップするため、children関数を2度コールする
		var $firstRow = $table.children().eq(0).children().eq(0);
		
		//配列のオブジェクト数分のdomNodeを作成する
		for(var j = 1; j < mapObjectLength; j++){
			//1行目の行の最初の子供(tdタグ)を必要なだけ増やす。
			$firstRow.append($firstRow.children().eq(0).clone(false));
		}

		//設定データを取得できていたら
		if(config != null){
			var objectCounter = 0;	//行のオブジェクトを走査するためのカウンター変数を用意する
			//複製したdomNodeに属性の値を指定していくループ
			for(column in mapNodeArray[0]){
				//各domNodeに属性の値を指定していく
				$firstRow.children().eq(objectCounter++)
				.addClass(this.getClassName(config, column))
				.attr(STR_STYLE, this.getStyle(config, column))
				.attr(STR_COLSPAN, this.getColspan(config, column));
			}
		}
		
		//配列のオブジェクト数分のdomNodeを作成する。最初から1行分のDOMが用意されているので、カウンターを1から開始する
		//@mod 2015.0730 T.Masuda 表示指定した記事数分だけ複製するように変更しました。
		for(var i = 1; i < pageNum; i++){
			//テーブルに必要なだけの行を追加する
			$table.append($firstRow.clone(false));
		}

		//見出し行にセルを追加する
		colNameNode = $firstRow.clone(false);
		rowCounter = 0;	//行を指すカウンター変数を用意する
		
		//表示する記事数分ループする
		for(var i = startIndex; i < endCount; i++){
			//i番目の行を取得してjQueryオブジェクトに変換し、変数に格納する
			var $row = $table.children().eq(0).children().eq(rowCounter++);
			var j = 0;	//オブジェクト用ループ内でのカウンターを用意する
			//テーブルの行に相当するオブジェクトを、テーブルに相当する配列から取得する
			var mapObject = mapNodeArray[i];
			//テーブルの行に相当するオブジェクトの要素分ループする
			for(key in mapObject){
				if(i == startIndex){
					//見出し行のセルに値を入れる
					$(colNameNode).children().eq(j).text(this.getColumnName(config, key));
				}
				//セルにクラスとテキストを追加していく
				$row.children().eq(j++).text(mapObject[key]);
			}
		}
		
		//colNameNodeを行の先頭に配置する
		$table.prepend(colNameNode);

		return $table;	//作成したテーブルを返す
	}
	
	/*
	 * 関数名:getColumnName
	 * 概要  :列設定のJSONから列のカラム名を取得する。見出し行に日本語の列名を設定するために使う
	 * 引数  :Object configNode:設定データを定義したオブジェクト
	 * 　　  :String key:列名
	 * 返却値 :String:取得した列名を返す。取得できなければkeyを返す
	 * 設計者:H.Kaneko
	 * 作成者:T.Masuda
	 * 作成日:2015.06.10
	 */
	this.getColumnName = function(configNode, key){
		//keyで指定された列のオブジェクトを取得する
		var ret = this.getConfigColumn(configNode, key);
		//列名を取得して返す。取得できなければキーを返す
		return ret['columnName'] !== void(0)? ret['columnName']: key;
	}
	
	/*
	 * 関数名:getColspan
	 * 概要  :列設定のJSONからセルに設定するcolspan属性の値を取得する
	 * 引数  :Object configNode:設定データを定義したオブジェクト
	 * 　　  :String key:列名
	 * 返却値 :int:colspanの値を返す。取得できなけれ空文字を出す
	 * 作成者:T.Masuda
	 * 作成日:2015.07.04
	 */
	this.getColspan = function(configNode, key){
		//keyで指定された列のオブジェクトを取得する
		var ret = this.getConfigColumn(configNode, key);
		//列名を取得して返す。取得できなければ空文字を返す
		return ret['colspan'] !== void(0)? ret['colspan']: "";
	}
	
	/*
	 * 関数名:getClassName
	 * 概要  :列設定のJSONからセルに設定するクラス名を取得する
	 * 引数  :Object configNode:設定データを定義したオブジェクト
	 * 　　  :String key:列名
	 * 返却値 :String:取得した列名を返す。取得できなけれ空文字を出す
	 * 設計者:H.Kaneko
	 * 作成者:T.Masuda
	 * 作成日:2015.06.10
	 */
	this.getClassName = function(configNode, key){
		//keyで指定された列のオブジェクトを取得する
		var ret = this.getConfigColumn(configNode, key);
		//列名を取得して返す。取得できなければ空文字を返す
		return ret['className'] !== void(0)? ret['className']: "";
	}
	
	/*
	 * 関数名:getStyle
	 * 概要  :列設定のJSONからセルに設定するスタイルを取得し、セットする
	 * 引数  :Object configNode:設定データを定義したオブジェクト
	 * 　　  :String key:列名
	 * 返却値 :String:取得したスタイルの文字列を返す。取得できなけれ空文字を出す
	 * 設計者:H.Kaneko
	 * 作成者:T.Masuda
	 * 作成日:2015.06.12
	 */
	this.getStyle = function(configNode, key){
		//keyで指定された列のオブジェクトを取得する
		var ret = this.getConfigColumn(configNode, key);
		//スタイルの文字列を取得して返す。取得できなければ空文字を返す
		return ret[STR_STYLE] !== void(0)? ret[STR_STYLE]: '';
	}

	/*
	 * 関数名:getConfigColumn
	 * 概要  :設定のJSONから行のオブジェクトを取得して返す
	 * 引数  :Object configNode:設定データを定義したオブジェクト
	 * 　　  :String key:列名
	 * 返却値 :Object:取得した列のオブジェクトを返す。取得できなければ空オブジェクトを返す
	 * 設計者:H.Kaneko
	 * 作成者:T.Masuda
	 * 作成日:2015.06.12
	 */
	this.getConfigColumn = function(configNode, key){
		var ret = {};	//返却する値を持つオブジェクトを格納する変数を準備する
		var oneColumn = void(0);	//取得した列のオブジェクトを格納する変数を用意する。undefinedで初期化
		
		//configNode、configNodeのcolumnsが空でないなら
		if(configNode!== void(0) && configNode != null && configNode.columns !== void(0)){
			//keyに該当する列のオブジェクトを引数のオブジェクトから取得する
			var oneColumn = configNode.columns[key];
		}
		
		//取得に成功した
		if(oneColumn !== void(0) && oneColumn != null){
			ret = oneColumn;	//列のオブジェクトを返却用の変数に格納する
		}
		
		return ret;	//処理の結果を返す
	}
	
	/*
	 * 関数名:replaceData
	 * 概要  :オブジェクトからオブジェクトへデータを追加、または置き換える
	 * 引数  :int process:オブジェクトへデータを追加するか、置き換えを行うかを判断する
	 * 　　  :Object baseObject:追加先となるオブジェクト
	 * 　　  :Object appendObject:追加元となるオブジェクト
	 * 　　  :String key:追加指定するオブジェクトのキー
	 * 返却値 :Object:データの追加・置き換えを行ったオブジェクトを返す
	 * 設計者:H.Kaneko
	 * 作成者:T.Masuda
	 * 作成日:2015.06.13
	 */
	this.replaceData = function(process, baseObject, appendObject, key){
		//返すオブジェクトを入れる変数を用意する
		var retObject = {};
		//追加するオブジェクトを格納する変数を用意する。まずは空のオブジェクトで初期化する
		var append = {};
		//keyが入力されていれば
		if(key !== void(0) && key != null && key != ''){
			//keyに該当する要素だけを追加するようにする
			append[key] = appendObject[key];
		} else {
			append = appendObject;	//引数の追加元オブジェクトを丸まる追加するようにする
		}
		
		//新規作成するなら
		if(process == PATTERN_REPLACE){
			///追加先のオブジェクトを走査する
			for(objKey in baseObject){
				//キーに被りがあったら
				if(objKey in append){
					//該当するキーを消す
					delete baseObject[objKey];
				}
			}
		}
		
		//2つのオブジェクトを統合したオブジェクトを作って返す
		return $.extend(true, baseObject, append);
	}
	
	
	/* 関数名　:removeDomNode
	 * 概要　　:引数で指定された要素を削除する
	 * 引数　　:Element element:削除する要素
	 * 戻り値　:boolean:削除できたかどうかを返す
	 * 作成日　:2015.0614
	 * 作成者　:T.Masuda
	 */
	this.removeDomNode = function(element){
		//指定された要素が存在していたら削除する
		element !== void(0)? $(element).remove():console.log("");
	}
	
	/* 関数名　:replaceValueNode
	 * 概要　　:引数で指定されたオブジェクトのルートのキーの値を、新たなオブジェクトのvalueキーのvalueにセットして元のキーにセットする
	 * 引数　　:Object object:処理対象のオブジェクト
	 * 戻り値　:なし
	 * 作成日　:2015.0614
	 * 作成者　:T.Masuda
	 * 変更日　:2015.0809
	 * 変更者　:T.Masuda
	 * 内容　 :引数に取ったオブジェクトに影響が出ない様にしました。
	 */
	this.replaceValueNode = function(object){
		//返却用オブジェクトを用意し、引数のオブジェクトのコピーを格納する
		var retObj = $.extend(true, {}, object);
		//オブジェクトを走査する
		for(key in retObj){
			//keyのvalueを、新たに生成したオブジェクトのvalueのkeyにセットし、元のkeyにセットする
			retObj[key] = {value:retObj[key]};
		}
		
		return retObj;	//処理を終えたobjectを返す
	}
	
	/*
	 * 関数名:appendTag
	 * 概要  :タグをセレクタで指定した場所に挿入する。
	 * 引数  :Element tag:指定したDOMに挿入する要素
	 * 		 String target:tagの挿入先のセレクタ
	 * 戻り値:なし
	 * 作成日:2015.07.29
	 * 作成者:T.Masuda
	 */
	this.appendTag = function(tag, target){
		// 引数の要素が入力されているかを判定する。
		if(tag !== void(0) && tag != null){
			//targetが入力されていれば
			if(target !== void(0) && target != null){
				//appendを使って、引数の要素をtargetに追加する。
				$(target).append(tag);
			//targetが空であれば	
			} else {
				//appendを使って、引数の要素をmainに追加する。
				$(SELECTOR_MAIN).append(tag);
			}
			//@mod 2015.03.10 T.Masuda ここまで変更しました。(指示者:H.Kaneko)
		// 引数の要素が空ならば
		} else{
			//失敗のメッセージダイアログを出す。
			console.log(i + 'の作成に失敗しました。');
		}
	}

	/*
	 * 関数名:outputKeyNumberObject(json, domkey, target)
	 * 概要  :整数値でナンバリングされた連想配列のキーを持つオブジェクトからパーツを作り追加する。
	 * 引数  :Object json:JSON連想配列
	 * 		 String domkey:作成したDOMのappend先
	 * 		 String target:作成したDOMのappend先
	 * 		 int showNum:生成するパーツの数。
	 * 		 int page:ブログ等、ページャを使っているコンテンツのページ数。
	 * 戻り値:なし
	 * 作成日:2015.03.20
	 * 作成者:T.Masuda
	 * 変更日:2015.04.08
	 * 変更者:T.Masuda
	 * 内容　:ブログ記事に対応しました。
	 * 変更日:2015.07.29
	 * 変更者:T.Masuda
	 * 内容　:createLittleContent.jsから移植しました。また、不要になった引数(json)を削除しました。
	 * 変更日:2015.08.08
	 * 変更者:T.Masuda
	 * 内容　:第一引数を連想配列にし、その後のものはずらしました。createTagTableと引数を合わせる形です。
	 */
	this.outputKeyNumberObject = function(json, domKey, target, showNum, page){
		//showNum、pageが未入力であれば初期化する。
		showNum = showNum === void(0)? 100: showNum;	//showNumの初期化判定と処理をする
		page = page === void(0)? 1: page;				//pageの初期化判定と処理をする
		//表示開始のインデックスの数値を作る。
		var startIndex = showNum * (page - 1); 
		//@mod 2015.0729 T.Masuda 新たな記事JSONの形に対応しました。
		//記事用のナンバリングがキーとなっているJSONを格納したオブジェクトを引数のJSONから取り出す
		var jsonNumbering = json[ARTICLE_OBJECT_KEY];
		
		//取得したJSONを走査する。引数に入力された数だけループする。
		for(var i = startIndex; (i.toString() in jsonNumbering) && i - startIndex < showNum; i++){
				// 記事の要素を作成し、変数tagに格納する。
				var tag = this.createTag(jsonNumbering[i.toString()], this.getDomNode(domKey));
				//targetで指定した場所に作成した要素を挿入する。
				this.appendTag(tag, target);
		}
		//ここまで変更しました。2015.0729
		
		//trタグを追加したなら
		if($('.recordWrapper').length > 0){
			//trタグを取得する
			var records = $('.recordWrapper tr');
			//tableタグを外す
			unwrapTable('.'+records.attr('class'));
		}
	}
	
	/*
	 * 関数名:checkArticleDate
	 * 概要  :メンバJSONのブログ記事を日付で絞り込む
	 * 引数  :String jsonName:JSONのキー
	 * 		 String dateText:日付テキストの文字列
	 * 戻り値:Object:記事の絞り込みを行ったオブジェクトを返す
	 * 作成日:2015.08.08
	 * 作成者:T.Masuda
	 */
	this.checkArticleDate = function(jsonName){
		var retObj = null;	//返却用のオブジェクトを格納する変数を宣言、nullで初期化する
		
		//dateTextが入力されていれば
		//※dateTextは現状ではblogCalendarで利用する
		if(this.dateText !== void(0)){
			//evaledが日付であれば、記事の絞り込みを行う。
			if(!isNaN(Date.parse(this.dateText))){
				//絞り込み対象のJSONの記事タイプが配列形式であれば
				if($.isArray(this.json[jsonName].table)){
					retObj = this.filterArticleDateForArray(jsonName, this.dateText);	//配列形式の記事絞り込みを行う
				}else{
					retObj = this.filterArticleDateForObject(jsonName, this.dateText);	//オブジェクト形式の記事絞り込みを行う
				}
			}
		}
		
		return retObj;	//作成したオブジェクトか、失敗のnullを返す
	};
	
	/*
	 * 関数名:filterArticleDateForArray
	 * 概要  :日付により配列形式の記事データを絞り込む
	 * 引数  :String jsonName:JSONのキー
	 * 		 String dateText:日付テキストの文字列
	 * 戻り値:Object:記事の絞り込みを行ったオブジェクトを返す
	 * 作成日:2015.08.08
	 * 作成者:T.Masuda
	 */
	this.filterArticleDateForArray = function(jsonName, dateText){
		//対象のオブジェクトのコピーを作成する
		var retObj = $.extend(true, {}, this.getMapNode(jsonName));
		var deleteOffset = 0;					//要素の削除でずれたインデックスを修正するための数値
		var tableLength = retObj.table.length;	//走査対象のテーブルのサイズを取得する
		
		//記事を走査し、日付が当てはまらない記事を削除していく
		for(var i = 0; i < tableLength; i++){
			//日付が合わなければ
			if(retObj.table[i].blogArticleDate != dateText){
				retObj.table.splice(i);	//該当する記事を削除する
			}
		}
		
		retObj.table = retObj.table.concat();	//配列をコピーしてインデックスの乱れを直す
		
		return retObj;	//作成したオブジェクトを返す
	}
	
	/*
	 * 関数名:filterArticleDateForObject
	 * 概要  :日付によりオブジェクト形式の記事データを絞り込む
	 * 引数  :String jsonName:JSONのキー
	 * 		 String dateText:日付テキストの文字列
	 * 戻り値:Object:記事の絞り込みを行ったオブジェクトを返す
	 * 作成日:2015.08.08
	 * 作成者:T.Masuda
	 */
	this.filterArticleDateForObject = function(jsonName, dateText){
		//対象のオブジェクトのコピーを作成する
		var retObj = $.extend(true, {}, this.getMapNode(jsonName));
		var table = retObj.table;				//tableキーのオブジェクトを取得する
		var tableLength = table.length;	//走査対象のテーブルのサイズを取得する
		var tmpObj = {};						//絞り込んだ記事を一時的に格納するオブジェクトを作る
		var i = 0;								//記事番号を振るためのカウンター変数を宣言する
		
		//記事を走査し、日付が当てはまらない記事を削除していく
		for(key in table){
			//日付が合っていれば
			//できれば日付のキーを汎用的なキーにしたいと思います。
			if(table[key].blogArticleTitle.blogArticleDate.text == dateText){
				tmpObj[(i++).toString()] = table[key];	//該当する記事を追加する
			}
		}
		
		retObj.table = tmpObj;	//作成したオブジェクトを返却するオブジェクトに代入する
		
		return retObj;	//作成したオブジェクトを返す
	}
	
	/*
	 * 関数名:getUserId
	 * 概要  :ユーザIDを取得する。
	 * 引数  :なし
	 * 返却値  :String:ユーザID。なければ空文字を返す
	 * 作成者:T.Masuda
	 * 作成日:2015.08.08
	 */
	this.getUserId = function(){
		//ユーザIDを取得する
		return this.json.accountHeader !== void(0)? this.json.accountHeader.user_key.value: EMPTY_STRING;
	}
	
	/*
	 * 関数名:getAuthority
	 * 概要  :ユーザ権限の値を取得する。
	 * 引数  :なし
	 * 返却値  :String:ユーザ権限の値。なければ空文字を返す
	 * 作成者:T.Masuda
	 * 作成日:2015.08.08
	 */
	this.getAuthority = function(){
		//ユーザ権限の値を取得する
		return this.json.accountHeader !== void(0)? this.json.accountHeader.authority.value: EMPTY_STRING;
	}
	
	
	//コンストラクタ部分
	//会員番号がcookie内にあれば取得する。
	//cookieを取得して連想配列形式に変換する。
	var cookie = GetCookies();
	//ユーザ情報のJSONを取得する
	this.getJsonFile('source/account.json');
	//cookie内に会員番号があれば
	if('userId' in cookie && cookie.userId != ""){
		//会員IDのcookieを取得する。
		this.json.accountHeader.user_key.value = cookie.userId;
		this.json.accountHeader.authority.text = cookie.authority;
	}
}

/*
 * クラス名:loginStateError
 * 概要  :非ログイン状態を検知したときの例外
 * 引数  :int createTagState:ログインエラー状態の整数値
 * 作成日:2015.08.01
 * 作成者:T.Masuda
 */
	function loginStateError(createTagState){
		//ログインダイアログが既に出ていなければ
		if(!($(CLASS_LOGIN_DIALOG).length)){
				
			//エラー内容の値をメンバに格納する
			this.createTagState = createTagState;
			//タイトルの文字列
			this.title = '';
			//ダイアログのメッセージ
			this.message = '';
	
			//エラー内容でダイアログの内容をを分岐させる
			switch(this.createTagState){
			//初回ログイン時
			case STATE_NOT_LOGIN:
				this.title = LOGIN;				//タイトルを「ログイン」にする
				this.message = LOGIN_MESSAGE;	//初回ログインダイアログ用のメッセージを表示するようにする
				break;				//switch文を抜ける
			//タイムアウト時
			case STATE_TIMEOUT:
				this.title = RE_LOGIN;				//タイトルを「再ログイン」にする
				this.message = RE_LOGIN_MESSAGE;	//再ログインダイアログ用のメッセージを表示するようにする
				break;				//switch文を抜ける
			}
			
			//ログインダイアログで利用するパラメータのオブジェクトを作る
			this.argumentObj = {
					data:{
						//ログイン状態
						createTagState: this.createTagState
					},config:loginDialogOption
			};
			
			//ログインダイアログを出す。
			var loginDialog = new dialogEx(URL_LOGIN_DIALOG, this.argumentObj, {});
			loginDialog.argumentObj.config[TITLE] = this.title;							//ダイアログのタイトルを変更する
			loginDialog.setCallbackCreate(whenLoginDialogCreate);				//ダイアログが作成されたときのコールバック関数を登録する。
			loginDialog.setCallbackClose(whenLoginDialogClose);					//ダイアログを閉じる時のコールバック関数を登録する。
			loginDialog.run();	//ログインダイアログを開く
			$('.loginDialogMessage', loginDialog.formDom).html(this.message);	//ダイアログのメッセージ領域を書き換える	
		}
	};
	
	//ログインダイアログの設定オブジェクト
	var loginDialogOption = {
			// 幅を設定する。
			width			: '300',
			// ダイアログを生成と同時に開く。
			autoOpen		: true,
			// Escキーを押してもダイアログが閉じないようにする。
			closeOnEscape	: false,
			// モーダルダイアログとして生成する。
			modal			: true,
			// リサイズしない。
			resizable		: false, 
			// 位置を指定する。
			position:{
				// ダイアログ自身の位置合わせの基準を、X座標をダイアログ中央、Y座標をダイアログ上部に設定する。
				my:'center center',
				// 位置の基準となる要素(ウィンドウ)の中心部分に配置する。
				at:'center center',
				// ウィンドウをダイアログを配置する位置の基準に指定する。
				of:window
			},
			// ボタンの生成と設定を行う。
			buttons:[
				         {
				        	 // OKボタンのテキスト。
				        	 text:'ログイン',
				        	 //テキストボックスでエンターキーに対応するためにクラスを付ける
				        	 class:'loginButton',
				        	 // ボタン押下時の処理を記述する。
				        	 click:function(event, ui){
				        	 	//ログイン処理に使うために入力されたログインidを取得する
				        	 	var userLoginId = $('.userName').val();
				        	 	//ログイン処理に使うために入力されたログインパスワードを取得する
				        	 	var userLoginPassword = $('.password').val();
				        	 	//入力された値が空白かどうかでログイン処理のエラーチェックを行う
				        	 	if(userLoginId != '' || userLoginPassword != '') {
				        	 		//JsonDBManagerに接続するために送信するjsonにidをセットする
				        	 		loginCreator.json.login.userName.value = userLoginId;
				        	 		//JsonDBManagerに接続するために送信するjsonにパスワードをセットする
				        	 		loginCreator.json.login.password.value = userLoginPassword;
				        	 		//JSONDBManagerによるログイン処理を行う
				        	 		loginCreator.getJsonFile(URL_GET_JSON_STRING_PHP, loginCreator.json.login, 'login');
				        	 		//会員IDをJSONから取得する
				        	 		memberInfo = loginCreator.json.login.id.text;
				        	 		//会員の権限の数値を取得する
				        	 		authority =  loginCreator.json.login.authority.text;
				        	 		//ログイン成否チェックの分岐
				        	 		//会員IDが取得できていなかった場合
				        	 		if(memberInfo == '') {
				        	 			//エラーメッセージを表示して処理をそのまま終了する
				        				alert(MESSAGE_LOGIN_ERROR);
				        			//会員IDが取得できていれば
				        	 		} else {
				        	 			//@mod 2015.0627 T.Masuda 既存のコンテンツを消去するコードを修正しました
			        					$(this).dialog(CLOSE);	//ログイン成功につきダイアログを閉じる
			        					
			        					//通常ログインかつ、管理者のIDならば
			        					if(this.instance.argumentObj.data.createTagState == STATE_NOT_LOGIN && authority == ADMIN_AUTHORITY){
			        						//pushStateをサポートしているブラウザなら
			        						if(isSupportPushState()){
			        							//管理者ページの画面遷移の履歴を追加する。
			        							history.pushState({'url':'#' + URL_ADMIN_PAGE}, '', location.href);
			        						//URLハッシュを利用する
			        						} else {
			        							//管理者ページへ移動する
			        							location.href = URL_ADMIN_PAGE; 
			        						}
			        					//通常ログインかつ、管理者のIDでなければ
			        					} else if(this.instance.argumentObj.createTagState == STATE_NOT_LOGIN && authority != ADMIN_AUTHORITY){
			        						//pushStateをサポートしているブラウザなら
			        						if(isSupportPushState()){
			        							//会員トップページの画面遷移の履歴を追加する。
			        							history.pushState({'url':'#' + URL_MEMBER_PAGE}, '', location.href);
			        						//URLハッシュを利用する
			        						} else {
			        							//会員トップページへ移動する
			        							location.href = URL_MEMBER_PAGE; 
			        						}
			        					}
										
										//画面をリロードする。
										location.reload();
				        	 		}
				        	 	//ログイン情報の入力を求めるアラートを出す
				        	 	} else {
									alert(errorMessages[3]);
				        	 	}
				        	 }
				         },
				         {
				        	 // キャンセルボタンのテキスト。
				        	 text:'キャンセル',
				        	 // ボタン押下時の処理を記述する。
				        	 click:function(event, ui){
				        		 //トップページに戻る
				        		 callPage('index.php');
				        		 // ダイアログを消去する。
				        		 $(this).dialog('close');
				        	 }
				         }
			         ]
		};
	
	/*
	 * 関数名:whenLoginDialogCreate
	 * 概要  :ログインダイアログが作られたときのコールバック関数
	 * 引数  :なし
	 * 戻り値:なし
	 * 作成日:2015.08.01
	 * 作成者:T.Masuda
	 */
	function whenLoginDialogCreate(){
		//文字サイズを小さめにする。
		$(this).next().css('font-size', '0.5em');
		loginCreator = new createTag();	//ログインダイアログ用のcreateTagクラスインスタンスを生成する
		loginCreator.getJsonFile(PATH_LOGIN_DIALOG_JSON);	//ログインダイアログのJSONを開く
		loginCreator.getJsonFile('source/memberPage.json');	//会員ページのJSONを取得する
		//ログインダイアログの中にあるテキストボックスにフォーカスしているときにエンターキー押下でログインボタンを自動でクリックする
		enterKeyButtonClick('.userName, .password', '.loginButton');
		$('.loading').hide();	//例外で消えなかったローディング画面を消す。
	}
	
	/*
	 * 関数名:whenLoginDialogClose
	 * 概要  :ログインダイアログが閉じられるときのコールバック関数
	 * 引数  :なし
	 * 戻り値:なし
	 * 作成日:2015.08.01
	 * 作成者:T.Masuda
	 */
	function whenLoginDialogClose(){
		loginCreator = null;	//createTagインスタンスを削除する
		this.instance.destroy();			//ダイアログを完全に破棄する
	}