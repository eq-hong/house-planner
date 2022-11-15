/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('rooms').del()
  await knex('rooms').insert([
    {
      id: 1, 
      room_name: 'Living',
      room_type: 'Living',
      room_notes: 'Main living area on ground floor',
      priority: 'high',
      width: 4.5,
      length: 6,
      north: true,
      east: false,
      west: true,
      south: false,
      floor: 'ground',
    },
    {
      id: 2, 
      room_name: 'Living2',
      room_type: 'Living',
      room_notes: 'Main living area on ground floor',
      priority: 'high',
      width: 4.5,
      length: 6,
      north: 1,
      east: 1,
      west: 1,
      south: 1,
      floor: 'ground',
    },

  ]);
};
