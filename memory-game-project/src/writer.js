exports.addText = function (elemClass, text) {
  let elems = document.getElementsByClassName(elemClass);
  Array.from(elems).forEach((el) => {
    el.innerText = text;
  });
}
