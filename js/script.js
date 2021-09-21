var scrolled;
window.onscroll = function() {
    scrolled = window.pageYOffset || document.documentElement.scrollTop;
    if(scrolled > 100){
        $(".header").css({"background": "#333"})
        $(".header").css({"transition": "background 0.5s"})
    }
    if(100 > scrolled){
        $(".header").css({"background": "transparent"}) 
        $(".header").css({"transition": "background 0.5s"})      
    }
}

// buttom up //
$('body').append('<div class="upbtn"></div>');
$(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
        $('.upbtn').css({
            transform: 'scale(1)'
        });
        } else {
        $('.upbtn').css({
            transform: 'scale(0)'
        });
    }
});
$('.upbtn').on('click',function() {
    $('html, body').animate({
        scrollTop: 0
    }, 500);
    return false;
});
