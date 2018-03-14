/* nuBuilder Forte - select another default tab upon login */
/* https://youtu.be/VoN5dUMiRLk */
/* Add this piece of code to: */
/* Home ► Setup ► Header */

function nuOnLoad() {
    var f = nuCurrentProperties();
    if (nuFormType() == 'edit' && f.form_id == 'nuuserhome') {
         if (nuAccessLevelCode() == 'aclTest') {
               custSelectTabByTitle('Tab Name');
         }  
     }
}

function custSelectTabByTitle(tab) {
    $('[id^=nuTab]').each(function (index) {
        if ($(this).html() == tab) {
            var tabNumber = +index + -1;
            var e = document.getElementById('nuTab' + tabNumber);
            nuSelectTab(e);
        }
    });
}
