var express = require('express');
const { rawListeners } = require('../database');
var router = express.Router();
var db=require('../database');
// to display registration form 
router.get('/book_ride', function(req, res, next) {
  res.render('book_ride');
});


// to store ride_history input detail on post request
 
router.post('/book_ride', function(req, res, next) {
  console.log(req.session.user_name);
  var timeToString=toString(req.body.time);
    inputData ={
      //ride_id
        date: req.body.date,
        time: req.body.time,
        pickup: req.body.pickup,
        dropoff: req.body.dropoff,
        //rating
        status:"in-transit",
        type: req.body.type,
        user_user_name:req.session.user_name
    }
      
    
    console.log(inputData);



var sql='SELECT * FROM ride_history WHERE ride_id =?';
db.query(sql, [inputData.ride_id] ,function (err, data, fields) {
 if(err) throw err
 if(data.length>1){
     var msg = inputData.ride_id+ "already exist";
     return res.render('book_ride',{alertMsg:msg});
 }else{
      // save ride_history  data into database
      //date,time,pickup,dropoff,status,type,user_user_name

    var sql = 'INSERT INTO ride_history set ? ';
   db.query(sql,{inputData} ,function (err, data) {
      if (err) throw err;
           });
  var msg ="Your ride is successfully booked";
  return res.render('boardingpass',{data:inputData});
          }
})
     
});
module.exports = router;