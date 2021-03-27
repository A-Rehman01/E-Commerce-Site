import express from 'express';
import {
  authUser,
  getUserProfile,
  registerUser,
  updateUserProfile,
  getUsers,
  deleteUser,
  getUserById,
  updateUser,
} from '../controllers/userController.js';
const router = express.Router();
import { protect, admin } from '../middlewares/authMiddleware.js';

// @desc    Auth User & get Token
// @route   POST /api/users/login
// @access  Public
router.route('/login').post(authUser);

// @desc    Register a New User
// @route   POST /api/users
// @access  Public
router.route('/').post(registerUser);

// @desc    Get user Profile
// @route   GET /api/users/profile
// @access  Private

// @desc    Update user Profile
// @route   PUT /api/users/profile
// @access  Private
router
  .route('/profile')
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);

// @desc    Get all uers
// @route   GET /api/users
// @access  Private/Admin
router.route('/').get(protect, admin, getUsers);

// @desc    Delete user
// @route   DELETE /api/users/:id
// @access  Private/Admin

// @desc    Get user by id
// @route   GET /api/users/:id
// @access  Private/Admin

// @desc    Update user
// @route   PUT /api/users/:id
// @access  Private/Admin
router
  .route('/:id')
  .delete(protect, admin, deleteUser)
  .get(protect, admin, getUserById)
  .put(protect, admin, updateUser);

export default router;
