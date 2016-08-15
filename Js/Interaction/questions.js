$(function() {
	// 从后台获取有关的选择题题目以及选项
	var url = "";
	template = "";
	$.get(url, function(data) {
		template = data.template;
		var content = data.content;
		for(var i=1; i<=7; i++) {
			var topic = "#topic_" + i;	// 获取每个选择题前面的ID
			// var title_id = data[0].content[i-1].id;
			$(topic).find('h4').html(content[i-1].question);    // 获取题目的内容
			$(topic[i]).find('input[type="radio"]').each(function(index, el) {  // 获取选项
				$(this).val(content[index].options);
				$(this).next().html(content[index].options);    // 往label中填写数据
			});

		}
	});

	// 将填好后的数据发送到后台
	$('form').submit(function(event) {
		var field = $('form').serializeArray();
		$.each(field, function(index, el) {
			$.ajax({
				url: '',
				type: 'GET',
				dataType: 'json',
				data: {"template": template, "name": el.name, "answer": el.value},
				success: function(msg) {
					alert("数据提交成功！");
				},
				error: function() {
					alert("数据提交失败！");
				}
			})
		});

	});
})
