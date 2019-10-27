const express = require('express');
const consign = require('consign');


const PORT = 3000;

const app = express();

app.set("json spaces", 4);

consign()
    .include("db.js")
    .then("models")
    .then("libs/middlewares.js")
    .then("routes")
    .then("libs/boot.js")
    .into(app);

app.listen(PORT, () => console.log(`Task Manager Port = ${PORT}`));