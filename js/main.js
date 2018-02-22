$(document).ready(function(){


    var header = $(".hero-left-header");
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 500) {
            header.addClass("attached");
        } else {
            header.removeClass("attached");
        }
    });

    $('.menuTrigger, .closeMenu').click(function(){
       $('.main-menu').toggleClass('menu-active');
    });


}); //end doc ready