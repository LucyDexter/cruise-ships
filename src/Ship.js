function Ship() {
  this.startingPort = 'Dover';
}

Ship.prototype.setSail = function setSail() {
  this.startingPort = null;
};

module.exports = Ship;
