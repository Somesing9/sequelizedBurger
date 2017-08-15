// var Burger = require('../models/burger');
var models = require('../models');
var moment = require('moment');

// Display book create form on GET
exports.burger_list = function(req, res, next) {
    models.Burger.findAll({}).then(function(data) {
      var responseData = {burger: data};
      res.render('index', responseData);
    });
};

exports.create = function(req, res, next) {
  models.Burger.create({
    burgerName: req.body.burgerName,
    devoured: false,
    date: moment().format("YYYY-MM-DD HH:mm:ss")
  }).then(function() {
    res.redirect('/');
  });
};

exports.update = function(req, res, next) {
  models.Burger.update( {devoured: true}, {where: { id: req.params.id} })
  .then( function() { res.redirect('/')} );
};
  // function(err, results) {
  //   if (err) { return next(err); }
  //   res.render('book_form', { title: 'Create Book', authors: results.authors, genres: results.genres });

  // };
