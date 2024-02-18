var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({key:111, value:"222"});
});

module.exports = router;
