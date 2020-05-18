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

module.exports = router
