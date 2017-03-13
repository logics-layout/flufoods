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