import express from "express";
import protectRoute from "../middleware/protectRoute.js";
import { getUsersForSidebar , getAdminForSidebar } from "../controllers/user.controller.js";

const router = express.Router();

router.get("/", protectRoute, getUsersForSidebar);
router.get("/admin", protectRoute, getAdminForSidebar);

export default router;
