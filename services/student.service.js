const Student = require("../models/Student");

class StudentService {
  static async getAllStudents() {
    return Student.findAll();
  }

  static async getStudentById(id) {
    return Student.findByPk(id);
  }

  static async createStudent(data) {
    const { name, email, age } = data;

    return Student.create({
      name,
      email,
      age,
    });
  }

  static async updateStudent(id, data) {
    console.log("SERVICE:", id, "DATA:", data);

    const { name, email, age } = data;

    const [updatedRows] = await Student.update(
      {
        name,
        email,
        age,
      },
      {
        where: {
          id: id,
        },
      },
    );

    if (updatedRows === 0) {
      return null;
    }
    const student = Student.findByPk(id);

    console.log("student updated successfully");
    return student;
  }
  static async deleteStudent(id) {
    const student = await Student.findByPk(id);

    if (!student) {
      return null;
    }

    await student.destroy();

    return student;
  }
}

module.exports = { StudentService };
