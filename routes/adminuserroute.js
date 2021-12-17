var express = require('express');
var router = express.Router();
var db=require('../database');

/* GET users listing. */
router.get('/admin_userview', function(req, res, next) {
  res.render('admin_userview');
});

router.post('/admin_userview', function(req, res){
    var sql='SELECT * FROM admin';
    db.query(sql, [password], function (err, results, fields) {
        if(err) throw err
        if(data.length>0){
            console.log("correct");
            res.render('admin_userview',{title:'password',results})
        }else{
            res.render('adminlogin',{alertMsg:"Your password is wrong"});
        }
    })
});


module.exports = router;