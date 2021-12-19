var express = require('express');
var router = express.Router();
/* GET users listing. */
router.get('/confirmRide', function(req, res, next) {
       
    inputData ={
        status:"in-transit"
    }
    console.log(inputData);
// check unique email address
var sql='UPDATE ride_history set status=? WHERE user_user_name =?';
db.query(sql, [inputData] ,function (err, data, fields) {
 if(err) throw err
 if(data.length>1){
      // save users data into database
      var sql='UPDATE driver_history set ride_history_status=? WHERE ride_history_user_user_name =?';
   db.query(sql, inputData, function (err, data) {
      if (err) throw err;
           });
  var msg ="Your ride has been confirmed";
 }
 res.render('userdashboard',{alertMsg:msg});
})
    
});
module.exports = router;