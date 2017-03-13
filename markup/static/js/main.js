$(document).on('click', '[href="#"]', function(e) {
    return e.preventDefault();
});
var linkTop = $('.footer__scrollTop');
linkTop.click(function () {
    $('html, body').animate({ scrollTop: 0 }, 500);
});
$(window).on({
    load: function () {
        checkFooterHeight();
        // checkHeaderFix();
    },
    scroll: function () {
        var scrollTop = $(window).scrollTop();
        if(scrollTop > 200){
            linkTop.addClass('active');
        }else{
            linkTop.removeClass('active');
        }
        // checkHeaderFix();
    },
    resize: function () {
        // checkHeaderFix();
        checkFooterHeight();
    }
});
// $('#callback').modal('show')
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
//
if($.fn.selectpicker){
    $('select').selectpicker({
        style: '',
        size: 7
    }).selectpicker('setStyle', 'btn', 'remove');
}
// if ($.fn.magnificPopup) {
//     var magnificPopupObj = {
//         delegate: 'a',
//         type: 'image',
//         tLoading: "",
//         mainClass: "",
//         gallery: {
//             enabled: true,
//             navigateByImgClick: true,
//             preload: [0, 1]
//         },
//         image: {
//             tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
//         },
//         iframe: {
//             // markup: '<div class="mfp-iframe-scaler">' +
//             // '<div class="mfp-close"></div>' +
//             // '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
//             // '</div>', // HTML markup of popup, `mfp-close` will be replaced by the close button
//
//             patterns: {
//                 youtube: {
//                     index: 'youtube.com/', // String that detects type of video (in this case YouTube). Simply via url.indexOf(index).
//
//                     id: 'v=', // String that splits URL in a two parts, second part should be %id%
//                     // Or null - full URL will be returned
//                     // Or a function that should return %id%, for example:
//                     // id: function(url) { return 'parsed id'; }
//
//                     src: '//www.youtube.com/embed/%id%?autoplay=1' // URL that will be set as a source for iframe.
//                 }
//             }
//         }
//     };
//
//     $('.magnificPopup').each(function () {
//         $(this).magnificPopup(magnificPopupObj);
//     })
// }

var bottomToggleMenu = $('#bottomToggleMenu'),
    pageWrapper = $('.page__wrapper'),
    pageWrapperClassShow = 'page__wrapper_show';

bottomToggleMenu.change(function () {
    var checked = this.checked;

    if(checked){
        pageWrapper.addClass(pageWrapperClassShow)
    }else{
        pageWrapper.removeClass(pageWrapperClassShow)
    }
});









