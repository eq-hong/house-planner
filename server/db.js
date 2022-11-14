const config = require('./knexfile').development
const connection = require('knex')(config)

// module.exports = {
//   getAllBirds,
//   getBird,
// }

// function getAllBirds(db = connection) {
//   return db('birds_info').select()
// }

// function getBird(id, db = connection) {
//   return db('birds_info').where('id', id).select().first()
// }