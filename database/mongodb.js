const mongoose = require("mongoose");

const connectionUri = "mongodb://localhost:27017/weather";
const mongoInstance = mongoose.connect(connectionUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

export default mongoInstance;
