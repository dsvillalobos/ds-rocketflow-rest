const Note = require("../models/note.model");

exports.getAllNotes = function (req, res) {
  const userId = req.params.userId;

  Note.getAllNotes(userId, function (err, data) {
    if (err) {
      res.status(500).send({ message: "Error fetching notes." });
    } else {
      res.send(data);
    }
  });
};

exports.getNote = function (req, res) {
  const noteId = req.params.noteId;

  Note.getNote(noteId, function (err, data) {
    if (err) {
      res.status(500).send({ message: "Error fetching note." });
    } else {
      res.send(data);
    }
  });
};

exports.addNote = function (req, res) {
  const note = {
    title: req.body.title,
    body: req.body.body,
    userId: req.body.userId,
  };

  Note.addNote(note, function (err, data) {
    if (err) {
      res.status(500).send({ message: "Error adding note." });
    } else {
      res.status(201).send(data);
    }
  });
};

exports.editNote = function (req, res) {
  const noteId = req.params.noteId;

  const note = {
    title: req.body.title,
    body: req.body.body,
  };

  Note.editNote(noteId, note, function (err, data) {
    if (err) {
      res.status(500).send({ message: "Error editing note." });
    } else {
      res.status(200).send(data);
    }
  });
};

exports.deleteNote = function (req, res) {
  const noteId = req.params.noteId;

  Note.deleteNote(noteId, function (err, data) {
    if (err) {
      res.status(500).send({ message: "Error deleting note." });
    } else {
      res.send(data);
    }
  });
};
