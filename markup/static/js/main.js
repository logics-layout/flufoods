$(document).on('click', '[href="#"]', function(e) {
    return e.preventDefault();
});

var headerDesktop = $('.header'),
    headerDesktopClassNameActive = 'active';

$('.page__content').on({
    scroll: function () {
        var scrollTop = $(this).scrollTop();
        if(scrollTop > 0){
            headerDesktop.addClass(headerDesktopClassNameActive)
        }else{
            headerDesktop.removeClass(headerDesktopClassNameActive);
        }
    }
});
$(window).on({
    load: function () {
        checkFooterHeight();
    },

    resize: function () {
        checkFooterHeight();
    }
});

if ($.fn.slick) {
//     $bottom__slider.slick({
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         dots: true,
//         arrows: true,
//         autoplay: true,
//         autoplaySpeed: 4000,
//         adaptiveHeight: true,
//         appendDots: '.header-bottom__slider-dots',
//         prevArrow: '.header-bottom__slider-arrows.previous',
//         nextArrow: ".header-bottom__slider-arrows.next",
//     }).on('afterChange', checkBg);
//     checkBg();
//
//     $('.header__slider-el').slick({
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         dots: true,
//         arrows: true,
//         prevArrow: $('.header__slider .slick-prev'),
//         nextArrow: $('.header__slider .slick-next'),
//         appendDots: $('.header__sliderDots')
//         // autoplay: true,
//         // autoplaySpeed: 3000,
//         // adaptiveHeight: true,
//     });
//
//     var itemDetaliSlider = $('.item-detali-slider-view');
//     var itemDetaliSliderPreview = $('.item-detali-slider-preview');
//     itemDetaliSlider.slick({
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         dots: false,
//         arrows: false,
//         infinite: false,
//         adaptiveHeight: true,
//         asNavFor: itemDetaliSliderPreview,
//         responsive: [
//             {
//                 breakpoint: 768,
//                 settings: {
//                     dots: true,
//                 }
//             },
//         ]
//         // autoplay: true,
//         // autoplaySpeed: 3000,
//         // prevArrow: "<button class='slick-prev slick-arrow'><i class='s-arrow-prev'></i></button>",
//         // nextArrow: "<button class='slick-next slick-arrow'><i class='s-arrow-next'></i></button>",
//     });
//
//     itemDetaliSliderPreview.slick({
//         slidesToShow: 4,
//         slidesToScroll: 1,
//         dots: false,
//         vertical: true,
//         verticalSwiping: true,
//         infinite: false,
//         arrows: true,
//         asNavFor: itemDetaliSlider,
//         focusOnSelect: true,
//         // autoplay: true,
//         // autoplaySpeed: 3000,
//         prevArrow: "<button class='slick-prev slick-arrow'><svg class='icon__arrow-top' width='19px' height='19px'><use xmlns:xlink='http://www.w3.org/1999/xlink' xlink:href='#arrowTop'></use></svg></button>",
//         nextArrow: "<button class='slick-next slick-arrow'><svg class='icon__arrow-bottom' width='19px' height='19px'><use xmlns:xlink='http://www.w3.org/1999/xlink' xlink:href='#arrowBottom'></use></svg></button>",
//         responsive: [
//         //     {
//         //         breakpoint: 768,
//         //         settings: {
//         //             dots: false,
//         //             arrows: false,
//         //         }
//         //     },
//         ]
//     });
}
// стилизация селектов
if($.fn.selectpicker){
    $('select').selectpicker({
        style: '',
        size: 7
    }).selectpicker('setStyle', 'btn', 'remove');
}

// карта
if (typeof google !== "undefined" && google !== null) {
    var MapView = $(".maps-block").get(0);
    var latlng = new google.maps.LatLng(52.4350352,103.987996,8.72);
    var settings = {
        zoom: 9,
        center: latlng,
        mapTypeControl: true,
        mapTypeControlOptions: {style: google.maps.MapTypeControlStyle.DROPDOWN_MENU},
        navigationControl: true,
        navigationControlOptions: {style: google.maps.NavigationControlStyle.SMALL},
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(MapView, settings);

    var IrkCe = new google.maps.LatLng(52.2897502,104.339428);
    var parkingMarker = new google.maps.Marker({
        position: IrkCe,
        map: map,
        animation: google.maps.Animation.DROP,
        title:"Автосвет Ксенон Сервис в Иркутске",
        zIndex: 1
    });
}


// input style
function checkFocusInput(e) {
    var classNameInputAnimActive = 'input-anim_active',
        typeEvent = e?e.type:false,
        input = null;

    if(typeEvent!==false){
        input = $(this);
    }else{
        input = $('.input-anim').find('.form-control');
    }

    input.each(function () {
        var _this = $(this),
            parent = _this.closest('.input-anim'),
            value = _this.val().length;

        if(parent[0]){
            if(typeEvent == 'focus' || value > 0){
                parent.addClass(classNameInputAnimActive)
            }else if(typeEvent == 'blur' && value == 0){
                parent.removeClass(classNameInputAnimActive)
            }
        }
    });
}

checkFocusInput();
$('.form-control').on('focus blur', checkFocusInput);

$('[data-toggle="popover"]').popover({
    trigger: 'hover',
    // trigger: 'click',
    container: 'body'
});

var IScrollFn = function () {
    if (typeof IScroll !== "undefined" && IScroll !== null){
        $('.IScroll').each(function () {
            var visible = $(this).find('.iScrollIndicator:visible');
            new IScroll(this, {
                scrollbars: true,
                mouseWheel: true,
                interactiveScrollbars: true,
                shrinkScrollbars: 'scale',
                fadeScrollbars: true,
                preventDefault: false
            });
            if(visible[0]){
                visible.parent().siblings('.iScrollLoneScrollbar').remove();
            }
        });
    }
};
IScrollFn();

var priceCountUp = $('.priceCountUp');
options = {
    useEasing: true,
    useGrouping: true,
    separator: '',
    decimal: '.',
    prefix: '',
    suffix: ''
};
priceCountUp.each(function () {
    demo = new CountUp(this, 0, 1350, 0, 1, options);
    demo.start();
});

