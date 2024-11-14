const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String },
    price: { type: Number, required: true },
    image: { type: String },
    category: {
        type: String,
        enum: ["breakfast", "drink","salad", "soup", "main"], // Available categories
        required: true
    }
});

module.exports = mongoose.model('Product', ProductSchema);
