/* ---------------------------------------------
 common scripts
 --------------------------------------------- */
;(function ($) {
    'use strict'; // use strict to start

    /* === home text slide show === */
    (function () {
        $("#slideshow > div:gt(0)").hide();

        setInterval(function () {
            $('#slideshow > div:first')
                .fadeOut(1000)
                .next()
                .fadeIn(1000)
                .end()
                .appendTo('#slideshow');
        }, 3000);
    }());

    /* === Logo Carousel === */
    (function () {
        $(".client-logo").owlCarousel({
            item: 5,
            itemsDesktop: [1199, 5],
            itemsDesktopSmall: [979, 4],
            itemsTablet: [768, 3],
            autoPlay: true,
            pagination: false,
            navigation: false

        });
    }());



    /* === smooth carousel === */
    (function () {
        $("li.smooth-scroll a").bind("click", function (event) {
            var $anchor = $(this);
            var headerH = "50";
            $("html, body")
                .stop()
                .animate({
                    scrollTop: $($anchor.attr("href"))
                        .offset()
                        .top - headerH + "px"
                }, 1200, "easeOutCirc");

            event.preventDefault();

        });
    }());

    /* === sticky menu === */
    (function () {
        $(".navi").sticky({
            topSpacing: 0
        });
    }());

    /* === jquery scroll spy === */
    (function () {
        $("body").scrollspy({
            target: ".navbar-collapse",
            offset: 95
        });
    }());



})(jQuery);




jQuery(document).ready(function ($) {

    /* === img loaded js === */
    var $container = $('.project');

    $container.imagesLoaded(function () {

        $container.isotope({
            filter: '*',
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }

        });
    });

    /* === isotope js === */
    $('.project-name a').click(function () {

        $(".project-name a").removeClass("active");
        $(this).addClass("active");

        var selector = $(this).attr('data-filter');
        $container.isotope({
            filter: selector,
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
        });
        return false;
    });

});




