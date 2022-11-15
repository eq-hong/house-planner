const config = require('./knexfile').development
const connection = require('knex')(config)

module.exports = {
  getRoom,
  getAllRooms,
  addRoom,
}

function getAllRooms(db = connection) {
  return db('rooms').select(
    'id', 
    'room_name as roomName',
    'room_type as roomType',
    'room_notes as roomNotes',
    'priority',
    'width',
    'length',
    'north',
    'east',
    'west',
    'south',
    'floor'
    )
}

function getRoom(id, db = connection) {
  return db('rooms').where('id', id).select().first()
}

function addRoom(room, db = connection) {
  return db('rooms').insert(room)
}