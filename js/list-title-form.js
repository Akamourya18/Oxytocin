/*
This function will build the form for list,It is called by addList
 */
function buildListTitleForm() {
  var node = document.createElement('form');
  node.innerHTML =
    '<div class="newitem-title-wrapper">' +
    '<input id="iml-list-title-input" type="text">' +
    '<input id="iml-list-title-submit" type="submit" value="Save">' +
    '</div>';
  node.style.display = 'none';
  return node;
}
