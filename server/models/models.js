const mongoose = require('mongoose');


// CHANGE the items below for BELT EXAM

const RentalSchema = new mongoose.Schema({
    address: {
        type: String,
        minlength: [
            4,
            'The address must be at least 4 Characters.'
        ]
    }
}, { timestamps: true });




// DO IT LIKE THIS FOREVER
const Rental = mongoose.model("Rental", RentalSchema);
module.exports = Rental;
