/* nuBuilder Forte - custPrintEditForm.js */
/* Add a Print Button to an Edit Form */

/* Add this piece of code to: */
/* Form Properties -> Custom Code -> JS */

// add a Print Button to the Edit Form
if (nuFormType() == 'edit') {
    nuAddActionButton('nuPrintEditForm', 'Print', 'custPrintEditForm();'); 
}

// hide some elements before calling the print dialog 
function custPrintEditForm() {

  $('#nuBreadcrumbHolder').hide();
  $('#nuTabHolder').hide();
  $('.nuActionButton').hide();

  window.onafterprint = function(e){
        $(window).off('mousemove', window.onafterprint);
        $('#nuBreadcrumbHolder').show();
        $('#nuTabHolder').show();
        $('.nuActionButton').show();
    };

    window.print();

    setTimeout(function(){
        $(window).one('mousemove', window.onafterprint);
    }, 1);
}
