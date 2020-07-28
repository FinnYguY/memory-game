//create html element with given attributes
export function createHtml(selector, className, innerText, ...keysValues) {
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
}

var classArrLength = 0;
export function addCards (num) {
  let classArray = ['card1', 'card1', 'card2', 'card2', 'card3', 'card3', 'card4', 'card4', 'card5', 'card5', 'card6', 'card6', 'card7', 'card7', 'card8', 'card8', 'card9', 'card9', 'card10', 'card10', 'card11', 'card11', 'card12', 'card12', 'card13', 'card13', 'card14', 'card14', 'card15', 'card15', 'card16', 'card16', 'card17', 'card17', 'card18', 'card18'];

  function getRndInt(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }

  switch (document.getElementsByClassName('fieldSelector')[0].value) {
    case '44':
      classArray.length = 16;
      classArrLength = classArray.length;
      break;
    case '54':
      classArray.length = 20;
      classArrLength = classArray.length;
      break;
    case '66':
      classArray.length = 36;
      classArrLength = classArray.length;
      break;
  }

  for(let i = 0; i < classArrLength; i++){
    let random = getRndInt(0, classArray.length);
    document.getElementsByClassName('gameField')[0].append(createHtml('div', `card ${classArray[random]} cardBack`));
    classArray.splice(random, 1);
  }
}

export function stopTurns() {
  document.getElementsByClassName('turnsCounter')[0].value = '0';
}

//toggling card face up/down
export function toggleCard(...cards) {
  for(let card of cards){
    card.classList.toggle('cardBack');
  }
}

export function showMsg(msg) {
  document.getElementsByClassName('gameField')[0].prepend(createHtml('div', 'msgDiv'));
  document.getElementsByClassName('msgDiv')[0].prepend(createHtml('p', '', msg));
};

var emptyCardNumber = 0;
export function compareCards(card1, card2) {
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

  document.getElementsByClassName('gameField')[0].remove();

  elems = document.getElementsByClassName('fieldSelector');
  Array.from(elems).forEach((el) => {
    field = document.createElement('div');
    field.className = 'gameField flex';
    document.getElementsByClassName('timeNturnsBlock')[0].after(field);

    clearStopwatch();
    clearTimeout(clocktimer);
    init = 0;
    stopTurns();
    isFirstClick = true;

    showMsg('<b>Shuffling...</b>');
    setTimeout(function () {
      document.getElementsByClassName('msgDiv')[0].remove();
    }, 1000);

    switch (el.value) {
      case '44':
        field.classList.add('gameField--4x4');
        addCards(16);
        break;
      case '54':
        field.classList.add('gameField--5x4');
        addCards(20);
        break;
      case '66':
        field.classList.add('gameField--6x6');
        addCards(36);
        break;
      default:
    }
  });
}

let faceUpCounter = 0;
let faceUpCard1;
var isFirstClick = true;
export const callback = function(mutationsList, observer) {
  document.getElementsByClassName('gameField')[0].onclick = function (event) {
    let target = event.target;
    if(!target.classList.contains('card')) return;
    toggleCard(target);

    if (isFirstClick) {
      isFirstClick = false;
      startStop();
    }

    if (!target.classList.contains('cardBack')) {
      faceUpCounter += 1;
      target.classList.add('noclick');
      //if two cards are faced up
      if (faceUpCounter >= 2) {
        document.getElementsByClassName('gameField')[0].classList.add('noclick');
        setTimeout(() => {document.getElementsByClassName('gameField')[0].classList.remove('noclick')}, 200);
        document.getElementsByClassName('turnsCounter')[0].value++;
        compareCards(target, faceUpCard1);

        let cards = document.getElementsByClassName('card');
        if (emptyCardNumber == classArrLength) {
          let time = document.getElementsByClassName('stopwatch')[0].value;
          let turns = document.getElementsByClassName('turnsCounter')[0].value;
          setTimeout(function () {
            showMsg(`<b>Congratulations!</b><br>You paired all the cards in ${time} and ${turns} turns`);
          }, 300);

          let fieldSize = document.getElementsByClassName('fieldSelector')[0].value;
          let result = {
            'time': time,
            'turns': turns,
            'size': fieldSize,
          }

          //change HTML and localStorage if new result is better
          if (isFirstBetter(result, localStorage.getItem(result.size))) {
            changeLeadResult(result);
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

export function isFirstBetter(recent, previous) {
  let recentTime = Number(recent.time.replace(':', ''));
  let recentRatio = recentTime/recent.turns;

  //make recent better if there is no previous
  if (!localStorage.getItem(recent.size)) {
    return 1;
  }

  let previousTime = Number(JSON.parse(previous).time.replace(':', ''));
  let previousRatio = previousTime/JSON.parse(previous).turns;

  //if new result is worse than saved one
  if (recentRatio >= previousRatio) {
    return 0;
  }

  //if new result is better than saved one
  return 1;
}

export function changeLeadResult(result) {
  localStorage.removeItem(result.size);
  document.getElementsByClassName(`size${result.size}`)[0].innerHTML = `<b>Time:</b> <u>${result.time}</u>, <b>Turns:</b> <u>${result.turns}</u> `;
  localStorage.setItem(result.size, JSON.stringify(result));
}

export function showLeaderboard() {
  if (localStorage.getItem(44)) {
    let res1 = JSON.parse(localStorage.getItem(44));
    document.getElementsByClassName('size44')[0].innerHTML = `<b>Time:</b> <u>${res1.time}</u>, <b>Turns:</b> <u>${res1.turns}</u> `;
  }
  if (localStorage.getItem(54)) {
    let res2 = JSON.parse(localStorage.getItem(54));
    document.getElementsByClassName('size54')[0].innerHTML = `<b>Time:</b> <u>${res2.time}</u>, <b>Turns:</b> <u>${res2.turns}</u> `;
  }
  if (localStorage.getItem(66)) {
    let res3 = JSON.parse(localStorage.getItem(66));
    document.getElementsByClassName('size66')[0].innerHTML = `<b>Time:</b> <u>${res3.time}</u>, <b>Turns:</b> <u>${res3.turns}</u> `;
  }
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
