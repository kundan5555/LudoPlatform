const express = require("express");
const router = express.Router();

const ludoController = require("../controllers/ludoController");

router.get("/generate-room", ludoController.generateRoom);

module.exports = router;