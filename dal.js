const text = require('./text')
const naviText = require('./naviText')

//pulling random items from text arrays
function randomText() {
  return text[Math.floor(Math.random() * text.length)]
}

function randomNaviText () {
  return naviText[Math.floor(Math.random() * naviText.length)]
}

//putting random texts together to make paragraphs
function randomParagraph() {
  let num = Math.floor(Math.random() * (10 - 2 + 1) + 50),
    paragraph = ''
  ;

  for (var i = 0; i < num; i++) {
    paragraph += randomText() + ' '; }

  return paragraph;
}

function randomNaviParagraph () {
  let num = Math.floor(Math.random() * (10 - 2 + 1) + 100),
    paragraph = ''
  ;

  for (var i = 0; i < num; i++) {
    paragraph += randomNaviText() + ' '; }

  return paragraph;
}

//pushing paragraphs into new array for rendering on main page
function countParagraphs(input) {
  let totalText = [];
  for (let i = 0; i < Number(input); i++) {
    let newObj = {};
    newObj["text"] = randomParagraph();
    totalText.push(newObj);
  }
  return totalText;
}

function countNaviParagraphs(input) {
  let totalNaviText = [];
  for (let i = 0; i < Number(input); i++) {
    let newObj = {};
    newObj["text"] = randomNaviParagraph();
    totalNaviText.push(newObj);
  }
  return totalNaviText;
}


module.exports = {
  randomText, randomNaviText, randomParagraph, randomNaviParagraph, countParagraphs, countNaviParagraphs
}
