var express = require('express');
var router = express.Router();
var db = require('../module/mysql');


/* GET home page. */
router.get('/', function(req, res, next) {
	db.query("SELECT * FROM users ORDER BY id DESC",function(err,data){
        if(err) throw err;
        d = data ;
        //res.status(200).render('tmpl/users', { title: 'Alam', rows: d,count: i});
        res.status(200).render('index', { rows:d });
        //db.end();
      })
});

module.exports = router;
