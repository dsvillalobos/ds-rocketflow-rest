const File = require("../models/file.model");

exports.getAllFiles = function (req, res) {
  const userId = req.params.userId;

  File.getAllFiles(userId, function (err, data) {
    if (err) {
      res.status(500).send({ message: "Error fetching files." });
    } else {
      res.send(data);
    }
  });
};

exports.getFile = function (req, res) {
  const fileId = req.params.fileId;

  File.getFile(fileId, function (err, data) {
    if (err) {
      res.status(500).send({ message: "Error fetching file." });
    } else {
      res.send(data);
    }
  });
};

exports.addFile = function (req, res) {
  const file = {
    name: req.body.name,
    file: req.body.file,
    type: req.body.type,
    userId: req.body.userId,
  };

  File.addFile(file, function (err, data) {
    if (err) {
      res.status(500).send({ message: "Error adding file." });
    } else {
      res.status(201).send(data);
    }
  });
};

exports.deleteFile = function (req, res) {
  const fileId = req.params.fileId;

  File.deleteFile(fileId, function (err, data) {
    if (err) {
      res.status(500).send({ message: "Error deleting file." });
    } else {
      res.send(data);
    }
  });
};
