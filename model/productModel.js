const mongoose = require('mongoose');


const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    size: {
        type: Array,
        required: true
    },
    description: {
        type: String,
    },
    images: {
        type: Array,
        required: true,
    },
    colors: {
        type: Array,
        required: true
    },
    countInStock: {
        type: Number
    },
    tags: {
        type: Array,
    },
    categories: {
        type: String

    }

},{timestamps: true});

module.exports = mongoose.model("Product", ProductSchema);