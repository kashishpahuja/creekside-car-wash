// const express = require('express');
// const { createCheckoutSession, stripeWebhook } = require('../controllers/paymentController');

// const router = express.Router();

// // Handle Stripe Checkout session creation
// router.post("/create-checkout-session", createCheckoutSession);

// // Handle Stripe Webhook events (payment success, etc.)
// // router.post("/stripe-webhook", express.raw({ type: 'application/json' }), stripeWebhook);

// module.exports = router;




const express = require('express');
const router = express.Router();
const paymentController = require('../controllers/paymentController');

// POST route to create a Stripe Checkout session
router.post('/create-checkout-session', paymentController.createCheckoutSession);

module.exports = router;
