import { StudentModel } from "../student.model";
import { Student } from "./student.interface";

const createStudentIntoDB = async (student: Student) => {
  const result = await StudentModel.create(student);
  return result;
};
const getAllStudentsFromDB = async () => {
  const allStudents = await StudentModel.find({});
  return allStudents;
};
const getSingleStudentFromDB = async (ID: string) => {
  const singleStudent = await StudentModel.findOne({ id: ID });
  return singleStudent;
};

export const StudentServices = {
  createStudentIntoDB,
  getAllStudentsFromDB,
  getSingleStudentFromDB,
};
