var express = require('express')
var router = express.Router()
var categories = require('../services/categories.js')
var products = require('../services/products')
/* router params */
router.param('id', function (req, res, next, id) {
  categories.getCategories().then(function (categories) {
    req.categories = categories.items
    products.getProductsInCategory(id).then(function (productsCollection) {
      req.products = productsCollection.items
      next()
    }).catch(function (err) {
      console.log(err)
      next()
    })
  })
})

router.use(function (req, res, next) {
  categories.getCategories().then(function (categoryCollection) {
    req.categories = categoryCollection.items
    products.getProducts().then(function (productsCollection) {
      req.products = productsCollection.items
      next()
    })
  })
})

router.get('/:id', function (req, res, next) {
  res.render('categories', {title: 'Categories', categories: req.categories, products: req.products})
})
router.get('/', function (req, res, next) {
  res.render('categories', {title: 'Categories', categories: req.categories, products: req.products})
})
module.exports = router
