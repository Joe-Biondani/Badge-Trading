// Packages
const express = require("express");
const app = express();
const slash = require("express-slash");
const fetch = import("node-fetch");
const path = import("path");
const maintenance = false;
const https = require("https");
const fs = require("fs");

const isOnline = false;

const httpsOptions = {
    cert: fs.readFileSync('cert.pem'),
    key: fs.readFileSync('key.pem')
};

// App settings
app.enable("strict routing");

const router = express.Router({
    caseSensitive: app.get("case sensitive routing"),
    strict: app.get("strict routing")
});

app.use(router);
app.use(express.static(__dirname + '/public'));
app.use(slash());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    next();
});

// Routes
router.get("/feed", (req, res) => {
    if (isOnline) return res.render("feed");
    res.render("wip");
});

router.get("/", (req, res) => {
    res.redirect("/home")
});

router.get("/home", (req, res) => {
    if (isOnline) return res.render("home");
    res.render("wip");
    res.status(200);
});

router.get("/login", (req, res) => {
    if (isOnline) return res.render("login");
    res.render("wip");
});

router.get("/signup", (req, res) => {
    if (isOnline) return res.render("signup");
    res.render("wip");
});

router.get("/privacy", (req, res) => {
    if (isOnline) return res.render("privacy");
    res.render("wip");
});

router.get("/tos", (req, res) => {
    if (isOnline) return res.render("tos");
    res.render("wip");
});

router.get("/new", (req, res) => {
    if (isOnline) return res.render("newPost");
    res.render("wip");
});

router.get("/admin/approveposts", (req, res) => {
    if (isOnline) return res.render("admin/approvePosts");
    res.render("wip");
});

app.use(function(req, res, next){
    res.status(404);
  
    // respond with html page
    if (req.accepts('html')) {
      res.render('404');
      return;
    }
  
    // respond with json
    if (req.accepts('json')) {
      res.send({
        status: 404,
        error: 'Not found'
      });
      return;
    }
  
    // default to plain-text. send()
    res.type('txt').send('404 - Not found');
  });

// Port
app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");
// app.listen(443, () => console.log(`Listening on port ${443}`));
https.createServer(httpsOptions, app).listen(443, () => console.log(`Listening on port ${443}`));