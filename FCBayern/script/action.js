$('.lang_box a').click(function(){
    $('.lang').show()
});
$('.lang a').click(function(){
    $('.lang').hide()
});

$('.gnb > li').mouseleave(function(){
    $('.lnb').stop().slideUp();
});

$('.gnb > li').mouseenter(function(){
    $('.lnb').stop().slideUp()
    $(this).children('.lnb').stop().slideDown()  
});

$('.gnb .lnb').mouseleave(function(){
    $('.lnb').stop().slideUp()    
});