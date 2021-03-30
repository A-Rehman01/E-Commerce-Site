import Product from '../modals/productModal.js';
import asyncHandler from 'express-async-handler';

// @desc    Fetch all products
// @route   GET /api/products
// @access  Public
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  res.json(products);
});

// @desc    Fetch Single products
// @route   GET /api/products/:id
// @access  Public
const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    res.json(product);
  } else {
    res.status(404);
    throw new Error('Product not Found');
  }
});

// @desc    Delete a products
// @route   DELETE /api/products/:id
// @access  Private/Admin
const deleteProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    await product.remove();
    res.json({ message: 'Product Removed Successfully' });
  } else {
    res.status(404);
    throw new Error('Product not Found');
  }
});

// @desc    Create a products
// @route   POST /api/products/
// @access  Private/Admin
const createProduct = asyncHandler(async (req, res) => {
  const product = new Product({
    name: 'Sample name',
    price: 0,
    user: req.user._id,
    image: '/images/sample.jpg',
    category: 'sample category',
    brand: 'sample brand',
    countInStock: 0,
    numReviews: 0,
    description: 'sampple description',
  });
  const createdProduct = await product.save();
  res.status(201).json(createdProduct);
});

// @desc    Update a products
// @route   PUT /api/products/:id
// @access  Private/Admin
const updateProduct = asyncHandler(async (req, res) => {
  const {
    name,
    price,
    image,
    category,
    brand,
    countInStock,
    description,
  } = req.body;
  const product = await Product.findById(req.params.id);
  if (product) {
    product.name = name;
    product.price = price;
    product.image = image;
    product.category = category;
    product.brand = brand;
    product.description = description;
    product.countInStock = countInStock;

    const createdProduct = await product.save();
    res.status(201).json(createdProduct);
  } else {
    res.status(404);
    throw new Error('Product not Found');
  }
});

export {
  getProducts,
  getProductById,
  deleteProduct,
  createProduct,
  updateProduct,
};
