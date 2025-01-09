const database = require("../config/database.config");

const File = {
  getAllFiles: function (userId, result) {
    database.query(
      "SELECT * FROM files_view WHERE user_id = ?;",
      [userId],
      function (err, res) {
        if (err) {
          console.error("Error fetching files:", err);
          result(err, null);
        } else {
          result(null, res);
        }
      }
    );
  },

  getFile: function (fileId, result) {
    database.query(
      "SELECT * FROM files_view WHERE file_id = ?;",
      [fileId],
      function (err, res) {
        if (err) {
          console.error("Error fetching file:", err);
          result(err, null);
        } else {
          result(null, res[0]);
        }
      }
    );
  },

  addFile: function (file, result) {
    database.query(
      "INSERT INTO files (name, file, type, user_id) VALUES (?, ?, ?, ?);",
      [file.name, file.file, file.type, file.userId],
      function (err, res) {
        if (err) {
          console.error("Error adding file:", err);
          result(err, null);
        } else {
          result(null, { id: res.insertId, ...file });
        }
      }
    );
  },

  deleteFile: function (fileId, result) {
    database.query(
      "DELETE FROM files WHERE file_id = ?;",
      [fileId],
      function (err, res) {
        if (err) {
          console.error("Error deleting file:", err);
          result(err, null);
        } else {
          result(null, res);
        }
      }
    );
  },
};

module.exports = File;
