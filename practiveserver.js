var express = require('express');
var http = require('http');
var fs = require('fs')
var path = require('path')
var app = express();

// var x = Xray();

app.all('*', function(req, res) {
  // x('http://' + req.query.host, 'body@text')(function(err, info) {
  //   console.log(info)
  //   // res.send(pigLatin(info))
  // })
  var options = {
    host: req.query.host,
    port: 80,
    path: req.params['0'],
    method: 'GET'
  };

  var data = '';

  http.request(options, function(response) {
    response.on('data', function(chunk) {
      data += chunk
      fs.writeFile('index.html', data, function(err) {
        if(err) console.log(err)
        res.sendFile(path.resolve(__dirname + '/index.html'))
      })
    });
  }).on('error', function(e) {
    console.log("Got error: " + e.message);
  });
});

app.listen(3000, function(err, success) {
  if (err) console.log(err);
  console.log('Listening on port 3000');
});

function pigLatin(words) {
  var noNewLine = words && words.replace(/\r?\n|\r|\t/g, ' ');

  // console.log(noNewLine)
  var myArray = /[^\W\d](\w|[-']{1,2}(?=\w))*/g.exec(noNewLine);
  console.log(myArray)
  var temp;
  for (var i = 0; i < myArray.length; i++) {
    temp = myArray[i].slice(0)
    myArray[i].push(temp + 'ay')
  };
  return myArray;
};
