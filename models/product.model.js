const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = Schema({
    name: {
        type: String
    },

    category: {
        type: String
    },

    img: {
        type: String
    },

    price: {
        type: String
    }
});

const product = mongoose.model("product", productSchema, "Product");

module.exports = product;
