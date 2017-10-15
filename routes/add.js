var express = require('express');
var router = express.Router();

var uCntr = require('../controller/userCntr');

/* GET users listing. */
router.get('/', (req,res,next) => {
    res.status(200).render('tmpl/addUser', { title: 'Add New User'});
}); // http://localhost:3000/add

//POST
router.post('/', uCntr.add); // http://localhost:3000/add

module.exports = router;
