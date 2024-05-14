import express from "express";
import protectRoute from "../middleware/protectRoute.js";
import { getUsersForSidebar, getAdminForSidebar, getAllUsers, getUserById, updateUser, deleteUser } from "../controllers/user.controller.js";

const router = express.Router();

router.post("/", protectRoute, getUsersForSidebar);
router.post("/admin", protectRoute, getAdminForSidebar);
router.get("/fetchUsers", getAllUsers);
router.get("/fetchUser/:id", getUserById);
router.put("/updateUserById/:id", updateUser);
router.delete("/deleteUserById/:id", deleteUser);

export default router;
