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
      priority: 'High',
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
      room_name: 'Main kitchen',
      room_type: 'Kitchen',
      room_notes: 'Kitchen for display and baking',
      priority: 'High',
      width: 3,
      length: 5,
      north: false,
      east: false,
      west: false,
      south: 1,
      floor: 'Ground',
    },

  ]);
};