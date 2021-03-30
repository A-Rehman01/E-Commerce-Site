import express from 'express';
import {
  getProductById,
  getProducts,
  deleteProduct,
  updateProduct,
  createProduct,
} from '../controllers/productController.js';
import { protect, admin } from '../middlewares/authMiddleware.js';

const router = express.Router();

// @desc    Fetch all products
// @route   GET /api/products
// @access  Public

// @desc    Create a products
// @route   POST /api/products/
// @access  Private/Admin
router.route('/').get(getProducts).post(protect, admin, createProduct);

// @desc    Fetch Single products
// @route   GET /api/products/:id
// @access  Public

// @desc    Delete a products
// @route   DELETE /api/products/:id
// @access  Private/Admin

// @desc    Update a products
// @route   PUT /api/products/:id
// @access  Private/Admin
router
  .route('/:id')
  .get(getProductById)
  .delete(protect, admin, deleteProduct)
  .put(protect, admin, updateProduct);

export default router;
