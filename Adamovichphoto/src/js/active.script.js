(function ($) {
    'use strict';

    var adamovichphoto_window = $(window);

 // *********************************
    // :: 5.0 Masonary Gallery Active Code
    // *********************************

   /*  if ($.fn.imagesLoaded) {
        $('.portfolio').imagesLoaded(function () {
            // filter items on button click
            $('.portfolio-menu').on('click', 'button', function () {
                var filterValue = $(this).attr('data-filter');
                $grid.isotope({
                    filter: filterValue
                });
            });
            // init Isotope
            var $grid = $('.portfolio').isotope({
                itemSelector: '.single_gallery_item',
                percentPosition: true,
                masonry: {
                    columnWidth: '.single_gallery_item'
                }
            });
        });
    } */


    // ****************************
    // :: 12.0 Jarallax Active Code
    // ****************************
    if ($.fn.jarallax) {
        $('.jarallax').jarallax({
            speed: 0.5
        });
    }
    
 
        // ***********************************
        // :: 6.0 Portfolio Button Active Code
        // ***********************************
        
    $('.portfolio-menu button.btn').on('click', function () {
        $('.portfolio-menu button.btn').removeClass('active');
        $(this).addClass('active');
    })

    // ***********************
    // :: 11.0 WOW Active Code
    // ***********************
/*     if (alime_window.width() > 767) {
        new WOW().init();
    }

 */

    });