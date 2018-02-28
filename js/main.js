$(document).ready(function(){

	

        
    var transEffect = Barba.BaseTransition.extend({
            start: function(){
              this.newContainerLoading.then(val => this.fadeInNewcontent($(this.newContainer)));
            },
            fadeInNewcontent: function(nc) {
              nc.hide();
              var _this = this;
              $(this.oldContainer).fadeOut(1000).promise().done(() => {
                nc.css('visibility','visible');
                nc.fadeIn(1000, function(){
                  _this.done();
                })
              });
            }
        });
        Barba.Pjax.getTransition = function() {
          return transEffect;
        }
        Barba.Dispatcher.on('transitionCompleted', function(currentStatus, oldStatus, container) {
		    var header = $(".hero-left-header");
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 400) {
            header.addClass("attached");
        } else {
            header.removeClass("attached");
        }
    });

    // $('.menuTrigger, .closeMenu').click(function(){
    //    $('.main-menu').toggleClass('menu-active', 'menu-active-out');
    // });

    $('.menuTrigger').click(function(){
    	$('#main').velocity({ filter: "blur(12px)" });
    	$('body').addClass('menu-open');
        /*
$('.main-menu').velocity({
            transform: "translateY(200px)",
            visibility: 'visible'
        });
*/
        $('.main-menu').removeClass('menu-active menu-active-out').addClass('menu-active');
    });

    $('.closeMenu, .menu-links a').click(function(){
        $('.main-menu').addClass('menu-active-out');
       $('#main').velocity("reverse");
        $('body').removeClass('menu-open');
        
        /*
$('.main-menu').velocity({
            transform: 'translateY(-100%)',
            visibility: 'hidden'
        });
*/
    });



  /*
 var interval;
   interval = setInterval(function(){
     changeNext();
   }, 2000);
*/
  
	var slideCount = $('.right .item').length; // not really using now
  //console.log(slideCount);
  
  var currentSlideCount = 1;
  console.log(currentSlideCount);


    function changeNext() {
		if(currentSlideCount < 3) {
	      currentSlideCount += 1;
	    }
	    else {
	      currentSlideCount = 1;
	    }

        // $('.hero-item').removeClass('fadeOutLeft fadeInRight');
        //
        // $('.hero-item.active').removeClass('active fadeInLeft').addClass('fadeOutRight');
        //
		// $('[data-id="' + currentSlideCount + '"]').removeClass('fadeOutRight').addClass('active fadeInLeft');

		console.log(currentSlideCount);
        $('.currentSlideCount').html('0' + currentSlideCount);
    }

    function changePrev() {
		if(currentSlideCount == 1) {
	      currentSlideCount = 3;
	    } else if(currentSlideCount > 1) {
		    currentSlideCount -= 1;
	    }
	    else {
	      currentSlideCount == 1;
	    }

        // $('.hero-item').removeClass('fadeOutRight fadeInLeft');
        //
        // $('.hero-item.active').removeClass('active fadeInRight').addClass('fadeOutLeft');
        //
		// $('[data-id="' + currentSlideCount + '"]').removeClass('fadeOutLeft').addClass('active fadeInRight');
        //
		// console.log(currentSlideCount);
		$('.currentSlideCount').html('0' + currentSlideCount);
    }



    $('.previous-hero').click(function () {
        changePrev();
        return false;
    });

    $('.next-hero').click(function () {
      changeNext();
      return false;
    });


    $('.hero-content-wrap').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        speed: 800,
       // fade: true,
        adaptiveHeight: true,
        // prevArrow: $('.previous-hero'),
        // nextArrow: $('.next-hero'),
    });


    $('.hero-item-medias').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        // arrows: true,
		speed: 800,
		fade: true,
        adaptiveHeight: true,
        asNavFor: '.asnavForClass',
        prevArrow: $('.previous-hero'),
        nextArrow: $('.next-hero'),
		//rtl: true,
    });
    
		}); //// end barba dispatcher
        
        Barba.Pjax.start();
        Barba.Prefetch.init();

    

}); 

