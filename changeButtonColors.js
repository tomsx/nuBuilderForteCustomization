function nuOnLoad() {

    var f = nuCurrentProperties();
    if (nuFormType() == 'edit' && f.form_id == 'nuuserhome') {
        $( '#btnHomeFirst' ).css({ 'background-color': "#2a8bcc", 'border-color': 'white' });
        $( '#btnHomeSecond').css({ 'background-color': "#61a86b", 'border-color': '#35593a' });
        $( '#btnHomeThird').css({ 'background-color': "#88cb51", 'border-color': '#3e5e23' });
        $( '#btnHomeFourth').css({ 'background-color': "#f38617", 'border-color': '#593109' });
    }

}
