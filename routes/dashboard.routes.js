const express = require("express");
const router = express.Router();
const dashboardController = require("../controllers/dashboard.controller");

router.get("/storage-trends/:userId", dashboardController.getStorageTrends);
router.get("/latest-file/:userId", dashboardController.getLatestFile);
router.get("/latest-link/:userId", dashboardController.getLatestLink);
router.get("/latest-note/:userId", dashboardController.getLatestNote);

module.exports = router;
