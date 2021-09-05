/*
 This function is called to build the card form
 */
function buildCardTitleForm() {
  var node = document.createElement('form');
  node.innerHTML =
    '<div class="newitem-title-wrapper">' +
    '<textarea class="iml-new-card-title-input" type="text"></textarea>' +
    '<input class="iml-new-card-title-submit" type="submit" value="Add">' +
    '</div>';
  node.style.display = 'none';
  return node;
}
