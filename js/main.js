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



jQuery(document).ready(function($) {

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
	    
	    $('.hero-item').removeClass('fadeOutLeft fadeInRight');
	    
	    $('.hero-item.active').removeClass('active fadeInLeft').addClass('fadeOutRight');
		
		$('[data-id="' + currentSlideCount + '"]').removeClass('fadeOutRight').addClass('active fadeInLeft');
	
		console.log(currentSlideCount);
		console.log('test');
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
	    
	    $('.hero-item').removeClass('fadeOutRight fadeInLeft');
	    
	    $('.hero-item.active').removeClass('active fadeInRight').addClass('fadeOutLeft');
		
		$('[data-id="' + currentSlideCount + '"]').removeClass('fadeOutLeft').addClass('active fadeInRight');
	
		console.log(currentSlideCount);
	}



    $('.previous-hero').click(function () {
        changePrev();
        return false;
    });
    
    $('.next-hero').click(function () {
      changeNext();
      return false;
    });

  
});    