$(document).ready(function(){
    $('.carousel__inner').slick({
        dots: true,
        speed: 1200,
        adaptiveHeight: true,
        autoplay: true,
        arrows: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="/src/icons/left_black.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="/src/icons/right_black.png"></button>',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    dots: true,
                    arrows: true
                }
            },
            {
                breakpoint: 1000,
                settings: {
                    dots: true,
                    arrows: false
                    
                }
            }, 
            {
                breakpoint: 600,
                settings: {
                    dots: true,
                    arrows: false
                }
            },
            {
                breakpoint: 576,
                settings: {
                    dots: true,
                    arrows: false
                }
            }
        ]
        });

    var siteCarousel = function () {
		
		if ( $('.nonloop-feeds').length > 0 ) {
			$('.nonloop-feeds').owlCarousel({
		    center: false,
		    items: 2,
		    loop: true,
				stagePadding: 0,
				autoplay: true,
            autoHeight:true,
		    margin: 20,		    
		    dots: true,			
		    responsive:{
	        600:{
	        	margin: 20,
	        	stagePadding: 0,
	          items: 1
	        },
	        1000:{
	        	margin: 20,
	        	stagePadding: 0,
	          items: 2
	        }
	        
		    }
			});
		}

 		if ( $('.slide-one-item').length > 0 ) {
			$('.slide-one-item').owlCarousel({
		    center: false,
		    items: 2,
		    loop: true,
				stagePadding: 0,
		    margin: 0,
		    autoplay: true,
		    pauseOnHover: false,
		    animateOut: 'fadeOut',
    		animateIn: 'fadeIn',
            nav: false
		    
  		  });
	  }
      
      owl.on('mousewheel', '.owl-stage', function (e) {
        if (e.deltaY>0) {
            owl.trigger('next.owl');
        } else {
            owl.trigger('prev.owl');
        }
        e.preventDefault();
    });
	}; 
	siteCarousel(); 
    
    
    // Smooth scroll and pageup

    $(window).scroll(function () {
        if ($(this).scrollTop() > 900) {
            $('.pageup').fadeIn();
        } else {
            $('.pageup').fadeOut();
        }
    });

    $("a[href=#up]").click(function (){ 
        console.log("Fsdfsfsf")     //для плавного скролла вверх по page up
        const _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
    });
 // Pageup end

     //адаптивное меню - не рабоатает??
     function myFunction() {
        var x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
            x.className += " responsive";
        } else {
            x.className = "topnav";
        }
    }



/*     window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
        if (document.body.scrollTop > 120 || document.documentElement.scrollTop > 120) {
            document.getElementById("PageUp").style.display = "block";
        } else {
            document.getElementById("PageUp").style.display = "none";
        }
}

    // When the user clicks on the button, scroll to the top of the document
    function topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    } */






   /*  jarallax(document.querySelectorAll('.jarallax'), {
        speed: 0.2
    });
     */
    /* var jarallax = new Jarallax();
    jarallax.addAnimation('.Prices-thumbnail bg-img jarallaxs, [{progress:'0%', top:'100%'},{progress:'100%', top:'0%'}]); */
        

    // Magnific Popup: image zoom effect
    //***********************************


/*     $('.portfolio-img').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		closeBtnInside: false,
		mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
		image: {
			verticalFit: true
		},
		zoom: {
			enabled: true,
			duration: 300 // don't foget to change the duration also in CSS
		}
	}); */

/*     $('.portfolio-img').magnificPopup({
            type: 'image',
            // closeOnContentClick: true,
            modal: true,
            closeBtnInside: false,
            mainClass: 'mfp-with-zoom mfp-img-mobile',
            image: {
                verticalFit: true,
                titleSrc: function(item) {
                    return item.el.attr('title') + ' &middot; <a class="image-source-link" href="'+item.el.attr('data-source')+'" target="_blank">image source</a>';
                }
            },
            zoom: {
                enabled: true
            }
        }); */

    new WOW().init();

});
      

   
