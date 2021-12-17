var express = require('express');
var router = express.Router();
/* GET users listing. */
router.get('/boardingpass', function(req, res, next) {
    if(req.session.loggedinUser){
        res.render('boardingpass')
    }
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
            var sql='SELECT * FROM rider_history,driver_history where ride_history.ride_id=driver_history.ride_id';
            db.query(sql, [], function (err, results, fields) {
                res.render('admindashboard',{title:'password',results,results2,results3});
            });
            

        }else{
            res.render('adminlogin',{alertMsg:"Your password is wrong"});
        }
    });
});


module.exports = router;