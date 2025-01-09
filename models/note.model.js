const database = require("../config/database.config");

const Note = {
  getAllNotes: function (userId, result) {
    database.query(
      "SELECT * FROM notes_view WHERE user_id = ?;",
      [userId],
      function (err, res) {
        if (err) {
          console.error("Error fetching notes:", err);
          result(err, null);
        } else {
          result(null, res);
        }
      }
    );
  },

  getNote: function (noteId, result) {
    database.query(
      "SELECT * FROM notes_view WHERE note_id = ?;",
      [noteId],
      function (err, res) {
        if (err) {
          console.error("Error fetching note:", err);
          result(err, null);
        } else {
          result(null, res[0]);
        }
      }
    );
  },

  addNote: function (note, result) {
    database.query(
      "INSERT INTO notes (title, body, user_id) VALUES (?, ?, ?);",
      [note.title, note.body, note.userId],
      function (err, res) {
        if (err) {
          console.error("Error adding note:", err);
          result(err, null);
        } else {
          result(null, { id: res.insertId, ...note });
        }
      }
    );
  },

  editNote: function (noteId, note, result) {
    database.query(
      "UPDATE notes SET title = ?, body = ? WHERE note_id = ?;",
      [note.title, note.body, noteId],
      function (err, res) {
        if (err) {
          console.error("Error editing note:", err);
          result(err, null);
        } else {
          result(null, { noteId, ...note });
        }
      }
    );
  },

  deleteNote: function (noteId, result) {
    database.query(
      "DELETE FROM notes WHERE note_id = ?;",
      [noteId],
      function (err, res) {
        if (err) {
          console.error("Error deleting note:", err);
          result(err, null);
        } else {
          result(null, res);
        }
      }
    );
  },
};

module.exports = Note;
