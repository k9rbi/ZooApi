const getAnimals = async ({ res }) => {
  try {
    const animalsData = await animals.find().toArray();
    console.log(animalsData);
    res.status(200).json(animalsData);
  } catch (err) {
    console.log("Причина ошибки = " + err);
    res.status(400).send(err);
  }
};
module.exports = { getAnimals };
