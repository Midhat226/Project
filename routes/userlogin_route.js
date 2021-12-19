var express = require('express');
const req = require('express/lib/request');
var router = express.Router();
var db=require('../database');

/* GET users listing. */
router.get('/userlogin', function(req, res, next) {
  res.render('userlogin');
});


router.post('/userlogin', function(req, res){
    var user_name = req.body.user_name;
    var password = req.body.password;
    var sql='SELECT * FROM user WHERE user_name =? AND password =?';
    db.query(sql, [user_name, password], function (err, data, fields) {
        if(err) throw err
        if(data.length>0){
            console.log("correct");
            req.session.loggedinUser= true;
            req.session.user_name= user_name;
            
            var sql='SELECT * FROM user WHERE user_name =? ';
            db.query(sql, [user_name], function (err, results, fields) {
                res.render('userdashboard',{title:'user_name',results});
            });
            

        }else{
            res.render('userlogin',{alertMsg:"Your username/password is wrong"});
        }
    });
});









module.exports = router;