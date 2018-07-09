/* nuBuilder Forte - custDisableBrowseResize.js */
/*  Disable column resizing on a Browse Screen */

/* Add this piece of code to: */
/* Form Properties -> Custom Code -> JS */

if (nuFormType() == 'browse') {
				
   custDisableBrowseResize();
	
}

function custDisableBrowseResize() {

   $(document).ready(function(){   
    $("div[id^='nuBrowseTitle']")
        .off('mousedown.nuresizecolumn')
        .off('touchstart.nuresizecolumn')
        .off('touchmove.nuresizecolumn')
        .off('touchstart.nuresizecolumn');
   });
   
};
