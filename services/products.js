var client = require('./contentfulClient').client

function getProduct (slug, query) {
  // little trick to get an entry with include
  // this way all linked items will be resolved for us
  query = query || {}
  query['content_type'] = 'product'
  query['fields.slug'] = slug
  return client.getEntries(query)
}

function getProducts (query) {
  query = query || {}
  query.content_type = 'product'
  return client.getEntries(query)
}

function getProductsInCategory (id) {
  return getProducts({'fields.categories.sys.id[in]': id})
}
module.exports = {
  getProduct,
  getProducts,
  getProductsInCategory
}
