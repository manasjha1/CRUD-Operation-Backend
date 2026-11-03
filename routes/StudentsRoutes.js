const express = require("express");
const { StudentController } = require("../controllers/student.controller");

const router = express.Router();

// GET all
router.get("/", StudentController.allStudent);

// GET by id
router.get("/:id", StudentController.studentById);

// POST create data
router.post("/", StudentController.createdStudent);

// PUT update data
router.put("/:id", StudentController.updatedStudent);

// DELETE data
router.delete("/:id", StudentController.deletedStudent);

module.exports = router;
