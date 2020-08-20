const processor = require('.\\processor.js');

//create the HTML
exports.generateView = function () {

  //creating fieldSelector block and its contents
  let fieldSelectorBlock = processor.createHtml('div', 'field-selector-block');
  let fieldSelector = processor.createHtml('select', 'field-selector-block__selector');
  let fieldSelectorButton = processor.createHtml('button', 'button field-selector-block__button', 'Confirm & Shuffle');

  document.body.append(fieldSelectorBlock);
  fieldSelectorBlock.append(processor.createHtml('span', 'span_blurred', 'Select field size'));
  fieldSelectorBlock.append(fieldSelector);
  fieldSelector.append(processor.createHtml('option', '', '4x4', 'value', '44'));
  fieldSelector.append(processor.createHtml('option', '', '5x4', 'value', '54'));
  fieldSelector.append(processor.createHtml('option', '', '6x6', 'value', '66'));
  fieldSelectorBlock.append(fieldSelectorButton);
  fieldSelectorButton.addEventListener('click', processor.changeFieldSize);

  //creating timeNturnsBlock with buttons
  let timeNturnsBlock = processor.createHtml('div', 'time-n-turns-block');

  document.body.append(timeNturnsBlock);
  timeNturnsBlock.append(processor.createHtml('span', 'span_blurred', 'Time'));
  timeNturnsBlock.append(processor.createHtml('input', 'time-n-turns-block__button stopwatch', '', 'value', '00:00', 'disabled', 'true'));
  timeNturnsBlock.append(processor.createHtml('span', 'span_blurred', 'Turns'));
  timeNturnsBlock.append(processor.createHtml('input', 'time-n-turns-block__button turnsCounter', '', 'value', '0', 'disabled', 'true'));

  //creating gamefield
  document.body.append(processor.createHtml('div', 'gamefield gamefield_4x4'));

  //creating block with information
  document.body.append(processor.createHtml('div', 'info-block', '<b>Memory Game</b> <br> Flip two cards. If the cards are the same on their face side - they disappear. If they are different - you have to pick another pair. Clearing the field is the winning condition <br> <b>Click</b> on any card to start playing <br> <b>Confirm & Shuffle</b> - shuffle field of selected size'));

  //creating best results block
  let leaderboardBlock = processor.createHtml('div', 'leaderboard-block', '<b>Leaderboard</b>');

  document.body.append(leaderboardBlock);
  leaderboardBlock.append(processor.createHtml('div', 'lineBreak'));
  leaderboardBlock.append(processor.createHtml('div', 'leaderboard-block__wrapper'));
  document.querySelectorAll('.leaderboard-block__wrapper')[0].append(processor.createHtml('div', 'wrapper__record size44', ''));
  document.querySelector('.size44').before(processor.createHtml('div', 'wrapper__record', '<b>4x4</b>'));
  leaderboardBlock.append(processor.createHtml('div', 'leaderboard-block__wrapper'));
  document.querySelectorAll('.leaderboard-block__wrapper')[1].append(processor.createHtml('div', 'wrapper__record size54', ''));
  document.querySelector('.size54').before(processor.createHtml('div', 'wrapper__record', '<b>5x4</b>'));
  leaderboardBlock.append(processor.createHtml('div', 'leaderboard-block__wrapper'));
  document.querySelectorAll('.leaderboard-block__wrapper')[2].append(processor.createHtml('div', 'wrapper__record size66', ''));
  document.querySelector('.size66').before(processor.createHtml('div', 'wrapper__record', '<b>6x6</b>'));
  leaderboardBlock.append(processor.createHtml('div', 'lineBreak'));

  //creating save/load block
  leaderboardBlock.append(processor.createHtml('div', 'saveLoadBlock', 'Statistics are not recorded for loaded games, train in real time to conquer leaderboard! <br>'));
  document.querySelector('.saveLoadBlock').append(processor.createHtml('button', 'button  saveGameButton', 'Save Game'));
  document.querySelector('.saveGameButton').addEventListener('click', processor.saveGame);
  document.querySelector('.saveLoadBlock').append(processor.createHtml('button', 'button  loadGameButton', 'Load Game'));
  document.querySelector('.loadGameButton').addEventListener('click', () => {
    processor.loadGame(localStorage.getItem('gameSave'));
  });
}
