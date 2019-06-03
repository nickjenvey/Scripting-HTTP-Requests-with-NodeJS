let getHTML = require('./http-functions');

let requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/1337.html'
};

function print1337 (html) {
  let str = html;
  let leetSpeak = ""
  for(let i = 0; i < str.length; i++) {
    if(str[i] === "a") {
      leetSpeak += "4";
    } else if (str[i] === "e" && str[i] === "E") {
      leetSpeak += "3";
    } else if (str[i] === "o") {
      leetSpeak += "0";
    } else if (str[i] === "l") {
      leetSpeak += "1";
    } else if (str[i] === "s") {
      leetSpeak += "5";
    } else if (str[i] === "t") {
      leetSpeak += "7"
    } else {
      leetSpeak += str[i];
    }
  }
  console.log(leetSpeak);
}

getHTML(requestOptions, print1337);