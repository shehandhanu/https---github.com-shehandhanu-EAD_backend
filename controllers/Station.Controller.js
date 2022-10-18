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

//Get All Routes
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
exports.updateQueue = async (req, res) => {

    const journey = await Station.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        useFindAndModify: false
    })

    res.status(200).json({
        success: true,
        journey
    })

}

//update route 
exports.updateQueue = async (req, res) => {

    const journey = await Station.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        useFindAndModify: false
    })

    res.status(200).json({
        success: true,
        journey
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
