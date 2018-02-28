
// Node Dependencies
var express = require('express');
var router = express.Router();
var models = require('../models'); // Pulls out the Burger Models

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

router.get('/index', function (req, res) {

      models.loc.findAll({

        }).then(function(data){
          // Pass the returned data into a Handlebars object and then render it
          var hbsObject = { title: 'Locations', items: data }
          res.render('index', hbsObject);
      })
      // models.items.findAll({
      //   group: models.items.loc

      //   }).then(function(data){
      //     // Pass the returned data into a Handlebars object and then render it
      //     var hbsObject = { title: 'Locations', items: data }
      //     res.render('index', hbsObject);
      // })


});


// Export routes
module.exports = router;