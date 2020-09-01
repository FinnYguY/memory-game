const writer = require('.\\writer.js');

//onload initialization all required elements
export function initialize () {
  writer.addCards(16);
  writer.showLeaderboard();
}
