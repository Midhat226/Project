var express = require('express');
var router = express.Router();
/* GET users listing. */
router.get('/dashboard', function(req, res, next) {
    if(req.session.loggedinUser){
        res.render('dashboard',{user_name:req.session.user_name})
    }else{
        res.redirect('/login');
    }
});
module.exports = router;