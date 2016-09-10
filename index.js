// var express = require('express')
//
// var app = express()
//
// app.get('/notes', function(req, res) {
//   res.json({notes: "This is your notebook. Edit this to start saving your notes!"})
// })
//
// app.listen(3000)

var express = require('express');

var app = express();

app.get('/', function(req,res) {
  res.json({home: "home endpoint"})
});

app.post('/convert', function(req, res) {
  console.log('convert the stuff!');
  console.log('req', req);
  // console.log('res', res);
  var tempPath = req.files.file.path;
  console.log('tempPath', tempPath);
})

// app.post('/convert', function(req, res) {
//   console.log('res', res);
//   console.log('req', res);
// })

app.listen(3000);
