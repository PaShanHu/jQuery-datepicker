require.config({
	baseUrl:'js/lib',
	paths:{
		'jquery':'jquery.min',
		'easing':'jquery.easing.min',
		'datepicker':'jquery.datepicker'
	},
	shim:{
		'easing':['jquery'],
		'datepicker':['jquery']
	}
}); 
require(['jquery','easing','datepicker'],function($){
	$(function(){
		var App={};
		App.$backToTop=$('.back-to-top');
		App.$toBottom=$('.to-bottom');
		$window=$(window);
		function toggleSideMenu(){
			if($window.scrollTop()>200){
				App.$backToTop.css('opacity',1);
			}else{
				App.$backToTop.css('opacity',0);
			}

			if($window.scrollTop()>$(document).height()-$window.height()-200){
				App.$toBottom.css('opacity',0);
			}else{
				App.$toBottom.css('opacity',1);
			}
		};
		toggleSideMenu();
		$window.scroll(function(){
			toggleSideMenu();
		});
		$('body').on('click','.back-to-top',function(){
			$('html,body').animate({
				scrollTop:0
			},1000,'easeInOutCirc');
		});
		$('body').on('click','.to-bottom',function(){
			$('html,body').animate({
				scrollTop:$(document).height()-$window.height()
			},1000,'linear');
		});

		/*-----date picker------*/
		$('#example1').datePicker();
        $('#example2').datePicker({
            language: 'en',
            output:'zh-CN',
            start: new Date(2013,10,20),
            end: new Date()
        });
	});
});