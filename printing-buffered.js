let https = require('https');

function getAndPrintHTML () {

  let requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  https.get(requestOptions, function(response) {
    let buffer = "";
    response.on('data', function(chunk){
      buffer += chunk;
      console.log(buffer);
    })
  });
}

getAndPrintHTML();