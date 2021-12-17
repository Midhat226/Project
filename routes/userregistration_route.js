var express = require('express');
var router = express.Router();
var db=require('../database');
// to display registration form 
router.get('/userregister', function(req, res, next) {
  res.render('userregister');
});
// to store user input detail on post request
router.post('/userregister', function(req, res, next) {
    inputData ={
        name: req.body.name,
        contact: req.body.contact,
        user_name: req.body.user_name,
        password: req.body.password,
        institute: req.body.institute
    }
    console.log(inputData);
// check unique email address
var sql='SELECT * FROM user WHERE user_name =?';
db.query(sql, [inputData.user_name] ,function (err, data, fields) {
 if(err) throw err
 if(data.length>1){
     var msg = inputData.user_name+ "already exist";
 }else{
      // save users data into database
    var sql = 'INSERT INTO user SET ?';
   db.query(sql, inputData, function (err, data) {
      if (err) throw err;
           });
  var msg ="Your are successfully userregistered";
 }
 res.render('userregister',{alertMsg:msg});
})
     
});
module.exports = router;