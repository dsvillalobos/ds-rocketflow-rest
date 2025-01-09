const express = require("express");
const router = express.Router();
const linkController = require("../controllers/link.controller");

router.get("/all-links/:userId", linkController.getAllLinks);
router.get("/link/:linkId", linkController.getLink);
router.post("/", linkController.addLink);
router.put("/:linkId", linkController.editLink);
router.delete("/:linkId", linkController.deleteLink);

module.exports = router;
