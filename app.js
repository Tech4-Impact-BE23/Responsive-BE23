require("dotenv").config();
const express = require("express");
const app = express();
const articleRouter = require("./api/articles/article.router");

app.use(express.json());

//routing API
app.use("/api/articles", articleRouter);

app.listen(process.env.APP_PORT, () => {
  console.log("Server up and running on port:", process.env.APP_PORT);
});
