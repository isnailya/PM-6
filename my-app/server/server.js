const express = require('express');
const bodyParser = require('body-parser');
let fs = require('fs')
const bcrypt = require('bcrypt');
 const cors = require('cors');
 const app = express();

 app.use(bodyParser.urlencoded({
    extended: true
  }))
  app.use(bodyParser.json());

//const randomString = require('./randomString');
// app.get('/user', function (req, res) {
//     res.send('GET request to homepage')
//   })

const port = process.env.PORT || 3005;


// app.use(bodyParser.urlencoded({
//     extended: true
//   }))
  

//app.get('env')
//app.use(express.bodyParser());
//app.use(app.router);
 

// app.use(express.json());
app.use(cors());
//app.use(express.bodyParser());
//app.use(express.methodOverride());  
// const bodyParser = require('body-parser');
// app.use(bodyParser);





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

app.post('/setcoin',cors(),  function (req, res) {
   
   

    
    res.send({ status: 'SUCCESS' });
    // if (!checkToken(req)) {
    //     res.sendStatus(401);
    //     console.log('bye');
    //   } else {
    //     //   let coin = req.body;
    //       console.log('hi');
    //   }
    console.log('Input:: name='+req.body.name+' desLong=' + req.body.long + ' desShort='+req.body.short+' country='+req.body.country+' material='+req.body.material+' quality='+req.body.quality+' denom='+req.body.face+' year='+req.body.year+' weight='+req.body.weight+' price='+req.body.price+' imageAv='+req.body.observe+' imageRev='+req.body.revers,   req.body);
     let sql = `INSERT INTO coins(name,descriptionLong, descriptionShort, country, material, quality, denomination, year, weight, price, imageAvers, imageRevers)VALUES ("${req.body.name}", "${req.body.long}","${req.body.short}","${req.body.country}","${req.body.material}","${req.body.quality}","${req.body.face}","${req.body.year}","${req.body.weight}","${req.body.price}","${req.body.observe}","${req.body.revers}" )`;
    //  console.log(" );
    // console.log(req.body.descriptionLong.toString();
    //  console.log(JSON.parse(req.body).name);
    //  let sql = "INSERT INTO coins(name,descriptionLong, descriptionShort, country, material, quality, denomination, year, weight, price, imageAvers, imageRevers)VALUES ('Mammad','descrip','descri','count','mal','quaty','denomina',1996,12.5,'er','w','wq')";

    
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


