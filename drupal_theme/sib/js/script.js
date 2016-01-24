(function ($) {
	function RecalcMenuLine(){
		var active = $("nav ul.nav > li.active");
		
		if (active.length > 0){
			active = active.offset();
			var left = active.left;
			var window_width = $(window).width();	
			var offset=-2000+left+($("ul.nav > li.active").width()/2);
			$(".line-bg").css({"background-position": offset+"px 47px"});
			var scrollHeight = $(window).scrollTop() + $(window).height();
		} else {
		
			$(".line-bg").css({"background-position": " -2015px 47px"});
		}
		
	}
	$(window).load(function(){
		RecalcMenuLine();
	});
	$(window).resize(function(){
		RecalcMenuLine();
	});
	
	$(document).ready(function(){
		$("#block-block-2 h3").click(function(){
			$(this).next(".left-info-item").toggle(700);
		});
	});
}(jQuery));