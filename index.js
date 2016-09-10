var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var fs = require('fs');

app.use(bodyParser.urlencoded({
  extended: true
}))

app.use(bodyParser.json());

app.get('/', function(req,res) {
  res.json({home: "home endpoint"})
});

app.post('/convert', function(req, res, next) {
  console.log('convert the stuff!');
  console.log('req', req);
  var baseImg = `data:image/jpeg;base64,${req.body.base64}`
  var base64Data = req.body.base64;
  base64Data += base64Data.replace('+', ' ');

  var binaryData = new Buffer(base64Data, 'base64').toString('binary');

  require('fs').writeFile('/photo.jpeg', binaryData, 'binary', function(err) {
    console.log(err);
  })
  res.send('done');
})


app.listen(process.env.PORT || 3000, function(){
  console.log(`Express server listening on port ${this.address().port} in ${app.settings.env} mode`);
});
