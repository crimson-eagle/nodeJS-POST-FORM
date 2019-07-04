var express = require('express');
var router = express.Router();

router.post('/', function(req, res, next) {
  res.render('formDisplayData', {//will grab formDisplayData.ejs
  	title : "Successfully Submitted Using POST Request",
  	name : req.body.name//and will find name in the <body> of post.ejs 

  });
});


module.exports = router;
