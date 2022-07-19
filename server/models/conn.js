const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://saurabh:saurabh@cluster.cirkd.mongodb.net/myusers?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
  }
);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});
