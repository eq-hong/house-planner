const config = require('./knexfile').development
const connection = require('knex')(config)

module.exports = {
  getRoom,
  getAllRooms,
  addRoom,
  patchRoom,
  deleteRoom,
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
  return db('rooms').where('id', id).select(
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
  ).first()
}

function addRoom(room, db = connection) {
  return db('rooms').insert(room)
}

// function patchRoom(id, editedRoom, db = connection) {
//   const { roomName, roomType, roomNotes, priority, width, length, north, east, south, west, floor } = editedRoom
//   return db('rooms').where('id', id).update({room_name:roomName, room_type:roomType, room_notes:roomNotes, priority, width, length, north, east, west, south, floor })
// }

function patchRoom(id, editedRoom, db = connection) {
  return db('rooms').where('id', id).update(editedRoom)
}

function deleteRoom(id, db = connection) {
  return db('rooms').where('id', id).delete()
  }