/* nuBuilder Forte - custSetBrowseColumnWidths */
/* Purpose: Watch https://www.youtube.com/watch?v=L7AtngRSwgU */
/* Add this piece of code to: */
/* Home ► Setup ► Header */

function custSetBrowseColumnWidths() {
    if (confirm("Copy Column Widths from the Browse Table (Overwrite existing values)?")) {

        var sf = nuSubformObject('zzzzsys_browse_sf');
        for (var i = 0; i < sf.rows.length; i++) {

            if (sf.deleted[i] == 0) {
                var c = $("div[id='nuBrowseTitle" + i + "']", window.parent.document);
                var w = Math.ceil(roundNearest(parseFloat(c[0].style.width),5)).toString();
                $('#' + 'zzzzsys_browse_sf' + nuPad3(i) + 'sbr_width').val(w.replace('px', '')).change();
            }

        }
    }
}

function roundNearest(n, v) {
    n = n / v;
    n = Math.round(n) * v;
    return n;
}

function nuOnLoad() {

     // Add href Link that calls custSetBrowseColumnWidths()
     var p = nuCurrentProperties();
     if ((p.form_id == 'nuform' && p.form_type == 'browseedit')) {

         var w = $('#title_zzzzsys_browse_sfsbr_width');
       
         if (w.length == 1) {
             w.css({
                 "text-decoration": "underline",
                 "text-decoration-style": "dashed",
                 "color": "blue"
             });
             
             w.prop('onclick', null).off('click'); //  disable sorting on this column
             w.click(function(e) {
                 custSetBrowseColumnWidths();
             });
         }
     }

}
