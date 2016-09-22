var client = require('./contentfulClient').client

var contentTypes = {}

function getContentTypes () {
  return client.getContentTypes().then(function (collection) {
    contentTypes = collection
  })
}

function getContentTypeById (id) {
}

module.exports = {
  contentTypes: contentTypes,
  getContentTypes: getContentTypes,
  getContentTypeById: getContentTypeById
}
