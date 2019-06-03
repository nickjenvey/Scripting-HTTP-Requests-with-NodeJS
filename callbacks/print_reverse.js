let getHTML = require('./http-functions');

let requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/reverse.html'
};

function printReverse (html) {
  let str = html;
  str = str.split('').reverse().join('');
  console.log(str);
}

getHTML(requestOptions, printReverse);