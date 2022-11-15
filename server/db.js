const config = require('./knexfile').development
const connection = require('knex')(config)

module.exports = {
  getRoom,
  getAllRooms,
}

function getAllRooms(db = connection) {
  return db('rooms').select()
}

function getRoom(id, db = connection) {
  return db('rooms').where('id', id).select().first()
}