const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    user_id: {type: String, required: true},
    first_name: {type: String, required: true},
    last_name: {type: String, required: false},
    email: {type: String, required: true},
    password_hash: {type: String, required: true}
})

const User = mongoose.model("user", userSchema);
module.exports = User