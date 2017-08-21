const text = require('./text')

//pulling random items from text array
function randomText() {
  return text[Math.floor(Math.random() * text.length)]
}

//putting random text together to make paragraphs
function randomParagraph() {
  let num = Math.floor(Math.random() * (10 - 2 + 1) + 50),
    paragraph = ''
  ;

  for (var i = 0; i < num; i++) {
    paragraph += randomText() + ' '; }

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

module.exports = {
  randomText: randomText,
  randomParagraph: randomParagraph,
  countParagraphs: countParagraphs
}
