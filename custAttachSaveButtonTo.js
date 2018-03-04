if (nuFormType() == 'edit') {
    custAttachSaveButtonTo('cus_notes');
}

function custAttachSaveButtonTo(dest) {
	
   $('#' + dest).after($('#nuSaveButton'));
   var t = $('#' + dest).cssNumber("top");
   var h = $('#' + dest).cssNumber("height");
   var l = $('#' + dest).cssNumber("left");
  
      $('#nuSaveButton').css({
        "top":  t + h + 15,
        "left": l,
        "width": "129px",
        "position": "absolute",
        "height": "26px"
    });
}

jQuery.fn.cssNumber = function(prop){
    var v = parseInt(this.css(prop),10);
    return isNaN(v) ? 0 : v;
};
