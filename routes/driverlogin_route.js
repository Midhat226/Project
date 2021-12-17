var express = require('express');
var router = express.Router();
var db=require('../database');

/* GET driver listing. */
router.get('/driverlogin', function(req, res, next) {
  res.render('driverlogin');
});

router.post('/driverlogin', function(req, res){
    var cnic = req.body.cnic;
    var name = req.body.name;
    var sql='SELECT * FROM driver WHERE cnic =? ';
    db.query(sql, [cnic , name], function (err, data, fields) {
        if(err) throw err
        if(data.length>0){
            console.log("correct");
            req.session.loggedindriver= true;
            req.session.cnic= cnic;
            req.session.name= name;
            res.redirect('/driverdashboard');
        }else{
            res.render('driverlogin',{alertMsg:"Your  is wrong"});
        }
    })
})
module.exports = router;