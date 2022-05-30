const express = require("express");
const router = express();
const { auth } = require("../middleware/auth");
const categoryController = require("../controller/categoryController");

router.post("/api/category", categoryController.addData);
router.get("/api/category/find", categoryController.findData);
router.get("/api/category/find/:id", categoryController.findDataByid);
router.put("/api/category/update/:id", categoryController.editData);
router.delete("/api/category/delete/:id", categoryController.deleteData);

module.exports = router;
