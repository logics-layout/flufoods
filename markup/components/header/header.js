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

// пуневерсальный переключатель для шапки
var headerMobileSectionsSection = $('.headerMobile__sections-section'),
    headerMobileClassName = 'active';



$(document).click(function(e) {
    var target;
    target = $(e.target);
    if ((!target.is(menuHeaderTopList) && !target.closest(menuHeaderTopList)[0]) && (!target.is(menuHeaderTopToggle) && !target.is('.menuTopMobel'))) {
        menuHeaderTopToggle[0].checked = false;
        _fnMenuHeaderTop(menuHeaderTopToggle, menuHeaderTopList, false);
    }

    var sectionActive = headerMobileSectionsSection.filter('.active');
    if(sectionActive[0]){
        var sections = sectionActive.siblings();
        sections.removeClass(headerMobileClassName).each(function(){
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

    // var sectionEl = target.hasClass('headerMobile__sections-section') ? target

    // console.log(target[0]);
});

headerMobileSectionsSection.click(function () {
    var _this = $(this),
        block = _this.data('block'),
        time = 300;

    if(block){
        block = $(block);
        if(block[0]){
            if(_this.hasClass(headerMobileClassName)){
                _this.add(headerMobileSectionsSection).removeClass(headerMobileClassName);
                block.stop().slideUp(time);
            }else{
                _this.addClass(headerMobileClassName);
                _this.siblings().removeClass(headerMobileClassName);
                block.stop().slideDown(time);
            }
        }
    }
});