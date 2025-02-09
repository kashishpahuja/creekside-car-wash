const express = require('express');
const router = express.Router();
const paymentController = require('../controllers/paymentController');

// POST route to create a Stripe Checkout session
router.post('/create-checkout-session', paymentController.createCheckoutSession);

module.exports = router;
