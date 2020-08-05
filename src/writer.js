const constants = require('.\\constants.js');

//create html element with given attributes
export function createHtml (selector, className, innerText, ...keysValues) {
  let elem = document.createElement(selector);
  className == undefined ? elem.className = '' : elem.className = className;
  innerText == undefined ? elem.innerHTML = '' : elem.innerHTML = innerText;
  if (keysValues.length != 0){
    let i = 1;
    while (i < keysValues.length) {
      elem.setAttribute(keysValues[i-1], keysValues[i]);
      i += 2;
    }
  }
  return elem;
};

var classArrLength = 0;
export function addCards (num) {
  let classArray = [];
  for(let i = 1; i < 19; i++) {
    classArray.push(`card${i}`,`card${i}`);
  }

  function getRndInt(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }

  switch (document.getElementsByClassName('field-selector-block__selector')[0].value) {
    case constants.sizes.size44:
      classArray.length = 16;
      classArrLength = classArray.length;
      break;
    case constants.sizes.size54:
      classArray.length = 20;
      classArrLength = classArray.length;
      break;
    case constants.sizes.size66:
      classArray.length = 36;
      classArrLength = classArray.length;
      break;
  }

  for(let i = 0; i < classArrLength; i++){
    let random = getRndInt(0, classArray.length);
    document.getElementsByClassName('gamefield')[0].append(createHtml('div', `card ${classArray[random]} card_back`));
    classArray.splice(random, 1);
  }
}

export function stopTurns () {
  document.getElementsByClassName('turnsCounter')[0].value = '0';
}

//toggling card face up/down
export function toggleCard (...cards) {
  for(let card of cards){
    card.classList.toggle('card_back');
  }
}

export function showMsg (msg) {
  document.getElementsByClassName('gamefield')[0].prepend(createHtml('div', 'msg-block'));
  document.getElementsByClassName('msg-block')[0].prepend(createHtml('p', '', msg));
};

export function showButtonMsg (msg, buttonText, action) {
  showMsg(msg);
  document.getElementsByClassName('msg-block')[0].append(createHtml('button', 'msg-block__button', 'Play Again'));
  document.getElementsByClassName('msg-block__button')[0].addEventListener('click', action);
}

var emptyCardNumber = 0;
export function compareCards (card1, card2) {
  if (card1.classList[1] == card2.classList[1]) {
    setTimeout(() => {card1.classList.add('invisible', 'noclick');}, 300);
    setTimeout(() => {card2.classList.add('invisible', 'noclick');}, 300);
    emptyCardNumber += 2;
  } else {
    card1.classList.remove('noclick');
    card2.classList.remove('noclick');
    setTimeout(toggleCard, 400, card1, card2);
  }
}

export function changeFieldSize () {
  let elems, field, card;
  isLoadedGame = false;

  document.getElementsByClassName('gamefield')[0].remove();

  elems = document.getElementsByClassName('field-selector-block__selector');
  Array.from(elems).forEach((el) => {
    field = document.createElement('div');
    field.className = 'gamefield';
    document.getElementsByClassName('time-n-turns-block')[0].after(field);

    clearStopwatch();
    clearTimeout(clocktimer);
    init = 0;
    stopTurns();
    isFirstClick = true;
    emptyCardNumber = 0;

    showMsg('<b>Shuffling...</b>');
    setTimeout(function () {
      document.getElementsByClassName('msg-block')[0].remove();
    }, 1000);

    switch (el.value) {
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
  });
}

let faceUpCounter = 0;
let faceUpCard1;
var isFirstClick = true;
let isLoadedGame = false;
export const callback = function(mutationsList, observer) {
  document.getElementsByClassName('gamefield')[0].onclick = function (event) {
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
      //if two cards are faced up
      if (faceUpCounter >= 2) {
        document.getElementsByClassName('gamefield')[0].classList.add('noclick');
        setTimeout(() => {document.getElementsByClassName('gamefield')[0].classList.remove('noclick')}, 200);
        if (!isLoadedGame) {
          document.getElementsByClassName('turnsCounter')[0].value++;
        }
        compareCards(target, faceUpCard1);

        let cards = document.getElementsByClassName('card');
        if (emptyCardNumber == classArrLength) {
          let time = document.getElementsByClassName('stopwatch')[0].value;
          let turns = document.getElementsByClassName('turnsCounter')[0].value;

          let fieldSize = document.getElementsByClassName('field-selector-block__selector')[0].value;
          let result = {
            'time': time,
            'turns': turns,
            'size': fieldSize,
          }

          if (isLoadedGame) {
            setTimeout(function () {
              showButtonMsg(`<b>Well... <br> You'd better play without saving and loading... <br></b> Statistics are nor recorded for loaded games`, 'Play Again', changeFieldSize);
            }, 300);
          }

          //change HTML and localStorage if new result is better
          if (isFirstBetter(result, localStorage.getItem(result.size))) {
            setTimeout(function () {
              showButtonMsg(`<b>Congratulations! <br> New Record! <br></b>You paired all the cards in ${time} and ${turns} turns <br>`, 'Play Again', changeFieldSize);
            }, 300);
            changeLeadResult(result);
          }
          else {
            setTimeout(function () {
              showButtonMsg(`<b>Good, But You Gotta Try Harder To Beat The Record! <br> </b>You paired all the cards in ${time} and ${turns} turns <br>`, 'Play Again', changeFieldSize);
            }, 300);
          }

          startStop();
          stopTurns();
          emptyCardNumber = 0;
        }

        faceUpCounter = 0;
        return;
      }
      faceUpCard1 = target;
    }
  }
};

export function isFirstBetter (recent, previous) {
  let recentTime = Number(recent.time.replace(':', ''));
  let recentRatio = recentTime + recent.turns;

  //make recent better if there is no previous
  if (!localStorage.getItem(recent.size)) {
    return 1;
  }

  let previousTime = Number(JSON.parse(previous).time.replace(':', ''));
  let previousRatio = previousTime + JSON.parse(previous).turns;

  //if new result is worse than saved one
  if (recentRatio >= previousRatio) {
    return 0;
  }

  //if new result is better than saved one
  return 1;
}

export function changeLeadResult (result) {
  localStorage.removeItem(result.size);
  document.getElementsByClassName(`size${result.size}`)[0].innerHTML = `<b>Time:</b> ${result.time}, <b>Turns:</b> ${result.turns} `;
  localStorage.setItem(result.size, JSON.stringify(result));
}

export function showLeaderboard () {
  if (localStorage.getItem(constants.sizes.size44)) {
    let res1 = JSON.parse(localStorage.getItem(constants.sizes.size44));
    document.getElementsByClassName('size44')[0].innerHTML = `<b>Time:</b> ${res1.time}, <b>Turns:</b> ${res1.turns} `;
  }
  if (localStorage.getItem(constants.sizes.size54)) {
    let res2 = JSON.parse(localStorage.getItem(constants.sizes.size54));
    document.getElementsByClassName('size54')[0].innerHTML = `<b>Time:</b> ${res2.time}, <b>Turns:</b> ${res2.turns} `;
  }
  if (localStorage.getItem(constants.sizes.size66)) {
    let res3 = JSON.parse(localStorage.getItem(constants.sizes.size66));
    document.getElementsByClassName('size66')[0].innerHTML = `<b>Time:</b> ${res3.time}, <b>Turns:</b> ${res3.turns} `;
  }
}

export function saveGame (time, turns) {
  let saveTime = document.getElementsByClassName('stopwatch')[0].value;
  let saveTurns = document.getElementsByClassName('turnsCounter')[0].value;
  let saveFieldSize = document.getElementsByClassName('field-selector-block__selector')[0].value;
  let currentField = document.getElementsByClassName('gamefield')[0].innerHTML;

  showMsg('<b>Saving...</b>');
  setTimeout(function () {
    document.getElementsByClassName('msg-block')[0].remove();
  }, 1000);

  clearStopwatch();
  clearTimeout(clocktimer);
  init = 0;
  stopTurns();
  isFirstClick = true;
  emptyCardNumber = 0;
  Array.from(document.getElementsByClassName('card')).forEach((item) => {
    if (item.classList.contains('invisible')) {
      emptyCardNumber += 1;
    }
  });

  let savedGame = {
    'size': saveFieldSize,
    'field': currentField,
  }

  localStorage.setItem('gameSave', JSON.stringify(savedGame));
}

export function loadGame (save) {
  if (!save) {
    showMsg('<b>No saved games found :(</b>');
    setTimeout(function () {
      document.getElementsByClassName('msg-block')[0].remove();
    }, 1000);
    return;
  }

  let gameSave = JSON.parse(save);

  document.getElementsByClassName('field-selector-block__selector')[0].value = gameSave.size;
  changeFieldSize();
  document.getElementsByClassName('msg-block')[0].innerHTML = '<p><b>Loading...</b></p>';

  //loading saved field
  setTimeout(function () {
    document.getElementsByClassName('gamefield')[0].innerHTML = gameSave.field;
    emptyCardNumber = 0;
    isFirstClick = false;
    Array.from(document.getElementsByClassName('card')).forEach((item) => {
      if (item.classList.contains('invisible')) {
        emptyCardNumber += 1;
      }
    });
  }, 1000);
  isLoadedGame = true;
}

//Stopwatch initiaization and functions
var base = 60;
var clocktimer, dateObj, dh, dm, ds, ms;
var readout = '';
var h = 1,
  m = 1,
  tm = 1,
  s = 0,
  ts = 0,
  ms = 0,
  init = 0;

export function clearStopwatch () {
  clearTimeout(clocktimer);
  h = 1;
  m = 1;
  tm = 1;
  s = 0;
  ts = 0;
  ms = 0;
  init = 0;
  readout = '00:00';
  document.getElementsByClassName('stopwatch')[0].value = readout;
}

export function startStopwatch () {
  var cdateObj = new Date();
  var t = (cdateObj.getTime() - dateObj.getTime()) - (s * 1000);
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
  document.getElementsByClassName('stopwatch')[0].value = readout;
  clocktimer = setTimeout(startStopwatch, 1);
}

export function startStop () {
  if (init == 0) {
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
