const { server } = require("./scripts/serverCreation");
const { getAnimals } = require("./services/getAnimals");

server.get("/getAnimals", (req, res) => {
  getAnimals({ res });
});
