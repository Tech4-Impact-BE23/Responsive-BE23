const {
  createArticle,
  getArticle,
  getArticleById,
  updateArticle,
  deleteArticle,
} = require("./article.controller");
const router = require("express").Router();

router.post("/", createArticle);
router.get("/", getArticle);
router.get("/:id", getArticleById);
router.patch("/:id", updateArticle);
router.delete("/:id", deleteArticle);

module.exports = router;
