"use strict";
const { upload } = require("../helpers/helper");
const {
  FileUploads,
  getSingleFile,
} = require("../controllers/singleFileUpload");
const express = require("express");
const router = express.Router();

router.post("/singlefile", upload, FileUploads);
router.get("/getsinglefile", getSingleFile);

module.exports = router;
