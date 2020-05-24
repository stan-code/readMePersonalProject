const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getPosts,
  getForYou,
  postArticle,
  getArticleById
}


function getPosts(testDb) {
  const db = testDb || connection
  return db('articles').select()

}

function getArticleById(articleNum){
  return db('articles').where('articleId', articleNum).select().first()
}

function getForYou(testDb) {
  const db = testDb || connection
  return db('articles').select()

}

function postArticle(testDb) {
  const db = testDb || connection
  return db('articles').select()
}



