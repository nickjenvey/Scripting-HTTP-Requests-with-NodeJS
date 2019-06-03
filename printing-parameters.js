let https = require('https');

function getAndPrintHTML (options) {

  https.get(options, function(response) {
    let buffer = "";
    response.on('data', function(chunk) {
      buffer += chunk;
      console.log(buffer);
    })
  })

}

let requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

getAndPrintHTML(requestOptions);
