var db = require('../module/mysql');

module.exports = {

  users: function(req,res,next){
    var i =1;
    var d = null;
      db.query("SELECT * FROM items ORDER BY id DESC",function(err,data){
        if(err) throw err;
        d = data ;
        res.status(200).render('tmpl/users', { title: 'Alam', rows: d,count: i});
        //db.end();
      })

      //db.end();
  },

  getByID : function(req,res,next){
  	var id = req.params.id;
  	var d = null;
    var message = '';
  	db.query("SELECT * FROM items WHERE id="+id,function(err,data){
  		if(err)throw err;
        if(data.length > 0){
          d = data[0];
      		res.status(200).render('tmpl/userEdit', { title: 'Edit user', row: d});
        }else{
    		    res.status(404).send({Error:'true',message:'No Data Found'});
        }
  	})
  },

  edit: function(req,res,next){
    var id = req.params.id;
  	var d = null;
    var message = '';
  	db.query("SELECT * FROM items WHERE id="+id,function(err,data){
  		if(err)throw err;
        if(data.length > 0){
          d = data[0];
      		res.status(200).render('tmpl/userEdit', { title: 'Edit user', row: d});
        }else{
    		  res.status(404).send({Error:'true',message:'No Data Found'});
        }
  	})
  },

  update: function(req,res,next){
  	var putid = req.params.id;
    var data = {
        name 		: req.body.name,
    		cost 		: req.body.seller_id,
    		bids 		: req.body.bids
      };
    var sql = "UPDATE items SET ? WHERE id ="+putid;
		db.query(sql,data,function(err,result){
			if(err) throw err;
      //res.redirect('/users/edit/'+putid);
      res.redirect('/users');
			console.log(result.affectedRows + " record(s) updated");
		})
  },

  delete: function(req,res,next){
      var id = req.params.id;
  		db.query("DELETE FROM items WHERE id="+id, function(err,result){
        if(err) throw err;
        if(result.affectedRows>0){
          res.redirect('/users');
        }else{
          res.status(404).send({Error:'true',message:'User ID Not Found'});
        }
      });

    }

}
