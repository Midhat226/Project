var express = require('express');
var router = express.Router();
var db=require('../database');

/* GET users listing. */
router.get('/adminlogin', function(req, res, next) {
  res.render('adminlogin');
});

router.post('/adminlogin', function(req, res){
    var password = req.body.password;
    var sql='SELECT * FROM admin WHERE password =?';
    db.query(sql, [password], function (err, data, fields) {
        if(err) throw err
        if(data.length>0){
            console.log("correct");
            req.session.loggedinUser= true;
            req.session.password= password;
            res.render('admindashboard',{title:'password',adminData:data});
        }else{
            res.render('adminlogin',{alertMsg:"Your password is wrong"});
        }
    });
});
module.exports = router;