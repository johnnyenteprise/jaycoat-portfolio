(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner(0);
    
    
    // Initiate the wowjs
    new WOW().init();



   // testimonial carousel
   $(".testimonial-carousel").owlCarousel({
    autoplay: true,
    items: 1,
    smartSpeed: 1500,
    dots: true,
    dotsData: true,
    loop: true,
    margin: 25,
    nav : true,
    navText : [
        '<i class="bi bi-arrow-left"></i>',
        '<i class="bi bi-arrow-right"></i>'
    ]
    });


   // Back to top button
   $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
        $('.back-to-top').fadeIn('slow');
    } else {
        $('.back-to-top').fadeOut('slow');
    }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


})(jQuery);

    // Role text swapper: cycles through roles in the #role-swapper element
    (function () {
        var roles = ["Software Engineer", "Web Developer", "IT Instructor"];
        var idx = 0;
        // Ensure initial text is the first role
        var $el = $('#role-swapper');
        if ($el.length) {
            $el.text(roles[0]);
            setInterval(function () {
                idx = (idx + 1) % roles.length;
                $el.fadeOut(200, function () {
                    $el.text(roles[idx]).fadeIn(200);
                });
            }, 3000);
        }
    })();
            
