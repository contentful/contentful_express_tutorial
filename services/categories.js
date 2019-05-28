var client = require('./contentfulClient').client

function getCategory (id, query) {
  // little trick to get an entry with include
  // this way all linked items will be resolved for us
  query = query || {}
  query['content_type'] = 'category'
  query['sys.id'] = id
  return client.getEntries(query)
}

function getCategories (query) {
  query = query || {}
  query.content_type = 'category'
  return client.getEntries(query)
}
module.exports = {
  getCategory,
  getCategories
}
