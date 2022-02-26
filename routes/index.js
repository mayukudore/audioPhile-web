var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Audiophile' });
});
router.get('/product', (req, res, next) => {
  res.render('items');
});
router.get('/product/:id', (req, res, next) => {
  res.render('product');
})
router.get('/checkout', (req, res, next) => {
  res.render('checkout');
})

module.exports = router;
