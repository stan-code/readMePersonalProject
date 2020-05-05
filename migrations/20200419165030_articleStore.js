
exports.up = (knex) => {
  return knex.schema.createTable('articleStore', table => {
    table.increments('articleId')
    table.string('title')
    table.string('author')
    table.string('thumbnailImage')
    table.string('bannerImage')
    table.string('content')
    table.string('tags')
    table.integer('views')
    table.integer('likes')
    table.integer('dislikes')
    table.string('commentsURL')
  })
};

exports.down = (knex) => {
  return knex.schema.dropTable('articleStore')
};
