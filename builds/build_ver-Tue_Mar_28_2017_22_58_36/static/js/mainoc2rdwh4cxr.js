window._heightBlock = function(block) {
    var PaddingBottom, PaddingTop;
    block = $(block);
    PaddingTop = block.css('padding-top');
    PaddingBottom = block.css('padding-bottom');

    if(PaddingTop) PaddingTop = +PaddingTop.replace('px', '');
    if(PaddingBottom) PaddingBottom = +PaddingBottom.replace('px', '');
    return block.height() + PaddingTop + PaddingBottom;
};

var objFnToggle = {
    toggleMobile: function(){
        if($(window).width() > 991) return true;
        var _this = $(this),
            target = _this.data('target');

        if(target && (target = $(target))[0]){
            target.hide();
        }
        _this.off('click');
        _this.on('click', this, function () {
            $(this).toggleClass('active');
            target.slideToggle(300);
        });
    }
};

$('[data-toggle]').click(toggleFn = function(){
    var _this = $(this),
        toggle = _this.data('toggle');
    if (typeof (base = objFnToggle[toggle]) === "function") {
        objFnToggle[toggle].call(this);
    }
}).each(toggleFn);
var footerHeight = null,
    footer = $('.page__footer'),
    page__wrapper = $('.page__wrapper'),
    page__buffer = $('.page__buffer');

var checkFooterHeight = function(){
    footerHeight = _heightBlock(footer);
    page__wrapper.css("margin-bottom", "-"+footerHeight+"px");
    page__buffer.css("height", ""+footerHeight+"px");
};
checkFooterHeight();
var _fnMenuHeaderTop = function(toggle, list, slide) {
    var className, el, time;
    time = 300;
    el = toggle.closest('.mobile-list-anim');
    className = 'active';

    if (toggle.prop("checked")) {
        if(slide) list.stop().slideDown(time);
        el.add(list).addClass(className);
    } else {
        if(slide) list.stop().slideUp(time);
        el.add(list).removeClass(className);
    }
};

var menuHeaderTopToggle = $('#bottomToggleMenuMobile');
var menuHeaderTopList = $('.headerMobile__navBlock, .toggleNav');

menuHeaderTopToggle.change(function() {_fnMenuHeaderTop(menuHeaderTopToggle, menuHeaderTopList, false);});
_fnMenuHeaderTop(menuHeaderTopToggle, menuHeaderTopList, false);


// Меню toggle (Desktop)
var bottomToggleMenu = $('#bottomToggleMenu'),
    pageWrapper = $('.page'),
    pageWrapperClassShow = 'page_show';

bottomToggleMenu.change(function () {
    var checked = this.checked;
    if(checked){
        pageWrapper.addClass(pageWrapperClassShow)
    }else{
        pageWrapper.removeClass(pageWrapperClassShow)
    }
});


// пуневерсальный переключатель для шапки
var headerMobileSectionsSection = $('.headerMobile__sections-section'),
    headerMobileClassName = 'active';
var toggleBtnMobile = function (target){
    if(target.closest('.headerToggleBlock')[0]) return false;

    var time = 300,
        check = true,
        section = headerMobileSectionsSection.not(target);

    if(target.is(headerMobileSectionsSection) && !target.hasClass(headerMobileClassName)){
        var block = target.data('block');
        if(block){
            block = $(block);
            if(block[0]){
                target.addClass(headerMobileClassName);
                block.stop().slideDown(time);
            }
        }
        check = false;
    }


    if(check !==false && target.hasClass('headerMobile__sections-section') && target.hasClass(headerMobileClassName)){
        section = headerMobileSectionsSection;
    }

    if(section.hasClass(headerMobileClassName)){
        section.removeClass(headerMobileClassName).each(function(){
            var _this = $(this);
            block = _this.data('block');
            if(block) {
                block = $(block);
                if (block[0]){
                    block.slideUp(300);
                }
            }
        });
    }

    if(headerMobileSectionsSection.hasClass(headerMobileClassName)){
        $('.page__content').addClass('page__content_hidden');
    }else{
        $('.page__content').removeClass('page__content_hidden');
    }

};


$(document).click(function(e) {
    var target;
    target = $(e.target);
    // console.log(22);
    if ((!target.is(menuHeaderTopList) && !target.closest(menuHeaderTopList)[0]) && (!target.is(menuHeaderTopToggle) && !target.is('.menuTopMobel'))) {
        menuHeaderTopToggle[0].checked = false;
        _fnMenuHeaderTop(menuHeaderTopToggle, menuHeaderTopList, false);
    }

    if(target.closest('.page__content')[0] && pageWrapper.hasClass(pageWrapperClassShow)){
        bottomToggleMenu[0].checked = false;
        pageWrapper.removeClass(pageWrapperClassShow);
        bottomToggleMenu.change();
    }

    toggleBtnMobile(target);
});


$(document).on('click', '[href="#"]', function(e) {
    return e.preventDefault();
});

var headerDesktop = $('.header'),
    headerDesktopClassNameActive = 'active';


function popoverFn() {
    placement = 'right';
    trigger = 'hover';

    if($(window).width() <= 991){
        placement = 'top';
        // trigger = 'click';
    }

    if($.fn.popover){
        $('[data-toggle="popover"]').popover('destroy').popover({
            trigger: trigger,
            // trigger: 'click',
            placement: placement,
            container: 'body'
        });
    }
}

popoverFn();

var catalogCategoryFix = $('.catalog-category-fix'),
    catalogCategoryFixBuffer = $('.catalog-category-fix-buffer'),
    page__content = $('.page__content'),
    scrollTopCheck = 0;

window.catalogCategoryFixHeight = _heightBlock(catalogCategoryFix);

function checkFixCategory() {
    var scrollTop = page__content.scrollTop(),
        className = 'active';

    // if(scrollTop != catalogCategoryFixHeight) return false;
    scrollTopCheck = scrollTop;
    if(scrollTop>10 && scrollTop>=window.catalogCategoryFixHeight){
        catalogCategoryFix.addClass(className);
        catalogCategoryFixBuffer.height(catalogCategoryFixHeight);
    }else if(catalogCategoryFix.hasClass(className)){
        catalogCategoryFix.removeClass(className);
        catalogCategoryFixBuffer.height(0);
    }
}
checkFixCategory();
page__content.on({
    scroll: function () {
        var scrollTop = $(this).scrollTop();
        if(scrollTop > 0){
            headerDesktop.addClass(headerDesktopClassNameActive)
        }else{
            headerDesktop.removeClass(headerDesktopClassNameActive);
        }
        checkFixCategory()
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
        if(!catalogCategoryFix.hasClass('active') && catalogCategoryFix.is(':visible')){
            window.catalogCategoryFixHeight = _heightBlock(catalogCategoryFix);
        }
    }
});

if ($.fn.slick) {
    $('.reviews__list').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: false,
        arrows: true,
        prevArrow: "<button class='slick-prev slick-arrow'><svg class='arrowLeft' width='19px' height='19px'><use xmlns:xlink='http://www.w3.org/1999/xlink' xlink:href='#arrowLeft'></use></svg></button>",
        nextArrow: "<button class='slick-next slick-arrow'><svg class='arrowRight' width='19px' height='19px'><use xmlns:xlink='http://www.w3.org/1999/xlink' xlink:href='#arrowRight'></use></svg></button>",
        // prevArrow: $('.header__slider .slick-prev'),
        // nextArrow: $('.header__slider .slick-next'),
        // autoplay: true,
        // autoplaySpeed: 3000,
        // adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 520,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ]
    });

    $('.listItem').slick({
        slidesToShow: 1,
        variableWidth: true,
        infinite: true,
        // slidesToScroll: 3,
        dots: false,
        arrows: true,
        prevArrow: "<button class='slick-prev slick-arrow'><svg class='arrowLeft' width='19px' height='19px'><use xmlns:xlink='http://www.w3.org/1999/xlink' xlink:href='#arrowLeft'></use></svg></button>",
        nextArrow: "<button class='slick-next slick-arrow'><svg class='arrowRight' width='19px' height='19px'><use xmlns:xlink='http://www.w3.org/1999/xlink' xlink:href='#arrowRight'></use></svg></button>",
        // prevArrow: $('.header__slider .slick-prev'),
        // nextArrow: $('.header__slider .slick-next'),
        // autoplay: true,
        // autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    variableWidth: false,
                }
            },
            {
                breakpoint: 520,
                settings: {
                    variableWidth: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    adaptiveHeight: true,
                }
            },
        ]
    });

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
window.addCount = function (count, el) {
    el = el?$(el):priceCountUp;
    options = {
        useEasing: true,
        useGrouping: true,
        separator: '',
        decimal: '.',
        prefix: '',
        suffix: ''
    };

    var priceEl = priceCountUp.eq(0);
    var price = +priceEl.text();
    priceCountUp.each(function () {
        demo = new CountUp(this, price, price+ +count, 0, 1, options);
        demo.start();
    });
};


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
$('.toggle-style__el').click(function () {
    var input = $(this).parents('.toggle-style').find('input');
    var prev = input.not(':checked');
    var checked = input.filter(':checked')[0];
    if(checked)
        checked.checked = false;
    if(prev[0])
        prev[0].checked = true;
        prev.change();
});


if($.fn.datetimepicker){
    $('.dateView__input').each(function () {
        var _this = $(this),
            setting = _this.data('setting'),
            opts = {
                lang: 'ru',
                format: 'd.m.Y H:i:s',
                parentID: _this.parent(),
                scrollMonth: false,
                hourMin:11,
                hourMax:17,
                hourGrid: 1,
                stepMinute: 30,
                allowTimes:[
                    '09:00',
                    '09:30',
                    '10:00',
                    '10:30',
                    '11:00',
                    '11:30',
                    '12:00',
                    '12:30',
                    '13:00',
                    '13:30',
                    '14:00',
                    '14:30',
                    '15:00',
                    '15:30',
                    '16:00',
                    '16:30',
                    '17:00',
                    '17:30',
                    '18:00',
                    '18:30',
                    '19:00',
                    '19:30',
                    '20:00',
                    '20:30',
                    '21:00',
                    '21:30',
                    '22:00',
                    '22:30',
                    '23:00',
                    '23:30'
                ],
                onChangeDateTime: function(dp, $input){
                    var setting = $input.attr('data-setting'),
                        format = 'd F Y';
                    try{
                        setting = JSON.parse(setting);
                        format = setting.format;
                    }catch (e){
                        setting = false;
                    }

                    var DateFormatterO = new DateFormatter();
                    var parseDate = DateFormatterO.formatDate(dp, format);
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
                },
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

$('.add-basket').click(function () {
    var _this = $(this),
        ctx = $($(window).width()>=991?".header":".headerMobile"),
        elBasket = ctx.find('.header__basket-link'),
        elBasketOffset = elBasket.offset(),
        parent = _this.closest('.item'),
        img = parent.find('.item__img'),
        imgOffset = img.offset(),
        imgClone = img.clone().addClass('animate').css({
            top: imgOffset.top+"px",
            left: imgOffset.left+"px",
            width: img.width()
        });


    $('body').append(imgClone).find('.item__img.animate').animate({
        top: elBasketOffset.top+(elBasket.height()/2),
        left: elBasketOffset.left+(elBasket.width()/2),
        height: "hide",
        width: "hide",
    }, {
        duration: 500,
        complete: function () {
            $(this).remove();
        }
    });

    addCount(100);
   return false;
});

var maxCountItem = 30;
var setCount = function(val, element) {
    var input, values;
    input = $(element).parent().find('input');
    values = +input.val();
    if (val === '') {
        val = values;
    } else {
        val = values + val;
    }
    if (val < 1 || isNaN(val)) {
        val = 1;
    }
    if (val > maxCountItem) {
        val = maxCountItem;
    }
    input.val(val).change();
};

$(document).on('click', '.count__btn', function (e){
   var _this = $(this),
       val = _this.hasClass('count__btn_plus')?1:-1;

    setCount(val, this);
    return false;
});

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