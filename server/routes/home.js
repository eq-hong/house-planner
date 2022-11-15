const express = require('express')
const router = express.Router()
const request = require('superagent')
const db = require('../db')

// //GET api/v1/birds
// router.get('/', (req, res) => {
//   request
//     .get(`https://www.xeno-canto.org/api/2/recordings?query=cnt:new+zealand`)
//     .then((response) => {
//       res.json(response.body)
//     })
//     .catch((err) => {
//       console.log(err)
//       res.sendStatus(500)
//     })
// })


//GET api/v1/home/all
router.get('/all', (req, res) => {
  db.getAllRooms()
    .then((rooms) => {
      res.json(rooms)
    })
    .catch((err) => {
      console.log(err)
      res.sendStatus(500)
    })
})

//GET api/v1/home/:id
router.get('/:id', (req, res) => {
  db.getRoom(req.params.id)
    .then((room) => {
      res.json(room)
    })
    .catch((err) => {
      console.log(err)
      res.sendStatus(500)
    })
})


module.exports = router