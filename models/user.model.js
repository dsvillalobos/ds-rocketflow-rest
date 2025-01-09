const database = require("../config/database.config");

const User = {
  signIn: function (userCredentials, result) {
    database.query(
      "SELECT * FROM users WHERE email = ? LIMIT 1;",
      [userCredentials.email, userCredentials.password],
      function (err, res) {
        if (err) {
          console.error("Error fetching user:", err);
          result(err, null);
        } else {
          result(null, res[0]);
        }
      }
    );
  },

  signUp: function (newUser, result) {
    database.query(
      "INSERT INTO users (name, last_name, email, password) VALUES (?, ?, ?, ?);",
      [newUser.name, newUser.lastName, newUser.email, newUser.password],
      function (err, res) {
        if (err) {
          console.error("Error signing up:", err);
          result(err, null);
        } else {
          result(null, { id: res.insertId, ...newUser });
        }
      }
    );
  },
};

module.exports = User;
