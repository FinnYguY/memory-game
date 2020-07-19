const writer = require('.\\writer.js');
import '.\\styles.scss'

//creating menuBlock with buttons
// document.body.append(writer.createHtml('div', 'menuBlock flex'));
// document.getElementsByClassName('menuBlock')[0].append(writer.createHtml('button', 'menuBlockButton', ''));
// document.getElementsByClassName('menuBlockButton')[0].addEventListener('click', writer.startStop);
// document.getElementsByClassName('menuBlock')[0].append(writer.createHtml('button', 'menuBlockButton', 'Shuffle'));

//creating fieldSelector block and its contents
document.body.append(writer.createHtml('div', 'fieldSelectorDiv flex'));
document.getElementsByClassName('fieldSelectorDiv')[0].append(writer.createHtml('span', 'blurredSpan', 'Select field size'));
document.getElementsByClassName('fieldSelectorDiv')[0].append(writer.createHtml('select', 'fieldSelector'));
document.getElementsByClassName('fieldSelector')[0].append(writer.createHtml('option', '', '4x4', 'value', '1'));
document.getElementsByClassName('fieldSelector')[0].append(writer.createHtml('option', '', '5x4', 'value', '2'));
document.getElementsByClassName('fieldSelector')[0].append(writer.createHtml('option', '', '6x6', 'value', '3'));
document.getElementsByClassName('fieldSelectorDiv')[0].append(writer.createHtml('button', 'fieldSelectorButton', 'Confirm & Shuffle'));
document.getElementsByClassName('fieldSelectorButton')[0].addEventListener('click', writer.changeFieldSize);

//creating timeNturnsBlock with buttons
document.body.append(writer.createHtml('div', 'timeNturnsBlock flex'));
document.getElementsByClassName('timeNturnsBlock')[0].append(writer.createHtml('span', 'blurredSpan', 'Time'));
document.getElementsByClassName('timeNturnsBlock')[0].append(writer.createHtml('input', 'timeNturnsBlockButton stopwatch', '', 'value', '00:00', 'disabled', 'true'));
document.getElementsByClassName('timeNturnsBlock')[0].append(writer.createHtml('span', 'blurredSpan', 'Turns'));
document.getElementsByClassName('timeNturnsBlock')[0].append(writer.createHtml('input', 'timeNturnsBlockButton turnsCounter', '', 'value', '0', 'disabled', 'true'));

//creating gameField
document.body.append(writer.createHtml('div', 'gameField flex'));

window.onload = writer.addCards(16);

//creating block with information
document.body.append(writer.createHtml('div', 'infoBlock', '<p><b>Memory game</b></p> <p>Pair the cards by taking 2 of them per turn until the game field is empty. <br> <b>Click</b> on any card to start playing</p> <p><b>Confirm & Shuffle</b> - shuffle field of selected size</p>'));

//creating best results block
// document.body.append(writer.createHtml('button', 'menuBlockButton leaderBoardButton', 'Leaderboard'));
// document.getElementsByClassName('leaderBoardButton')[0].addEventListener('click', writer.showLeaderBoard);

// //creating welcome message
// window.onload = writer.showMsg('<b>Welcome to the <br> "Memory Game"</b><br>Pair the cards by taking 2 of them per turn until the game field is empty');
//
// window.onload = document.getElementsByClassName('msgDiv')[0].append(writer.createHtml('button', 'msgButton', 'Get me started!'));
//
// document.getElementsByClassName('msgButton')[0].addEventListener('click', () => {
//   document.getElementsByClassName('msgDiv')[0].remove();
// });

//configuring the mutation observer for delegation to work properly
var field = document.getElementsByTagName('body')[0];

const config = {
    childList: true
};

const observer = new MutationObserver(writer.callback);
observer.observe(field, config);
