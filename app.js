const express = require('express');
const path = require('path');
const app = express();
var session = require('express-session');
var morgan = require('morgan');
var cookieParser = require('cookie-parser');

app.use(cookieParser());

app.use(session({ 
    secret: '123456cat',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
  }))
//for body parser
app.use(express.urlencoded({extended:false}));

//serve static files
app.use(express.static(path.join(__dirname, 'public')));

//template engine
app.set('views',path.join(__dirname,'views'));
app.set('view engine', 'ejs');

var UserregistrationRouter = require('./routes/userregistration_route');
var UserloginRouter = require('./routes/userlogin_route');
var UserdashboardRouter = require('./routes/userdashboard_route');
var UserlogoutRouter = require('./routes/userlogout_route');
var contactusRouter = require('./routes/contactus_route');
var adminloginRouter = require('./routes/adminlogin_route');
var adminlogoutRouter = require('./routes/adminlogout_route');
var admindashboardRouter = require('./routes/admindashboard_route');
var bookrideRouter = require('./routes/book_ride_route');
app.use('/', UserregistrationRouter);
app.use('/', UserloginRouter);
app.use('/', UserdashboardRouter);
app.use('/', UserlogoutRouter);
app.use('/', contactusRouter);
app.use('/', adminloginRouter);
app.use('/', adminlogoutRouter);
app.use('/', admindashboardRouter);
app.use('/', bookrideRouter);

//setting up server
app.listen(3000,()=>{
    console.log ('Server started on port 3000');
});

module.exports=app;
