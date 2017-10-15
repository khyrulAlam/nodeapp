var express = require('express');
var router = express.Router();

var uCntr = require('../controller/userCntr');

/* GET users listing. */
router.get('/', uCntr.users); // http://localhost:3000/users
router.get('/:id', uCntr.getByID); // http://localhost:3000/users/:id

//Edit
router.get('/edit/:id', uCntr.edit ); //http://localhost:3000/users/edit/:id
router.post('/edit/:id', uCntr.update); //http://localhost:3000/users/edit/:id

//Delete
router.get('/delete/:id', uCntr.delete); //http://localhost:3000/users/delete/:id



//router.post('/add',uCntr.add);

module.exports = router;
