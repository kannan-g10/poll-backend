const mongoose = require("mongoose");

async function connectDb() {
  try {
    await mongoose.connect(process.env.CONNECTION_STR);
    console.log("DB connection successful!");
  } catch (err) {
    console.log("DB connection error");
    process.exit(1);
  }
}
module.exports = connectDb;
