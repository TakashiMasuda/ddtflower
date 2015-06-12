# ユーザIDはセッションからとりましょう#-----------------------------------------------------# ヘッダ部分(ユーザ番号と名前)SELECT 	*FROM	user_infWHERE	id = {{ユーザID}}#-----------------------------------------------------#-----------------------------------------------------# 告知領域SELECT 	message_title	,message_contentFROM	message_infWHERE	id IN (		SELECT			message_key		FROM			message_to		WHERE			user_key = {{ユーザID}}		AND			check_datetime IS NULL	)ORDER BY send_date DESC#-----------------------------------------------------#-----------------------------------------------------# 予約済(受講済)授業SELECT 	user_classwork_cost	,user_classwork_cost_aj	,user_classwork.get_point AS get_point	,flower_cost	,flower_cost_aj	,user_classwork.extension_cost AS extension_cost	,lesson_name	,school_name	,start_time	,end_time	,time_table_day.lesson_date AS lesson_date	,lesson_point_rate.point_rate AS point_rate	,students	,order_studentsFROM 	user_classworkINNER JOIN	classworkON	classwork.id = user_classwork.classwork_keyAND		user_classwork.user_key = {{user_key}}INNER JOIN 	lesson_infON	lesson_inf.id = classwork.lesson_keyINNER JOIN	school_infON		school_inf.id = lesson_inf.school_keyINNER JOIN	time_table_dayON	time_table_day.id = classwork.time_table_day_keyINNER JOIN	timetable_infON	timetable_inf.id = time_table_day.timetable_keyINNER JOIN	lesson_point_rateON	lesson_point_rate.lesson_key = lesson_inf.id#-----------------------------------------------------