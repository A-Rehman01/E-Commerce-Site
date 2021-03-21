import express from 'express';
import {
  authUser,
  getUserProfile,
  registerUser,
  updateUserProfile,
} from '../controllers/userController.js';
const router = express.Router();
import { protect } from '../middlewares/authMiddleware.js';

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

export default router;
