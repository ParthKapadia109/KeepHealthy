// routes/paymentRoutes.js
const express = require('express');
const { createPaymentIntent } = require('../Controllers/Payment');
const router = express.Router();

router.post('/create-payment', createPaymentIntent);

module.exports = router;
