const mongoose = require('mongoose');
const bcrypt = require("bcrypt");
const { ObjectId } = require('mongodb');

const userSchema = new mongoose.Schema({
	username: {
    	type: String, 
    	// required: true,
    },
    firstName: {
    	type: String, 
    	// required: true,
    },
	lastName: {
    	type: String, 
    	// required: true,
    },
    password: {
    	type: String, 
    	// required: true,
    },
    email: {
    	type: String, 
    	unique: true,
		// required: true,
    },
    creditCard: {
    	cardNumber: String,
    	expirationDate: String,
		cvv: Number,
		cardholderName: String,
	},
	gender: String,
	address: String,
	dateOfBirth: String,
	passportNumber: String,
	Itineraries: [{
		flightID: ObjectId,
	}],
    
});

// userSchema.pre("save", async function(next) {
//     this.password = await bcrypt.hash(this.password, 10);
//     next();
// });

module.exports = mongoose.model('User', userSchema);