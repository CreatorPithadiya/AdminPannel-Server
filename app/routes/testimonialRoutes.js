const express = require("express");
const router = express.Router();
const { auth } = require("../middleware/auth");
const testimonialController = require("../controller/testimonialController");
const upload = require("../services/multer");

router.post(
  "/api/testimonial",
  upload.single("uploadImage"),
  testimonialController.addData
);
router.get("/api/testimonial/find", testimonialController.findData);
router.get("/api/testimonial/find/:id", testimonialController.findDataByid);
router.put(
  "/api/testimonial/update/:id",
  upload.single("uploadImage"),
  testimonialController.editData
);
router.delete("/api/testimonial/delete/:id", testimonialController.deleteData);

module.exports = router;
