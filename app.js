const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const path = require("path");
const cors = require("cors");
const authRoutes = require("./router/auth");
const productRoutes = require("./router/Product");
const session = require("express-session");
const MongoDBStore = require("connect-mongodb-session")(session);
const mongoose = require("mongoose");
const urlmongo =
  "mongodb+srv://dinhthi:03042000thi@cluster0.vhklay1.mongodb.net/data";
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
const store = new MongoDBStore({
  uri: urlmongo,
  collection: "sessions",
});
app.use(
  session({
    secret: "my secret",
    resave: false,
    saveUninitialized: false,
    store: store,
  })
);
app.use(express.json());
app.use(authRoutes);

app.use(productRoutes);

mongoose
  .connect(urlmongo)
  .then((result) => {
    app.listen(5000);
  })
  .catch((err) => {
    console.log(err);
  });
