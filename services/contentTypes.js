var client = require('./contentfulClient').client

var contentTypes = {}

function getContentTypes () {
  return client.getContentTypes().then(function (collection) {
    contentTypes = collection
  })
}

module.exports = {
  contentTypes: contentTypes,
  getContentTypes: getContentTypes
}
