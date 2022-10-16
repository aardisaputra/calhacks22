const express = require('express')
const app = require()

const port = 3003;
const host = '127.0.0.1';


var bodyParser = require("body-parser");

app.use(bodyParser.json())

const Sequelize = require("sequelize-cockroachdb");

var Sequelize = new Sequelize ({
    dialect: "postgres", 
    username: "mayuri",
    password: "otveC2fx3Vp0YYEjXojq3g",
    host: "free-tier4.aws-us-west-2.cockroachlabs.cloud",
    port: 26257,
    database: "defaultdb",
    logging: false

});

app.listen(port, host, () => {
    console.log('Server started at $()')
}) 