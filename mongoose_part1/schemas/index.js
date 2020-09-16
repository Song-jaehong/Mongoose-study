const mongoose = require(`mongoose`);

const connect = () => {
  if (process.env.NODE_ENV !== "production") {
    mongoose.set(`debug`, true);
  }
  mongoose.connect(
    `mongodb://4leaf:fourleaf0309@localhost:27017/admin`,
    {
      dbName: `ERP-4LEAF`,
      useNewUrlParser: true,
      useCreateIndex: true,
    },
    (error) => {
      if (error) {
        console.log(`Failed To Connect MongoDB`, error);
      } else {
        console.log(`☠️Success To Connect MongoDB`);
      }
    }
  );
};

mongoose.connection.on(`error`, (error) => {
  console.error(`Failed To Connect MongoDB`, error);
});

mongoose.connection.on(`disconnected`, () => {
  console.error(`MongoDB Disconnected! Try Again!`);
  connect();
});

module.exports = connect;
