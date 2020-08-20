const processor = require('.\\processor.js');
const view = require('.\\view.js');
import '.\\scss\\styles.scss';

//all required onload initializations
function initialize () {
  processor.addCards(16);
  processor.showLeaderboard();
}

//create the HTML
view.generateView();

window.onload = initialize();

//configuring the mutation observer for delegation to work properly
var field = document.getElementsByTagName('body')[0];

const config = {
    childList: true
};

const observer = new MutationObserver(processor.callback);
observer.observe(field, config);
