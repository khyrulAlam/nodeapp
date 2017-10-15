var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "nUser"
});
con.connect(function(err){
	if(err) console.log(err);
	console.log('mysql database connection successfull');
})


module.exports = con;
