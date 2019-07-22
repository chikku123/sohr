var express=require("express");
var bodyParser=require('body-parser');
var connection = require('./config');
var app = express();
const path = require('path'); 
const session = require('express-session');

var authenticateController=require('./controllers/authenticate-controller');
var registerController=require('./controllers/register-controller');
 
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname,'public')));
app.use(session({secret: 'ssshhhhh',saveUninitialized: true,resave: false}));
var sess;

app.get('/', function (req, res) { 

   sess = req.session; 
   if(sess.userid) {
      res.sendFile( __dirname + "/" + "dashboard.html" );  

	}
   res.sendFile( __dirname + "/" + "login.html" ); 
  // res.sendFile( __dirname + "/" + "login.html" );  
})  
 
app.get('/dashboard', function (req, res) { 

   sess = req.session; 
   if(sess.userid) {
      res.sendFile( __dirname + "/" + "dashboard.html" );  

	}
   res.sendFile( __dirname + "/" + "login.html" ); 
  // res.sendFile( __dirname + "/" + "login.html" );  
})


app.get('/login.html', function (req, res) { 
   sess = req.session; 
   if(sess.userid) {
      
      res.sendFile( __dirname + "/" + "dashboard.html" );  

	}
   res.sendFile( __dirname + "/" + "login.html" );  
})  
app.get('/logout',(req,res) => {
	req.session.destroy((err) => {
		if(err) {
			return console.log(err);
		}
		res.redirect('/');
	});

})





/* route to handle login and registration */
app.post('/api/register',registerController.register);
app.post('/api/authenticate',authenticateController.authenticate);
 
console.log(authenticateController);
app.post('/controllers/register-controller', registerController.register);
app.post('/controllers/authenticate-controller', authenticateController.authenticate);
app.listen(8012);
