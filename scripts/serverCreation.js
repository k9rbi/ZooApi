require("dotenv").config();
const express = require("express");
const { MongoClient } = require("mongodb");
const { connection } = require("./mongodbConnection");

const server = express();

const port = 3005;
const client = new MongoClient(process.env.mdToken);

const connect = () => {
  try {
    connection({ client });
    server.listen(port, () => {
      console.log(`http://localhost:${port}`);
    });
  } catch (error) {
    console.error("Ошибка подключения" + error);
  }
};

connect();

module.exports = { server };
