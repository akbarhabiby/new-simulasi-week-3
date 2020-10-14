const pool = require('./config/auth')

const query = `CREATE TABLE "Students" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR(50) NOT NULL,
    "phase" INTEGER NOT NULL,
    "likeMcd" BOOLEAN NOT NULL
)`

pool.query(query, (err, res) => {
    if (err) {
        console.log(err);
    } else {
        console.log(`Berhasil membuat table Students`);
        pool.end()
    }
})