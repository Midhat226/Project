var express = require('express');
var router = express.Router();
var db=require('../database');

/* GET users listing. */
router.get('/login', function(req, res, next) {
  res.render('login');
});

router.post('/login', function(req, res){
    var user_name = req.body.user_name;
    var password = req.body.password;
    var sql='SELECT * FROM user WHERE user_name =? AND password =?';
    db.query(sql, [user_name, password], function (err, data, fields) {
        if(err) throw err
        if(data.length>0){
            console.log("correct");
            req.session.loggedinUser= true;
            req.session.user_name= user_name;
            res.redirect('/dashboard');
        }else{
            res.render('login',{alertMsg:"Your username or password is wrong"});
        }
    })
})
module.exports = router;