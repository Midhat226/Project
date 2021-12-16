var express = require('express');
var router = express.Router();
var db=require('../database');
// to display registration form 
router.get('/contactus', function(req, res, next) {
  res.render('contactus');
});

router.post('/contactus', function(req, res, next) {
    inputData ={
        Name: req.body.Name,
        Email: req.body.Email,
        Subject: req.body.Subject,
        Comment: req.body.Comment
    }
// save users data into database
    var sql = 'INSERT INTO feedbacks SET ?';
   db.query(sql, inputData, function (err, data) {
      if (err) throw err;
    });
  console.log("Your feedback is succesfully noted");
 //res.redirect('/dashboard');
});
module.exports = router;