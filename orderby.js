var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "mydb"
});

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM customers ORDER BY name", function (err, result) {
      /* for desending order
      SELECT * FROM customers ORDER BY name DESC
      
      */
    if (err) throw err;
    console.log(result);
  });
});