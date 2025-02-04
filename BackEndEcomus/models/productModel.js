const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        required: true,
        trim: true,
    },
    category: {
        type: String,
        required: true,
        trim: true,
    },
    price: {
        type: Number,
        required: true,
        min: 0,
    },
    slashprice: {
        type: Number,
        min: 0,
    },
    images: [{
        type: String,
        required: true,
    }],
    sizes: [{
        type: String,
        required: true,
    }],
    colors: [{
        type: String,
        required: true,
    }],
    isDelete: {
        type: Boolean,
        default: false
    }
}, {
    versionKey: false,
    timestamps: true
});

module.exports = mongoose.model('products', productSchema)