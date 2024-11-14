const stripe = require('stripe')('sk_test_51LAGlCSIVbDJvceEzIhItfI3uLJTPWmmANgGTyslwewlroakkJkuSLGhvVQcUcsZ89yKU8Y9gh3UOcNTvNi3pQSq00K9fvILA2');

exports.createPaymentIntent = async (req, res) => {
    const { amount } = req.body; 

    try {
        const paymentIntent = await stripe.paymentIntents.create({
            amount, 
            currency: 'usd',
            metadata: { integration_check: 'accept_a_payment' },
        });

        res.status(200).json({
            clientSecret: paymentIntent.client_secret,
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
