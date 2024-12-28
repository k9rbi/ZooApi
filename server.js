const multer = require("multer");
const { server } = require("./scripts/serverCreation");
const { getAnimals } = require("./services/getAnimals");
const fs = require("fs");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images/");
  },
  filename: (req, file, cb) => {
    /* file.originalname = Buffer.from(file.originalname, "latin1").toString(
      "utf8"
    );*/
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

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

server.post("/uploadImage", upload.single("file"), (req, res) => {
  const file = req.file;
  console.log(file);
  res.status(200);
});
