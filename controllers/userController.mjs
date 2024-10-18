import User from "../models/User.mjs";

// Get all users
export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ message: "Error fetching users" });
  }
};

// Post Request
export const createUser = async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.status(201).json({ message: "New user created!", data: newUser });
  } catch (error) {
    res
      .status(500)
      .json({ message: "An error occurred", error: error.message });
  }
};

// Put Request
export const updateUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const updatedUser = req.body;
    const user = await User.findByIdAndUpdate(userId, updatedUser, {
      new: true,
    });

    if (user) {
      res
        .status(200)
        .json({ message: `PUT request - Updating user ${userId}`, data: user });
    } else {
      res.status(404).json({ message: `User with ID ${userId} not found` });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "An error occurred", error: error.message });
  }
};

// Delete Request
export const deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const deletedUser = await User.findByIdAndDelete(userId);

    if (deletedUser) {
      res.status(200).json({
        message: `DELETE request - Deleting user ${userId}`,
        deletedUser,
      });
    } else {
      res.status(404).json({ message: `User with ID ${userId} not found` });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "An error occurred", error: error.message });
  }
};
