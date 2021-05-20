$('#switch').click(function() {
    if($('body').hasClass('bg-theme1') === true) {
        $('body').removeClass('bg-theme1');
        $('body').addClass('bg-theme2');
    } else if($('body').hasClass('bg-theme2') === true) {
        $('body').removeClass('bg-theme2');
        $('body').addClass('bg-theme3');
    } else if ($('body').hasClass('bg-theme3') === true) {
        $('body').removeClass('bg-theme3');
        $('body').addClass('bg-theme1');
    }
});