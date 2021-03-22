import express from 'express';
import { addOrderItems, getOrderById } from '../controllers/orderController.js';
const router = express.Router();
import { protect } from '../middlewares/authMiddleware.js';

// @desc    Create new Order
// @route   POST /api/order
// @access  Private

router.route('/').post(protect, addOrderItems);

// @desc    Get order by ID
// @route   GET /api/order/:id
// @access  Private
router.route('/:id').get(protect, getOrderById);
export default router;
