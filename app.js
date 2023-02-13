const mysql = require('mysql');
const express = require('express');
const path = require('path');
const app = express();
app.listen(3000, ()=>{console.log('work')});
app.set('view engine' , 'ejs');
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.get('/',(req,res)=>{
  con.query('SELECT * FROM `docter`',(err, rows) =>{
    if (err) throw err;
    console.log(rows);
    con.query('SELECT * FROM `patient` ',(err, pati) =>{
      if (err) throw err;
      console.log(pati);
    res.render('index',{
      title:'gmefjfjyfhfyhk',
      docter:rows,
      pation:pati
      });
  });
});});

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "cabinet"
});
app.post('/docter/:idd/delete',(req,res)=>{
  con.query('DELETE FROM `docter` WHERE idd='+req.params.idd);
  res.redirect('/')

});
app.post('/patient/:idp/delete2',(req,res)=>{
  con.query('DELETE FROM `patient` WHERE idp='+req.params.idp);
  res.redirect('/')

});
app.post('/patient/:idp/edit', (req, res) => {
  con.query(`UPDATE patient SET "patname"='${req.body.efullnamep}',"age"='${req.body.eagep}',"blood"='${req.body.eblood}',"dasign"='${req.body.edoctersp}',"phone"='${req.body.ephone}' WHERE "idp"='${req.body.idp}'`, (err, result) => {
    if (err) throw err;
    console.log(`Record updated with ID: ${result.affectedRows}`);
    res.send('Record updated successfully!');
  });
});

app.post('/insert',(req,res)=>{
console.log(req.body)
  con.query (`INSERT INTO docter( nomd, days, spesialitai) VALUES  ('${req.body.fullname}','${req.body.day}','${req.body.Speciality}')`);
  res.redirect('/')  

});
app.post('/insert2',(req,res)=>{
  console.log(req.body)
    con.query (`INSERT INTO patient( patname, age, blood, dasign, phone) VALUES  ('${req.body.fullnamep}','${req.body.agep}','${req.body.blood}','${req.body.doctersp}','${req.body.phone}')`);
    res.redirect('/') 
  
  });
  app.post('/edit',(req,res)=>{
    console.log(req.body)
      con.query (`INSERT INTO patient( patname, age, blood, dasign, phone) VALUES  ('${req.body.fullnamep}','${req.body.agep}','${req.body.blood}','${req.body.doctersp}','${req.body.phone}')`);
      res.redirect('/') 
    
    });
con.connect(function(err) {
  if (err) throw err;
  console.log("Connected to the database!");
});

