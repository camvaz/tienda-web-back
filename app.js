const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const Product_controller = require("./controllers/product.controller");
const Sale_controller = require("./controllers/sale.controller");
const port = 8081;
const app = express();

app.use(bodyParser.json());

mongoose.connect("mongodb://localhost:27017/tienda-web", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

startServer = async port => {
    app.get("/product", Product_controller.getProducts);
    app.get("/sale", Sale_controller.getSales);
    app.post("/product", Product_controller.create_product);
    app.post("/sale", Sale_controller.create_sale);
    console.log(`Servidor Escuchando en puerto ${port}`);
};

app.listen(port, startServer(port));
