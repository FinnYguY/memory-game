const processor = require('.\\processor.js');

class Message {

  constructor() {
    this.element = processor.createHtml('div', 'msg-block _hidden');

    let wrapper = processor.createHtml('div', 'msg-wrapper _hidden');
    wrapper.append(this.element);
    document.body.append(wrapper);
  }

  show(text) {
    this.element.innerHTML = `<p> ${text} </p>`;
    let wrapper = document.querySelector('.msg-wrapper');
    wrapper.classList.remove('_hidden');
    this.element.classList.remove('_hidden');
  }

  hide() {
    let wrapper = document.querySelector('.msg-wrapper');
    wrapper.classList.add('_hidden');
    this.element.classList.add('_hidden');
  }
}

const textMsg = new Message();
export default textMsg;
