function RecalcMenuLine(){
	var active = $("ul.nav > li.active").offset();
	var left = active.left;
	var window_width = $(window).width();	
	var offset=-2000+left+($("ul.nav > li.active").width()/2);
	$(".line-bg").css({"background-position": offset+"px 47px"});
	var scrollHeight = $(window).scrollTop() + $(window).height();
	
}
$(window).load(function(){
	RecalcMenuLine();
});
$(window).resize(function(){
    RecalcMenuLine();
});