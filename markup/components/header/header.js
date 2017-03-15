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