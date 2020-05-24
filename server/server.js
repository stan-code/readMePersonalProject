const path = require('path')
const express = require('express')

const server = express()
module.exports = server

const routes = require('./routes')

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

server.use('/api/v1/articles', routes)
server.use('/api/v1/articles/id', routes)

