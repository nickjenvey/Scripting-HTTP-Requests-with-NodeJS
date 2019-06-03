let getHTML = require('./http-functions');

let requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/uppercase.html'
};

function printUppercase (html) {
  let str = html;
  str = str.toUpperCase();
  console.log(str);
}

getHTML(requestOptions, printUppercase);