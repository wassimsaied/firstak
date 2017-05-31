var mysql = require('mysql');

var con = mysql.createConnection({
  host: "sql8.freemysqlhosting.net",
  user: "sql8177532",
  password: "H3WufnlSFB"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

