var express = require('express');
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
            res.redirect('/userdashboard');
        }else{
            res.render('userlogin',{alertMsg:"Your username or password is wrong"});
        }
    })
})
module.exports = router;