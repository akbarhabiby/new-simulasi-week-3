const router = require('express').Router()
const studentRouter = require('./students')
const Controller = require('../controllers/controller')

router.get('/', Controller.getAllStudents)

router.use('/students', studentRouter)

module.exports = router