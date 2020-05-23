const express = require('express');
const bcrypt = require('bcrypt');
 const cors = require('cors');
 const app = express();


//const randomString = require('./randomString');
// app.get('/user', function (req, res) {
//     res.send('GET request to homepage')
//   })

const port = process.env.PORT || 3005;

//app.get('env')
//app.use(express.bodyParser());
//app.use(app.router);
 

app.use(express.json());
app.use(cors());
//app.use(express.bodyParser());
//app.use(express.methodOverride());  

const mysql = require('mysql');


const connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '524915633354aa',
	database: 'projectm6'
});


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

let sql1 = "INSERT INTO coins(name,descriptionLong, descriptionShort, country, material, quality, denomination, year, weight, price, imageAvers, imageRevers)VALUES ('Mammad','descrip','descri','count','mal','quaty','denomina',1996,12.5,'er','w','wq')";
// connection.query(sql);
app.get('/get1', function (req, res) {
    //let searchParameter = req.body.input;
   connection.query('SELECT name FROM coins', (err,data)=> {
                 if(!err) {
                     console.log(data);
                 }else {
                    console.log(err);
                 }
             });
       
    res.send('GET request to homepage');
})

app.get('/get', function (req, res) {

    name = "na";
        connection.query("SELECT * FROM projectm6.coins WHERE name LIKE " + "'" + name + "'", function (err, result, fields) {
          if (err) throw err;
          console.log(result);
        });
});

app.post('/setcoin', cors(),  function (req, res) {

    // // if (!checkToken(req)) {
    // //     res.sendStatus(401);
    // //   } 

     //let sql = "INSERT INTO coins(name,descriptionLong, descriptionShort, country, material, quality, denomination, year, weight, price, imageAvers, imageRevers)VALUES (" + req.body + ",'descrip','descri','count','mal','quaty','denomina',1996,12.5,'er','w','wq')";
     let sql = "INSERT INTO coins(name,descriptionLong, descriptionShort, country, material, quality, denomination, year, weight, price, imageAvers, imageRevers)VALUES ('Mammad','descrip','descri','count','mal','quaty','denomina',1996,12.5,'er','w','wq')";

    
        connection.query(sql, function (err, result, fields) {
          if (err) throw err;
          console.log(result);
        });

    // connection.connect((err) => {
    //     if (!err) {
    //          console.log("SUCCESS");
    //          //let coin;
    //          //console.log(JSON.parse(req.body));
    //         //  try {
    //         //     coin = JSON.parse(req.body);
    //         //   } catch(err) {
    //         //     console.error(err)
    //         //   }

             
    //          connection.query(sql, (err,data)=> {
    //              if(!err) {
    //                  console.log(data);
    //              }else {
    //                 console.log(err);
    //              }
    //          })
    //     } else {
    //         console.log(err);
    //     }
    // });
    //connection.query(sql1);
    //res.send('GET request to homepage');
});

app.get('/delete', function (req, res) {
    connection.query("DELETE FROM coins WHERE name = 'Mammad'", function (err, result) {
        if (err) throw err;
        console.log("Number of records deleted: " + result.affectedRows)
    });
});

app.listen(3006);