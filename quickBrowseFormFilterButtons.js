/* nuBuilderForte Quick Filter Buttons */

/* Add this piece of code to: */
/* Form ► Custom Code ► Javascript */

if (nuFormType() == 'browse') {
   addExtraBrowseFilterBtn("btnFilterLondon","London", "⊆ Lodon");
   addExtraBrowseFilterBtn("btnFilterVPTech","Mrs","⊆ Mrs only");
}

function addExtraBrowseFilterBtn(id, filter, value) {

    if (value==undefined || value=='null') { var value = filter; }
    /* Append a new Action Button on the Browse form */
  
    id = 'nuFilter' + id + 'Button';

    var elem = "<input id='" + id + "' type='button' class='nuActionButton' value='" + value + "' >&nbsp;";
    $( "#nuActionHolder" ).append(elem);
    $( "#" + id)
        .click(function() {
            $('#nuSearchField').val(filter);
            $('#nuSearchButton').click();
        }
    );
    $( "#" + id).css({ 'background-color': "orange", 'color': "white"})
}
