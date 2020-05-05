
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('articleStore').del()
    .then(function () {
      // Inserts seed entries
      return knex('articleStore').insert([
        {articleId: 1,
        title: 'rowValue1',
        author: 'author',
        thumbnailImage: 'thumbnail',
        bannerImage: 'url',
        content:'string',
        tags: 'string',
        views: 0,
        likes: 0,
        dislikes: 0,
        commentsURL: 'url'}, 
        
        {articleId: 2,
          title: 'rowValue1',
          author: 'author',
          thumbnailImage: 'thumbnail',
          bannerImage: 'url',
          content:'string',
          tags: 'string',
          views: 0,
          likes: 0,
          dislikes: 0,
          commentsURL: 'url'},

          {articleId: 3,
            title: 'rowValue1',
            author: 'author',
            thumbnailImage: 'thumbnail',
            bannerImage: 'url',
            content:'string',
            tags: 'string',
            views: 0,
            likes: 0,
            dislikes: 0,
            commentsURL: 'url'},
      ]);
    });
};


// // table.increments('articleId')
// table.string('title')
// table.string('author')
// table.string('thumbnailImage')
// table.string('bannerImage')
// table.string('content')
// table.string('tags')
// table.integer('views')
// table.integer('likes')
// table.integer('dislikes')
// table.string('commentsURL')