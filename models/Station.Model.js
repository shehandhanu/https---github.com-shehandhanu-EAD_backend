const mongoose = require('mongoose');

const stationSchema = new mongoose.Schema({
    stationName: {
        type: String,
        required: [true, 'Please Enter station name'],
        maxLength: [50, 'Route cannot exceed 10 characters']
    },
    fuelStatusPetrol: {
        type: Boolean,
        default: false
    },
    fuelStatusDiesel: {
        type: Boolean,
        default: false
    },
    fuelAddTime: {
        type: Date,
    },
    queue: {
        type: Number,
        default: 0
    },
    queueID: [
        {
            type: mongoose.Schema.ObjectId,
            ref: 'User'
        }
    ]

})

module.exports = mongoose.model('Station', stationSchema)