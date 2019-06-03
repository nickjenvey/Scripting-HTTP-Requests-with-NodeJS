let getHTML = require('./http-functions');

let requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/lowercase.html'
};

function printLowercase (html) {
  let str = html;
  str = str.toLowerCase();
  console.log(str);
}

getHTML(requestOptions, printLowercase);