const { createArticle } = require("./article.controller");
const router = require("express").Router();

router.post("/", createArticle);

module.exports = router;
