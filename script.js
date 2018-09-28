// set up an express app
const express = require('express');
const app = express();

// render the static files found in the public folder
app.use(express.static(`${__dirname}/public`));

// in the root path, render the file found in the views folder, in index.html
app.get('/', function(req, res, next) {
  res.sendFile(`${__dirname}/views/index.html`);
});

// in the selected path, return a JSON object with the information retrieved from the request header
app.get('/api/whoami', function(req, res, next) {
  // console.log(req.headers);
  // {"ipaddress":"159.20.14.100","language":"en-US,en;q=0.5", "software":"Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:50.0) Gecko/20100101 Firefox/50.0"}
  // the output JSON ought to send the IP address alongside the language of the device and the "software" found under the user agent property
  // ! strings including hyphens are incorporated through bracket notation instead of dot notation
  res.json({
    "ipaddress": req.headers["host"],
    "language": req.headers["accept-language"],
    "software": req.headers["user-agent"]
  });
});

// listen to a selected port where the project is set up
const port = 3000;
app.listen(port);
console.log(`listening on port ${port}`);