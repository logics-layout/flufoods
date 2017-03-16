$(document).on('click', '[href="#"]', function(e) {
    return e.preventDefault();
});

var headerDesktop = $('.header'),
    headerDesktopClassNameActive = 'active';


function popoverFn() {
    placement = 'right';

    if($(window).width() <= 991){
        placement = 'top'
    }

    if($.fn.popover){
        $('[data-toggle="popover"]').popover('destroy').popover({
            trigger: 'hover',
            // trigger: 'click',
            placement: placement,
            container: 'body'
        });
    }
}

popoverFn();
$('.page__content').on({
    scroll: function () {
        var scrollTop = $(this).scrollTop();
        if(scrollTop > 0){
            headerDesktop.addClass(headerDesktopClassNameActive)
        }else{
            headerDesktop.removeClass(headerDesktopClassNameActive);
        }
    },
});

// шаги в корзине
var step = $('.step'),
    stepItem = step.find('.step__table-cell'),
    stepAfter = step.find('.step__after');


var stepFn = function () {
    var el = stepItem.filter('.active'),
        widthAfter = 0;

    if(el[0]){
        var offsetEl = el.offset(),
            offsetStepBlock = step.offset();

        PaddingTop = el.css('padding-left');
        PaddingBottom = el.css('padding-right');
        if(PaddingTop) widthAfter += +PaddingTop.replace('px', '');
        if(PaddingBottom) widthAfter += +PaddingBottom.replace('px', '');

        // console.log(step.offset().left-offsetEl.left);
        widthAfter += (offsetEl.left-step.offset().left)+el.width();
    }
    stepAfter.width(widthAfter);
};
stepFn();

stepItem.click(function(){
    var _this = $(this);
    _this.addClass('active').siblings().removeClass('active');
    stepFn();
});


$(window).on({
    load: function () {
        checkFooterHeight();
    },

    resize: function () {
        checkFooterHeight();
        stepFn();
        popoverFn();
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

var toggleStyle  = $('.toggle-style');
var checkToggleStyle = function () {
    toggleStyle.each(function () {
        var _this = $(this);
        var checked = _this.find('input').filter(':checked'),
            dataToggle = false,
            check = false;

        dataToggle = checked.siblings('input').data('toggle-block');
        if(dataToggle){
            dataToggle = $(dataToggle);
            dataToggle.stop().fadeOut(300);
            check = true;
        }

        dataToggle = checked.data('toggle-block');
        if(dataToggle){
            dataToggle = $(dataToggle);
            dataToggle.stop().delay(check?300:0).fadeIn(300);
        }


    });
};
checkToggleStyle();
toggleStyle.find('input').change(checkToggleStyle);


if($.fn.datetimepicker){
    $('.dateView__input').each(function () {
        var _this = $(this),
            setting = _this.data('setting'),
            opts = {
                lang: 'ru',
                format: 'd.m.Y H:i:s',
                scrollMonth: false,
                onChangeDateTime: function(dp, $input){
                    var DateFormatterO = new DateFormatter();
                    var parseDate = DateFormatterO.formatDate(dp, 'd F');
                    var parseTimeH = DateFormatterO.formatDate(dp, 'H');
                    var parseTimeI = DateFormatterO.formatDate(dp, 'i');
                    var parseTimeS = DateFormatterO.formatDate(dp, 's');

                    var dateView = $input.closest('.dateView'),
                        date = dateView.find('.dateView_view-date'),
                        H = dateView.find('.dateView_view-H'),
                        i = dateView.find('.dateView_view-i');
                        s = dateView.find('.dateView_view-s');

                    date.text(parseDate);
                    H.text(parseTimeH);
                    i.text(parseTimeI);
                    s.text(parseTimeS);
                }
            };
        _this.datetimepicker($.extend(true, setting, opts)).trigger('blur.xdsoft');
    })
}

$('.tip_input').on('focus input blur', function () {
    var el = $(this).closest('.form-group');
    if($(this).val().length>3){
        el.addClass('form-group_tipActive')
    }else{
        el.removeClass('form-group_tipActive');
    }
});