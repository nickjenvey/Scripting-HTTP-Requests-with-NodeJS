let https = require('https');

function getHTML (options, callback) {

  https.get(options, function(response) {
    let buffer = "";
    response.on('data', function(chunk) {
      buffer += chunk;
      printHTML(buffer);
    })
  })

}

function printHTML (html) {
  console.log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

getHTML(requestOptions, printHTML);