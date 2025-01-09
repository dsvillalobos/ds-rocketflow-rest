const User = require("../models/user.model");
const bcrypt = require("bcrypt");

exports.signIn = function (req, res) {
  const userCredentials = {
    email: req.body.email,
    password: req.body.password,
  };

  User.signIn(userCredentials, async function (err, data) {
    if (err) {
      res.status(500).send({ message: "Error fetching user." });
    } else if (!data) {
      res
        .status(401)
        .send({ message: "Sign in failed. Wrong email or password." });
    } else {
      const isMatched = await bcrypt.compare(
        userCredentials.password,
        data.password
      );

      if (isMatched) {
        res.send(data);
      } else {
        res
          .status(401)
          .send({ message: "Sign in failed. Wrong email or password." });
      }
    }
  });
};

exports.signUp = async function (req, res) {
  const hashedPassword = await bcrypt.hash(req.body.password, 10);

  const newUser = {
    name: req.body.name,
    lastName: req.body.lastName,
    email: req.body.email,
    password: hashedPassword,
  };

  User.signUp(newUser, function (err, data) {
    if (err) {
      res.status(500).send({ message: "Error signing up." });
    } else {
      res.status(201).send(data);
    }
  });
};
