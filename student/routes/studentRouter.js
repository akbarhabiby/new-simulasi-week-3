const router = require('express').Router()
const Controller = require('../controllers/app-controller')

router.get('/', Controller.redirectToIndex)

router.get('/add', Controller.getAddStudentForm)

router.post('/add', Controller.postAddStudentForm)

router.get('/edit/:id', Controller.getEditStudentForm)

router.post('/edit/:id', Controller.postEditStudentForm)

router.get('/delete/:id', Controller.getDeleteStudentById)

module.exports = router