// require `request` and the Node `fs` (filesystem) module
var request = require('request');
var fs = require('fs');

request.get('https://sytantris.github.io/http-examples')
       .on('error', function(err){
        throw err;
       })
       .on('response', function(res){
        console.log('Response Status Message', res.statusMessage);
        console.log('Response Headers', res.headers['content-type']);
       })
       .pipe(fs.createWriteStream('./future.jpg'))

