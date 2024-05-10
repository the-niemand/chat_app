import express from "express";
import protectRoute from "../middleware/protectRoute.js";
import { getUsersForSidebar, getAdminForSidebar, getAllUsers, updateUser, deleteUser } from "../controllers/user.controller.js";

const router = express.Router();

router.get("/", protectRoute, getUsersForSidebar);
router.get("/admin", protectRoute, getAdminForSidebar);
router.get("/fetchUsers", getAllUsers);
router.put("/updateUserById/:id", updateUser);
router.delete("/deleteUserById/:id", deleteUser);

export default router;
