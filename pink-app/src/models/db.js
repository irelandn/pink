const config = require('config.json');
const mongoose = require('mongoose');
const connectionOptions = { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false , dbName:"PinkTax"};
mongoose.connect("mongodb+srv://pink:pink@cluster0.dmj7x.mongodb.net/dreamTeamCRM?retryWrites=true&w=majority" || config.connectionString, connectionOptions);
mongoose.Promise = global.Promise;

module.exports = {
    User: require('../users/user.model')
};