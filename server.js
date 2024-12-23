const { server } = require("./scripts/serverCreation");
const { getAnimals } = require("./services/getAnimals");
const fs = require("fs");

server.get("/getImage/:id", (req, res) => {
  const id = req.params.id;
  try {
    fs.readFile(`images/${id}`, (err, data) => {
      res.setHeader("Content-Type", "image/jpg");
      res.send(data);
    });
  } catch (err) {
    console.log(err);
  }
});

server.get("/getAnimals", (req, res) => {
  getAnimals({ res });
});
