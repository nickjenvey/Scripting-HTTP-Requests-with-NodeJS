let https = require('https');

module.exports = function getHTML (options, callback) {

  https.get(options, function(response) {
    let buffer = "";
    response.on('data', function(chunk) {
      buffer += chunk;
      callback(buffer);
    })
  })

};