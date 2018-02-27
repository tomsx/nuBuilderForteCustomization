function nuScrollBindMouseWheel() {
    $('.nuScroll').bind('mousewheel', function (event, delta) {
        $(this).focus();
        var e = jQuery.Event('keydown');
        if (event.originalEvent.wheelDelta > 0 || event.originalEvent.detail < 0) {
            e.keyCode = 38; // up arrow  
        } else {
            e.keyCode = 40; // down arrow  
        }
        $(this).trigger(e);
        return false;
    });
}

function nuOnLoad() {
    if (nuFormType() == 'edit') {
        nuScrollBindMouseWheel();
    }
}
