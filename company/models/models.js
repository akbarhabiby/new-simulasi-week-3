const pool = require('../config/auth')

class Model {
    static showAllStudent(cb) {
        const query = `SELECT * FROM "Students"`
        pool.query(query, (err, res) => {
            if (err) {
                cb(err, null)
            } else {
                cb(null, res.rows)
            }
        })
    }

    static sendStudentToDB(data, cb) {
        const verification = Model.verificationData(data)
        if (verification) {
            cb(null, verification)
        } else {
            const query = `INSERT INTO "Students" ("name", "phase", "likeMcd") VALUES ($1, $2, $3)`
            const values = [data.name, data.phase, data.likeMcd]
            pool.query(query, values, (err, res) => {
                if (err) {
                    cb(err, null)
                } else {
                    cb(null, null)
                }
            })
        }
    }

    static verificationData(data) {
        let result = []
        if(!data.name) result.push(`Name is Required`)
        if(!data.phase) result.push(`Phase is Required`)
        if(data.phase > 3 || data.phase < 0) result.push(`Phase should be between 3 and 0`)
        if(!data.likeMcd) result.push(`Like Mcd is Required`)

        return result.join(', ')
    }

    static editStudent(id, cb) {
        const query = `SELECT * FROM "Students" WHERE "id" = $1`
        const values = [id]
        console.log(values);
        pool.query(query, values, (err, res) => {
            if (err) {
                cb(err, null)
            } else {
                cb(err, res.rows[0])
            }
        })
    }

    static postEditedStudent(data, id, cb) {
        const verification = Model.verificationData(data)
        if (verification) {
            cb(null, verification)
        } else {
            const query = `UPDATE "Students" SET "name" = $1, "phase" = $2, "likeMcd" = $3 WHERE "id" = $4`
            const values = [data.name, data.phase, data.likeMcd, id]
            console.log(values);
            pool.query(query, values, (err, res) => {
                if (err) {
                    cb(err, null)
                } else {
                    cb(null, null)
                }
            })
        }
    }

    static deleteStudent(id, cb) {
        const query = `DELETE FROM "Students" WHERE "id" = $1`
        const values = [id]
        pool.query(query, values, (err, res) => {
            if (err) {
                cb(err, null)
            } else {
                cb(null, null)
            }
        })
    }
}

module.exports = Model