import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import userRoutes from "./Routes/user.route.js";
import presensiRoutes from "./Routes/presensi.route.js";
import attendanceRoutes from "./Routes/attendance.route.js";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.use("/api/users", userRoutes);
app.use("/api/presensi", presensiRoutes);
app.use("/api/attendance", attendanceRoutes);  

app.listen(PORT, () => {
    console.log(`server running on http://localhost:${PORT}`);
});