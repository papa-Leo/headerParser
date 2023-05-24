// init project
require('dotenv').config();
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
var cors = require('cors');
app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204

app.use(express.static('public'));

// required to find client ip
app.set('trust proxy', true)

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.get('/whoami', (req, res) => {
	const ip = req.ip;
	const lang = req.headers['accept-language'];
	const software = req.headers['user-agent'];

	res.json({
		'ipaddress': ip,
		'language': lang,
		'software': software
	});
})

// listen for requests :)
var listener = app.listen(process.env.PORT || 3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
