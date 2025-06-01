const mongoose = require("mongoose");

async function connect() {
  try {
    await mongoose.connect(
      "mongodb://user:password@localhost:27017/tests",
      { useNewUrlParser: true }
    );
  } catch (err) {
    console.error("Error connecting to mongodb");
    console.error(err);
  }
}

module.exports = { connect };
