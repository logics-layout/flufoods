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