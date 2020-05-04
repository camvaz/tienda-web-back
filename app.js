const express = require("express");
const cors = require('cors');
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const Product_controller = require("./controllers/product.controller");
const Sale_controller = require("./controllers/sale.controller");
const port = 8081;
const app = express();

app.use(bodyParser.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/tienda-web", {
    useNewUrlParser: true
});

startServer = async port => {
    app.get("/api/product", Product_controller.getProducts);
    app.get("/api/sale", Sale_controller.getSales);
    app.post("/api/product", Product_controller.create_product);
    app.post("/api/sale", Sale_controller.create_sale);
    console.log(`Servidor Escuchando en puerto ${port}`);
};

app.listen(port, startServer(port));
