var express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    mongoose = require("mongoose"),
    passport = require("passport"),
    LocalStrategy = require("passport-local");
    User = require("./models/user");

mongoose.connect("mongodb://localhost/CSI_app");
app.use(bodyParser.urlencoded({extended: true}));
app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');

//Seed data must be called here

//Passport Config
app.use(require("express-session")({
    secret: "This is the secret key!",
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//pass user data to all routes
app.use(function(req, res, next){
    res.locals.currentUser = req.user;
    next();
});

app.get("/", function(req, res){
    res.render("landing");
    console.log("Home route!");
});

//================
//Dashboard route
//================
app.get("/dashboard", isLoggedIn, function(req, res){
    res.render("dashboard");
    console.log("Authentication success, reached dashboard route!");
});

//================
//Discussion forums route
//================
app.get("/discussions-forum", isLoggedIn, function(req, res){
    res.render("forums");
    console.log("Forums route!");
});

//================
//Authenticate routes
//================
//show signup form
app.get("/register", function(req, res){
    res.render("register");
    console.log("Register route!");
});

//handles signup logic
app.post("/register", function(req, res){
    var newUser = new User({username: req.body.username});
    User.register(newUser, req.body.password, function(err, user){
        if(err) {
            console.log(err);
            return res.redirect("/register");
            }
            //authenticating signed up user to login
            passport.authenticate("local")(req, res, function(){
                res.redirect("/dashboard");
            });
    });
    console.log("Register POST route!");
});

//show login form
app.get("/login", function(req, res){
    res.render("login");
    console.log("Login route!");
});

//login authenticate logic
app.post("/login", passport.authenticate("local",{
    successRedirect: "/dashboard",
    failureRedirect: "/login"
}), function(req, res){
    console.log("Login POST route!");
});

//Logout route
app.get("/logout", function(req, res){
   req.logout();
   res.redirect("/");
});

//middleware checking if user is still logged in
function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("/login");
}

app.listen(app.get("port"), function(){
   console.log("Server has started at PORT:5000. Enter http://127.0.0.1:5000 or http://localhost:5000 to view")
});