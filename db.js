const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getPosts
}


function getPosts(testDb) {
  const db = testDb || connection
  return db('articles').select()

}
