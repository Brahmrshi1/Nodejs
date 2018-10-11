var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "mydb"
});

con.connect(function(err) {
  if (err) throw err;
  // for the specific columns you need write the name of columns to place of the * in select quary
  // if you will like to see fileds of columns also with data you have to just replace the result with the fileds place of console.log
  con.query("SELECT * FROM customers", function (err, result, fields) { 
    if (err) throw err;
    console.log(result);
  });
});