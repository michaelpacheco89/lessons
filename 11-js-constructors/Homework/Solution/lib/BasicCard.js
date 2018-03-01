function BasicCard(front, back) {

  // This code allows us to optionally create BasicCards without using the new keyword
  if (!(this instanceof BasicCard)) {
    return new BasicCard(front, back);
  }

  this.front = front;
  this.back = back;
}

module.exports = BasicCard;
