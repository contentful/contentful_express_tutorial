var express = require('express')
var router = express.Router()
var products = require('../services/products')

/* router params */
router.param('slug', function (req, res, next, slug) {
  products.getProduct(slug).then(function (product) {
    req.product = product.items[0]
    next()
  }).catch(function (err) {
    console.log('products.js - getProduct (line 7) error:', JSON.stringify(err,null,2))
    next()
  })
})

router.use(function (req, res, next) {
  products.getProducts().then(function (productCollection) {
    req.products = productCollection.items
    next()
  }).catch(function (err) {
    console.log('products.js - getProducts (line 17) error:', JSON.stringify(err,null,2))
    next()
  })
})

router.get('/products/:slug', function (req, res, next) {
  res.render('product', {title: req.product.fields.productName, product: req.product})
})

router.get('/products', function (req, res, next) {
  res.render('products', {
    'title': 'Products',
    'products': req.products
  })
})

router.get('/', function (req, res, next) {
  res.render('products', {
    'title': 'Products',
    'products': req.products
  })
})

module.exports = router
