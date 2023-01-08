const path = require('path')
const express = require('express')
const cors = require('cors')
const request = require('superagent')

const server = express()

const house = require('./routes/house')

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))
server.use(cors('*'))

server.use('/api/v1/house', house)

server.get('/api/v1/affirmation', (req, res) => {
  request
  .get(`https://www.affirmations.dev`)
  .then((response) => {
    res.json(response.body)
  })
  .catch((err) => {
    console.log(err)
    res.sendStatus(500)
  })
})

server.use('/api/v1/*', (req, res) => res.sendStatus(404))

server.get('*', (req, res) => {
  res.sendFile(path.resolve('server/public/index.html'))
})

module.exports = server
