var express = require('express')
var brands = require('../services/brands')
var router = express.Router()

/* router params */
router.param('id', function (req, res, next, id) {
  brands.getBrand(id).then(function (brandsCollection) {
    req.brand = brandsCollection.items[0]
    next()
  }).catch(function (err) {
    console.log(err)
    next()
  })
})

router.get('/:id', function (req, res, next) {
  res.render('brand', {title: 'Brand', brand: req.brand})
})
module.exports = router
