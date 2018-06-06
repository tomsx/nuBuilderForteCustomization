/* nuBuilder Forte Quick Menu */
/* https://www.youtube.com/watch?v=XPM-6SgPExA */

/* Add this piece of code to: */
/* Home ► Setup ► Header */

function custAccessLevelHome() {
    var b = window.nuFORM.breadcrumbs.length;
    for (var i = 0; i < b; i++) {
        if (window.nuFORM.breadcrumbs[i].form_type == 'launch') {
            return window.nuFORM.breadcrumbs[i].form_id;
        }
    }
}

function createFragment(htmlStr) {
    var frag = document.createDocumentFragment()
        , temp = document.createElement('div');
    temp.innerHTML = htmlStr;
    while (temp.firstChild) {
        frag.appendChild(temp.firstChild);
    }
    return frag;
}

function custOpenNewUserHome() {
    nuForm(custAccessLevelHome(), '-1', '', '', 2);
}

var dropDownHtml = `<div class="dropdown">
  <button class="dropbtn"> ☰ </button>
  <div class="dropdown-content">
      <a id="dropFormCurrent" title="Current Form Properties" href="#" onclick="nuForm('nuform',window.nuFORM.getCurrent().form_id,'','',2);return false;">Form Properties</a>
      <a id="dropObjectsCurrent" title="Current Form Objects" href="#" onclick="nuForm('nuobject','',window.nuFORM.getCurrent().form_id,'',2);return false;">Form Objects</a>
      <a id="dropFormAll" title="Browse all Forms" href="#" onclick="nuForm('nuform','','','',2);return false;">All Forms</a>
      <a id="dropObjectsAll" title="Browse all Objects" href="#" onclick="nuForm('nuobject','','','',2);return false;">All Objects</a>
      <a id="dropUserHome" title="New Home" href="#" onclick="custOpenNewUserHome();return false;">New Home</a>
      <a id="dropDB" title="Database" href="#" onclick="window.open('nupmalogin.php');return false;">Database</a>  
      <a id="dropDebug" title="Debug" href="#" onclick="nuForm('nudebug','','','',2);return false;">Debug</a>
      <a id="dropSetup" title="Setup" href="#" onclick="nuForm('nusetup','1','','',2); return false;">Setup</a>
      <a id="dropLogout" title="Logout" href="#" onclick="nuLogout();return false;">Logout</a>
  </div>
</div>`;


function nuOnLoad() {

    var acl = nuAccessLevelCode();

    // Add custom menu 
    if (acl == '') {
        var fragment = createFragment(dropDownHtml);
        $(fragment).insertBefore("#nuBreadcrumb0");
    }

}

</script>


<style> 

/* Start Menu Dropdown */

.dropbtn {
    background-color: white; 
    color: black;
    padding: 0px;
    margin-right:15px;
    font-size: 14px;
    border: none;
    cursor: pointer;
}

.dropdown {
    position: relative;
    display: inline-block;
}

.dropdown-content {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 200px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
}

.dropdown-content a {
    color: black;
    padding: 5px 16px;
    text-decoration: none;
    font-size: 15px;
    font-family:Helvetica;
    display: block;
}

.dropdown-content a:hover {background-color: #f1f1f1}

.dropdown:hover .dropdown-content {
    display: block;
}

.dropdown:hover .dropbtn {
    color: blue;
}

.underline{border-bottom:1px solid DarkOrange; width:400px; padding-bottom:5px;}


.searchsymbol {
  font-size: medium;
}

/* End Menu Dropdown */

</style>
<script>
