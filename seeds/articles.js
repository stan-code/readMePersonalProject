
exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex('articles').del()
    .then(function () {
      // Inserts seed entries
      return knex('articles').insert([
        {articleId: 1, title: 'My Cool Article', author: 'Archie B Coroli', thumbnailImage: './images/thumbnail.png'},
        {articleId: 2, title: 'My Great Article', author: 'Brandom C Danger', thumbnailImage: './images/thumbnail.png'},
        {articleId: 3, title: 'My Amazing Article', author: 'Claire D English', thumbnailImage: './images/thumbnail.png'},
      ]);
    });
};
