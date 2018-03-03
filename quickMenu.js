/* nuBuilderForte Quick Menu */

/* Add this piece of code to: */
/* Home ► Setup ► Header */

var dropDownHtml = `<div class="dropdown">
  <button class="dropbtn"> ☰ </button>
  <div class="dropdown-content">
      <a id="dropdownDebug" title="Debug" href="#" onclick="nuForm('nudebug','','','',2);return false;">Debug</a>
      <a id="dropdownFormCurrent" title="Current Form Properties" href="#" onclick="nuForm('nuform',window.nuFORM.getCurrent().form_id,'','',2);return false;">Form Properties</a>
      <a id="dropdownObjectsCurrent" title="Browse all Objects" href="#" onclick="nuForm('nuobject','',window.nuFORM.getCurrent().form_id,'',2);return false;">Form Objects</a>
      <a id="dropdownFormAll" title="Browse all Forms" href="#" onclick="nuForm('nuform','','','',2);return false;">All Forms</a>
      <a id="dropdownObjectsAll" title="Browse all Objects" href="#" onclick="nuForm('nuobject','','','',2);return false;">All Objects</a>
      <a id="dropdownUserHome" title="UserHome" href="#" onclick="nuForm('nuhome','-1','', '',2);return false;">User Home</a>
      <a id="dropdownDB" title="Database" href="#" onclick="window.open('nupmalogin.php');return false;">Databse</a>
      <a id="dropdownLogout" title="Logout" href="#" onclick="nuLogout();return false;">Logout</a>
  </div>
</div>`;

function createFragment(htmlStr) {
    var docFrag = document.createDocumentFragment()
        , temp = document.createElement('div');
    temp.innerHTML = htmlStr;
    while (temp.firstChild) {
        docFrag.appendChild(temp.firstChild);
    }
    return docFrag;
}

function nuOnLoad() {

    // Only visible for the admin (globeadmin)
    if (nuAccessLevelCode() == '') {
        var fragment = createFragment(dropDownHtml);
        $(fragment).insertBefore("#nuBreadcrumb0");
    }

}
