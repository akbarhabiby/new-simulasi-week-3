const { Student } = require('../models')
const validation  = require('../tools')

class Controller {
    static getIndex(req, res) {
        const status = req.query.status
        Student.findAll({ order: [ ['id', 'ASC']]})
            .then( data => {
                res.render('students', { data, status })
            })
            .catch(err => {
                res.render('error', { err })
            })
    }

    static redirectToIndex(req, res) {
        res.redirect('/')
    }

    static getAddStudentForm(req, res) {
        const error = req.query.error
        res.render('addStudent', { error })
    }

    static postAddStudentForm(req, res) {
        const newStudent = req.body
        const error = validation(newStudent)
        if (error) {
            res.redirect(`/students/add?error=${error}`)
        } else {
            Student.create(newStudent)
                .then( data => {
                    res.redirect('/')
                })
                .catch( err => {
                    res.render('error', { err })
                })
        }
    }

    static getEditStudentForm(req, res) {
        const id = +req.params.id
        const error = req.query.error
        Student.findByPk(id)
            .then( data => {
                if (data) {
                    res.render('editStudent', { student: data, error })
                } else {
                    res.render('404')
                }
            })
            .catch(err => {
                res.render('error', { err })
            })
    }

    static postEditStudentForm(req, res) {
        const id = +req.params.id
        const editedStudent = req.body
        const error = validation(editedStudent)
        if (error) {
            res.redirect(`/students/edit/${req.params.id}?error=${error}`)
        } else {
            console.log(editedStudent);
            Student.update(editedStudent, { where: { id: id }})
                .then( data => {
                    res.redirect(`/?status=Berhasil Edit student dengan id ${req.params.id}`)
                })
                .catch( err => {
                    res.render(`error`, { err })
                })
        }
    }

    static getDeleteStudentById(req, res) {
        const id = +req.params.id
        Student.destroy({ where: { id: id }})
            .then( data => {
                res.redirect(`/?status=Berhasil Delete student dengan id ${req.params.id}`)
            })
            .catch( err => {
                res.render(`error`, { err })
            })
    }
}

module.exports = Controller