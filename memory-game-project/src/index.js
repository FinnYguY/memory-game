const writer = require('.\\writer');
import '.\\styles.scss'

let div = document.createElement('div');
div.id = 'appendDiv'
document.body.prepend(div);

writer.addText('appendDiv', 'Hello World!');
