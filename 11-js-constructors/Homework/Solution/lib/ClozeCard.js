// text is the full text of the cloze card
// clozeDeletion is the portion of the text we want to hide
function ClozeCard(text, clozeDeletion) {

  // This code allows us to optionally create ClozeCards without using the new keyword
  if (!(this instanceof ClozeCard)) {
    return new ClozeCard(text, clozeDeletion);
  }

  // Holds [start, end] positions for clozeDeletion.
  var clozePostions = clozeDelete(text, clozeDeletion);

  // Builds "partial" text--e.g., input text without cloze deletion
  this.partial = getPartial(text, clozePostions);

  // Saves the cloze deleted text for later display
  this.cloze = text.slice(clozePostions[0], clozePostions[1]);

  // "Pseudo-private" functions, purposefully not on the prototype.
  function getPartial(text, clozePostions) {

    // Find where cloze deletion begins in text
    var start = text.slice(0, clozePostions[0]);
    // Remove cloze range
    var end = text.slice(clozePostions[1], text.length);

    // Return ellipsized version
    return start + "..." + end;
  }

  function clozeDelete(text, clozeDeletion) {
    var start = text.indexOf(clozeDeletion);

    if (start !== -1) {
      return [start, start + clozeDeletion.length];
    }
    throw new Error("Cloze deletion not found in input text.");
  }
}

ClozeCard.prototype.displayCard = function displayCard() {
  return this.partial.replace(/\.\.\./, "'" + this.cloze + "'");
};

module.exports = ClozeCard;
