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
            var sql='SELECT * FROM admin';
            db.query(sql, [password], function (err, results, fields) {
                var sql='SELECT * FROM user,ride_history where user.user_name=ride_history.user_user_name';
                db.query(sql, [password], function (err, results2, fields) {
                    var sql='SELECT * FROM driver,driver_history where driver.cnic=driver_history.driver_cnic';
                    db.query(sql, [password], function (err, results3, fields) {
        
                        res.render('admindashboard',{title:'password',results,results2,results3});
                        // res.render('admin_view',{title:'password',results});
                        // res.render('admin_userview',{title:'password',results2});
                        // res.render('admin_driverview',{title:'password',results3});
                    });
                });
            });
            

        }else{
            res.render('adminlogin',{alertMsg:"Your password is wrong"});
        }
    });
});


module.exports = router;