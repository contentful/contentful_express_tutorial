var express = require('express')
var router = express.Router()
var products = require('../services/products')

/* GET home page. */
router.use(function (req, res, next) {
  products.getProducts().then(function (productCollection) {
    req.products = productCollection
    next()
  }).catch(function (err) {
    console.log('index.js - getProducts (line 7) error:', JSON.stringify(err,null,2))
    next()
  })
})

router.get('/', function (req, res, next) {
  res.render('products', {
    'title': 'Products',
    'products': req.products
  })
})

module.exports = router
