const express = require("express");
const router = express.Router();
const Order = require("../models/Order");

// POST create new order
router.post("/", async (req, res) => {
    try {
        const newOrder = new Order(req.body);
        await newOrder.save();
        res.status(201).json({ message: "Order saved successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// GET all orders (for admin)
router.get("/", async (req, res) => {
    try {
        const orders = await Order.find().sort({ date: -1 });
        res.json(orders);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;