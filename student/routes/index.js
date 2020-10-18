const router = require('express').Router()
const Controller = require('../controllers/app-controller')
const studentRouter = require('./studentRouter')

// Set the homepage
router.get('/', Controller.getIndex)

// Set the /students
router.use('/students', studentRouter)

module.exports = router