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
});


$(() => {
    $('.js-toggle-contacts').on('click', function () {
        $(this).toggleClass('active');
        $('.contacts-info__wrapper').toggleClass('wide');
    });
});

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


