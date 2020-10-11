const constants = require('.\\constants.js');
import textMsg from '.\\message.js';

// create html element with given attributes
export function createHtml(selector, className, innerText, ...keysValues) {
  const elem = document.createElement(selector);
  className === undefined ? elem.className = '' : elem.className = className;
  innerText === undefined ? elem.innerHTML = '' : elem.innerHTML = innerText;
  if (keysValues.length !== 0) {
    let i = 1;
    while (i < keysValues.length) {
      elem.setAttribute(keysValues[i - 1], keysValues[i]);
      i += 2;
    }
  }
  return elem;
}

let classArrLength = 0;
export function addCards(num) {
  const classArray = [];
  const field = document.querySelector('.gamefield');

  for (let i = 1; i < 19; i += 1) {
    classArray.push(`card${i}`, `card${i}`);
  }

  function getRndInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  classArray.length = num;
  classArrLength = classArray.length;

  for (let i = 0; i < classArrLength; i += 1) {
    const random = getRndInt(0, classArray.length);
    field.append(createHtml('div', `card ${classArray[random]} card_back`));
    classArray.splice(random, 1);
  }
}

export function stopTurns() {
  document.querySelector('.turnsCounter').value = '0';
}

// toggling card face up/down
export function toggleCard(...cards) {
  for (const card of cards) {
    card.classList.toggle('card_back');
  }
}

export function addButton(style, text, action) {
  document.querySelector('.msg-block').append(createHtml('button', `msg-block__button ${style}`, text));
  document.querySelector(`.${style}`).addEventListener('click', action);
}

let emptyCardNumber = 0;
export function compareCards(card1, card2) {
  if (card1.classList[1] === card2.classList[1]) {
    setTimeout(() => { card1.classList.add('invisible', 'noclick'); }, 300);
    setTimeout(() => { card2.classList.add('invisible', 'noclick'); }, 300);
    emptyCardNumber += 2;
  } else {
    card1.classList.remove('noclick');
    card2.classList.remove('noclick');
    setTimeout(toggleCard, 400, card1, card2);
  }
}

export function changeFieldSize() {
  let selector;
  let field;
  isLoadedGame = false;

  field = document.querySelector('.gamefield');
  field.remove();
  field = createHtml('div', 'gamefield');
  document.querySelector('.time-n-turns-block').after(field);
  selector = document.querySelector('.field-selector-block__selector');

  clearStopwatch();
  clearTimeout(clocktimer);
  init = 0;
  stopTurns();
  isFirstClick = true;
  emptyCardNumber = 0;
  faceUpCounter = 0;

  textMsg.show('<b>Shuffling...</b>');
  setTimeout(function () {
    textMsg.hide();
  }, 1000);

  switch (selector.value) {
    case constants.sizes.size44:
      field.classList.add(constants.selectors.gamefield44);
      addCards(16);
      break;
    case constants.sizes.size54:
      field.classList.add(constants.selectors.gamefield54);
      addCards(20);
      break;
    case constants.sizes.size66:
      field.classList.add(constants.selectors.gamefield66);
      addCards(36);
      break;
    default:
  }
}

let faceUpCounter = 0;
let faceUpCard1;
let isFirstClick = true;
let isLoadedGame = false;
export const callback = function () {
  const gamefield = document.querySelector('.gamefield');
  const stopwatch = document.querySelector('.stopwatch');
  const turnsCounter = document.querySelector('.turnsCounter');
  const fieldSizeSelector = document.querySelector('.field-selector-block__selector');

  gamefield.onclick = function (event) {
    let target = event.target;
    if(!target.classList.contains('card')) return;
    toggleCard(target);

    if (isFirstClick) {
      isFirstClick = false;
      startStop();
    }

    if (!target.classList.contains('card_back')) {
      faceUpCounter += 1;
      target.classList.add('noclick');
      // if two cards are faced up
      if (faceUpCounter >= 2) {
        gamefield.classList.add('noclick');
        setTimeout(() => { gamefield.classList.remove('noclick')}, 200);
        if (!isLoadedGame) {
          turnsCounter.value++;
        }
        compareCards(target, faceUpCard1);

        if (emptyCardNumber === classArrLength) {
          const time = stopwatch.value;
          const turns = turnsCounter.value;
          const fieldSize = fieldSizeSelector.value;
          const result = {
            time,
            turns,
            size: fieldSize,
          };

          if (isLoadedGame) {
            setTimeout(() => {
              textMsg.show('<b>Well... <br> You\'d better play without saving and loading... <br></b> Statistics are nor recorded for loaded games');
              addButton('close', 'Close', () => {textMsg.hide()});
              addButton('playAgain', 'Play Again', changeFieldSize);
            }, 300);
          }

          // change HTML and localStorage if new result is better
          if (isFirstBetter(result, localStorage.getItem(result.size))) {
            setTimeout(() => {
              textMsg.show(`<b>Congratulations! <br> New Record! <br></b>You paired all the cards in ${time} and ${turns} turns <br>`);
              addButton('close', 'Close', () => {textMsg.hide()});
              addButton('playAgain', 'Play Again', changeFieldSize);
            }, 300);
            changeLeadResult(result);
          } else {
            setTimeout(() => {
              textMsg.show(`<b>Good, But You Gotta Try Harder To Beat The Record! <br> </b>You paired all the cards in ${time} and ${turns} turns <br>`);
              addButton('close', 'Close', () => {textMsg.hide()});
              addButton('playAgain', 'Play Again', changeFieldSize);
            }, 300);
          }

          if (!isLoadedGame) {
            startStop();
            stopTurns();
          }
          emptyCardNumber = 0;
        }

        faceUpCounter = 0;
        return;
      }
      faceUpCard1 = target;
    }
  };
};

export function isFirstBetter(recent, previous) {
  const recentTime = Number(recent.time.replace(':', ''));
  const recentRatio = recentTime + recent.turns;

  // make recent better if there is no previous
  if (!localStorage.getItem(recent.size)) {
    return 1;
  }

  const previousTime = Number(JSON.parse(previous).time.replace(':', ''));
  const previousRatio = previousTime + JSON.parse(previous).turns;

  // if new result is worse than saved one
  if (recentRatio >= previousRatio) {
    return 0;
  }

  // if new result is better than saved one
  return 1;
}

export function changeLeadResult(result) {
  localStorage.removeItem(result.size);
  document.getElementsByClassName(`size${result.size}`).innerHTML = `<b>Time:</b> ${result.time}, <b>Turns:</b> ${result.turns} `;
  localStorage.setItem(result.size, JSON.stringify(result));
}

export function showLeaderboard() {
  if (localStorage.getItem(constants.sizes.size44)) {
    const res1 = JSON.parse(localStorage.getItem(constants.sizes.size44));
    document.querySelector('.size44').innerHTML = `<b>Time:</b> ${res1.time}, <b>Turns:</b> ${res1.turns} `;
  }
  if (localStorage.getItem(constants.sizes.size54)) {
    const res2 = JSON.parse(localStorage.getItem(constants.sizes.size54));
    document.querySelector('.size54').innerHTML = `<b>Time:</b> ${res2.time}, <b>Turns:</b> ${res2.turns} `;
  }
  if (localStorage.getItem(constants.sizes.size66)) {
    const res3 = JSON.parse(localStorage.getItem(constants.sizes.size66));
    document.querySelector('.size66').innerHTML = `<b>Time:</b> ${res3.time}, <b>Turns:</b> ${res3.turns} `;
  }
}

export function saveGame() {
  const saveFieldSize = document.querySelector('.field-selector-block__selector').value;
  const currentField = document.querySelector('.gamefield').innerHTML;

  textMsg.show('<b>Saving...</b>');
  setTimeout(() => {
    textMsg.hide();
  }, 1000);

  clearStopwatch();
  clearTimeout(clocktimer);
  init = 0;
  stopTurns();
  isFirstClick = true;
  emptyCardNumber = 0;
  Array.from(document.querySelectorAll('.card')).forEach((item) => {
    if (item.classList.contains('invisible')) {
      emptyCardNumber += 1;
    }
  });

  const savedGame = {
    size: saveFieldSize,
    field: currentField,
  };

  localStorage.setItem('gameSave', JSON.stringify(savedGame));
}

export function loadGame(save) {
  if (!save) {
    textMsg.show('<b>No saved games found :(</b>');
    setTimeout(() => {
      textMsg.hide();
    }, 1000);
    return;
  }

  const gameSave = JSON.parse(save);
  const fieldSizeSelector = document.querySelector('.field-selector-block__selector');

  fieldSizeSelector.value = gameSave.size;
  changeFieldSize();
  document.querySelector('.msg-block').innerHTML = '<p><b>Loading...</b></p>';

  // loading saved field
  setTimeout(() => {
    const field = document.querySelector('.gamefield');
    field.innerHTML = gameSave.field;
    emptyCardNumber = 0;
    isFirstClick = false;
    Array.from(document.querySelectorAll('.card')).forEach((item) => {
      if (item.classList.contains('invisible')) {
        emptyCardNumber += 1;
      }
    });
  }, 1000);
  isLoadedGame = true;
}

// Stopwatch initiaization and functions
const base = 60;
let clocktimer;
let dateObj;
let dm;
let ds;
let readout = '';
let h = 1;
let m = 1;
let tm = 1;
let s = 0;
let ts = 0;
let ms = 0;
let init = 0;

export function clearStopwatch() {
  clearTimeout(clocktimer);
  h = 1;
  m = 1;
  tm = 1;
  s = 0;
  ts = 0;
  ms = 0;
  init = 0;
  readout = '00:00';
  document.querySelector('.stopwatch').value = readout;
}

export function startStopwatch() {
  let cdateObj = new Date();
  let t = (cdateObj.getTime() - dateObj.getTime()) - (s * 1000);
  if (t > 999) {
    s++;
  }
  if (s >= (m * base)) {
    ts = 0;
    m++;
  } else {
    ts = parseInt((ms / 100) + s);
    if (ts >= base) {
      ts = ts - ((m - 1) * base);
    }
  }
  if (m > (h * base)) {
    tm = 1;
    h++;
  } else {
    tm = parseInt((ms / 100) + m);
    if (tm >= base) {
      tm = tm - ((h - 1) * base);
    }
  }
  if (ts > 0) {
    ds = ts;
    if (ts < 10) {
      ds = '0' + ts;
    }
  } else {
    ds = '00';
  }
  dm = tm - 1;
  if (dm > 0) {
    if (dm < 10) {
      dm = '0' + dm;
    }
  } else {
    dm = '00';
  }
  readout = dm + ':' + ds;
  document.querySelector('.stopwatch').value = readout;
  clocktimer = setTimeout(startStopwatch, 1);
}

export function startStop() {
  if (init === 0) {
    clearStopwatch();
    dateObj = new Date();
    startStopwatch();
    init = 1;
  } else {
    clearStopwatch();
    clearTimeout(clocktimer);
    init = 0;
  }
}
