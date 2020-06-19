console.log('Bot started');

var Twit = require('twit');

var config = require('./config');

var T = new Twit(config);

//
//  tweet 'hello world!'
//
T.post('statuses/update', { status: 'hello world!' }, function(err, data, response) {
  console.log(data)
})