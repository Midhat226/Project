var express = require('express');
var router = express.Router();
/* GET users listing. */
router.get('/admindashboard', function(req, res, next) {
    if(req.session.loggedinUser){
        res.render('admindashboard',{password:req.session.password})
    }else{
        res.redirect('/adminlogin');
    }

});
module.exports = router;