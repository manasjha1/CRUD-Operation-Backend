const { StudentService } = require("../services/student.service");

class StudentController {
  // GET: ALL DATA
  static async allStudent(req, res, next) {
    try {
      const students = await StudentService.getAllStudents();
      return res.status(200).json(students);
    } catch (error) {
      return next(error);
    }
  }

  // GET: DATA BY ID
  static async studentById(req, res, next) {
    try {
      const student = await StudentService.getStudentById(req.params.id);
      if (!student) {
        return res.status(404).json({
          message: "Student not found",
        });
      }

      return res.status(200).json(student);
    } catch (error) {
      return next(error);
    }
  }

  // POST: CREATE DATA
  static async createdStudent(req, res, next) {
    try {
      console.log("Request body:", req.body);

      const { name, email, age } = req.body ?? {};

      console.log("Name:", name);
      console.log("Email:", email);
      console.log("Age:", age);

      const student = await StudentService.createStudent({
        name,
        email,
        age,
      });
      res.status(201).json({
        message: "Student creates successfully",
        student,
      });
    } catch (error) {
      next(error);
    }
  }

  // PUT: UPDATE DATA
  static async updatedStudent(req, res, next) {
    console.log("CONTROLLER:", req.params.id, req.body);

    try {
      const id = req.params.id;
      const { name, email, age } = req.body ?? {};

      console.log("Update request log", req.body);

      if (name === undefined || email === undefined || age === undefined) {
        res.status(400).json({
          message: "Student found undefined",
        });
      }

      const updatedStudents = await StudentService.updateStudent(id, {
        name,
        email,
        age,
      });

      if (!updatedStudents) {
        res.status(404).json({
          message: "Student is not found for updation!",
        });
      }
      console.log("data updated ", updatedStudents);

      res.status(200).json({
        message: "Data updated successfully",
        updatedStudents,
      });
    } catch (error) {
      return next(error);
    }
  }

  // DELETE: DATA
  static async deletedStudent(req, res, next) {
    console.log("Reuqest log -->", req.body);

    try {
      const students = await StudentService.deleteStudent(req.params.id);
      if (!students) {
        console.log("this msg from params id - delStudent");
      }
      res.status(200).json({
        message: "Data removed successfully!",
        students,
      });
    } catch (error) {
      return next(error);
    }
  }
}

module.exports = { StudentController };
