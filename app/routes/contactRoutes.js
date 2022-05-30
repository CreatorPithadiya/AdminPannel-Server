const express = require("express");
const router = express();
const { auth } = require("../middleware/auth");
const contactController = require("../controller/contactController");

router.post("/api/contact", contactController.addData);
router.get("/api/contact/find", contactController.findData);
router.get("/api/contact/find/:id", contactController.findDataByid);
router.put("/api/contact/update/:id", contactController.editData);
router.delete("/api/contact/delete/:id", contactController.deleteData);

module.exports = router;
