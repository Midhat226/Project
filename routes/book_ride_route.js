var express = require('express');
var router = express.Router();
var db=require('../database');
// to display registration form 
router.get('/book_ride', function(req, res, next) {
  res.render('book_ride');
});
// to store ride_history input detail on post request
router.post('/book_ride', function(req, res, next) {
  var timeToString=toString(req.body.time);
    inputData ={
      //ride_id
        date: req.body.date,
        time: timeToString,
        pickup: req.body.pickup,
        dropoff: req.body.dropoff,
        //rating
        status:"in-transit",
        type: req.body.type,
        user_user_name:req.body.user
    }
      
    
    console.log(inputData);

var sql='SELECT * FROM ride_history WHERE ride_id =?';
db.query(sql, [inputData.ride_id] ,function (err, data, fields) {
 if(err) throw err
 if(data.length>1){
     var msg = inputData.ride_id+ "already exist";
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