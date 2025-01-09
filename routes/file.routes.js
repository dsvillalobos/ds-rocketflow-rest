const express = require("express");
const router = express.Router();
const fileController = require("../controllers/file.controller");

router.get("/all-files/:userId", fileController.getAllFiles);
router.get("/file/:fileId", fileController.getFile);
router.post("/", fileController.addFile);
router.delete("/:fileId", fileController.deleteFile);

module.exports = router;
