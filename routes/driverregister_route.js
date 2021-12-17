var express = require('express');
var router = express.Router();
var db=require('../database');
// to display registration form 
router.get('/driverregister', function(req, res, next) {
  res.render('driverregister');
});
// to store driver input detail on post request
router.post('/driverregister', function(req, res, next) {
    inputData ={
        cnic: req.body.cnic,
        name: req.body.name,
        address: req.body.address,
        contact: req.body.contact,
        cars_type: req.body.cars_type,
       
    }
    console.log(inputData);
// check unique cnic
var sql='SELECT * FROM driver WHERE name =?';
db.query(sql, [inputData.cnic] ,function (err, data, fields) {
 if(err) throw err
 if(data.length>1){
     var msg = inputData.cnic+ "already exist";
 }else{
      // save drivers data into database
    var sql = 'INSERT INTO driver SET ?';
   db.query(sql, inputData, function (err, data) {
      if (err) throw err;
           });
  var msg ="Your are successfully registered";
  //res.redirect('/driverdashboard');
 }
 res.render('driverregister',{alertMsg:msg});
})
     
});
module.exports = router;