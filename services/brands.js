var client = require('./contentfulClient').client

function getBrand (brandId) {
  return client.getEntries({'sys.id': brandId})
}

module.exports = {
  getBrand
}
