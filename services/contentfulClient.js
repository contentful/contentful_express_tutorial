var contentful = require('contentful')
var config = require('../package.json').config || {}

var client = contentful.createClient({
  accessToken: config.accessToken,
  space: config.space
})

exports.client = client

