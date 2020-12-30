const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
    orderItems : [{type: Object}],
    address: {type: String, required: true},
    payment: {type: String, required: true},
    totalPrice: { type: Number },
    isPaid: { type: Boolean, default: false },
    paidAt: { type: Date },
    isDelivered: { type: Boolean, default: false },
    deliveredAt: { type: Date },
}, {
    timestamps: true
});

const orderModal = mongoose.model("Orders", orderSchema);
module.exports = orderModal