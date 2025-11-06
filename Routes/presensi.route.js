import express from "express";
import {
    getAttendanceSummary,
    analysisAttendance
} from "../Controllers/presensi.controller";

const app = express.app();

app.get("/summary/:userId", getAttendanceSummary)
app.get("/analysis", analysisAttendance);

export default app;