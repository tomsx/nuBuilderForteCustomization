/* nuBuilder Forte - enableBrowsersBackButton.js */
/* Make the browser's back button work. Detect if the back button is clicked, go to the previous breadcrumb */

/* Add this piece of code to: */
/* Home ► Setup ► Header */

function custGotoPrevBreadcrumb() {

    if (parent.$('#nuModal').length > 0) {
        nuClosePopup();
        return;
    }

    var l = window.nuFORM.breadcrumbs.length;
    if (l > 1) {
        nuGetBreadcrumb(l - 2);
    }
}

function custEnableBrowserBackButton() {
    window.history.pushState({page: 1}, "", "");
    window.onpopstate = function(event) {
      if(event){
         custGotoPrevBreadcrumb();
      }
      else{
      }
    };
}

function nuOnLoad() {
  custEnableBrowserBackButton();
}
