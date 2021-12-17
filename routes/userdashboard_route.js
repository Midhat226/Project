var express = require('express');
var router = express.Router();
/* GET users listing. */
router.get('/userdashboard', function(req, res, next) {
    if(req.session.loggedinUser){
        res.render('userdashboard',{user_name:req.session.user_name})
    }else{
        res.redirect('/userlogin');
    }
});
module.exports = router;