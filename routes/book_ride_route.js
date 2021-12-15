var express = require('express');
var router = express.Router();
var db=require('../database');
// to display registration form 
router.get('/book_ride', function(req, res, next) {
  res.render('book_ride');
});
// to store ride_history input detail on post request
router.post('/book_ride', function(req, res, next) {
    inputData ={
        date: req.body.date,
        time: req.body.time,
        pickup: req.body.pickup,
        dropoff: req.body.dropoff,
        type: req.body.type
    }
    console.log(inputData);

var sql='SELECT * FROM ride_history WHERE primarykey =?';
db.query(sql, [inputData.primarykey] ,function (err, data, fields) {
 if(err) throw err
 if(data.length>1){
     var msg = inputData.primarykey+ "already exist";
 }else{
      // save ride_history  data into database
    var sql = 'INSERT INTO ride_history SET ?';
   db.query(sql, inputData, function (err, data) {
      if (err) throw err;
           });
  var msg ="Your are successfully booked";
 }
 res.render('book_ride',{alertMsg:msg});
})
     
});
module.exports = router;