/* NuBuilder Forte - custRemoveTabs */

/* Improved verion of nuRemoveTabs() */ 
/* https://wiki.nubuilder.net/nubuilderforte/index.php/Javascript#nuRemoveTabs */

/* Parameters: Tab numbers or tab titles that will be removed
/* Example: custRemoveTabs(0, "Tab 1", "Tab 2", "Tab 3");

function custGetTabIndex(title) {
    var retVal = null;
    $('[id^=nuTab]').each(function(index) {
        if ($(this).html() == title) {
            retVal = $(this).attr('id').replace('nuTab', '');
            return true;
        }
    });
    return retVal;
}

function custRemoveTabs(t) {
    for (var i = 0; i < arguments.length; i++) {
        if (arguments[i] == parseInt(arguments[i])) {
            $('#nuTab' + arguments[i]).remove();
        } else {
            $('#nuTab' + custGetTabIndex(arguments[i])).remove();
        }
    }
}
