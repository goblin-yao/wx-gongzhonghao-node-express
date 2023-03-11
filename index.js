const path = require("path");
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
// const { init: initDB } = require("./database");
const logger = morgan("tiny");
const indexRouter = require("./routes/index");
const gzhRouter = require("./routes/gongzhonghao");
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.use(logger);

app.use("/", indexRouter);
app.use("/gongzhonghao", gzhRouter);

const port = process.env.PORT || 80;

function bootstrap() {
  app.listen(port, () => {
    console.log("启动成功", port);
  });
}
// async function bootstrap() {
//   await initDB();

//   app.listen(port, () => {
//     console.log("启动成功", port);
//   });
// }

bootstrap();
