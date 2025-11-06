import express from "express";
import {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
} from "../Controllers/User.controller.js";
import { login } from "../Controllers/auth.controller.js";

const app = express.app();

app.get("/", getAllUsers);
app.get("/:id", getUserById);
app.post("/", createUser);
app.put("/:id", updateUser);
app.delete("/:id", deleteUser);

app.post("/login", login);

export default app;