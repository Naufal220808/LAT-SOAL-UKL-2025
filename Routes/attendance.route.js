import express from "express";
import {
    getAllAttendance,
    getAttendanceById,
    createAttendance,
    updateAttendance,
    deleteAttendance,
} from "../Controllers/attendance.controller.js";

const app = express.app();

app.get("/", getAllAttendance);
app.get("/:id", getAttendanceById);
app.post("/", createAttendance);
app.put("/:id", updateAttendance);
app.delete("/:id", deleteAttendance);

export default app;