import User from "../models/user.model.js";
import bcrypt from "bcryptjs";

export const getUsersForSidebar = async (req, res) => {
	try {
		const loggedInUserId = req.user._id;

		const filteredUsers = await User.find({ _id: { $ne: loggedInUserId } }).select("-password");

		res.status(200).json(filteredUsers);
	} catch (error) {
		console.error("Error in getUsersForSidebar: ", error.message);
		res.status(500).json({ error: "Internal server error" });
	}
};

export const getAdminForSidebar = async (req, res) => {
	try {
		const loggedInUserId = req.user._id;

		const filteredUsers = await User.find({
			_id: { $ne: loggedInUserId },
			role: 'admin'
		}).select("-password");


		res.status(200).json(filteredUsers);
	} catch (error) {
		console.error("Error in getUsersForSidebar: ", error.message);
		res.status(500).json({ error: "Internal server error" });
	}
};
export const getAllUsers = async (req, res) => {
	try {
		const Users = await User.find()
		res.status(200).json(Users);
	} catch (error) {
		console.error("Error in getUsersForSidebar: ", error.message);
		res.status(500).json({ error: "Internal server error" });
	}
};

export const updateUser = async (req, res) => {
	try {
		const id = req.params.id;
		const newData = req.body;

		if (newData.password) {
			const hashedPassword = await bcrypt.hash(newData.password, 10);
			newData.password = hashedPassword;
		}

		const updatedUser = await User.findByIdAndUpdate(
			id,
			newData,
			{ new: true }
		);

		if (!updatedUser) {
			return res.status(404).json({ error: 'User not found' });
		}

		res.json({ data: updatedUser });
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
};


export const deleteUser = async (req, res) => {
	try {
		const id = req.params.id;
		const deletedUser = await User.findByIdAndDelete(id);

		if (!deletedUser) {
			return res.status(404).json({ error: 'User not found' });
		}

		res.json({ data: deletedUser });
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
};





