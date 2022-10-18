const express = require('express');
const router = express.Router();

const { addRoute,
    getAllStations,
    updateQueue } = require('../controllers/Station.Controller');
const { isAuthenticatedUser, authorizeRoles } = require('../utils/authenticator')

//Add Journey
router.route('/addjourney').post(addRoute);

//Get All Journey
router.route('/getalljourney').get(getAllStations)

//Update Journey
router.route('/updatejourney/:id').put(updateQueue);


module.exports = router;