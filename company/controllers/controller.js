const Model = require("../models/models")

class Controller {
    static getAllStudents(req, res) {
        Model.showAllStudent( (err, data) => {
            if (err) {
                res.send(err)
            } else {
                res.render('student', { data })
            }
        })
    }

    static redirectToHome(req, res) {
        res.redirect('/')
    }

    static getAddStudentForm(req, res) {
        const error = req.query.error
        res.render('studentAdd', { error })
    }

    static postAddStudentForm(req, res) {
        Model.sendStudentToDB(req.body, (err, verification) => {
            if (err) {
                res.send(err)
            } else if (verification) {
                res.redirect(`/students/add?error=${verification}`)
            } else {
                res.redirect(`/`)
            }
        })
    }

    static getEditStudentForm(req, res) {
        const error = req.query.error
        Model.editStudent(+req.params.id, (err, data) => {
            if (err) {
                res.send(err)
            } else {
                res.render('studentEdit', { data, error })
            }
        })
    }

    static postEditStudentForm(req, res) {
        Model.postEditedStudent(req.body, +req.params.id, (err, verification) => {
            if (err) {
                res.send(err)
            } else if (verification) {
                res.redirect(`/students/edit/${+req.params.id}?error=${verification}`)
            } else {
                res.redirect(`/`)
            }
        })
    }

    static getDeleteStudent(req, res) {
        Model.deleteStudent(+req.params.id, err => {
            if (err) {
                res.send(err)
            } else {
                res.redirect('/')
            }
        })
    }
}

module.exports = Controller