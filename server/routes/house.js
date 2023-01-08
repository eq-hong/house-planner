const express = require('express')
const router = express.Router()
const db = require('../db')


//GET api/v1/house/all
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

//GET api/v1/house/:id
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

//POST api/v1/house/all
router.post('/all', (req, res) => {
  const newRoom = req.body
  const object = {
    ...newRoom,
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