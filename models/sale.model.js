const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const saleSchema = Schema({
    items: {
        type: {
            id: {
                cantidad: {
                    type: Number
                },
                precio: {
                    type: Number
                }
            }
        }
    },

    subtotal: {
        type: Number
    },

    iva: {
        type: Number
    },

    total: {
        type: String
    }
});

const sale = mongoose.model("sale", saleSchema, "Sale");

module.exports = sale;
