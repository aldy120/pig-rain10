var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET users listing. */
router.get('/', function(req, res, next) {
  //userEmail
  //res.send('respond with a resource');
  res.render('list');
});
/*router.get('/', function(req, res, next) {
  //res.send('respond with a resource');
});*/

module.exports = router;
