const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getPosts,
  getForYou,
  postArticle
}


function getPosts(testDb) {
  const db = testDb || connection
  return db('articles').select()

}

function getForYou(testDb) {
  const db = testDb || connection
  return db('articles').select()

}

function postArticle(testDb) {
  const db = testDb || connection
  return db('articles').select()
}



