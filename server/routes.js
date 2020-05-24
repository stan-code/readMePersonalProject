const express = require('express')
const router = express.Router()

const db = require('../db')


//GET API/V1/Articles
//returns an array of objects
router.get('/', (req, res) => {
  db.getPosts()
    .then(posts => {
      res.json(posts)
    })
})

/// GET api/v1/articles/id
//returns article by ID
router.get('/articles', (req, res) => {
  const articleNum = req.params
  console.log('hello')
  db.getArticleById(articleNum)
  .then(article => {
    res.json(article)
  })
})


// router.post('/', (req, res) => {
//   postContent = {
//     title: req.body.title,
//     author: req.body.author,
//     thumbnailImage: req.body.thumbnailImage
//   }
//   db.postArticle(postContent)
//     .then(() => {
//       res.status(201).send()
//     })
//     .catch(err => {
//       res.status(500).send('Uh Oh, something went wrong' + err.message)
//     })
// })

module.exports = router
