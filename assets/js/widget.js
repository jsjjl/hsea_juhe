$(function(){
	


$(window).scroll(function(){
    if($(window).scrollTop()>100)
    {
        $("#wgtop").fadeIn(500);
    }
    else
    {
        $("#wgtop").fadeOut(500);
    }
});

$("#wgtop a").click(function(){
    $('body,html').animate({scrollTop:0},100);
    return false;
});

var isonwgbox = 0;
$("#wgqq>a, #wgwx>a").hover(function(){ 
    $('.wgbox').hide();    
    $(this).siblings('.wgbox').show();
}, function(){
    var _siblings = $(this).siblings('.wgbox');
    setTimeout(function(){      
        if(isonwgbox == 0) _siblings.hide();
    },500);
});

$(".wgbox").hover(function(){ 
    isonwgbox = 1;
}, function(){
    isonwgbox = 0;
    $(this).hide();
});
	
});