const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    customer: {
        firstName: String,
        lastName: String,
        phone: String,
        address: String,
        city: String,
        postalCode: String,
        paymentMethod: String
    },
    items: [
        {
            productId: String,
            name: String,
            price: Number,
            quantity: Number
        }
    ],
    totalAmount: Number,
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Order", orderSchema);