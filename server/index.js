const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const controller = require("./controller");
const db = require("../database/index");

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "../client/dist")));

app.listen(PORT, () => console.log(`connected to port:${PORT}`));

module.exports = app;
