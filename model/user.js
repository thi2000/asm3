const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userSchema = new Schema({
  fullname: {
    type: "string",
    required: true,
  },
  email: {
    type: "String",
    required: true,
  },
  password: {
    type: "string",
    required: true,
  },
  phone: {
    type: "String",
    required: true,
  },
});
module.exports = mongoose.model("User", userSchema);
