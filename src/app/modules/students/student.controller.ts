import { Request, Response } from "express";
import { StudentServices } from "./student.service";

const createStudent = async (req: Request, res: Response) => {
  const student = req.body.student;
  // will call service func to send this data
  try {
    const result = await StudentServices.createStudentIntoDB(student);
    res.status(200).json({
      success: true,
      message: "student is created successfully",
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

const getAllStudent = async (req: Request, res: Response) => {
  try {
    const allStudents = await StudentServices.getAllStudentsFromDB();
    res.status(200).json({
      success: true,
      message: "all student data is fetched",
      data: allStudents,
    });
  } catch (err) {
    console.log(err);
  }
};
const getSingleStudent = async (req: Request, res: Response) => {
  try {
    const singleStudent = await StudentServices.getSingleStudentFromDB(
      req.params.id
    );
    res.status(200).json({
      success: true,
      message: "single student data is fetched",
      data: singleStudent,
    });
  } catch (err) {
    console.log(err);
  }
};

export const StudentController = {
  createStudent,
  getAllStudent,
  getSingleStudent,
};
