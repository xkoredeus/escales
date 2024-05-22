$(window).on('load', function () {
    $('.preloader__wrapper').fadeOut();
    $('body').removeClass('is-loading');
});

$(() => {
    const hitsSlider = new Swiper(".js-hits-slider", {
        speed: 900,
        // initialSlide: 1,
        loop: true,
        navigation: {
            nextEl: ".js-hits-slider-next",
            prevEl: ".js-hits-slider-prev",
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 8,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 24,
            },
            976: {
                slidesPerView: 3,
                spaceBetween: 24,
            },
            1200: {
                slidesPerView: 3,
                spaceBetween: 41,
            },
        },
    });
    const escortSlider = new Swiper(".js-escort-slider", {
        speed: 900,
        // initialSlide: 1,
        loop: true,
        navigation: {
            nextEl: ".js-escort-slider-next",
            prevEl: ".js-escort-slider-prev",
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 8,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 24,
            },
            976: {
                slidesPerView: 3,
                spaceBetween: 24,
            },
            1200: {
                slidesPerView: 3,
                spaceBetween: 41,
            },
        },
    });
    const salesSlider = new Swiper(".js-sales-slider", {
        speed: 900,
        // initialSlide: 1,
        loop: true,
        navigation: {
            nextEl: ".js-sales-slider-next",
            prevEl: ".js-sales-slider-prev",
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 8,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 24,
            },
            976: {
                slidesPerView: 3,
                spaceBetween: 24,
            },
            1200: {
                slidesPerView: 3,
                spaceBetween: 41,
            },
        },
    })
    ;

    // $('.swiper-slide').mouseenter(function () {
    //     console.log($(this).attr('data-swiper-slide-index'));
    //     if ($(this).attr('data-swiper-slide-index') === '0' || $(this).attr('data-swiper-slide-index') === '1') {
    //         console.log('lol');
    //         $('.js-sales-section-title').addClass('hide');
    //     }
    // });
    // $('.swiper-slide').mouseleave(function () {
    //     if ($(this).attr('data-swiper-slide-index') === '0' || $(this).attr('data-swiper-slide-index') === '1') {
    //         console.log('lol');
    //         $('.js-sales-section-title').removeClass('hide');
    //     }
    // });
});

$(() => {
    $(".js-button-anchor").click(function(e) {
        e.preventDefault();
        var aid = $(this).attr("data-to");
        $('html,body').animate({scrollTop: $(aid).offset().top},1300);
    });
});

$(() => {
    $('.js-tel').mask("+7 (999) 999-99-99");
});


// header
$(() => {
    $('.js-show-menu').on('click', function () {
        $('body').addClass('fixed');
        $('.menu').addClass('active');
    });

    $('.js-hide-menu').on('click', function () {
        $('body').removeClass('fixed');
        $('.menu').removeClass('active');
    });
})

// containers
$(() => {
    $(document).on('click', function (e) {
        var container = $('.header');

        if (!container.is(e.target) && container.has(e.target).length === 0) {
            $('.layout').removeClass('blur');
            $('.header-search__base').removeClass('active');
            $('.search-dropdown').removeClass('active');
        }
    });
});


$(() => {
    $('[data-fancybox]').fancybox({
        animationDuration: 600,
        animationEffect: 'slide-in-in',
        touch: false,
        scrolling: true,
    });

    $('.js-close-fancybox').on('click', function () {
        $.fancybox.close();
    });
});



