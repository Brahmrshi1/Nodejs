var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "mydb"
});

con.connect(function(err) {
  if (err) throw err;
  var sql = "SELECT * FROM customers LIMIT 5";
  /* if u like to start from some were else then 
  write this syntax
  
  var sql = "SELECT * FROM customers LIMIT 5 OFFSET 2";
  where row started frm 3 */
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result);
  });
});
