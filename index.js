// index.js
// where your node app starts

// init project
require('dotenv').config();
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
var cors = require('cors');
app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

// your first API endpoint...
app.get('/api/hello', function (req, res) {
  res.json({ greeting: 'hello API' });
});

// Adding console logging middleware
const logMiddleware = (req,res,next) => {
  var string = req.method + " " + req.path + " - " + req.ip;
  console.log(string)
  next();
}
// Adding endpoint /api/whoami
app.use("/api/whoami",(req,res)=>{
   // Get the preferred language from the "Accept-Language" header
   const preferredLanguage = req.headers['accept-language'];

  // Get user ip
  const ip = req.ip
  // Get user agent
  const ua = req.get('User-Agent');
  res.json({ipaddress:ip,language:preferredLanguage,software:ua});
})
app.use(logMiddleware);
// listen for requests :)
var listener = app.listen(process.env.PORT || 3001, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
