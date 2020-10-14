const pool = require('./config/auth')
const fs = require('fs')
const Student = require('./models/student')

fs.readFile('./students.json', { encoding: 'utf-8' }, (err, data) => {
    if (err) {
        console.log(err);
    } else {
        let result = []
        data = JSON.parse(data)
        data.forEach ( student => {
            result.push(`('${student.name}', ${student.phase}, '${student.likeMcd}')`)
        })
        result = result.join(', ')
        //
        const query = `INSERT INTO "Students" ("name", "phase", "likeMcd") VALUES ${result}`
        pool.query(query, (err, res) => {
            if (err) {
                console.log(err);
            } else {
                console.log(`Berhasil Input Students ke Table`)
                pool.end()
            }
        })
    }
})