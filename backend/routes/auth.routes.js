import express from "express";
import { login, logout, signup , admin_login} from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/signup", signup);

router.post("/login", login);

router.post("/Adminlogin", admin_login);

router.post("/logout", logout);

export default router;
