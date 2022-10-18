const express = require('express');
const router = express.Router();

const { registerUser,
    loginUser,
    getUserProfile,
    logout,
    updateProfile } = require('../controllers/User.Controller');
const { isAuthenticatedUser, authorizeRoles } = require('../utils/authenticator')

//Register User
router.route('/signup').post(registerUser);

//Login 
router.route('/signin').post(loginUser);

//Logout
router.route('/logout').get(logout)

//Get User Profile
router.route('/profile').get(isAuthenticatedUser, getUserProfile);

//Update User Profile
router.route('/profileupdate').put(isAuthenticatedUser, updateProfile);

module.exports = router;