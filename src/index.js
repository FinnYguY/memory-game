const writer = require('.\\writer.js');
import '.\\styles.scss';

//creating fieldSelector block and its contents
document.body.append(writer.createHtml('div', 'field-selector-block'));
document.getElementsByClassName('field-selector-block')[0].append(writer.createHtml('span', 'span_blurred', 'Select field size'));
document.getElementsByClassName('field-selector-block')[0].append(writer.createHtml('select', 'field-selector-block__selector'));
document.getElementsByClassName('field-selector-block__selector')[0].append(writer.createHtml('option', '', '4x4', 'value', '44'));
document.getElementsByClassName('field-selector-block__selector')[0].append(writer.createHtml('option', '', '5x4', 'value', '54'));
document.getElementsByClassName('field-selector-block__selector')[0].append(writer.createHtml('option', '', '6x6', 'value', '66'));
document.getElementsByClassName('field-selector-block')[0].append(writer.createHtml('button', 'button field-selector-block__button', 'Confirm & Shuffle'));
document.getElementsByClassName('field-selector-block__button')[0].addEventListener('click', writer.changeFieldSize);

//creating timeNturnsBlock with buttons
document.body.append(writer.createHtml('div', 'time-n-turns-block'));
document.getElementsByClassName('time-n-turns-block')[0].append(writer.createHtml('span', 'span_blurred', 'Time'));
document.getElementsByClassName('time-n-turns-block')[0].append(writer.createHtml('input', 'time-n-turns-block__button stopwatch', '', 'value', '00:00', 'disabled', 'true'));
document.getElementsByClassName('time-n-turns-block')[0].append(writer.createHtml('span', 'span_blurred', 'Turns'));
document.getElementsByClassName('time-n-turns-block')[0].append(writer.createHtml('input', 'time-n-turns-block__button turnsCounter', '', 'value', '0', 'disabled', 'true'));

//creating gamefield
document.body.append(writer.createHtml('div', 'gamefield gamefield_4x4'));

window.onload = writer.addCards(16);

//creating block with information
document.body.append(writer.createHtml('div', 'info-block', '<b>Memory Game</b> <br> Flip two cards. If the cards are the same on their face side - they disappear. If they are different - you have to pick another pair. Clearing the field is the winning condition <br> <b>Click</b> on any card to start playing <br> <b>Confirm & Shuffle</b> - shuffle field of selected size'));

//creating best results block
document.body.append(writer.createHtml('div', 'leaderboard-block', '<b>Leaderboard</b>'));
document.getElementsByClassName('leaderboard-block')[0].append(writer.createHtml('div', 'lineBreak'));
document.getElementsByClassName('leaderboard-block')[0].append(writer.createHtml('div', 'leaderboard-block__wrapper'));
document.getElementsByClassName('leaderboard-block__wrapper')[0].append(writer.createHtml('div', 'wrapper__record size44', ''));
document.getElementsByClassName('size44')[0].before(writer.createHtml('div', 'wrapper__record', '<b>4x4</b>'));
document.getElementsByClassName('leaderboard-block')[0].append(writer.createHtml('div', 'leaderboard-block__wrapper'));
document.getElementsByClassName('leaderboard-block__wrapper')[1].append(writer.createHtml('div', 'wrapper__record size54', ''));
document.getElementsByClassName('size54')[0].before(writer.createHtml('div', 'wrapper__record', '<b>5x4</b>'));
document.getElementsByClassName('leaderboard-block')[0].append(writer.createHtml('div', 'leaderboard-block__wrapper'));
document.getElementsByClassName('leaderboard-block__wrapper')[2].append(writer.createHtml('div', 'wrapper__record size66', ''));
document.getElementsByClassName('size66')[0].before(writer.createHtml('div', 'wrapper__record', '<b>6x6</b>'));
document.getElementsByClassName('leaderboard-block')[0].append(writer.createHtml('div', 'lineBreak'));
window.onload = writer.showLeaderboard();

document.getElementsByClassName('leaderboard-block')[0].append(writer.createHtml('div', 'saveLoadBlock', 'Statistics are not recorded for loaded games, train in real time to conquer leaderboard! <br>'));
document.getElementsByClassName('saveLoadBlock')[0].append(writer.createHtml('button', 'button  saveGameButton', 'Save Game'));
document.getElementsByClassName('saveGameButton')[0].addEventListener('click', writer.saveGame);
document.getElementsByClassName('saveLoadBlock')[0].append(writer.createHtml('button', 'button  loadGameButton', 'Load Game'));
document.getElementsByClassName('loadGameButton')[0].addEventListener('click', () => {
  writer.loadGame(localStorage.getItem('gameSave'));
});

//configuring the mutation observer for delegation to work properly
var field = document.getElementsByTagName('body')[0];

const config = {
    childList: true
};

const observer = new MutationObserver(writer.callback);
observer.observe(field, config);
