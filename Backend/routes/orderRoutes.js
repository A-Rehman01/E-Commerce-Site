import express from 'express';
import {
  addOrderItems,
  getOrderById,
  updateOrderToPaid,
  getMyOrders,
  getOrders,
  updateOrderToDelivered,
} from '../controllers/orderController.js';
const router = express.Router();
import { protect, admin } from '../middlewares/authMiddleware.js';

// @desc    Create new Order
// @route   POST /api/order
// @access  Private

// @desc    Get all orders
// @route   GET /api/orders
// @access  Private/Admin
router.route('/').post(protect, addOrderItems).get(protect, admin, getOrders);

// @desc    Get logged in user  order
// @route   GET /api/order/myorders
// @access  Private
router.route('/myorders').get(protect, getMyOrders);

// @desc    Get order by ID
// @route   GET /api/order/:id
// @access  Private
router.route('/:id').get(protect, getOrderById);

// @desc    Update order to Paid
// @route   PUT /api/order/:id/pay
// @access  Private
router.route('/:id/pay').put(protect, updateOrderToPaid);

// @desc    Update order to Delivered
// @route   PUT /api/order/:id/deliver
// @access  Private/Admin
router.route('/:id/deliver').put(protect, admin, updateOrderToDelivered);

export default router;
