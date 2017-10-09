var express = require('express');
var router = express.Router();
var db = require('../module/mysql');

/* GET users listing. */
router.get('/', function(req, res, next) {
  db.query("SELECT * FROM items ORDER BY id",function(err,data){
    if(err) throw err;
    res.render('tmpl/users', { title: 'Alam', rows: data});
  });
});

module.exports = router;
