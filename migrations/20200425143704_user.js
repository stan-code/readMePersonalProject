
exports.up = function(knex) {
  return knex.schema.createTable('user', table => {
    table.increments('userId')
    table.string('userName')
    table.string('articles')
    table.string('subscriptions')
    table.string('subscribers')
    table.string('playlistID')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('user')
};
