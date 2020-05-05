
exports.up = (knex) => {
  return knex.schema.createTable('articles', table => {
    table.increments('articleId')
    table.string('title')
    table.string('author')
    table.string('thumbnailImage')
  })
};

exports.down = (knex) => {
  return knex.schema.dropTable('articles')
};
