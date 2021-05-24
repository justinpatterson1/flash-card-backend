const express = require("express");
const router = express.Router();

const flashCardServices  = require("../services/Q&AServices.js")

router.get(`/`,flashCardServices.getAllFlashCards);
router.get(`/:id`,flashCardServices.getAFlashCard);
router.post(`/`,flashCardServices.createAFlashCard);
router.put(`/:id`,flashCardServices.updateAFlashCard);
router.delete(`/:id`,flashCardServices.deleteAFlashCard);

module.exports = router;