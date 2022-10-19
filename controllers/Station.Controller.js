const Station = require('../models/Station.Model')
const User = require('../models/User.Model')

//Add Route
exports.addRoute = async (req, res) => {

    const station = await Station.create(req.body)

    if (!station) {
        res.status(201).json({
            success: false
        })
    }

    res.status(200).json({
        success: true,
        journey: station
    })
}

//Get All stations
exports.getAllStations = async (req, res) => {

    const stations = await Station.find()

    if (!stations) {
        res.status(201).json({
            success: false
        })
    }

    res.status(200).json({
        success: true,
        journey: stations
    })

}

//update route 
exports.updateQueueIn = async (req, res) => {

    let station = await Station.findById(req.params.id)

    let user = await User.findById(req.user.id)

    if (!user) {
        return res.status(401).json({
            success: false,
            user: [],
            message: 'User Not Found'
        })
    }


    user = await User.findByIdAndUpdate(req.user.id, { "queueID": station._id })
    station = await Station.findByIdAndUpdate(user.queueID, { $push: { "queueID": req.user.id } })


    res.status(200).json({
        success: true,
        user,
        station
    })


}

//update route 
exports.updateQueueOut = async (req, res) => {

    let station = await Station.findById(req.params.id)

    let user = await User.findById(req.user.id)

    if (!user) {
        return res.status(401).json({
            success: false,
            user: [],
            message: 'User Not Found'
        })
    }

    user = await User.findByIdAndUpdate(req.user.id, { "queueID": null })

    station = await Station.findByIdAndUpdate(user.queueID, { $pull: { "queueID": req.user.id } })

    res.status(200).json({
        success: true,
        user,
        station
    })

}

//update route 
exports.updateFuel = async (req, res) => {

    let station = await Station.findById(req.params.id)

    const { diesel, petrol } = req.body

    if (diesel != null) {
        let station = await Station.findByIdAndUpdate(req.params.id, { "fuelStatusDiesel": diesel })
    }

    if (petrol != null) {
        let station = await Station.findByIdAndUpdate(req.params.id, { "fuelStatusPetrol": petrol })
    }

    station = await Station.findById(req.params.id)

    res.status(200).json({
        success: true,
        station
    })

}

//update delete
exports.deleteRoute = async (req, res) => {

    const journey = await Station.findByIdAndDelete(req.params.id)

    res.status(200).json({
        success: true,
        journey
    })

}
