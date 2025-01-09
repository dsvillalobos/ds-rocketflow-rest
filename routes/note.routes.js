const express = require("express");
const router = express.Router();
const noteController = require("../controllers/note.controller");

router.get("/all-notes/:userId", noteController.getAllNotes);
router.get("/note/:noteId", noteController.getNote);
router.post("/", noteController.addNote);
router.put("/:noteId", noteController.editNote);
router.delete("/:noteId", noteController.deleteNote);

module.exports = router;
