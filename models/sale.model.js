const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const saleSchema = Schema({
    products: {
        type: [
            {
                name: String,
                category: String,
                price: String,
                img: String
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

const sale = mongoose.model("sale", saleSchema, "Sale");

module.exports = sale;
