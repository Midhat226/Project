var express = require('express');
var router = express.Router();
var db=require('../database');
// to display registration form 
router.get('/register', function(req, res, next) {
  res.render('register');
});
// to store user input detail on post request
router.post('/register', function(req, res, next) {
    inputData ={
        user_name: req.body.user_name,
        full_name: req.body.full_name,
        email_address: req.body.email_address,
        password: req.body.password,
        confirm_password: req.body.confirm_password
    }
// check unique email address
var sql='SELECT * FROM users WHERE email_address =?';
db.query(sql, [inputData.email_address] ,function (err, data, fields) {
 if(err) throw err
 if(data.length>1){
     var msg = inputData.email_address+ "was already exist";
 }else if(inputData.confirm_password != inputData.password){
    var msg ="Password & Confirm Password is not Matched";
 }else{
      // save users data into database
    var sql = 'INSERT INTO users SET ?';
   db.query(sql, inputData, function (err, data) {
      if (err) throw err;
           });
  var msg ="Your are successfully registered";
 }
 res.render('register',{alertMsg:msg});
})
     
});
module.exports = router;