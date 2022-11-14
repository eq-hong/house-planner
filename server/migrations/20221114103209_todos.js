/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('rooms', (t) => {
    t.increments('id')
    t.string('room_name')
    t.string('room_type')
    t.string('room_notes')
    t.string('priority')
    t.integer('width')
    t.integer('length')
    t.boolean('north')
    t.boolean('east')
    t.boolean('west')
    t.boolean('south')
    t.string('floor')
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('todos')
};
