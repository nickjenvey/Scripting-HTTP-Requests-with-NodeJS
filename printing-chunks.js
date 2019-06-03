let https = require('https');

function getAndPrintHTMLChunks () {

  let requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

  https.get(requestOptions, function(response) {
    response.on('data', function(chunk){
      console.log(chunk + '\n');
    })
  });
}

getAndPrintHTMLChunks();