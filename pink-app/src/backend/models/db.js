require('dotenv').config()
const config = require('./../config.json');
const mongoose = require('mongoose');
const connectionOptions = { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, dbName: "PinkTax" };
mongoose.connect(process.env.MONGODB_URI || config.connectionString, connectionOptions);
const db = mongoose.connection
    
db.on("error", err => {
    console.error(err);
    process.exit(1)
})

db.once("open", async () => {
    console.log("Mongo connection started on " + db.host + ":" + db.port)
})
module.exports = {
    User: require('../users/user.model')
};