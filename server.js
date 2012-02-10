var http = require('http');
var twitter = require('ntwitter');

var argv = require('optimist').argv;

var twit = new twitter({
  consumer_key: argv.consumer_key,
  consumer_secret: argv.consumer_secret,
  access_token_key: argv.token_key,
  access_token_secret: argv.token_secret
});

console.log(argv);

twit.stream('statuses/filter', {'locations':'-122.75,36.8,-121.75,37.8,-74,40,-73,41'}, function(stream) {
  stream.on('data', function (data) {
    console.log(data.user.screen_name + ": " + data.text);
  });
});

http.createServer(function (req, res) {
   res.writeHead(200, {'Content-Type': 'text/plain'});
   res.end('Hello World\n');
}).listen(process.env.PORT);


