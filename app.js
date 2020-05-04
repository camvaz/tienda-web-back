const express = require("express");
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/tienda-web");
const port = 8081;
const app = express();

const Product_controller = require("./controllers/product.controller");
app.post("/create", () => Product_controller.create);

app.listen(port, () =>
    console.log(`tienda listening at http://localhost:${port}`)
);
