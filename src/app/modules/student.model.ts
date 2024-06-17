import { Schema, model } from "mongoose";
import { Guardian, LocalGuardian, Student } from "./students/student.interface";

// sub schemas
const GuardianSchema = new Schema<Guardian>({
  fatherName: {
    type: String,
    requiredPaths: true,
  },
  fatherOccupation: {
    type: String,
    requiredPaths: true,
  },
  fatherContactNo: {
    type: String,
    requiredPaths: true,
  },
  motherName: {
    type: String,
    requiredPaths: true,
  },
  motherOccupation: {
    type: String,
    requiredPaths: true,
  },
  motherContactNo: {
    type: String,
    requiredPaths: true,
  },
});

const LocalGuardianSchema = new Schema<LocalGuardian>({
  name: { type: String, required: true },
  occupation: { type: String, required: true },
  address: { type: String, required: true },
  contactNumber: { type: String, required: true },
});

//main schema
const studentSchema = new Schema<Student>({
  id: { type: String },
  name: {
    firstName: { type: String, required: true },
    middleName: { type: String },
    lastName: { type: String, required: true },
  },
  gender: {
    type: String,
    enum: ["male", "female"],
    required: true,
  },
  dateOfBirth: String,
  email: { type: String, required: true },
  contactNumber: { type: String, required: true },
  emergencyContactNumber: { type: String, required: true },
  bloodGroup: {
    type: String,
    enum: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
  },
  permanentAddress: { type: String, required: true },
  presentAddress: { type: String, required: true },
  guardian: GuardianSchema,
  localGuardian: LocalGuardianSchema,
  profileImg: String,
  isActive: { type: Boolean, default: true },
});

// creating model
export const StudentModel = model<Student>("Student", studentSchema);
