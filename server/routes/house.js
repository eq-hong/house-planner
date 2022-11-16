const express = require('express')
const router = express.Router()
// const request = require('superagent')
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


//GET api/v1/house/all
router.get('/all', (req, res) => {
  // console.log('hit1');
  db.getAllRooms()
    .then((rooms) => {
      res.json(rooms)
    })
    .catch((err) => {
      console.log(err)
      res.sendStatus(500)
    })
})

//GET api/v1/house/:id
router.get('/:id', (req, res) => {
  // console.log('hit2');
  db.getRoom(req.params.id)
    .then((room) => {
      res.json(room)
    })
    .catch((err) => {
      console.log(err)
      res.sendStatus(500)
    })
})

//POST api/v1/house/all
router.post('/all', (req, res) => {
  const post = req.body
  const object = {
    ...post,
    // date_created: new Date(Date.now()),
  }
  db.addRoom(object)
    .then((roomIdArr) => {
      return db.getRoom(roomIdArr)

    })
    .then((newRoom) => {
      res.json(newRoom)
    })
    .catch(console.error)
})

//PATCH api/v1/house/:id
router.patch('/:id', (req, res) => {
  const id = req.params.id
  const editedRoom = req.body
  db.patchRoom(id, editedRoom)
    .then(() => {
      // console.log('patch and edit room')
      // console.log(id)
      // console.log(editedRoom)
      return db.getRoom(id)
    })
    .then((updatedRoom) => {
      res.json(updatedRoom)
    })
    .catch(console.error)
})

//DELETE api/v1/house
router.delete('/:id', (req, res) => {
  const id = Number(req.params.id)
  db.deleteRoom(id)
    .then(() => {
      res.status(200).send('OK')
    })
    .catch(console.error)
})

module.exports = router