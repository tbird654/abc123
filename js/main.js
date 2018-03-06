$(document).ready(function(){

	 function mainJS(){
        var header = $(".home-menu-bar");
        $(window).scroll(function() {
            var scroll = $(window).scrollTop();

            if (scroll >= 50) {
                header.addClass("attached");
            } else {
                header.removeClass("attached");
            }
        });


        $('.menuTrigger').click(function(){
            $('#main').velocity({ filter: "blur(12px)" });
            $('body').addClass('menu-open');

          //  $('.main-menu').removeClass('menu-active menu-active-out').addClass('menu-active');
        });

        $('.closeMenu, .menu-links a').click(function(){
           // $('.main-menu').addClass('menu-active-out');
            $('#main').velocity("reverse");
            $('body').removeClass('menu-open');

        });

       // var slideCount = $('.right .item').length; // not really using now

        var currentSlideCount = 1;
        console.log(currentSlideCount);


        function changeNext() {
            if(currentSlideCount < 3) {
                currentSlideCount += 1;
            }
            else {
                currentSlideCount = 1;
            }

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

         AOS.init(); //init animate on scroll

     } // end mainJS

	///// ----- Barba ------------

	var transEffect = Barba.BaseTransition.extend({
		start: function(){
		  this.newContainerLoading.then(val => this.fadeInNewcontent($(this.newContainer)));
		},
		fadeInNewcontent: function(nc) {
		  nc.hide();
		  var _this = this;
		  $(this.oldContainer).fadeOut(1000).promise().done(() => {
			nc.css('visibility','visible');
            window.scrollTo(0, 0);
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
		mainJS();
	}); //// end barba dispatcher

    Barba.Dispatcher.on('newPageReady', function() {
       // window.scrollTo(0, 0);
       // $("html, body").delay(500).animate({ scrollTop: 0 }, 500);
    });

	Barba.Pjax.start();
	Barba.Prefetch.init();

});  // end doc ready

