const mongoose = require('mongoose');

const flightSchema = new mongoose.Schema({
    flightNumber: {
    	type: String, 
    	required: true,
    },
    origin: String,
    destination: String,
    departureTime: String,
    arrivalTime: String,
    planeModel: String,
    amenities: String,
    price: Number,
});

module.exports = mongoose.model('Flight', flightSchema);