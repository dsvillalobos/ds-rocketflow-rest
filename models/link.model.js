const database = require("../config/database.config");

const Link = {
  getAllLinks: function (userId, result) {
    database.query(
      "SELECT * FROM links_view WHERE user_id = ?;",
      [userId],
      function (err, res) {
        if (err) {
          console.error("Error fetching links:", err);
          result(err, null);
        } else {
          result(null, res);
        }
      }
    );
  },

  getLink: function (linkId, result) {
    database.query(
      "SELECT * FROM links_view WHERE link_id = ?;",
      [linkId],
      function (err, res) {
        if (err) {
          console.error("Error fetching link:", err);
          result(err, null);
        } else {
          result(null, res[0]);
        }
      }
    );
  },

  addLink: function (link, result) {
    database.query(
      "INSERT INTO links (title, address, user_id) VALUES (?, ?, ?);",
      [link.title, link.address, link.userId],
      function (err, res) {
        if (err) {
          console.error("Error adding link:", err);
          result(err, null);
        } else {
          result(null, { id: res.insertId, ...link });
        }
      }
    );
  },

  editLink: function (linkId, link, result) {
    database.query(
      "UPDATE links SET title = ?, address = ? WHERE link_id = ?;",
      [link.title, link.address, linkId],
      function (err, res) {
        if (err) {
          console.error("Error editing link:", err);
          result(err, null);
        } else {
          result(null, { linkId, ...link });
        }
      }
    );
  },

  deleteLink: function (linkId, result) {
    database.query(
      "DELETE FROM links WHERE link_id = ?;",
      [linkId],
      function (err, res) {
        if (err) {
          console.error("Error deleting link:", err);
          result(err, null);
        } else {
          result(null, res);
        }
      }
    );
  },
};

module.exports = Link;
