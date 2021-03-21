import express from 'express';
import { addOrderItems } from '../controllers/orderController.js';
const router = express.Router();
import { protect } from '../middlewares/authMiddleware.js';

// @desc    Create new Order
// @route   POST /api/order
// @access  Private

router.route('/').post(protect, addOrderItems);

export default router;
