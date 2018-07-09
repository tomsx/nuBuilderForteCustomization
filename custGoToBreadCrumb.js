/* nuBuilder Forte - custGoToBreadCrumb.js */
/* After saving a record, return to a specific breadcrumb/screen */

/* Add this piece of code to: */
/* Form Properties -> Custom Code -> JS */

// 3 different functions:

// 1. Return to the to the previous breadcrumb/screen:

if (nuFormType() == 'edit') {
    if (nuIsSaved()) {
        custGotoPrevBreadcrumb();
    }
}

function custGotoPrevBreadcrumb() {
    var l = window.nuFORM.breadcrumbs.length;
    if (l > 1) {
        nuGetBreadcrumb(l - 2);
    }
}


// 2. To return to the previous launch form:

if (nuFormType() == 'edit') {
    if (nuIsSaved()) {
        custGotoPrevLaunchForm();
    }
}
function custGotoPrevLaunchForm() {
    var b = window.nuFORM.breadcrumbs.length - 2;
    for (var i = b; i >= 0; i--) {
        if (window.nuFORM.breadcrumbs[i].form_type == "launch") {
            nuGetBreadcrumb(i);
            return;
        }
    }
}


// 3. To return to a specific user home page (launch form):

if (nuFormType() == 'edit') {
    if (nuIsSaved()) {
        custGoBackToUserHome();
    }
}

function custGoBackToUserHome(userHomeId) {

    if (userHomeId == undefined || userHomeId == 'null') {
            var userHomeId = 'nuuserhome';
        }
		
   if (nuFORM.getCurrent().form_code == userHomeId) {
        return;
    }
    var b = window.nuFORM.breadcrumbs.length;
    for (var i = 0; i < b; i++) {
        if (window.nuFORM.breadcrumbs[i].form_code == userHomeId) {
            nuGetBreadcrumb(i);
            return;
        }
    }
}
