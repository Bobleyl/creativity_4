var express = require('express');
var router = express.Router();
var request = require('request');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile('index.html', { root:  'public' });
});

router.get('/joke',function(req,res,next){
  var url = "https://icanhazdadjoke.com/";
  console.log("query", req.query);
  url += req.query['q'];
  url += "?format=json";
  request(url).pipe(res);
});

module.exports = router;
