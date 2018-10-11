var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "mydb"
});

con.connect(function(err) {
  if (err) throw err;

  con.query("SELECT * FROM customers WHERE address = 'Park Lane 38'", function (err, result) {
    if (err) throw err;
      /* If you like to use the Wildchat then do this minor changes in qry
  con.query("SELECT * FROM customers WHERE address LIKE 'S%'", function (err, result) 

   */

   /* if you like to go with the escaping value like qry then you have to do like this change
    There are two mwthods
    first method

    var adr = 'Mountain 21';
    var sql = 'SELECT * FROM customers WHERE address = ' + mysql.escape(adr);
    con.query(sql, function (err, result) {
    if (err) throw err;
     console.log(result);

     Second method
     var adr = 'Mountain 21';
     var sql = 'SELECT * FROM customers WHERE address = ?';
     con.query(sql, [adr], function (err, result) {
     if (err) throw err;
     console.log(result);
  */ 

    console.log(result);
  });
});