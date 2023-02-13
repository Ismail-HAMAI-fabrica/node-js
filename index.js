const mysql = require('mysql')
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "cabinet"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected to the database!");
});
response.render('SELECT * FROM `docter` WHERE 1');
// app.get("/nameRoute",function(req , res){

// });
// app.post("/nameRoute",function(req , res){

// });
// // document.getElementById("liga").addEventListener("click", function() {
// //   alert("List item clicked!");
// // });
