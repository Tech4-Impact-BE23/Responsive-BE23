const pool = require("../../config/database");

module.exports = {
  create: (data, callbacks) => {
    pool.query(
      `insert into article(title, description, image_link) values(?, ?, ?)`,
      [data.title, data.description, data.image_link],
      (error, results, fields) => {
        if (error) {
          return callbacks(error);
        }
        return callbacks(null, results);
      }
    );
  },
  getArticle: (callbacks) => {
    pool.query(`select * from article`, [], (error, results, fields) => {
      if (error) {
        return callbacks(error);
      }
      return callbacks(null, results);
    });
  },
  getArticleById: (id, callbacks) => {
    pool.query(
      `select * from article where id=?`,
      [id],
      (error, results, fields) => {
        if (error) {
          return callbacks(error);
        }
        return callbacks(null, results[0]);
      }
    );
  },
  updateArticle: (id, data, callbacks) => {
    pool.query(
      `update article set title=?, description=?, image_link=? where id=?`,
      [data.title, data.description, data.image_link, id],
      (error, results, fields) => {
        if (error) {
          return callbacks(error);
        }
        return callbacks(null, results[0]);
      }
    );
  },
  deleteArticle: (id, callbacks) => {
    pool.query(
      `delete from article where id=?`,
      [id],
      (error, results, fields) => {
        if (error) {
          return callbacks(error);
        }
        return callbacks(null, results[0]);
      }
    );
  },
};
