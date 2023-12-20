const mongoose = require('mongoose');
const Schmea = mongoose.Schema;

const ProductModel = new Schmea(
    {
        productName: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: false
        },
        price: {
            type: Number,
            required: true
        },
        availableStock: {
            type: Number,
            required: true
        },
        createdAt: {
            type: Date,
            default: Date.now()
        },
        updatedAt: {
            type: Date,
            default: Date.now()
        }
    }
)

module.exports = mongoose.model('products', ProductModel);