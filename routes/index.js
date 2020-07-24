var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var json =[{id:1,name:foo,},{id:2, name:foooo}]
  res.render('index',{title: 'title', json});
});

module.exports = router;
