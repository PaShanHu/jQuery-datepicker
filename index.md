---
layout: default
title: jQuery插件-datepicker
postDate: 2013-11-27
tags: [datepicker, jquery, plugin]
extraCss: [/css/datepicker.css, /css/jqueryplugin.css]
extraJs: [/js/lib/jquery.datepicker.js]
---

在用过一些jquery的日期插件后，萌发了自己写一个的想法，好吧，是在别人的基础上进行扩充与改造。 ;-)

首先感谢 **najlepsiwebdesigner**的**[foundation-datepicker](https://github.com/najlepsiwebdesigner/foundation-datepicker)**，这是本插件的基础，我在这个基础上添加删减了一些功能，重新写了一个皮肤，然后有了本插件。

本插件（datepicker）是jquery插件，与jquery协同工作，主要是一个弹出框，共用户选择日期，并为日期提供格式化，提高用户的日期输入体验，一定程度防止非法输入。另外，插件比一般日期插件增加了直接选择月份、年份的功能，这算是*亮点*。

####Plugin Info（插件信息）

	name:jQuery.datepicker.js,
	author:Jerry Y,
	version:0.0.1,
	date:2013-10-10,
	description:datepicker,jquery,
	website:https://github.com/PaShanHu/jQuery-datepicker/tree/gh-pages

####Example（实例）

默认：`$('#example1').datePicker();`

<p>默认：<input type='text' class='date-picker' id='example1' /></p>

- - -

参数设置：

	$('#example2').datePicker({
        language: 'en',
        output:'zh-CN',
        start: new Date(2013,10,20),
        end: new Date()
    });

<p>参数设置：<input type='text' class='date-picker' id='example2' /></p>

####Get Started（初步使用）

1.  引入css：

	`<head></head>`标签中加入：`<link rel="stylesheet" type="text/css" href="css/datepicker.css" />`

2.  引入jquery和插件：

		<script type="text/javascript" src='/js/jquery.min.js'></script>
		<script type="text/javascript" src='/js/jquery.datepicker.js'></script>

3.  使用插件：`$el.datePicker();`

####设置参数

因为插件很简单，所以直接在代码中说明：

	$.fn.datePicker.defaults={
		width: '220px',//控件宽度
		language: 'zh-CN',//语言，可为en
		output:'standard',//输出，可为zh-CN，en
		start: null,//开始日期
		end: null//结束日期
	};

####下一版本

增加主题或者皮肤选项；添加选择等事件。

如果有问题或建议，请发邮件我。谢谢。
<pashanhu6@hotmail.com>