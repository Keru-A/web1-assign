const express = require('express');
const app = express();
const port = 3000
const path = require('path');

app.set("view engine","ejs");

app.use(express.static(__dirname + '/views'));

// use res.render to load up an ejs view file

// index page
app.get('/', function(req, res) {
    res.render('pages/index');
    res.render('assets/styles/')
    res.render('assets/scripts/')
  });
  
  // about page
  app.get('/about', function(req, res) {
    res.render('pages/about');
  });

  app.get('/contact', function(req, res) {
    res.render('pages/contact');
  });

  app.get('/projects', function(req, res) {
    res.render('pages/projects');
  });

app.listen(3000);
console.log('Server is listening on port 3000');