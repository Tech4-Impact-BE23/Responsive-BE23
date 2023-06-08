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
};
