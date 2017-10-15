var db = require('../module/mysql');

module.exports = {

//all users info
  users: function(req,res,next){
    var i =1;
    var d = null;
      db.query("SELECT * FROM users ORDER BY id DESC",function(err,data){
        if(err) throw err;
        d = data ;
        res.status(200).render('tmpl/users', { title: 'Alam', rows: d,count: i});
        //db.end();
      })

      //db.end();
  },

//single user info
  getByID : function(req,res,next){
  	var id = req.params.id;
  	var d = null;
  	db.query("SELECT * FROM users WHERE id="+id,function(err,data){
  		if(err)throw err;
        if(data.length > 0){
          d = data[0];
      		res.status(200).render('tmpl/userEdit', { title: 'Edit user' ,row: d});
        }else{
    		    res.status(404).send({Error:'true',message:'No Data Found'});
        }
  	})
  },

//edit page open
  edit: function(req,res,next){
    var id = req.params.id;
  	var d = null;

  	db.query("SELECT * FROM users WHERE id="+id,function(err,data){
  		if(err)throw err;
        if(data.length > 0){
          d = data[0];
      		res.status(200).render('tmpl/userEdit', { title: 'Edit user', row: d});
        }else{
    		  res.status(404).send({Error:'true',message:'No Data Found'});
        }
  	})
  },

//update user info
  update: function(req,res,next){
  	var id = req.params.id;
    var data = {
        name 		: req.body.name,
    		email 	: req.body.email,
        phone   : req.body.phone,
        address : req.body.address,
        company : req.body.company,
    		website : req.body.website
      };
    var sql = "UPDATE users SET ? WHERE id ="+id;
		db.query(sql,data,function(err,result){
			if(err) throw err;
      res.redirect('/users/edit/'+id);
			console.log(result.affectedRows + " record(s) updated");
		});

    //req.flash('danger', 'Successfully Added Information');
    req.flash('success', 'Successfully Edit Information');
  },

//Delete user info
  delete: function(req,res,next){
      var id = req.params.id;
  		db.query("DELETE FROM users WHERE id="+id, function(err,result){
        if(err) throw err;
        if(result.affectedRows>0){
          res.redirect('/users');
        }else{
          res.status(404).send({Error:'true',message:'User ID Not Found'});
        }
      });
      req.flash('success', 'Delete Successfully info');
    },

//add
  add: function(req,res,next){
    var data = {
        name    : req.body.name,
        email   : req.body.email,
        phone   : req.body.phone,
        address : req.body.address,
        company : req.body.company,
        website : req.body.website
      };
    var sql = "INSERT INTO users SET ?";
    db.query(sql,data,function(err,result){
      if(err) throw err;
      res.redirect('/add');
      console.log('User added to database with ID: ' + result.insertId);
    });
    req.flash('success', 'Successfully Added Information');
  }


}
