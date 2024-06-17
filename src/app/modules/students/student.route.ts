import express from "express";
import { StudentController } from "./student.controller";

const router = express.Router();

router.post("/create-student", StudentController.createStudent);
router.get("/all-student", StudentController.getAllStudent);
router.get("/single-student/:id", StudentController.getSingleStudent);

router.all("/*", (req, res) => {
  res.send("ami student route e achi,r rasta pacchi na bro");
});

export const StudentRoutes = router;
