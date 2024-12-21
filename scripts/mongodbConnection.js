const connection = async ({ client }) => {
  try {
    const database = client.db("Zoo");
    global.animals = database.collection("Animals");

    await client.connect();
  } catch (err) {
    console.log("Ошибка при подключении бд " + err);
  }
};

module.exports = { connection };
