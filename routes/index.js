var express = require('express');
var router = express.Router();
// could use one line instead: var router = require('express').Router();
var tweetBank = require('../tweetBank');

router.get('/', function (req, res) {
  var tweets = tweetBank.list();
  res.render( 'index', { title: 'Twitter.js', tweets: tweets } );
});

router.get('/users/:name', function(req, res) {
  var name = req.params.name;
  var list = tweetBank.find( {name: name} );
  console.log(list);
  res.render( 'index', { title: 'Twitter.js - Posts by '+ name, tweets: list } );
});

router.get('/users/:name/tweets/:id', function(req, res) {
  var name = req.params.name;
  var id = parseInt(req.params.id);
  var list = tweetBank.find( {name: name, id: id} );
  console.log(list);
  // console.log(tweetBank.list());
  res.render( 'index', { title: 'Twitter.js - Tweet number ' + id + ' by '+ name, tweets: list } );
});

module.exports = router;