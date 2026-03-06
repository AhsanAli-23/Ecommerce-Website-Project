const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

const productRoutes = require("./routes/productRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect("mongodb://127.0.0.1:27017/ecommerceDB")
.then(() => console.log("MongoDB Connected"))
.catch((err) => console.log(err));

// API Routes
app.use("/api/products", productRoutes);

// 🔥 Serve Frontend Static Files
app.use(express.static(path.join(__dirname, "../Frontend")));

// Root Route (Open index.html)
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../Frontend/index.html"));
});

// Server
const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

const orderRoutes = require("./routes/orderRoutes");
app.use("/api/orders", orderRoutes);