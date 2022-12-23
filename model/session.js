const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const sessionSchema = new Schema({
  session: {
    cookie: [],
    isLoggedIn: String,
    user: [
      {
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
      },
    ],
  },
});
module.exports = mongoose.model("Session", sessionSchema);
