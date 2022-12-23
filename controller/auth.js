const User = require("../model/user");
const Session = require("../model/session");
const bcrypt = require("bcryptjs");
const { request } = require("express");
exports.getSignup = (req, res, next) => {
  User.find()
    .then((user) => {
      res.send(user);
    })
    .catch((err) => {
      console.log(err);
    });
};
exports.postSignup = (req, res, next) => {
  const email = req.body.email;
  const phone = req.body.phone;
  const password = req.body.password;
  const fullname = req.body.fullname;
  User.findOne({ email: email })
    .then((userDoc) => {
      if (userDoc) {
        return res.status(401).send({ message: "gmail Đã Tồn Tại " });
      }
      return bcrypt.hash(password, 12).then((hashedPassword) => {
        const user = new User({
          email: email,
          phone: phone,
          fullname: fullname,
          password: hashedPassword,
        });
        return user.save();
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
exports.postSignin = (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  User.findOne({ email: email })

    .then((user) => {
      if (!user) {
        return res.status(401).send({ message: "gmail Không tồn tại " });
      }
      bcrypt
        .compare(password, user.password)
        .then((doMatch) => {
          if (doMatch) {
            req.session.isLoggedIn = true;
            req.session.user = user;
            return req.session.save((err) => {
              console.log(err);
            });
          }
          return res.status(402).send({ message: "sai mật khẩu " });
        })
        .catch((err) => {
          return res.status(403).send({ message: "lỗi Hệ thống " });
        });
    })
    .catch((err) => console.log(err));
};
exports.getSession = (req, res) => {
  Session.find()
    .then((ses) => {
      res.send(ses);
    })
    .catch((err) => {
      console.log(err);
    });
};
exports.postLogout = (req, res, next) => {
  console.log(req.session);
  req.session.destroy((err) => {
    console.log(err);
  });
};
