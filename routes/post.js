var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('post', {});//Gets the file form-post.ejs
});

module.exports = router;
