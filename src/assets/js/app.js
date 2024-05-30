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
                spaceBetween: 41,
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
                spaceBetween: 41,
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
                spaceBetween: 41,
            },
            1200: {
                slidesPerView: 3,
                spaceBetween: 41,
            },
        },
    });

    $('.sales .slider-wrapper').mouseenter(function () {
        $('.sales .section-title__wrapper').addClass('active');
    });
    $('.sales .slider-wrapper').mouseleave(function () {
        $('.sales .section-title__wrapper').removeClass('active');
    });


});

$(() => {
    var offerBgSlider = new Swiper(".js-offer-bg-slider", {
        speed: 1200,
        loop: true,
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        slidesPerView: 1,
        spaceBetween: 40,
        allowTouchMove: false,
        navigation: {
            nextEl: ".js-offer-slider-next",
            prevEl: ".js-offer-slider-prev",
        },
    });
    var offerSlider = new Swiper(".js-offer-slider", {
        speed: 1200,
        loop: true,
        slidesPerView: 1,
        spaceBetween: 40,
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        allowTouchMove: false,
        navigation: {
            nextEl: ".js-offer-slider-next",
            prevEl: ".js-offer-slider-prev",
        },
    });
});

$(() => {
    $(".js-button-anchor").click(function(e) {
        e.preventDefault();
        var aid = $(this).attr("data-to");
        $('html,body').animate({scrollTop: $(aid).offset().top},1300);
    });
    $('.menu').on('click', '.js-button-anchor', function (e) {
        e.preventDefault();
        $('body').removeClass('is-loading');
        $('.burger').removeClass('active');
        $('.menu').removeClass('active');

        var aid = $(this).attr("data-to");

        setTimeout(function () {
            $('html,body').animate({scrollTop: $(aid).offset().top},1300);
        }, 500);
    });
});

$(() => {
    $('.js-tel').mask("+7 (999) 999-99-99");
});


// header
$(() => {
    $('.js-toggle-menu').on('click', function () {
        $(this).toggleClass('active');
        $('body').toggleClass('is-loading');
        $('.menu').toggleClass('active');
    });
});


// header
$(() => {
    $('.js-toggle-contacts').on('click', function () {
        $(this).toggleClass('active');
        $('.contacts-info__wrapper').toggleClass('wide');
        // $('.menu').toggleClass('active');
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

$(window).on('load', function () {
    function initHeader() {
        if ($(window).width() < 1010) {
            $('.header-subtitle').appendTo('.header-mobile-top__text');
            $('.header-socials').appendTo('.header-mobile-top__socials');
            $('.header-nav').appendTo('.menu__in');
            $('.header-contacts').appendTo('.menu__in');
            // $('.header-messenger__list').appendTo('.header-menu__messengers');

            // $('.profile-header__tel').appendTo('.profile-header__menu-in');
        } else {
            $('.header-subtitle').appendTo('.header-subtitle__wrapper');
            $('.header-socials').appendTo('.header-socials__wrapper');
            $('.header-nav').appendTo('.header-nav__container');
            $('.header-contacts').appendTo('.header-contacts__wrapper');
            // $('.header-nav').appendTo('.header-nav__wrapper');
            // $('.header-messenger__list').appendTo('.header-messenger__wrapper');

            // $('.profile-header__tel').appendTo('.profile-header__tel-wrapper');
        }
    }

    initHeader();

    var oldWidth = $(window).width();
    $(window).bind('resize', function () {


        var nw = $(window).width();

        // console.log(nw);
        if (oldWidth !== nw) {
            initHeader();
        }
        oldWidth = nw;
    });
})


