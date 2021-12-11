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

var registrationRouter = require('./routes/registration_route');
var loginRouter = require('./routes/login_route');
var dashboardRouter = require('./routes/dashboard_route');
var logoutRouter = require('./routes/logout_route');
var contactusRouter = require('./routes/contactus_route');
app.use('/', registrationRouter);
app.use('/', loginRouter);
app.use('/', dashboardRouter);
app.use('/', logoutRouter);
app.use('/', contactusRouter);

//setting up server
app.listen(3000,()=>{
    console.log ('Server started on port 3000');
});

module.exports=app;