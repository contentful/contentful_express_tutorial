var client = require('./contentfulClient').client

function getCategory (id, query) {
  // little hack to get an entry with include
  // this way all linked items will be resolved for us
  query = query || {}
  query['content_type'] = '6XwpTaSiiI2Ak2Ww0oi6qa'
  query['sys.id'] = id
  return client.getEntries(query)
}

function getCategories (query) {
  query = query || {}
  query.content_type = '6XwpTaSiiI2Ak2Ww0oi6qa'
  return client.getEntries(query)
}
module.exports = {
  getCategory,
  getCategories
}
