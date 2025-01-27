const database = require("../config/database.config");

const Dashboard = {
  getStorageTrends: function (userId, result) {
    database.query(
      "SELECT (SELECT COUNT(*) FROM files_view WHERE user_id = ?) AS files, (SELECT COUNT(*) FROM links_view WHERE user_id = ?) AS links, (SELECT COUNT(*) FROM notes_view WHERE user_id = ?) AS notes;",
      [userId, userId, userId],
      function (err, res) {
        if (err) {
          console.error("Error fetching storage trends:", err);
          result(err, null);
        } else {
          result(null, res);
        }
      }
    );
  },

  getLatestFile: function (userId, result) {
    database.query(
      "SELECT * FROM files_view WHERE user_id = ? ORDER BY file_datetime DESC LIMIT 1;",
      [userId],
      function (err, res) {
        if (err) {
          console.error("Error fetching latest file:", err);
          result(err, null);
        } else {
          result(null, res);
        }
      }
    );
  },

  getLatestLink: function (userId, result) {
    database.query(
      "SELECT * FROM links_view WHERE user_id = ? ORDER BY link_datetime DESC LIMIT 1;",
      [userId],
      function (err, res) {
        if (err) {
          console.error("Error fetching latest link:", err);
          result(err, null);
        } else {
          result(null, res);
        }
      }
    );
  },

  getLatestNote: function (userId, result) {
    database.query(
      "SELECT * FROM notes_view WHERE user_id = ? ORDER BY note_datetime DESC LIMIT 1;",
      [userId],
      function (err, res) {
        if (err) {
          console.error("Error fetching latest note:", err);
          result(err, null);
        } else {
          result(null, res);
        }
      }
    );
  },
};

module.exports = Dashboard;
