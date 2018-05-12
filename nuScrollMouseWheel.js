/* nuBuilder Forte - nuScroll & Mouse Wheel */
/* https://www.youtube.com/watch?v=BM0Hd_Vk9AM */

/* Add this piece of code to: */
/* Home ► Setup ► Header */


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
