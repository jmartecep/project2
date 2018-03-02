
// Node Dependencies
var express = require('express');
var router = express.Router();
var models = require('../models'); // Pulls out the Burger Models
var Sequelize = require("sequelize");

// Extracts the sequelize connection from the models object
var sequelizeConnection = models.sequelize;

// Sync the tables
sequelizeConnection.sync


// Create routes
// ----------------------------------------------------

// Index Redirect
router.get('/', function (req, res) {
  res.redirect('/index');
});

router.get('/index', function(req, res){
  models.loc.findAll({
      
  }).then(function(data){
    var hbsObject = { title: 'Locations', items: data }
    res.render('index', hbsObject);
  })
});

router.get('/button1', function(req, res){
  models.loc.findAll({
      
  }).then(function(data){
    var hbsObject = { title: 'Locations', items: data }
    res.render('index', hbsObject);
  })
});

router.get('/button2', function(req, res){
  models.prodtype.findAll({
      
  }).then(function(data){
    var hbsObject = { title: 'Item Type', items: data }
    res.render('index', hbsObject);
  })
});

router.get('/button3', function(req, res){
  models.member.findAll({
      
  }).then(function(data){
    var hbsObject = { title: 'Member', items: data }
    res.render('index', hbsObject);
  })
});




// // router.get('/button1', function(req, res){
// //   models.items.findAll({
// //     attributes:['value']
// //   }).then(function(data){
// //     var allValues = {title: "Button One", items: data}
// //     //console.log(Object.keys(allValues))
// //     var total = 0;
// //     for(var i = 0; i < data.length; i++){
// //       console.log(typeof data[i].dataValues.value);
// //       total += parseInt(data[i].dataValues.value)
// //     }
// //     console.log(total);
// //     var result = {total : total}
// //     res.render('index', result);
// //   })


// // })

// Export routes
module.exports = router;