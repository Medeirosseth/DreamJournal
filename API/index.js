const express = require("express")
const app = express();
const dotenv = require("dotenv")
const mongoose = require("mongoose")

dotenv.config()

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // useCreateIndex: true
}).then(console.log("Connected to MongoDB"))
.catch((err) => console.log(err));

app.use("/", (req, res) => {
  console.log("You have pinged the main url")
})

app.listen("3000", () => {
  console.log("backend is running")
})