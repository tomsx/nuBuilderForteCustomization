/* nuBuilderForte - Rearrange objects under 'Custom Code' */

/* Add this piece of code to: */
/* Home ► Setup ► Header */

function nuOnLoad() {
  
    if (nuFormType() == 'edit' && f.form_id == 'nuform') {

        $('#icon').css({ position: 'absolute', top: '51px', left: '212px' });
        $('#phpwrd').css({ position: 'absolute', top: '54px', left: '27px' });
        $('#label_sfo_javascript').html('');
        $('#bb_event').css({ position: 'absolute', top: '93px', left: '27px' });
        $('#be_event').css({ position: 'absolute', top: '125px', left: '27px' });
        $('#bs_event').css({ position: 'absolute', top: '157px', left: '27px' });
        $('#as_event').css({ position: 'absolute', top: '189px', left: '27px' });
        $('#bd_event').css({ position: 'absolute', top: '221px', left: '27px' });
        $('#ad_event').css({ position: 'absolute', top: '253px', left: '27px' });
        $('#previewbrowse').css({ position: 'absolute', top: '10px', left: '196px' }); 
        $('#previewedit').css({ position: 'absolute', top: '10px', left: '438px' });
        $('#sfo_javascript').css({ position: 'absolute', top: '90px', left: '196px', width: '520px', height: '343px' });
  }
}
