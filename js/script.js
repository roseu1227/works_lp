$(function(){
    $('#page_top').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 550);
        return false;
    });
});