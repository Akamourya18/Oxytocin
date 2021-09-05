/*
 This function deletes the card
 */
var cardDeleteIml = {};
var currentBoard;

cardDeleteIml.delete = function () {
  var index = currentBoard.cards[cardEdit.card.id].index;

  currentBoard.unregisterCard(cardEdit.card);
  currentBoard.reregisterSubsequent(cardEdit.card.list, index + 1, -1);

  cardEdit.card.list.cardsNode.removeChild(cardEdit.card.node);
  cardEdit.card.list.cards.splice(index, 1);

  cardEdit.close();
  cardEdit.card = undefined;
};
