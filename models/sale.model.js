const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const saleSchema = Schema({
    products: {
        type: [
            {
                name: String,
                category: String,
                price: String
            }
        ]
    },

    subtotal: {
        type: String
    },

    total: {
        type: String
    }
});

const product = mongoose.model("product", productSchema, "Product");

module.exports = product;
