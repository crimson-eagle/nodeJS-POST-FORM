var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'WebTech Da2' });//Gets the file index.ejs
});

module.exports = router;
