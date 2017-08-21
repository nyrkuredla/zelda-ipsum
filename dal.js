const text = require('./text')

function randomText() {
  return text[Math.floor(Math.random() * text.length)]
}


function randomParagraph() {
  let num = Math.floor(Math.random() * (10 - 2 + 1) + 50),
    paragraph = ''
  ;

  for (var i = 0; i < num; i++) {
    paragraph += randomText() + ' '; }

  return paragraph;
}

function countParagraphs(input) {
  let totalText = [];
  for (let i = 0; i < Number(input); i++) {
    let newObj = {};
    newObj["text"] = randomParagraph();
    totalText.push(newObj);
  }
  return totalText;
}

module.exports = {
  randomText: randomText,
  randomParagraph: randomParagraph,
  countParagraphs: countParagraphs
}
