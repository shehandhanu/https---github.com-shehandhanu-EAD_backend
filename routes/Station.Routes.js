const express = require('express');
const router = express.Router();

const { addRoute,
    getAllStations,
    updateQueueIn,
    updateQueueOut,
    updateFuel,
    getStation } = require('../controllers/Station.Controller');
const { isAuthenticatedUser, authorizeRoles } = require('../utils/authenticator')

//Add Journey
router.route('/addjourney').post(addRoute);

//Get All Journey
router.route('/getalljourney').get(getAllStations)

//Get Stations
router.route('/getstation').get(getStation)

//Update updateQueueIn
router.route('/updatequeuein/:id').put(isAuthenticatedUser, updateQueueIn);

//Update updateQueueOut
router.route('/updatequeueout/:id').put(isAuthenticatedUser, updateQueueOut);

//Update Fuel
router.route('/updatefuel/:id').put(updateFuel);


module.exports = router;