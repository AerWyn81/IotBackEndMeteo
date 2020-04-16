const mongoose = require("mongoose");

const connectionUri = "mongodb://localhost:27017/weather";

const options = {
  autoIndex: false, // Don't build indexes
  poolSize: 10, // Maintain up to 10 socket connections
  // If not connected, return errors immediately rather than waiting for reconnect
  bufferMaxEntries: 0,
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const connectWithRetry = () => {
  console.log("MongoDB connection with retry");
  mongoose
    .connect(connectionUri, options)
    .then(() => {
      console.log("MongoDB is connected");
    })
    .catch((err) => {
      console.log("MongoDB connection unsuccessful, retry after 5 seconds.");
      setTimeout(connectWithRetry, 5000);
    });
};

connectWithRetry();
