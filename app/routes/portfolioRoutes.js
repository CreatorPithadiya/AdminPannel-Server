const express = require("express");
const router = express.Router();
const { auth } = require("../middleware/auth");
const portfolioController = require("../controller/portfolioController");
const upload = require("../services/multer");

router.post(
  "/api/portfolio",
  upload.array("uploadImage"),
  portfolioController.addData
);
router.get("/api/portfolio/find", portfolioController.findData);
router.get("/api/portfolio/find/:id", portfolioController.findDataByid);
router.put(
  "/api/portfolio/update/:id",
  upload.array("uploadImage"),
  portfolioController.editData
);
router.delete("/api/portfolio/delete/:id", portfolioController.deleteData);

module.exports = router;
