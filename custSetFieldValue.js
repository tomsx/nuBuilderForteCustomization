/* nuBuilder Forte - custPrintEditForm.js */
/* Set the value of a nuBuilder field. */

/* Example custSetFieldValue('cus_firstname','Tom', 1);
/* Set a value only if the field is empty */

/* Add this piece of code to: */
/* Form Properties -> Custom Code -> JS */

// f: Field id
// t: Text
// e: Set only if empty (not defined = 0, 1 = true)
function custSetFieldValue(f, t, e) { 
	
   if (typeof e !== 'undefined' && e == 1) 
   {
	   if ( $('#'+ f).val().length > 0) {
		   return;
	   }
   }
   
   $('#'+ f ).val(t).change();
}
