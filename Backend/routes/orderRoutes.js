import express from 'express';
import {
  addOrderItems,
  getOrderById,
  updateOrderToPaid,
  getMyOrders,
} from '../controllers/orderController.js';
const router = express.Router();
import { protect } from '../middlewares/authMiddleware.js';

// @desc    Create new Order
// @route   POST /api/order
// @access  Private
router.route('/').post(protect, addOrderItems);

// @desc    Get logged in user  order
// @route   GET /api/order/myorders
// @access  Private
router.route('/myorders').get(protect, getMyOrders);

// @desc    Get order by ID
// @route   GET /api/order/:id
// @access  Private
router.route('/:id').get(protect, getOrderById);

// @desc    Update order to Paid
// @route   GET /api/order/:id/pay
// @access  Private
router.route('/:id/pay').put(protect, updateOrderToPaid);

export default router;
