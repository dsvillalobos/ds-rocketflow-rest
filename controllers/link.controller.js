const Link = require("../models/link.model");

exports.getAllLinks = function (req, res) {
  const userId = req.params.userId;

  Link.getAllLinks(userId, function (err, data) {
    if (err) {
      res.status(500).send({ message: "Error fetching links." });
    } else {
      res.send(data);
    }
  });
};

exports.getLink = function (req, res) {
  const linkId = req.params.linkId;

  Link.getLink(linkId, function (err, data) {
    if (err) {
      res.status(500).send({ message: "Error fetching link." });
    } else {
      res.send(data);
    }
  });
};

exports.addLink = function (req, res) {
  const link = {
    title: req.body.title,
    address: req.body.address,
    userId: req.body.userId,
  };

  Link.addLink(link, function (err, data) {
    if (err) {
      res.status(500).send({ message: "Error adding link." });
    } else {
      res.status(201).send(data);
    }
  });
};

exports.editLink = function (req, res) {
  const linkId = req.params.linkId;

  const link = {
    title: req.body.title,
    address: req.body.address,
  };

  Link.editLink(linkId, link, function (err, data) {
    if (err) {
      res.status(500).send({ message: "Error editing link." });
    } else {
      res.status(200).send(data);
    }
  });
};

exports.deleteLink = function (req, res) {
  const linkId = req.params.linkId;

  Link.deleteLink(linkId, function (err, data) {
    if (err) {
      res.status(500).send({ message: "Error deleting link." });
    } else {
      res.send(data);
    }
  });
};
