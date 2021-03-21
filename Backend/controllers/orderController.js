import Order from '../modals/orderModal.js';
import asyncHandler from 'express-async-handler';

// @desc    Create new Order
// @route   POST /api/order
// @access  Private
const addOrderItems = asyncHandler(async (req, res) => {
  const {
    orderItems,
    shippingAddress,
    paymentMethod,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
  } = req.body;
  if (orderItems && orderItems === 0) {
    res.status(400);
    throw new Error('No Order Items');
    return;
  } else {
    const order = new Order({
      orderItems,
      shippingAddress,
      user: req.user._id,
      paymentMethod,
      itemsPrice,
      taxPrice,
      shippingPrice,
      totalPrice,
    });
    const createdOrder = await order.save();
    res.status(201).json(createdOrder);
  }
});

export { addOrderItems };
