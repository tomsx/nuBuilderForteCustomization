/* nuBuilder Forte -  change button colors */
/* https://www.youtube.com/watch?v=riZstHGH_aU */

/* Add this piece of code to: */
/* Home ► Setup ► Header */

function zebraStripeBrowseTable(color1, color2) {

    $('[data-nu-column="0"]').each(function (index) {
        var cellId = $(this).attr('id');
        var rowNum = String(cellId).split('_')[1];

        var bgColor = color1;
        if (isEven(Number(rowNum))) {
            bgColor = color2;
        }
        $("div[id^='nucell_" + rowNum).css('background-color', bgColor);
    });
}

function isEven(n) {
    return n % 2 == 0;
}


function nuOnLoad() {

    if (nuFormType() == 'browse') {
        zebraStripeBrowseTable('#f2f2f2', 'white'); // #f2f6f7
    }
}

<style>
.nuBrowseTitle {
  background-color: #e8eded;
}
</style>
