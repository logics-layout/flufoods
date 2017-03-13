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
    $('.header__slider-el').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: true,
        prevArrow: $('.header__slider .slick-prev'),
        nextArrow: $('.header__slider .slick-next'),
        appendDots: $('.header__sliderDots')
        // autoplay: true,
        // autoplaySpeed: 3000,
        // adaptiveHeight: true,
    });
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
if ($.fn.magnificPopup) {
    var magnificPopupObj = {
        delegate: 'a',
        type: 'image',
        tLoading: "",
        mainClass: "",
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1]
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
        },
        iframe: {
            // markup: '<div class="mfp-iframe-scaler">' +
            // '<div class="mfp-close"></div>' +
            // '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
            // '</div>', // HTML markup of popup, `mfp-close` will be replaced by the close button

            patterns: {
                youtube: {
                    index: 'youtube.com/', // String that detects type of video (in this case YouTube). Simply via url.indexOf(index).

                    id: 'v=', // String that splits URL in a two parts, second part should be %id%
                    // Or null - full URL will be returned
                    // Or a function that should return %id%, for example:
                    // id: function(url) { return 'parsed id'; }

                    src: '//www.youtube.com/embed/%id%?autoplay=1' // URL that will be set as a source for iframe.
                }
            }
        }
    };

    $('.magnificPopup').each(function () {
        $(this).magnificPopup(magnificPopupObj);
    })
}

// $('.catalog-category-list a').click(function(e){
//     var _this = $(this),
//         list = _this.next('ul'),
//         parent = _this.parent(),
//         className = 'active',
//         time = 300;
//
//     if(list[0]){
//         e.preventDefault();
//         parent.toggleClass(className);
//         list.slideToggle(time);
//
//         parent.siblings().removeClass(className)
//             .find('li').removeClass(className)
//             .end()
//             .find('ul').slideUp(time);
//     }
// });
//
// var catalogFilterListToggleItem = $('.catalog-filter-list-toggle-item input');
//
// catalogFilterListToggleItem.change(function(){
//     var selector = catalogFilterListToggleItem.filter(':checked').val(),
//         el = $("#"+selector),
//         time = 300;
//     if(el[0]){
//         console.log(el);
//         el.siblings().fadeOut(time, function(){
//             el.fadeIn(time);
//         });
//     }
// });

$('.collapse').find('.collapse-toggle').click(function(e){
    e.preventDefault();
    var _this = $(this),
        content = _this.next(),
        parentContent = _this.closest('.collapse-toggle-content')[0]?_this.closest('.collapse-toggle-content'):_this.closest('.collapse'),
        time = 300,
        className = 'active';

    if(content.hasClass('collapse-toggle-content')){
        content.slideToggle(time);
        _this.parent().toggleClass(className);

        parentContent.find('.collapse-toggle-content').not(content).stop().slideUp(time);
        parentContent.find('.collapse-toggle').not(_this).parent().removeClass(className);
    }
});

var tableAlertData = $('.table-alert-data'),
    tableAlertDataTable = $('.table-alert-data__table'),
    tableAlertDataItem  = $(".table-alert-data__item"),
    setTimeoutTableAlertDataTable = null;
window.test = true;

tableAlertDataTable.find('tbody > tr').mouseenter(function(){
    var _this = $(this),
        item = $("#"+_this.attr('data-item'));
    clearTimeout(setTimeoutTableAlertDataTable);
    setTimeoutTableAlertDataTable = setTimeout(function () {
        if(window.test && item[0]){
            var offsetTr = _this.offset().top,
                offsetMain = tableAlertData.offset().top,
                offsetTop = offsetTr-offsetMain;
            _this.addClass('active').siblings().removeClass('active');
            item.css({
                'top': offsetTop+"px",
                paddingTop: _this.height()+"px"
            }).addClass('active').siblings().removeClass('active');
        }
    }, 400);
});

tableAlertData.mouseenter(function () {
    window.test = true;
}).mouseleave(function () {
    tableAlertDataItem.add($(this).children()).removeClass('active');
    window.test = false;
});
tableAlertDataItem.mouseleave(function () {
    var _this = $(this),
        id = _this.attr('id');
    $(this).add('[data-item="'+id+'"]').removeClass('active');
});

var videoBlock = $('.videoBlock'),
    videoBlockLabel = $('.videoBlock__label'),
    videoBlockIframe = $('.videoBlock__main-iframe');

videoBlockLabel.click(function(){
    var _this = $(this);

    _this.addClass('active').siblings().removeClass('active');
    var iframe = _this.find('iframe');
    if(iframe[0]){
        videoBlockIframe.attr('src', iframe.attr('src'));
    }
});

if($.fn.mCustomScrollbar){
    var barScroll__content = $(".barScroll__content").mCustomScrollbar({
        axis:"x",
        autoExpandScrollbar:true,
        advanced:{autoExpandHorizontalScroll:true},
        mouseWheel: {
            // enable: false,
        }
    });

    var scrollLeft = 0;
    $('.barScroll__btn').click(function () {
        var _this = $(this);
        // console.dir(barScroll__content.get(0).mcs);
        if(_this.hasClass('barScroll__btn_left')){
            scrollLeft -= 400;
        }else{
            scrollLeft += 400;
        }

        barScroll__content.mCustomScrollbar("scrollTo", scrollLeft);
    });
}
