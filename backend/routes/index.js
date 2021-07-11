var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(`Server is running on Port:3001`);
  res.render('index', { title: 'Express' });
});

module.exports = router;
