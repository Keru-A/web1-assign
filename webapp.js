const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const path = require('path');

app.set("view engine","ejs");

app.use(express.static(__dirname + '/views'));

// use res.render to load up an ejs view file

// index page
app.get('/', function(req, res) {
    res.render('pages/index');
  });
  
  //contact page
  app.get('/contact', function(req, res) {
    res.render('pages/contact');
  });
  
  app.get('/husky', function(req, res) {
    res.render('pages/husky');
  });

  app.get('/shepherd', function(req, res) {
    res.render('pages/shepherd');
  });

app.listen(PORT, () => {
    console.log(`Our app is running on port ${ PORT }`);
});