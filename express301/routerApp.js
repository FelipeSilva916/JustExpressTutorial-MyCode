//express.Router()

const express = require("express");
const app = express();
const helmet = require("helmet");
app.use(helmet());
app.use(express.urlencoded());
app.use(express.json());
app.use(express.static("public"));

const router = require("./theRouter");
app.use("/", router); //middleware . everything inside the file uses this route
const userRouter = require("./userRouter");
app.use("/user", userRouter);

app.listen(3000, () => console.log("Listening on port 3000"));
