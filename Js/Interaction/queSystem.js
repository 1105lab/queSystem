// 去除使复选框多选功能，未使用到
$(function() {
	var topic_1 = $('#topic_1');
	checkboxChecked(topic_1);
	var topic_2 = $('#topic_2');
	checkboxChecked(topic_2);
	var topic_3 = $('#topic_3');
	checkboxChecked(topic_3);
	var topic_4 = $('#topic_4');
	checkboxChecked(topic_4);
	var topic_5 = $('#topic_5');
	checkboxChecked(topic_5);
	var topic_6 = $('#topic_6');
	checkboxChecked(topic_6);
	var topic_7 = $('#topic_7');
	checkboxChecked(topic_7);
	function checkboxChecked(topic) {
		topic.find('input[type=checkbox]').bind('click', function(event) {
			topic.find('input[type=checkbox]').not(this).attr('checked', false);
		})

	}

	// ichech插件使用
	// $('[data-toggle="tooltip"]').tooltip();
});
