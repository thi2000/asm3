const Product = require("../model/product");

exports.getProduct = (req, res, next) => {
  Product.find()
    .then((user) => {
      res.send(user);
    })
    .catch((err) => {
      console.log(err);
    });
};
exports.getProductid = (req, res, next) => {
  const prodId = req.params.productId;
  Product.find({ _id: prodId })
    .then((user) => {
      res.send(user);
    })
    .catch((err) => {
      console.log(err);
    });
};
