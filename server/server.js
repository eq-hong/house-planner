const path = require('path')
const express = require('express')
const cors = require('cors')
const request = require('superagent')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))
server.use(cors('*'))

server.get('/greeting', (req, res) => {
  const greetings = ['hola', 'hi', 'hello', 'howdy']
  let index = Math.floor(Math.random() * greetings.length)
  console.log(index)
  res.json({ greeting: greetings[index] })
})

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

module.exports = server
