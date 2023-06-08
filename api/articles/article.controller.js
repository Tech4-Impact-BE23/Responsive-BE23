const {
  create,
  getArticle,
  getArticleById,
  getArticleByTitle,
  updateArticle,
  deleteArticle,
} = require("../articles/article.service");

module.exports = {
  createArticle: (req, res) => {
    const body = req.body;
    create(body, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          success: 0,
          message: "Database connection error",
        });
      }
      return res.status(200).json({
        success: 1,
        data: results,
      });
    });
  },
  getArticleById: (req, res) => {
    const id = req.params.id;
    getArticleById(id, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      if (!results) {
        return res.json({
          success: 0,
          message: "Article not found!",
        });
      }
      return res.json({
        success: 1,
        data: results,
      });
    });
  },
  getArticleByTitle: (req, res) => {
    const title = req.params.title;
    getArticleByTitle(title, (err, results) => {
      // Use the service function
      if (err) {
        console.log(err);
        return res.json({
          success: 0,
          message: "Error retrieving article!",
        });
      }
      if (!results || results.length === 0) {
        return res.json({
          success: 0,
          message: "Article not found!",
        });
      }
      return res.json({
        success: 1,
        data: results,
      });
    });
  },
  getArticle: (req, res) => {
    getArticle((err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      return res.json({
        success: 1,
        data: results,
      });
    });
  },
  updateArticle: (req, res) => {
    const id = req.params.id;
    const body = req.body;
    updateArticle(id, body, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      return res.json({
        success: 1,
        data: "Update successfully!",
      });
    });
  },
  deleteArticle: (req, res) => {
    const id = req.params.id;
    deleteArticle(id, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      // if (!results) {
      //   return res.json({
      //     success: 0,
      //     message: "Article not found!",
      //   });
      // }
      return res.json({
        success: 1,
        message: "Article deleted successfully!",
      });
    });
  },
};
