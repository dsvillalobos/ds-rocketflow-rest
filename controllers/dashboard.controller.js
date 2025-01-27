const Dashboard = require("../models/dashboard.model");

exports.getStorageTrends = function (req, res) {
  const userId = req.params.userId;

  Dashboard.getStorageTrends(userId, function (err, data) {
    if (err) {
      res.status(500).send({ message: "Error fetching storage trends." });
    } else {
      res.send(data);
    }
  });
};

exports.getLatestFile = function (req, res) {
  const userId = req.params.userId;

  Dashboard.getLatestFile(userId, function (err, data) {
    if (err) {
      res.status(500).send({ message: "Error fetching latest file." });
    } else {
      res.send(data);
    }
  });
};

exports.getLatestLink = function (req, res) {
  const userId = req.params.userId;

  Dashboard.getLatestLink(userId, function (err, data) {
    if (err) {
      res.status(500).send({ message: "Error fetching latest link." });
    } else {
      res.send(data);
    }
  });
};

exports.getLatestNote = function (req, res) {
  const userId = req.params.userId;

  Dashboard.getLatestNote(userId, function (err, data) {
    if (err) {
      res.status(500).send({ message: "Error fetching latest note." });
    } else {
      res.send(data);
    }
  });
};
